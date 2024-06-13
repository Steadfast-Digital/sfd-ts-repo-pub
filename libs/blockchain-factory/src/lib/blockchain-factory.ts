import { BlockcahinInterface } from '@steadfastdigital/abstract-core';
import { networks } from '@steadfastdigital/crypto-assets';
import { isValidPackageName } from '@steadfastdigital/utils';
export class BlockchainFactory {
  private static _connectors: Record<string, BlockcahinInterface> = {};
  static async createBlockchain(networkId: string): Promise<BlockcahinInterface> {
    try {
      const network = networks[networkId];
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
      const ConnectorModule = await import(network.connectorLib);
      // Assume the default export is the required connector class
      this._connectors[networkId] = new ConnectorModule.default(networkId);
      return this._connectors[networkId];
    } catch (error) {
      if (error && (error as NodeJS.ErrnoException)['code'] === 'MODULE_NOT_FOUND') {
        throw new Error(`Package for ${networkId} not found. Please install the appropriate package.`);
      }
      throw error;
    }
  }
  static registerConnector(networkId: string, connector: BlockcahinInterface) {
    const network = networks[networkId];
    if (!network) {
      throw new Error(`Invalid network id: ${networkId}`);
    }
    this._connectors[networkId] = connector;
    return this._connectors[networkId];
  }
  static getConnection(networkId: string): BlockcahinInterface {
    if (!this._connectors[networkId]) {
      throw new Error(`Connector for ${networkId} not found`);
    }
    return this._connectors[networkId];
  }
  static async getAddressBalance(networkId: string, address: string) {
    const connector = await this.createBlockchain(networkId);
    return connector.getAddressBalance(address);
  }
  static async getAddressAssetBalance(networkId: string, address: string, assetId: string) {
    const connector = await this.createBlockchain(networkId);
    return connector.getAddressAssetBalance(address, assetId);
  }
  static async getAddressBalances(networkId: string, address: string) {
    const connector = await this.createBlockchain(networkId);
    return connector.getAddressBalances(address);
  }
  static async getAddressAssetsBalances(networkId: string, address: string, assetIds: string[]) {
    const connector = await this.createBlockchain(networkId);
    return connector.getAddressAssetsBalances(address, assetIds);
  }
  static async getTransactionHistory(networkId: string, address: string) {
    const connector = await this.createBlockchain(networkId);
    return connector.getTransactionHistory(address);
  }
}