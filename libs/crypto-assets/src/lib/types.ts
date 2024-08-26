export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export interface INativeAsset {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  contractOrId?: string | undefined;
  networkId: string;
}
export interface ITokenAsset {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  contractOrId: string;
  networkId: string;
  assetType: 'ERC20' | 'ERC721' | 'ERC1155';
}

export type Asset = INativeAsset | ITokenAsset;

export type NetworkRpcType =
  | 'node'
  | 'api'
  | 'explorer'
  | 'txApi'
  | 'wss-node'
  | 'wss-api'
  | 'wss-explorer';

export interface INetworkRpc {
  url: string;
  type: NetworkRpcType;
  apiKey?: string;
  apiKeyEnvName?: string;
  customType?: string;
}
export interface INetwork {
  id: string;
  name: string;
  chainId: number;
  urls: INetworkRpc[];
  family: string; // 'evm' | 'utxo' | 'other';
  type: string; // 'mainnet' | 'testnet' | 'other';
  bip44: {
    purpose: {
      default: number;
      taproot?: number | undefined;
      segwit?: number | undefined;
      staking?: number | undefined;
    };
    slip: number;
    path(
      purpose?: number,
      slip?: number,
      account?: number,
      change?: number,
      index?: number,
    ): string;
  };

  // internal use
  connectorLib: string;
}
export interface INetworkAssets {
  network: INetwork;
  nativeAsset: INativeAsset;
  feeAssets: INativeAsset[];
  assetsIds: string[];
}
