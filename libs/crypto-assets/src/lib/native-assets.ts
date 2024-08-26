import { INativeAsset } from './types';

export const NATIVE_ASSETS: INativeAsset[] = [
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
    networkId: 'eth',
  },
  {
    id: 'bnb',
    name: 'Binance Coin',
    symbol: 'BNB',
    decimals: 18,
    networkId: 'bsc',
  },
];
