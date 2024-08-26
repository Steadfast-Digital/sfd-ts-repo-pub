import axios from 'axios';
import { ethers } from 'ethers';
import { ITransaction, IAssetBalance } from '@steadfastdigital/abstract-core';
import {
  networks,
  nativeAssets,
  NativeAsset,
  tokenAssets,
  getRpc,
} from '@steadfastdigital/crypto-assets';
import { Logger } from '@steadfastdigital/utils';

import { IEvmProvider } from '../types';
import { EvmProviderError } from '../errors';

export class EtherscanProvider implements IEvmProvider {
  private _networkId: string;
  private _api: string;
  private _apiKey: string;

  constructor(networkId: string) {
    this._networkId = networkId;
    const rpc = getRpc(networkId, 'api');
    this._api = rpc.url;
    this._apiKey = rpc.apiKey ?? '';
  }

  async getTransactionHistory(address: string): Promise<ITransaction[]> {
    const network = networks[this._networkId];
    Logger.debug(
      `Fetching transaction history for ${address} on ${network.name}`,
    );
    const etherscanApiUrl = `${this._api}?module=account&action=txlist&address=${address}&sort=asc&apikey=${this._apiKey}`;

    try {
      const response = await axios.get(etherscanApiUrl);
      const data = response.data;

      if (data.status !== '1') {
        throw new EvmProviderError(
          `Failed to fetch transaction history: ${data.message}`,
        );
      }

      return data.result.map((tx: any) => ({
        hash: tx.hash,
        from: tx.from,
        to: tx.to,
        value: ethers.formatEther(tx.value),
        fee: {
          asset: nativeAssets.find(
            (asset) => asset.networkId === this._networkId,
          ) as NativeAsset,
          amount: ethers.formatEther(tx.gasUsed * tx.gasPrice),
        },
        blockNumber: tx.blockNumber,
        timestamp: tx.timeStamp,
        status: tx.isError === '0' ? 'confirmed' : 'failed',
        asset: nativeAssets.find(
          (asset) => asset.networkId === this._networkId,
        ) as NativeAsset,
        nonce: tx.nonce,
      }));
    } catch (error: unknown) {
      if (!(error instanceof Error))
        throw new EvmProviderError(
          'An unexpected error occurred while fetching the transaction history.',
          { error },
        );
      let errorMessage =
        'An error occurred while fetching the transaction history.';
      let details = {};

      if (error instanceof EvmProviderError) {
        errorMessage = error.message;
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage = 'Failed to connect to the Etherscan API.';
        details = { url: etherscanApiUrl };
      } else {
        details = { message: error.message, stack: error.stack };
      }

      Logger.error(errorMessage, details);
      throw new EvmProviderError(errorMessage, details);
    }
  }

  async getAssetBalance(
    address: string,
    assetId: string,
  ): Promise<IAssetBalance> {
    const asset = tokenAssets.find(
      (asset) => asset.networkId === this._networkId && asset.id === assetId,
    );
    const etherscanApiUrl = `${this._api}?module=account&action=tokenbalance&contractaddress=${asset?.contractOrId}&address=${address}&tag=latest&apikey=${this._apiKey}`;

    try {
      const response = await axios.get(etherscanApiUrl);
      const data = await response.data;
      Logger.info(JSON.stringify(data, null, 2));

      if (data.status !== '1') {
        throw new EvmProviderError(
          `Failed to fetch address asset balance: ${data.message}`,
        );
      }

      const token = data.result;
      const decimals = asset?.decimals ?? 18; // Default to 18 decimals if not specified

      return {
        asset: {
          id: assetId,
          name: asset?.name ?? '',
          symbol: asset?.symbol ?? '',
          decimals,
          contractOrId: assetId,
          networkId: this._networkId,
          assetType: 'ERC20',
        },
        amount: ethers.formatUnits(token, decimals),
      };
    } catch (error: unknown) {
      if (!(error instanceof Error))
        throw new EvmProviderError(
          'An unexpected error occurred while fetching the asset balance.',
          { error },
        );
      let errorMessage = 'An error occurred while fetching the asset balance.';
      let details = {};

      if (error instanceof EvmProviderError) {
        errorMessage = error.message;
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage = 'Failed to connect to the Etherscan API.';
        details = { url: etherscanApiUrl };
      } else {
        details = { message: error.message, stack: error.stack };
      }

      Logger.error(errorMessage, details);
      throw new EvmProviderError(errorMessage, details);
    }
  }

  async getAssetsBalances(address: string): Promise<IAssetBalance[]> {
    try {
      const assetIds = tokenAssets
        .filter((asset) => asset.networkId === this._networkId)
        .map((asset) => asset.id);
      const balances = await Promise.all(
        assetIds.map((assetId) => this.getAssetBalance(address, assetId)),
      );
      return balances;
    } catch (error: unknown) {
      if (!(error instanceof EvmProviderError))
        throw new EvmProviderError(
          'An unexpected error occurred while fetching the address balances.',
          { error },
        );
      let errorMessage = 'An error occurred while fetching the asset balances.';
      const details = { address, message: error.message, stack: error.stack };

      if (error instanceof EvmProviderError) {
        errorMessage = error.message;
      }

      Logger.error(errorMessage, details);
      throw new EvmProviderError(errorMessage, details);
    }
  }
}
