import Web3 from 'web3';
import { ethers } from 'ethers';
import { CoreNetworkAbstraction, AddressBalance, Transaction, AddressBalances, AssetBalance } from '@steadfastdigital/abstract-core';
import { networks, nativeAssets, NativeAsset } from '@steadfastdigital/crypto-assets';
import { Logger } from '@steadfastdigital/utils';
export abstract class EvmAbstraction extends CoreNetworkAbstraction {

  constructor(networkId: string) {
    super(networkId);
  }

  async getAddressBalance(address: string): Promise<AddressBalance> {
    const network = networks[this._networkId];
    Logger.debug(`Fetching balance for ${address} on ${JSON.stringify(network, null, 2)}`);
    const { url: rpcUrl } = network.urls.rpc;
    
    if (!rpcUrl) {
      throw new Error(`RPC URL for network ${network.name} not found`);
    }

    Logger.debug(`Fetching native balance for ${address} on ${network.name} using ${rpcUrl}`);

    // Using web3.js to fetch balance
    const web3 = new Web3(new Web3.providers.HttpProvider(rpcUrl));
    const balanceInWei = await web3.eth.getBalance(address);
    const balanceInEth = web3.utils.fromWei(balanceInWei, 'ether');

    // Using ethers.js to fetch balance (alternative method)
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const balanceInWeiEthers = await provider.getBalance(address);
    const balanceInEthEthers = ethers.formatEther(balanceInWeiEthers);

    // Log both balances for comparison (they should be the same)
    Logger.debug(`Balance using web3.js: ${balanceInEth}`);
    Logger.debug(`Balance using ethers.js: ${balanceInEthEthers}`);

    // Choose one of the balances to return (they should be equivalent)
    const amount = balanceInEth;

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