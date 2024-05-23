import { Network } from './types';

export const networks = {
  eth: {
    id: 'eth',
    name: 'Ethereum',
    chainId: 1,
    urls: {
      rpc: {
        url: 'https://mainnet.infura.io/v3/your-api-key',
        type: 'geth'
      },
      consensus: {
        url: 'https://mainnet.infura.io/v3/your-api-key',
        type: 'geth'
      },
      explorer: {
        url: 'https://etherscan.io',
        type: 'etherscan'
      },
      txApi: {
        url: 'https://api.etherscan.io/api',
        type: 'etherscan',
        apiKey: 'your-api-key'
      },
      tokenApi: {
        url: 'https://api.etherscan.io/api',
        type: 'etherscan',
        apiKey: 'your-api-key'
      }
    },
    family: 'evm',
    type: 'mainnet',
    bip44: {
      purpose: {
        default: 44,
      },
      slip: 60,
      path: (purpose = 44, slip = 60, account = 0, change = 0, index = 0) => `m/${purpose}'/${slip}'/${account}'/${change}/${index}`,
    },
    connectorLib: '@steadfastdigital/connector-ethereum',
  },
  bsc: {
    id: 'bsc',
    name: 'Binance Smart Chain',
    chainId: 56,
    urls: {
      rpc: {
        url: 'https://bsc-dataseed.binance.org',
        type: 'geth'
      },
      consensus: {
        url: 'https://bsc-dataseed.binance.org',
        type: 'geth'
      },
      explorer: {
        url: 'https://bscscan.com',
        type: 'etherscan'
      },
      txApi: {
        url: 'https://api.bscscan.com/api',
        type: 'etherscan',
        apiKey: 'your-api-key'
      },
      tokenApi: {
        url: 'https://api.bscscan.com/api',
        type: 'etherscan',
        apiKey: 'your-api-key'
      }
    },
    family: 'evm',
    type: 'mainnet',
    bip44: {
      purpose: {
        default: 44,
      },
      slip: 60,
      path: (purpose = 44, slip = 60, account = 0, change = 0, index = 0) => `m/${purpose}'/${slip}'/${account}'/${change}/${index}`,
    },
    connectorLib: '@steadfastdigital/connector-bsc',
  },
} as Record<string, Network>;
