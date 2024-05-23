import { CoreNetworkAbstraction, AddressBalance, Transaction, AddressBalances, AssetBalance } from '@steadfastdigital/abstract-core';
import { networks, nativeAssets, NativeAsset } from '@steadfastdigital/crypto-assets';

export abstract class EvmAbstraction extends CoreNetworkAbstraction {

  constructor(networkId: string) {
    super(networkId);
  }

  async getAddressBalance(address: string): Promise<AddressBalance> {
    // Implementation for fetching native balance using RPC
    const network = networks[this._networkId];
    console.log(`Fetching native balance for ${address} on ${network.name}`);
    return {
      address,
      native: {
        asset: nativeAssets.find(asset => asset.networkId === network.id) as NativeAsset,
        amount: '0',
      },
      fees: [],
    };
  }

  async getTransactionHistory(address: string): Promise<Transaction[]> {
    // Implementation for fetching transaction history using RPC
    const network = networks[this._networkId];
    console.log(`Fetching transaction history for ${address} on ${network.name}`);
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
    console.log('Fetching address balances', address);
    throw new Error('Method not implemented.');
  }
  async getAddressAssetBalance(address: string, assetId: string): Promise<AssetBalance> {
    console.log('Fetching address asset balance', address, assetId);
    throw new Error('Method not implemented.');
  }
  async getAddressAssetsBalances(address: string, assetIds: string[]): Promise<AssetBalance[]> {
    console.log('Fetching address assets balances', address, assetIds);
    throw new Error('Method not implemented.');
  }
}