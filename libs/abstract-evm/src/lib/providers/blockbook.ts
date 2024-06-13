import { ethers } from 'ethers';
import { IEvmProvider } from '../types';
import { Transaction, AssetBalance } from '@steadfastdigital/abstract-core';
import { networks, nativeAssets, NativeAsset } from '@steadfastdigital/crypto-assets';
import { Logger } from '@steadfastdigital/utils';

class EvmProviderError extends Error {
  constructor(public override message: string, public details?: any) {
    super(message);
    this.name = 'EvmProviderError';
  }
}

export class BlockbookProvider implements IEvmProvider {
  private _networkId: string;

  constructor(networkId: string) {
    this._networkId = networkId;
  }

  async getTransactionHistory(address: string): Promise<Transaction[]> {
    const network = networks[this._networkId];
    Logger.debug(`Fetching transaction history for ${address} on ${network.name}`);

    const blockbookApiUrl = network.urls.txApi.url;

    try {
      const response = await fetch(`${blockbookApiUrl}/v2/address/${address}?details=txs`);
      const data = await response.json();

      if (!response.ok) {
        throw new EvmProviderError(`Failed to fetch transaction history: ${data.error}`);
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
    } catch (error: any) {
      let errorMessage = 'An error occurred while fetching the transaction history.';
      let details = {};

      if (error instanceof EvmProviderError) {
        errorMessage = error.message;
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage = 'Failed to connect to the Blockbook API.';
        details = { url: blockbookApiUrl };
      } else {
        details = { message: error.message, stack: error.stack };
      }

      Logger.error(errorMessage, details);
      throw new EvmProviderError(errorMessage, details);
    }
  }

  async getAddressAssetBalance(address: string, assetId: string): Promise<AssetBalance> {
    const network = networks[this._networkId];
    const blockbookApiUrl = network.urls.tokenApi.url;

    try {
      const response = await fetch(`${blockbookApiUrl}/v2/address/${address}?details=tokenBalances`);
      const data = await response.json();

      if (!response.ok) {
        throw new EvmProviderError(`Failed to fetch address asset balance: ${data.error}`);
      }

      const token = data.tokens.find((token: any) => token.contract === assetId);
      if (!token) {
        throw new EvmProviderError(`Token with assetId ${assetId} not found for address ${address}`);
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
        },
        amount: ethers.formatUnits(token.balance, token.decimals),
      };
    } catch (error: any) {
      let errorMessage = 'An error occurred while fetching the asset balance.';
      let details = {};

      if (error instanceof EvmProviderError) {
        errorMessage = error.message;
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage = 'Failed to connect to the Blockbook API.';
        details = { url: blockbookApiUrl };
      } else {
        details = { message: error.message, stack: error.stack };
      }

      Logger.error(errorMessage, details);
      throw new EvmProviderError(errorMessage, details);
    }
  }

  async getAddressAssetsBalances(address: string, assetIds: string[]): Promise<AssetBalance[]> {
    const network = networks[this._networkId];
    const blockbookApiUrl = network.urls.tokenApi.url;

    try {
      const response = await fetch(`${blockbookApiUrl}/v2/address/${address}?details=tokenBalances`);
      const data = await response.json();

      if (!response.ok) {
        throw new EvmProviderError(`Failed to fetch address assets balances: ${data.error}`);
      }

      return data.tokens.map((token: any) => ({
        asset: {
          id: token.contract,
          name: token.name,
          symbol: token.symbol,
          decimals: token.decimals,
          contractOrId: token.contract,
          networkId: this._networkId,
          assetType: 'ERC20',
        },
        amount: token.balance ? ethers.formatUnits(token.balance, token.decimals) : undefined,
      }));
    } catch (error: any) {
      let errorMessage = 'An error occurred while fetching the asset balances.';
      let details = {};

      if (error instanceof EvmProviderError) {
        errorMessage = error.message;
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage = 'Failed to connect to the Blockbook API.';
        details = { url: blockbookApiUrl };
      } else {
        details = { message: error.message, stack: error.stack };
      }

      Logger.error(errorMessage, details);
      throw new EvmProviderError(errorMessage, details);
    }
  }
}
