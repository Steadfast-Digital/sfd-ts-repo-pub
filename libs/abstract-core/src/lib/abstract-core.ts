import { NativeAsset, TokenAsset } from '@steadfastdigital/crypto-assets';

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
  to: string;
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

export abstract class CoreNetworkAbstraction {
  // create a constractor that takes in a networkId
  _networkId: string;
  constructor(protected networkId: string) {
    this._networkId = networkId;
  }
  abstract getAddressBalance(address: string): Promise<AddressBalance>;
  abstract getAddressBalances(address: string): Promise<AddressBalances>;
  abstract getAddressAssetBalance(address: string, assetId: string): Promise<AssetBalance>;
  abstract getAddressAssetsBalances(address: string, assetIds: string[]): Promise<AssetBalance[]>;
  abstract getTransactionHistory(address: string): Promise<Transaction[]>;
}
