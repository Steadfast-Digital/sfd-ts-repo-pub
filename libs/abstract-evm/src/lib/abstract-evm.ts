import { ethers } from 'ethers';
import { CoreNetworkAbstraction, AddressBalance, Transaction, AddressBalances, AssetBalance, UpdateFeed } from '@steadfastdigital/abstract-core';
import { networks, nativeAssets, NativeAsset, getRpc, getRpcMaybe } from '@steadfastdigital/crypto-assets';
import { Logger, isValidWebSocketUrl } from '@steadfastdigital/utils';
import { BlockbookProvider, EtherscanProvider } from './providers';
import { Observable } from 'rxjs';
import { EvmAbstractionError } from './errors';
import { fetchTokenBalance } from './rpc/asset-balance';

/**
 * Get the appropriate provider for the specified network.
 * @param {string} networkId - The network ID.
 * @returns {BlockbookProvider|EtherscanProvider} The provider for the specified network.
 * @throws {Error} If the provider is not supported for the network.
 */
function getIEvmProvider(networkId: string) {
  const api = networks[networkId].urls.find(url => url.type === 'api');
  if (!api) {
    throw new Error(`API URL not found for network ${networkId}`);
  }
  switch (api.customType) {
    case 'etherscan':
      return new EtherscanProvider(networkId);
    case 'blockbook':
      return new BlockbookProvider(networkId);
    default:
      throw new Error(`Provider not supported for network ${networkId}`);
  }
}

/**
 * Abstract class for EVM abstraction.
 * @class
 * @extends {CoreNetworkAbstraction}
 * @abstract
 */
export abstract class EvmAbstraction extends CoreNetworkAbstraction {
  _rpcProvider: ethers.JsonRpcProvider | ethers.WebSocketProvider;

  id: string;
  name: string;
  rpcUrl: string;

  /**
   * Creates an instance of EvmAbstraction.
   * @param {string} networkId - The network ID.
   */
  constructor(networkId: string) {
    super(networkId);
    this.rpcUrl = getRpcMaybe(networkId, 'wss-node')?.url || getRpc(networkId, 'node').url;
    this.id = networkId;
    this.name = networks[networkId].name;
    this._rpcProvider = isValidWebSocketUrl(this.rpcUrl) ? new ethers.WebSocketProvider(this.rpcUrl) : new ethers.JsonRpcProvider(this.rpcUrl);
  }

  /**
   * Fetches the balance for an address.
   * @param {string} address - The address to fetch the balance for.
   * @returns {Promise<AddressBalance>} The balance of the address.
   * @throws {EvmAbstractionError} If there is an error fetching the balance.
   */
  async getBalance(address: string): Promise<AddressBalance> {
    const network = networks[this._networkId];
    Logger.debug(`Fetching balance for ${address} on ${network.name}`);

    try {
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
    } catch (error: unknown) {
      Logger.error('Error fetching balance', error);
      if (!(error instanceof EvmAbstractionError)) throw new EvmAbstractionError('An unexpected error occurred while fetching the address balance.', { error });
      const errorMessage = 'An unexpected error occurred while fetching the address balance.';
      const details = { message: error.message, stack: error.stack };
      Logger.error(errorMessage, details);
      throw new EvmAbstractionError(errorMessage, details);
    }
  }

  /**
   * Fetches a transaction by its hash.
   * @param {string} hash - The hash of the transaction.
   * @returns {Promise<Transaction>} The transaction details.
   * @throws {Error} If the method is not implemented.
   */
  async getTransaction(hash: string): Promise<Transaction> {
    throw new Error('Method not implemented.');
  }

  /**
   * Fetches recent transactions for an address.
   * @param {string} address - The address to fetch recent transactions for.
   * @param {number} [limit] - The maximum number of transactions to fetch (optional).
   * @returns {Promise<Transaction[]>} The list of recent transactions.
   */
  async getRecentTransactions(address: string, limit?: number): Promise<Transaction[]> {
    return getIEvmProvider(this._networkId).getTransactionHistory(address);
  }

  /**
   * Fetches the transaction history for an address.
   * @param {string} address - The address to fetch the transaction history for.
   * @param {number} [limit] - The maximum number of transactions to fetch (optional).
   * @returns {Promise<Transaction[]>} The list of transactions.
   */
  async getTransactionHistory(address: string, limit?: number): Promise<Transaction[]> {
    return getIEvmProvider(this._networkId).getTransactionHistory(address);
  }

  /**
   * Fetches all balances for an address.
   * @param {string} address - The address to fetch all balances for.
   * @returns {Promise<AddressBalances>} The balances of the address.
   */
  async getAllBalances(address: string): Promise<AddressBalances> {
    Logger.debug('Fetching address balances', address);
    const tokens = await getIEvmProvider(this._networkId).getAssetsBalances(address);

    const nativeBalance = await this.getBalance(address);

    return {
      address,
      native: nativeBalance.native,
      tokens,
      fees: [],
    };
  }

