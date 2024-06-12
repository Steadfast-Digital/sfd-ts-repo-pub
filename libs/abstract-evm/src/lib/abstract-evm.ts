import { ethers } from 'ethers';
import { CoreNetworkAbstraction, AddressBalance, Transaction, AddressBalances, AssetBalance } from '@steadfastdigital/abstract-core';
import { networks, nativeAssets, NativeAsset } from '@steadfastdigital/crypto-assets';
import { Logger, isValidWebSocketUrl } from '@steadfastdigital/utils';

import { BlockbookProvider, EtherscanProvider } from './providers';

function getIEvmProvider(networkId: string) {
  const { type } = networks[networkId].urls.txApi;
  switch (type) {
    case 'etherscan':
      return new EtherscanProvider(networkId);
    case 'blockbook':
      return new BlockbookProvider(networkId);
    default:
      throw new Error(`Provider not supported for network ${networkId}`);
  }
}
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

    const balanceInWeiEthers = await this._rpcProvider.getBalance(address);
    const balanceInEthEthers = ethers.formatEther(balanceInWeiEthers);

    Logger.debug(`Balance using ethers.js: ${balanceInEthEthers}`);

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
    return getIEvmProvider(this._networkId).getTransactionHistory(address);
  }

  async getAddressBalances(address: string): Promise<AddressBalances> {
    Logger.debug('Fetching address balances', address);
    const tokens = await getIEvmProvider(this._networkId).getAddressAssetsBalances(address, []);

    const nativeBalance = await this.getAddressBalance(address);

    return {
      address,
      native: nativeBalance.native,
      tokens,
      fees: [],
    };
  }

  async getAddressAssetBalance(address: string, assetId: string): Promise<AssetBalance> {
    return getIEvmProvider(this._networkId).getAddressAssetBalance(address, assetId);
  }

  async getAddressAssetsBalances(address: string, assetIds: string[]): Promise<AssetBalance[]> {
    return getIEvmProvider(this._networkId).getAddressAssetsBalances(address, assetIds);
  }
}
