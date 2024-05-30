import { ethers } from 'ethers';
import { CoreNetworkAbstraction, AddressBalance, Transaction, AddressBalances, AssetBalance } from '@steadfastdigital/abstract-core';
import { networks, nativeAssets, NativeAsset } from '@steadfastdigital/crypto-assets';
import { Logger, isValidWebSocketUrl } from '@steadfastdigital/utils';
export abstract class EvmAbstraction extends CoreNetworkAbstraction {
  _rpcProvider: ethers.JsonRpcProvider | ethers.WebSocketProvider;
  constructor(networkId: string) {
    super(networkId);
    const rpcUrl = networks[networkId].urls.rpc.url;
    this._rpcProvider = isValidWebSocketUrl(rpcUrl) ? new ethers.WebSocketProvider(rpcUrl) : new ethers.JsonRpcProvider(rpcUrl);
  }

  async getAddressBalance(address: string): Promise<AddressBalance> {
    const network = networks[this._networkId];
    Logger.debug(`Fetching balance for ${address} on ${JSON.stringify(network, null, 2)}`);
    const { url: rpcUrl } = network.urls.rpc;
    
    if (!rpcUrl) {
      throw new Error(`RPC URL for network ${network.name} not found`);
    }

    Logger.debug(`Fetching native balance for ${address} on ${network.name} using ${rpcUrl}`);

    // Using ethers.js to fetch balance (alternative method)
    const provider = this._rpcProvider;
    const balanceInWeiEthers = await provider.getBalance(address);
    const balanceInEthEthers = ethers.formatEther(balanceInWeiEthers);

    Logger.debug(`Balance using ethers.js: ${balanceInEthEthers}`);

    // Choose one of the balances to return (they should be equivalent)
    const amount = balanceInEthEthers;

    return {
        address,
        native: {
            asset: nativeAssets.find(asset => asset.networkId === network.id) as NativeAsset,
            amount: amount,
        },
        fees: [],
    };
}


  async getTransactionHistory(address: string): Promise<Transaction[]> {
    // Implementation for fetching transaction history using RPC
    const network = networks[this._networkId];
    Logger.debug(`Fetching transaction history for ${address} on ${network.name}`);
    return [{
      hash: '0x123',
      from: '0xabc',
      to: '0xdef',
      value: '1000000000000000000',
      fee: {
        asset: nativeAssets.find(asset => asset.networkId === this._networkId) as NativeAsset,
        amount: '1000000000000000',
      },
      blockNumber: 123456,
      timestamp: 1234567890,
      status: 'confirmed',
      asset: nativeAssets.find(asset => asset.networkId === this._networkId) as NativeAsset,
      nonce: 1,
    }];
  }
  async getAddressBalances(address: string): Promise<AddressBalances> {
    Logger.debug('Fetching address balances', address);
    throw new Error('Method not implemented.');
  }
  async getAddressAssetBalance(address: string, assetId: string): Promise<AssetBalance> {
    Logger.debug('Fetching address asset balance', address, assetId);
    throw new Error('Method not implemented.');
  }
  async getAddressAssetsBalances(address: string, assetIds: string[]): Promise<AssetBalance[]> {
    Logger.debug('Fetching address assets balances', address, assetIds);
    throw new Error('Method not implemented.');
  }
}