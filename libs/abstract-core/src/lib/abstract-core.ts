import { NativeAsset, TokenAsset } from '@steadfastdigital/crypto-assets';
import { Observable } from 'rxjs';

/**
 * @typedef {Object} INativeAssetBalance
 * @property {NativeAsset} asset - The native asset.
 * @property {string} amount - The amount of the native asset.
 * @property {string} [minBalance] - The minimum balance of the native asset (optional).
 */
export interface INativeAssetBalance {
  asset: NativeAsset;
  amount: string;
  minBalance?: string | undefined;
}

/**
 * @typedef {Object} IAddressBalance
 * @property {string} address - The address for which the balance is fetched.
 * @property {INativeAssetBalance} native - The balance of the native asset.
 * @property {INativeAssetBalance[]} fees - The balance of fees in native assets.
 */
export interface IAddressBalance {
  address: string;
  native: INativeAssetBalance;
  fees: INativeAssetBalance[];
}

/**
 * @typedef {Object} AssetBalance
 * @property {NativeAsset|TokenAsset} asset - The asset (native or token).
 * @property {string} amount - The amount of the asset.
 * @property {string} [minBalance] - The minimum balance of the asset (optional).
 */
export interface IAssetBalance {
  asset: NativeAsset | TokenAsset;
  amount: string;
  minBalance?: string | undefined;
}

/**
 * @typedef {IAddressBalance} IAddressBalances
 * @property {AssetBalance[]} tokens - The balances of various token assets.
 */
export interface IAddressBalances extends IAddressBalance {
  tokens: IAssetBalance[];
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
export interface ITransaction {
  hash: string;
  from: string;
  to: string | null;
  value: string;
  fee: {
    asset: NativeAsset;
    amount: string;
  };
  blockNumber: number;
  timestamp: number;
  status: 'confirmed' | 'pending' | 'failed';
  asset: NativeAsset | TokenAsset;
  nonce: number;
}

/**
 * @typedef {Object} IUpdateFeed
 * @property {string} address - The address being updated.
 * @property {IAddressBalance} balance - The balance information of the address.
 * @property {Transaction[]} transactions - The list of transactions for the address.
 */
export interface IUpdateFeed {
  address: string;
  balance: IAddressBalance;
  transactions: ITransaction[];
}

/**
 * Interface for blockchain interactions.
 * @interface IBlockchainInterface
 */
export interface IBlockchainInterface {
  /**
   * Fetch the balance for an address.
   * @param {string} address - The address to fetch the balance for.
   * @returns {Promise<IAddressBalance>} The balance of the address.
   */
  getBalance(address: string): Promise<IAddressBalance>;

  /**
   * Fetch all balances for an address.
   * @param {string} address - The address to fetch all balances for.
   * @returns {Promise<IAddressBalances>} The balances of the address.
   */
  getAllBalances(address: string): Promise<IAddressBalances>;

  /**
   * Fetch the balance for a specific asset.
   * @param {string} address - The address to fetch the asset balance for.
   * @param {string} assetId - The ID of the asset.
   * @returns {Promise<AssetBalance>} The balance of the specified asset.
   */
  getAssetBalance(address: string, assetId: string): Promise<IAssetBalance>;

  /**
   * Fetch balances for specific assets.
   * @param {string} address - The address to fetch the asset balances for.
   * @param {string[]} assetIds - The IDs of the assets.
   * @returns {Promise<AssetBalance[]>} The balances of the specified assets.
   */
  getAssetsBalances(
    address: string,
    assetIds: string[],
  ): Promise<IAssetBalance[]>;

  /**
   * Fetch balances for all assets.
   * @param {string} address - The address to fetch all asset balances for.
   * @returns {Promise<AssetBalance[]>} The balances of all assets.
   */
  getAllAssetsBalances(address: string): Promise<IAssetBalance[]>;

  /**
   * Fetch a transaction by its hash.
   * @param {string} hash - The hash of the transaction.
   * @returns {Promise<Transaction>} The transaction details.
   */
  getTransaction(hash: string): Promise<ITransaction>;

  /**
   * Fetch recent transactions for an address.
   * @param {string} address - The address to fetch recent transactions for.
   * @param {number} [limit] - The maximum number of transactions to fetch (optional).
   * @returns {Promise<Transaction[]>} The list of recent transactions.
   */
  getRecentTransactions(
    address: string,
    limit?: number,
  ): Promise<ITransaction[]>;

  /**
   * Fetch transaction history for an address.
   * @param {string} address - The address to fetch the transaction history for.
   * @param {number} [limit] - The maximum number of transactions to fetch (optional).
   * @param {number} [sblock] - The start block number (optional).
   * @param {number} [eblock] - The end block number (optional).
   * @returns {Promise<Transaction[]>} The list of transactions.
   */
  getTransactionHistory(
    address: string,
    limit?: number,
    sblock?: number,
    eblock?: number,
  ): Promise<ITransaction[]>;

  /**
   * Subscribe to balance updates for an address.
   * @param {string} address - The address to subscribe to balance updates for.
   * @returns {Observable<IAddressBalance>} An observable for balance updates.
   */
  subscribeToBalance(address: string): Observable<IAddressBalance>;

  /**
   * Subscribe to transaction updates for an address.
   * @param {string} address - The address to subscribe to transaction updates for.
   * @returns {Observable<Transaction[]>} An observable for transaction updates.
   */
  subscribeToTransactions(address: string): Observable<ITransaction[]>;

  /**
   * Subscribe to balance and transaction updates for an address.
   * @param {string} address - The address to subscribe to updates for.
   * @returns {Observable<IUpdateFeed>} An observable for balance and transaction updates.
   */
  subscribeToUpdates(address: string): Observable<IUpdateFeed>;
}

/**
 * Abstract class for core network interactions.
 * @class CoreNetworkAbstraction
 */
export abstract class CoreNetworkAbstraction implements IBlockchainInterface {
  /** @protected */
  _networkId: string;

  /**
   * Creates an instance of CoreNetworkAbstraction.
   * @param {string} networkId - The network ID.
   */
  constructor(protected networkId: string) {
    this._networkId = networkId;
  }

  abstract getBalance(address: string): Promise<IAddressBalance>;
  abstract getAllBalances(address: string): Promise<IAddressBalances>;
  abstract getAssetBalance(
    address: string,
    assetId: string,
  ): Promise<IAssetBalance>;
  abstract getAssetsBalances(
    address: string,
    assetIds: string[],
  ): Promise<IAssetBalance[]>;
  abstract getAllAssetsBalances(address: string): Promise<IAssetBalance[]>;
  abstract getTransaction(hash: string): Promise<ITransaction>;
  abstract getRecentTransactions(
    address: string,
    limit?: number,
  ): Promise<ITransaction[]>;
  abstract getTransactionHistory(
    address: string,
    limit?: number,
    sblock?: number,
    eblock?: number,
  ): Promise<ITransaction[]>;
  abstract subscribeToBalance(address: string): Observable<IAddressBalance>;
  abstract subscribeToTransactions(address: string): Observable<ITransaction[]>;
  abstract subscribeToUpdates(address: string): Observable<IUpdateFeed>;
}
