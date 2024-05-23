
export type NativeAsset = {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  contractOrId?: string | undefined;
  networkId: string;
}
export type TokenAsset = {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  contractOrId: string;
  networkId: string;
  assetType: 'ERC20' | 'ERC721' | 'ERC1155';
}

export type Asset = NativeAsset | TokenAsset;

export interface Network {
  id: string;
  name: string;
  chainId: number;
  urls: {
    rpc: {
      url: string;
      type: string; // 'geth' | 'parity' | 'besu' | 'quorum' | 'nethermind' | 'other'
      apiKey?: string | undefined;
    }
    consensus: {
      url: string;
      type: string; // 'geth' | 'parity' | 'besu' | 'quorum' | 'nethermind' | 'other'
      apiKey?: string | undefined;
    }
    explorer: {
      url: string;
      type: string; // 'etherscan' | 'blockscout' | 'ethplorer' | 'other'
      apiKey?: string | undefined;
    }
    txApi: {
      url: string;
      type: string; // 'etherscan' | 'blockscout' | 'ethplorer' | 'other'
      apiKey?: string | undefined;
    }
    tokenApi: {
      url: string;
      type: string; // 'etherscan' | 'blockscout' | 'ethplorer' | 'other'
      apiKey?: string | undefined;
    }
  }
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
    path(purpose?: number, slip?: number, account?: number, change?: number, index?: number): string;
  };
}
export interface NetworkAssets {
  network: Network;
  nativeAsset: NativeAsset;
  feeAssets: NativeAsset[];
  assetsIds: string[];
}