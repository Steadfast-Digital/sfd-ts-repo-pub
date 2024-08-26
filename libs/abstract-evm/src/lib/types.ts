import { ITransaction, IAssetBalance } from '@steadfastdigital/abstract-core';
export interface IEvmProvider {
  getTransactionHistory(address: string): Promise<ITransaction[]>;
  getAssetBalance(address: string, assetId: string): Promise<IAssetBalance>;
  getAssetsBalances(
    address: string,
    assetIds: string[],
  ): Promise<IAssetBalance[]>;
}
