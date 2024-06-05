import { ethers } from 'ethers';
import { CoreNetworkAbstraction, AddressBalance, Transaction, AddressBalances, AssetBalance } from '@steadfastdigital/abstract-core';
import { networks, nativeAssets, NativeAsset } from '@steadfastdigital/crypto-assets';
import { Logger, isValidWebSocketUrl } from '@steadfastdigital/utils';

export abstract class EvmAbstraction extends CoreNetworkAbstraction {
  _rpcProvider: ethers.JsonRpcProvider | ethers.WebSocketProvider;
  
  constructor(networkId: string) {
    super(networkId);
    const rpcUrl = networks[networkId].urls.rpc.url;
    this._rpcProvider = isValidWebSocketUrl(rpcUrl) ? new ethers.WebSocketProvider(rpcUrl) : new ethers.JsonRpcProvider(rpcUrl);
  }

  async getAddressBalance(address: string): Promise<AddressBalance> {
    const network = networks[this._networkId];
    Logger.debug(`Fetching balance for ${address} on ${JSON.stringify(network, null, 2)}`);
    const { url: rpcUrl } = network.urls.rpc;
    
    if (!rpcUrl) {
      throw new Error(`RPC URL for network ${network.name} not found`);
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
  }

  async getTransactionHistory(address: string): Promise<Transaction[]> {
    const network = networks[this._networkId];
    Logger.debug(`Fetching transaction history for ${address} on ${network.name}`);

    const blockbookApiUrl = network.urls.txApi.url;
    const response = await fetch(`${blockbookApiUrl}/v2/address/${address}?details=txs`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Failed to fetch transaction history: ${data.error}`);
    }

    return data.transactions.map((tx: any) => ({
      hash: tx.txid,
      from: tx.vin[0].addresses[0],
      to: tx.vout[0].addresses ? tx.vout[0].addresses[0] : null,
      value: tx.vout[0].value,
      fee: {
        asset: nativeAssets.find(asset => asset.networkId === this._networkId) as NativeAsset,
        amount: tx.fees,
      },
      blockNumber: tx.blockHeight,
      timestamp: tx.blockTime,
      status: tx.confirmations > 0 ? 'confirmed' : 'pending',
      asset: nativeAssets.find(asset => asset.networkId === this._networkId) as NativeAsset,
      nonce: tx.nonce,
    }));
  }

  async getAddressBalances(address: string): Promise<AddressBalances> {
    Logger.debug('Fetching address balances', address);

    const network = networks[this._networkId];
    const blockbookApiUrl = network.urls.tokenApi.url;
    const response = await fetch(`${blockbookApiUrl}/v2/address/${address}?details=tokenBalances`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Failed to fetch address balances: ${data.error}`);
    }

    const tokens = data.tokens.map((token: any) => ({
      asset: {
        id: token.contract,
        name: token.name,
        symbol: token.symbol,
        decimals: token.decimals,
        logo: '', // Add logo URL if available
      },
      amount: ethers.formatUnits(token.balance, token.decimals),
    }));

    const nativeBalance = await this.getAddressBalance(address);

    return {
      address,
      native: nativeBalance.native,
      tokens: tokens.map((token: any) => ({
        asset: token.asset,
        amount: token.amount,
      })),
      fees: [],
    };
  }

  async getAddressAssetBalance(address: string, assetId: string): Promise<AssetBalance> {
    Logger.debug('Fetching address asset balance', address, assetId);

    const network = networks[this._networkId];
    const blockbookApiUrl = network.urls.tokenApi.url;
    const response = await fetch(`${blockbookApiUrl}/v2/address/${address}?details=tokenBalances`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Failed to fetch address asset balance: ${data.error}`);
    }

    const token = data.tokens.find((token: any) => token.contract === assetId);
    if (!token) {
      throw new Error(`Token with assetId ${assetId} not found for address ${address}`);
    }

    return {
      asset: {
        id: token.contract,
        name: token.name,
        symbol: token.symbol,
        decimals: token.decimals,
        contractOrId: token.contract,
        networkId: this._networkId,
        assetType: 'ERC20',
        // logo: '',
      },
      amount: ethers.formatUnits(token.balance, token.decimals),
    };
  }

  async getAddressAssetsBalances(address: string, assetIds: string[]): Promise<AssetBalance[]> {
    Logger.debug('Fetching address assets balances', address, assetIds);

    const network = networks[this._networkId];
    const blockbookApiUrl = network.urls.tokenApi.url;
    const response = await fetch(`${blockbookApiUrl}/v2/address/${address}?details=tokenBalances`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Failed to fetch address assets balances: ${data.error}`);
    }
    Logger.info('Data', data);
    console.log('Data', JSON.stringify(data, null, 2));
    if (!data?.tokens?.length) {
      return [];
    }
    if (assetIds.length === 0) {
      return data.tokens.map((token: any) => ({
        asset: {
          id: token.contract,
          name: token.name,
          symbol: token.symbol,
          decimals: token.decimals,
          contractOrId: token.contract,
          networkId: this._networkId,
          assetType: token.type || 'ERC20',
          // logo: '',
        },
        amount: token.balance ? ethers.formatUnits(token.balance, token.decimals) : undefined,
      }));
    }
    return assetIds.map(assetId => {
      const token = data.tokens.find((token: any) => token.contract === assetId);
      if (!token) {
        return {
          asset: {
            id: assetId,
            name: '',
            symbol: '',
            decimals: 0,
            contractOrId: token.contract,
            networkId: this._networkId,
            assetType: token.type || 'ERC20',
            logo: '', // Add logo URL if available
          },
          amount: token.balance ? ethers.formatUnits(token.balance, token.decimals) : undefined,
        };
      }
      return {
        asset: {
          id: token.contract,
          name: token.name,
          symbol: token.symbol,
          decimals: token.decimals,
          contractOrId: token.contract,
          assetType: token.type || 'ERC20',
          logo: '', // Add logo URL if available
        },
        amount: token.balance ? ethers.formatUnits(token.balance, token.decimals) : undefined,
      };
    }) as AssetBalance[];
  }
}
