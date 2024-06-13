import { Transaction, AssetBalance } from '@steadfastdigital/abstract-core';
export interface IEvmProvider {
  getTransactionHistory(address: string): Promise<Transaction[]>;
  getAddressAssetBalance(address: string, assetId: string): Promise<AssetBalance>;
  getAddressAssetsBalances(address: string, assetIds: string[]): Promise<AssetBalance[]>;
}
