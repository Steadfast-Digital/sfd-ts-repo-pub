import { Transaction, AssetBalance } from '@steadfastdigital/abstract-core';
export interface IEvmProvider {
  getTransactionHistory(address: string): Promise<Transaction[]>;
  getAssetBalance(address: string, assetId: string): Promise<AssetBalance>;
  getAssetsBalances(address: string, assetIds: string[]): Promise<AssetBalance[]>;
}
