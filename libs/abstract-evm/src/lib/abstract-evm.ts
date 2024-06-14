import { ethers } from 'ethers';
import { CoreNetworkAbstraction, AddressBalance, Transaction, AddressBalances, AssetBalance } from '@steadfastdigital/abstract-core';
import { networks, nativeAssets, NativeAsset } from '@steadfastdigital/crypto-assets';
import { Logger, isValidWebSocketUrl } from '@steadfastdigital/utils';
import { BlockbookProvider, EtherscanProvider } from './providers';
import { Observable } from 'rxjs';

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

class EvmAbstractionError extends Error {
  constructor(public override message: string, public details?: any) {
    super(message);
    this.name = 'EvmAbstractionError';
  }
}

export abstract class EvmAbstraction extends CoreNetworkAbstraction {
  _rpcProvider: ethers.JsonRpcProvider | ethers.WebSocketProvider;

  constructor(networkId: string) {
    super(networkId);
    const rpcUrl = networks[networkId].urls.rpc.url;
    this._rpcProvider = isValidWebSocketUrl(rpcUrl) ? new ethers.WebSocketProvider(rpcUrl) : new ethers.JsonRpcProvider(rpcUrl);
  }

  async getAddressBalance(address: string): Promise<AddressBalance> {
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
    } catch (error: any) {
      let errorMessage = 'An unexpected error occurred while fetching the address balance.';
      let details = {};
      if (error.code === 'SERVER_ERROR') {
        errorMessage = 'Server error occurred while fetching the balance.';
      } else if (error.message.includes('timeout')) {
        errorMessage = 'Request timed out while fetching the balance.';
      } else {
        details = { message: error.message, stack: error.stack };
      }

      Logger.error(errorMessage, details);
      throw new EvmAbstractionError(errorMessage, details);
    }
  }

  async getTransactionHistory(address: string): Promise<Transaction[]> {
    return getIEvmProvider(this._networkId).getTransactionHistory(address);
  }

  async getAddressBalances(address: string): Promise<AddressBalances> {
    Logger.debug('Fetching address balances', address);
    const tokens = await getIEvmProvider(this._networkId).getAddressAssetsBalances(address, []);

    const nativeBalance = await this.getAddressBalance(address);

    return {
      address,
      native: nativeBalance.native,
      tokens,
      fees: [],
    };
  }

  async getAddressAssetBalance(address: string, assetId: string): Promise<AssetBalance> {
    return getIEvmProvider(this._networkId).getAddressAssetBalance(address, assetId);
  }

  async getAddressAssetsBalances(address: string, assetIds: string[]): Promise<AssetBalance[]> {
    return getIEvmProvider(this._networkId).getAddressAssetsBalances(address, assetIds);
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
        } catch (error: any) {
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

      const subscription = wsProvider.on(filter, fetchBalance);

      // Unsubscribe on observable completion
      return () => {
        wsProvider.off(filter, fetchBalance);
      };
    });
  }
}
