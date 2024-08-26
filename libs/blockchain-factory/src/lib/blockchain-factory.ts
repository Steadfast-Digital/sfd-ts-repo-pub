import { IBlockchainInterface } from '@steadfastdigital/abstract-core';
import { NETWORKS } from '@steadfastdigital/crypto-assets';
import { isValidPackageName } from '@steadfastdigital/utils';
export class BlockchainFactory {
  private static _connectors: Record<string, IBlockchainInterface> = {};
  static async createBlockchain(
    networkId: string,
  ): Promise<IBlockchainInterface> {
    try {
      const network = NETWORKS[networkId];
      if (!network) {
        throw new Error(`Invalid network id: ${networkId}`);
      }
      if (this._connectors[networkId]) {
        return this._connectors[networkId];
      }
      if (!network.connectorLib) {
        throw new Error(`Connector library not found for ${networkId}`);
      }
      if (!isValidPackageName(network.connectorLib)) {
        throw new Error(`Invalid package name: ${networkId}`);
      }
      // Use dynamic import to load the connector library
      const connectorModule = await import(network.connectorLib);
      // Assume the default export is the required connector class
      this._connectors[networkId] = new connectorModule.default(networkId);
      return this._connectors[networkId];
    } catch (error) {
      if (
        error &&
        (error as NodeJS.ErrnoException)['code'] === 'MODULE_NOT_FOUND'
      ) {
        throw new Error(
          `Package for ${networkId} not found. Please install the appropriate package.`,
        );
      }
      throw error;
    }
  }
  static registerConnector(networkId: string, connector: IBlockchainInterface) {
    const network = NETWORKS[networkId];
    if (!network) {
      throw new Error(`Invalid network id: ${networkId}`);
    }
    this._connectors[networkId] = connector;
    return this._connectors[networkId];
  }
  static getConnection(networkId: string): IBlockchainInterface {
    if (!this._connectors[networkId]) {
      throw new Error(`Connector for ${networkId} not found`);
    }
    return this._connectors[networkId];
  }
  static async getBalance(networkId: string, address: string) {
    const connector = await this.createBlockchain(networkId);
    return connector.getBalance(address);
  }
  static async getAssetBalance(
    networkId: string,
    address: string,
    assetId: string,
  ) {
    const connector = await this.createBlockchain(networkId);
    return connector.getAssetBalance(address, assetId);
  }
  static async getAllBalances(networkId: string, address: string) {
    const connector = await this.createBlockchain(networkId);
    return connector.getAllBalances(address);
  }
  static async getAssetsBalances(
    networkId: string,
    address: string,
    assetIds: string[],
  ) {
    const connector = await this.createBlockchain(networkId);
    return connector.getAssetsBalances(address, assetIds);
  }
  static async getTransactionHistory(networkId: string, address: string) {
    const connector = await this.createBlockchain(networkId);
    return connector.getTransactionHistory(address);
  }
  static subscribeToBalance(networkId: string, address: string) {
    const connector = this.getConnection(networkId);
    return connector.subscribeToBalance(address);
  }
}
