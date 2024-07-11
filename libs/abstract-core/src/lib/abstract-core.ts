import { NativeAsset, TokenAsset } from '@steadfastdigital/crypto-assets';
import { Observable } from 'rxjs';

export type NativeAssetBalance = {
  asset: NativeAsset;
  amount: string;
  minBalance?: string | undefined;
}

export interface AddressBalance {
  address: string;
  native: NativeAssetBalance;
  fees: NativeAssetBalance[];
}

export interface AssetBalance {
  asset: NativeAsset | TokenAsset;
  amount: string;
  minBalance?: string | undefined;
}
export interface AddressBalances extends AddressBalance {
  tokens: AssetBalance[];
}
export interface Transaction {
  hash: string;
  from: string;
  to: string | null;
  value: string;
  fee: {
    asset: NativeAsset;
    amount: string;
  }
  blockNumber: number;
  timestamp: number;
  status: 'confirmed' | 'pending' | 'failed';
  asset: NativeAsset | TokenAsset;
  nonce: number;
}

export interface UpdateFeed {
  address: string;
  balance: AddressBalance;
  transactions: Transaction[];
}

export interface BlockcahinInterface {
  getBalance(address: string): Promise<AddressBalance>;
  getAllBalances(address: string): Promise<AddressBalances>;
  getAssetBalance(address: string, assetId: string): Promise<AssetBalance>;
  getAssetsBalances(address: string, assetIds: string[]): Promise<AssetBalance[]>;
  getAllAssetsBalances(address: string): Promise<AssetBalance[]>;
  getTransaction(hash: string): Promise<Transaction>;
  getRecentTransactions(address: string, limit?: number): Promise<Transaction[]>;
  getTransactionHistory(address: string, limit?: number, sblock?: number, eblock?: number): Promise<Transaction[]>;
  subscribeToBalance(address: string): Observable<AddressBalance>;
  subscribeToTransactions(address: string): Observable<Transaction[]>;
}
export abstract class CoreNetworkAbstraction implements BlockcahinInterface {
  // create a constractor that takes in a networkId
  _networkId: string;
  constructor(protected networkId: string) {
    this._networkId = networkId;
  }
  abstract getBalance(address: string): Promise<AddressBalance>;
  abstract getAllBalances(address: string): Promise<AddressBalances>;
  abstract getAssetBalance(address: string, assetId: string): Promise<AssetBalance>;
  abstract getAssetsBalances(address: string, assetIds: string[]): Promise<AssetBalance[]>;
  abstract getAllAssetsBalances(address: string): Promise<AssetBalance[]>;
  abstract getTransaction(hash: string): Promise<Transaction>;
  abstract getRecentTransactions(address: string, limit?: number): Promise<Transaction[]>;
  abstract getTransactionHistory(address: string, limit?: number, sblock?: number, eblock?: number): Promise<Transaction[]>;
  abstract subscribeToBalance(address: string): Observable<AddressBalance>;
  abstract subscribeToTransactions(address: string): Observable<Transaction[]>;
}
