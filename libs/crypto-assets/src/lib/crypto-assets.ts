import { TokenAsset } from "./types";

export const tokenAssets: TokenAsset[] = [
  {
    id: 'usdt',
    name: 'Tether USD',
    symbol: 'USDT',
    decimals: 6,
    contractOrId: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    networkId: 'eth',
    assetType: 'ERC20'
  },
  {
    id: 'usdc',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    contractOrId: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    networkId: 'eth',
    assetType: 'ERC20'
  },
  {
    id: 'dai',
    name: 'Dai',
    symbol: 'DAI',
    decimals: 18,
    contractOrId: '0x6b175474e89094c44da98b954eedeac495271d0f',
    networkId: 'eth',
    assetType: 'ERC20'
  },
  {
    id: 'usdt',
    name: 'Tether USD',
    symbol: 'USDT',
    decimals: 6,
    contractOrId: '0x55d398326f99059ff775485246999027b3197955',
    networkId: 'bsc',
    assetType: 'ERC20'
  },
  {
    id: 'usdc',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    contractOrId: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    networkId: 'bsc',
    assetType: 'ERC20'
  },
  {
    id: 'dai',
    name: 'Dai',
    symbol: 'DAI',
    decimals: 18,
    contractOrId: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    networkId: 'bsc',
    assetType: 'ERC20'
  },
];