  /**
   * Fetches the balance for a specific asset.
   * @param {string} address - The address to fetch the asset balance for.
   * @param {string} assetId - The ID of the asset.
   * @returns {Promise<AssetBalance>} The balance of the specified asset.
   * @throws {EvmAbstractionError} If there is an error fetching the balance.
   */
  async getAssetBalance(address: string, assetId: string): Promise<AssetBalance> {
    const network = networks[this._networkId];
    Logger.debug(`Fetching balance for ${address} and asset ${assetId} on ${network.name}`);

    try {
      const token = await fetchTokenBalance(this._rpcProvider, address, assetId);

      return {
        asset: {
          id: assetId,
          name: token.name,
          symbol: token.symbol,
          decimals: token.decimals,
          contractOrId: assetId,
          networkId: this._networkId,
          assetType: 'ERC20',
        },
        amount: ethers.formatUnits(token.balance, token.decimals),
      };
    } catch (error: unknown) {
      if (!(error instanceof EvmAbstractionError)) throw new EvmAbstractionError('An unexpected error occurred while fetching the address balance.', { error });
      const errorMessage = 'An unexpected error occurred while fetching the address balance.';
      const details = { message: error.message, stack: error.stack };

      Logger.error(errorMessage, details);
      throw new EvmAbstractionError(errorMessage, details);
    }
  }

  /**
   * Fetches balances for specific assets.
   * @param {string} address - The address to fetch the asset balances for.
   * @param {string[]} assetIds - The IDs of the assets.
   * @returns {Promise<AssetBalance[]>} The balances of the specified assets.
   */
  async getAssetsBalances(address: string, assetIds: string[]): Promise<AssetBalance[]> {
    const balances: AssetBalance[] = [];
    for (const assetId of assetIds) {
      const balance = await this.getAssetBalance(address, assetId);
      balances.push(balance);
    }
    return balances;
  }

  /**
   * Fetches balances for all assets.
   * @param {string} address - The address to fetch all asset balances for.
   * @returns {Promise<AssetBalance[]>} The balances of all assets.
   */
  async getAllAssetsBalances(address: string): Promise<AssetBalance[]> {
    return getIEvmProvider(this._networkId).getAssetsBalances(address);
  }

  /**
   * Subscribes to balance updates for an address.
   * @param {string} address - The address to subscribe to balance updates for.
   * @returns {Observable<AddressBalance>} An observable for balance updates.
   * @example const subscription = evmAbstraction.subscribeToBalance(address).subscribe({
   *    next: (balance) => console.log('Balance updated:', balance),
   *    error: (err) => console.error('Error:', err),
   *  });
   * @throws {EvmAbstractionError} If the RPC URL is not a valid WebSocket URL.
   */
  subscribeToBalance(address: string): Observable<AddressBalance> {
    const rpcUrl = getRpcMaybe(this._networkId, 'wss-node')?.url;
    if (!rpcUrl || !isValidWebSocketUrl(rpcUrl)) {
      throw new EvmAbstractionError(`RPC URL for network ${this.name} is not a valid WebSocket URL`);
    }

    const wsProvider = new ethers.WebSocketProvider(rpcUrl);
    Logger.debug(`Subscribing to balance updates for ${address} on ${this.name} using ${rpcUrl}`);
    return new Observable<AddressBalance>(subscriber => {
      const fetchBalance = async () => {
        try {
          const balanceInWeiEthers = await wsProvider.getBalance(address);
          const balanceInEthEthers = ethers.formatEther(balanceInWeiEthers);
          const amount = balanceInEthEthers;

          const balance: AddressBalance = {
            address,
            native: {
              asset: nativeAssets.find(asset => asset.networkId === this.id) as NativeAsset,
              amount: amount,
            },
            fees: [],
          };
          Logger.debug(`Balance updated: ${amount}`);
          subscriber.next(balance);
        } catch (error: unknown) {
          subscriber.error(new EvmAbstractionError('Error fetching balance', error));
        }
      };

      // Fetch initial balance
      fetchBalance();

      // Subscribe to pending transactions involving the address
      const filter = {
        address: address,
        topics: [],
      };
      Logger.debug('Subscribing to balance updates' + JSON.stringify(filter, null, 2));
      const subscription = wsProvider.on(filter, fetchBalance);
      Logger.debug('Subscribed to balance updates' + JSON.stringify(subscription, null, 2));

      // Unsubscribe on observable completion
      return () => {
        Logger.debug('Unsubscribing from balance updates');
        wsProvider.off(filter, fetchBalance);
      };
    });
  }

  /**
   * Subscribes to transaction updates for an address.
   * @param {string} address - The address to subscribe to transaction updates for.
   * @returns {Observable<Transaction[]>} An observable for transaction updates.
   * @throws {Error} If the method is not implemented.
   */
  subscribeToTransactions(address: string): Observable<Transaction[]> {
    throw new Error('Method not implemented.');
  }

  /**
   * Subscribes to balance and transaction updates for an address.
   * @param {string} address - The address to subscribe to updates for.
   * @returns {Observable<UpdateFeed>} An observable for balance and transaction updates.
   * @throws {Error} If the method is not implemented.
   */
  subscribeToUpdates(address: string): Observable<UpdateFeed> {
    throw new Error('Method not implemented.');
  }
}
