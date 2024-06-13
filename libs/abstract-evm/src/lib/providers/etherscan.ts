import { ethers } from 'ethers';
import { IEvmProvider } from '../types';
import {  Transaction, AssetBalance } from '@steadfastdigital/abstract-core';
import { networks, nativeAssets, NativeAsset, tokenAssets } from '@steadfastdigital/crypto-assets';
import { Logger } from '@steadfastdigital/utils';

export class EtherscanProvider implements IEvmProvider {
  private _networkId: string;

  constructor(networkId: string) {
    this._networkId = networkId;
  }

  async getTransactionHistory(address: string): Promise<Transaction[]> {
    const network = networks[this._networkId];
    Logger.debug(`Fetching transaction history for ${address} on ${network.name}`);
    const etherscanApiUrlBase = network.urls.txApi.url;
    const etherscanApiUrl = `${etherscanApiUrlBase}?module=account&action=txlist&address=${address}&sort=asc`;
    const response = await fetch(etherscanApiUrl);
    const data = await response.json();

    if (data.status !== "1") {
      throw new Error(`Failed to fetch transaction history: ${data.message}`);
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
  }

  async getAddressAssetBalance(address: string, assetId: string): Promise<AssetBalance> {
    // Etherscan API for token balance
    const etherscanApiUrlBase = networks[this._networkId].urls.txApi.url;
    const asset = tokenAssets.find(asset => asset.networkId === this._networkId && asset.id === assetId);
    const etherscanApiUrl = `${etherscanApiUrlBase}?module=account&action=tokenbalance&contractaddress=${asset?.contractOrId}&address=${address}&tag=latest`;
    const response = await fetch(etherscanApiUrl);
    const data = await response.json();
    Logger.info(JSON.stringify(data, null, 2));
    if (data.status !== "1") {
      throw new Error(`Failed to fetch address asset balance: ${data.message}`);
    }

    const token = data.result;
    const decimals = 18; // Generally ERC20 tokens have 18 decimals, change this as needed

    return {
      asset: {
        id: assetId,
        name: '', // Populate with actual token details if available
        symbol: '', // Populate with actual token details if available
        decimals,
        contractOrId: assetId,
        networkId: this._networkId,
        assetType: 'ERC20',
      },
      amount: ethers.formatUnits(token, decimals),
    };
  }

  async getAddressAssetsBalances(address: string, assetIds: string[]): Promise<AssetBalance[]> {
    const balances = await Promise.all(
      assetIds.map(assetId => this.getAddressAssetBalance(address, assetId))
    );
    return balances;
  }
}
