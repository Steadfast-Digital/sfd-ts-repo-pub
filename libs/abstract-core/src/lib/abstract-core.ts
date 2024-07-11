import { NativeAsset, TokenAsset } from '@steadfastdigital/crypto-assets';
import { Observable } from 'rxjs';

/**
 * @typedef {Object} NativeAssetBalance
 * @property {NativeAsset} asset - The native asset.
 * @property {string} amount - The amount of the native asset.
 * @property {string} [minBalance] - The minimum balance of the native asset (optional).
 */
export type NativeAssetBalance = {
  asset: NativeAsset;
  amount: string;
  minBalance?: string | undefined;
}

/**
 * @typedef {Object} AddressBalance
 * @property {string} address - The address for which the balance is fetched.
 * @property {NativeAssetBalance} native - The balance of the native asset.
 * @property {NativeAssetBalance[]} fees - The balance of fees in native assets.
 */
export interface AddressBalance {
  address: string;
  native: NativeAssetBalance;
  fees: NativeAssetBalance[];
}

/**
 * @typedef {Object} AssetBalance
 * @property {NativeAsset|TokenAsset} asset - The asset (native or token).
 * @property {string} amount - The amount of the asset.
 * @property {string} [minBalance] - The minimum balance of the asset (optional).
 */
export interface AssetBalance {
  asset: NativeAsset | TokenAsset;
  amount: string;
  minBalance?: string | undefined;
}

/**
 * @typedef {AddressBalance} AddressBalances
 * @property {AssetBalance[]} tokens - The balances of various token assets.
 */
export interface AddressBalances extends AddressBalance {
  tokens: AssetBalance[];
}

/**
 * @typedef {Object} Transaction
 * @property {string} hash - The hash of the transaction.
 * @property {string} from - The address from which the transaction was sent.
 * @property {string|null} to - The address to which the transaction was sent (can be null).
 * @property {string} value - The value of the transaction.
 * @property {Object} fee - The transaction fee.
 * @property {NativeAsset} fee.asset - The asset used for the transaction fee.
 * @property {string} fee.amount - The amount of the transaction fee.
 * @property {number} blockNumber - The block number in which the transaction was included.
 * @property {number} timestamp - The timestamp of the transaction.
 * @property {'confirmed'|'pending'|'failed'} status - The status of the transaction.
 * @property {NativeAsset|TokenAsset} asset - The asset involved in the transaction.
 * @property {number} nonce - The nonce of the transaction.
 */
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

/**
 * @typedef {Object} UpdateFeed
 * @property {string} address - The address being updated.
 * @property {AddressBalance} balance - The balance information of the address.
 * @property {Transaction[]} transactions - The list of transactions for the address.
 */
export interface UpdateFeed {
  address: string;
  balance: AddressBalance;
  transactions: Transaction[];
}

/**
 * @interface BlockcahinInterface
 * @description Interface for blockchain interactions.
 */
export interface BlockcahinInterface {
  /**
   * Fetch the balance for an address.
   * @param {string} address - The address to fetch the balance for.
   * @returns {Promise<AddressBalance>} The balance of the address.
   */
  getBalance(address: string): Promise<AddressBalance>;

  /**
   * Fetch all balances for an address.
   * @param {string} address - The address to fetch all balances for.
   * @returns {Promise<AddressBalances>} The balances of the address.
   */
  getAllBalances(address: string): Promise<AddressBalances>;

  /**
   * Fetch the balance for a specific asset.
   * @param {string} address - The address to fetch the asset balance for.
   * @param {string} assetId - The ID of the asset.
   * @returns {Promise<AssetBalance>} The balance of the specified asset.
   */
  getAssetBalance(address: string, assetId: string): Promise<AssetBalance>;

  /**
   * Fetch balances for specific assets.
   * @param {string} address - The address to fetch the asset balances for.
   * @param {string[]} assetIds - The IDs of the assets.
   * @returns {Promise<AssetBalance[]>} The balances of the specified assets.
   */
  getAssetsBalances(address: string, assetIds: string[]): Promise<AssetBalance[]>;

  /**
   * Fetch balances for all assets.
   * @param {string} address - The address to fetch all asset balances for.
   * @returns {Promise<AssetBalance[]>} The balances of all assets.
   */
  getAllAssetsBalances(address: string): Promise<AssetBalance[]>;

  /**
   * Fetch a transaction by its hash.
   * @param {string} hash - The hash of the transaction.
   * @returns {Promise<Transaction>} The transaction details.
   */
  getTransaction(hash: string): Promise<Transaction>;

  /**
   * Fetch recent transactions for an address.
   * @param {string} address - The address to fetch recent transactions for.
   * @param {number} [limit] - The maximum number of transactions to fetch (optional).
   * @returns {Promise<Transaction[]>} The list of recent transactions.
   */
  getRecentTransactions(address: string, limit?: number): Promise<Transaction[]>;

  /**
   * Fetch transaction history for an address.
   * @param {string} address - The address to fetch the transaction history for.
   * @param {number} [limit] - The maximum number of transactions to fetch (optional).
   * @param {number} [sblock] - The start block number (optional).
   * @param {number} [eblock] - The end block number (optional).
   * @returns {Promise<Transaction[]>} The list of transactions.
   */
  getTransactionHistory(address: string, limit?: number, sblock?: number, eblock?: number): Promise<Transaction[]>;

  /**
   * Subscribe to balance updates for an address.
   * @param {string} address - The address to subscribe to balance updates for.
   * @returns {Observable<AddressBalance>} An observable for balance updates.
   */
  subscribeToBalance(address: string): Observable<AddressBalance>;

  /**
   * Subscribe to transaction updates for an address.
   * @param {string} address - The address to subscribe to transaction updates for.
   * @returns {Observable<Transaction[]>} An observable for transaction updates.
   */
  subscribeToTransactions(address: string): Observable<Transaction[]>;

  /**
   * Subscribe to balance and transaction updates for an address.
   * @param {string} address - The address to subscribe to updates for.
   * @returns {Observable<UpdateFeed>} An observable for balance and transaction updates.
   */
  subscribeToUpdates(address: string): Observable<UpdateFeed>;
}

/**
 * @abstract
 * @class CoreNetworkAbstraction
 * @implements {BlockcahinInterface}
 * @description Abstract class for core network interactions.
 */
export abstract class CoreNetworkAbstraction implements BlockcahinInterface {
  /** @protected */
  _networkId: string;

  /**
   * Creates an instance of CoreNetworkAbstraction.
   * @param {string} networkId - The network ID.
   */
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
  abstract subscribeToUpdates(address: string): Observable<UpdateFeed>;
}
