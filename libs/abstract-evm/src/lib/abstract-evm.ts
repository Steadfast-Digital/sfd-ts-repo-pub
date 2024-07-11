import { ethers } from 'ethers';
import { CoreNetworkAbstraction, AddressBalance, Transaction, AddressBalances, AssetBalance, UpdateFeed } from '@steadfastdigital/abstract-core';
import { networks, nativeAssets, NativeAsset } from '@steadfastdigital/crypto-assets';
import { Logger, isValidWebSocketUrl } from '@steadfastdigital/utils';
import { BlockbookProvider, EtherscanProvider } from './providers';
import { Observable } from 'rxjs';
import { EvmAbstractionError } from './errors';
import { fetchTokenBalance } from './rpc/asset-balance';

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

  async getBalance(address: string): Promise<AddressBalance> {
    const network = networks[this._networkId];
    Logger.debug(`Fetching balance for ${address} on ${network.name}`);

    try {
      const { url: rpcUrl } = network.urls.rpc;

      if (!rpcUrl) {
        throw new EvmAbstractionError(`RPC URL for network ${network.name} not found`);
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
    } catch (error: unknown) {
      Logger.error('Error fetching balance', error);
      if (!(error instanceof EvmAbstractionError)) throw new EvmAbstractionError('An unexpected error occurred while fetching the address balance.', { error });
      const errorMessage = 'An unexpected error occurred while fetching the address balance.';
      const details = { message: error.message, stack: error.stack };
      Logger.error(errorMessage, details);
      throw new EvmAbstractionError(errorMessage, details);
    }
  }
  async getTransaction(hash: string): Promise<Transaction> {
    throw new Error('Method not implemented.');
  }
  async getRecentTransactions(address: string, limit?: number): Promise<Transaction[]> {
    return getIEvmProvider(this._networkId).getTransactionHistory(address);
  }
  async getTransactionHistory(address: string, limit?: number): Promise<Transaction[]> {
    return getIEvmProvider(this._networkId).getTransactionHistory(address);
  }

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

  async getAssetBalance(address: string, assetId: string): Promise<AssetBalance> {
    const network = networks[this._networkId];
    Logger.debug(`Fetching balance for ${address} and asset ${assetId} on ${network.name}`);

    try {
      const { url: rpcUrl } = network.urls.rpc;

      if (!rpcUrl) {
        throw new EvmAbstractionError(`RPC URL for network ${network.name} not found`);
      }

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

  async getAssetsBalances(address: string, assetIds: string[]): Promise<AssetBalance[]> {
    const balances: AssetBalance[] = [];
    for (const assetId of assetIds) {
      const balance = await this.getAssetBalance(address, assetId);
      balances.push(balance);
    }
    return balances;
  }

  async getAllAssetsBalances(address: string): Promise<AssetBalance[]> {
    return getIEvmProvider(this._networkId).getAssetsBalances(address);
  }

  /**
   * 
   * @param address 
   * @returns 
   * @example const subscription = evmAbstraction.subscribeToBalance(address).subscribe({
        next: (balance) => console.log('Balance updated:', balance),
        error: (err) => console.error('Error:', err),
      });
   */
  subscribeToBalance(address: string): Observable<AddressBalance> {
    const network = networks[this._networkId];
    const { url: rpcUrl } = network.urls.rpc;

    if (!isValidWebSocketUrl(rpcUrl)) {
      throw new EvmAbstractionError(`RPC URL for network ${network.name} is not a valid WebSocket URL`);
    }

    const wsProvider = new ethers.WebSocketProvider(rpcUrl);
    Logger.debug(`Subscribing to balance updates for ${address} on ${network.name} using ${rpcUrl}`);
    return new Observable<AddressBalance>(subscriber => {
      const fetchBalance = async () => {
        try {
          const balanceInWeiEthers = await wsProvider.getBalance(address);
          const balanceInEthEthers = ethers.formatEther(balanceInWeiEthers);
          const amount = balanceInEthEthers;

          const balance: AddressBalance = {
            address,
            native: {
              asset: nativeAssets.find(asset => asset.networkId === network.id) as NativeAsset,
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
  subscribeToTransactions(address: string): Observable<Transaction[]> {
    throw new Error('Method not implemented.');
  }
  subscribeToUpdates(address: string): Observable<UpdateFeed> {
    throw new Error('Method not implemented.');
  }
}
