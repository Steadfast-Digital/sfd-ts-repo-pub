import { ethers } from 'ethers';
import { IEvmProvider } from '../types';
import { Transaction, AssetBalance } from '@steadfastdigital/abstract-core';
import { networks, nativeAssets, NativeAsset, tokenAssets } from '@steadfastdigital/crypto-assets';
import { Logger } from '@steadfastdigital/utils';

class EvmProviderError extends Error {
  constructor(public override message: string, public details?: any) {
    super(message);
    this.name = 'EvmProviderError';
  }
}

export class EtherscanProvider implements IEvmProvider {
  private _networkId: string;

  constructor(networkId: string) {
    this._networkId = networkId;
  }

  async getTransactionHistory(address: string): Promise<Transaction[]> {
    const network = networks[this._networkId];
    Logger.debug(`Fetching transaction history for ${address} on ${network.name}`);
    const etherscanApiUrlBase = network.urls.txApi.url;
    const apikey = network.urls.txApi.apiKey;
    const etherscanApiUrl = `${etherscanApiUrlBase}?module=account&action=txlist&address=${address}&sort=asc&apikey=${apikey}`;

    try {
      const response = await fetch(etherscanApiUrl);
      const data = await response.json();

      if (data.status !== "1") {
        throw new EvmProviderError(`Failed to fetch transaction history: ${data.message}`);
      }

      return data.result.map((tx: any) => ({
        hash: tx.hash,
        from: tx.from,
        to: tx.to,
        value: ethers.formatEther(tx.value),
        fee: {
          asset: nativeAssets.find(asset => asset.networkId === this._networkId) as NativeAsset,
          amount: ethers.formatEther(tx.gasUsed * tx.gasPrice),
        },
        blockNumber: tx.blockNumber,
        timestamp: tx.timeStamp,
        status: tx.isError === "0" ? 'confirmed' : 'failed',
        asset: nativeAssets.find(asset => asset.networkId === this._networkId) as NativeAsset,
        nonce: tx.nonce,
      }));
    } catch (error: any) {
      let errorMessage = 'An error occurred while fetching the transaction history.';
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

  async getAssetBalance(address: string, assetId: string): Promise<AssetBalance> {
    const network = networks[this._networkId];
    const etherscanApiUrlBase = network.urls.txApi.url;
    const apikey = network.urls.txApi.apiKey;
    const asset = tokenAssets.find(asset => asset.networkId === this._networkId && asset.id === assetId);
    const etherscanApiUrl = `${etherscanApiUrlBase}?module=account&action=tokenbalance&contractaddress=${asset?.contractOrId}&address=${address}&tag=latest&apikey=${apikey}`;

    try {
      const response = await fetch(etherscanApiUrl);
      const data = await response.json();
      Logger.info(JSON.stringify(data, null, 2));

      if (data.status !== "1") {
        throw new EvmProviderError(`Failed to fetch address asset balance: ${data.message}`);
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
    } catch (error: any) {
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

  async getAssetsBalances(address: string, assetIds: string[]): Promise<AssetBalance[]> {
    try {
      const balances = await Promise.all(
        assetIds.map(assetId => this.getAssetBalance(address, assetId))
      );
      return balances;
    } catch (error: any) {
      let errorMessage = 'An error occurred while fetching the asset balances.';
      const details = { address, assetIds, message: error.message, stack: error.stack };

      if (error instanceof EvmProviderError) {
        errorMessage = error.message;
      }

      Logger.error(errorMessage, details);
      throw new EvmProviderError(errorMessage, details);
    }
  }
}
