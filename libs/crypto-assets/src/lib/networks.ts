import { Network } from './types';

export const networks: Record<string, Network> = {
  eth: {
    id: 'eth',
    name: 'Ethereum',
    chainId: 1,
    urls: {
      rpc: {
        url: 'wss://eth-arch-01.savvyblocks.io/rpc', // https://ethereum-rpc.publicnode.com
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
        url: 'https://eth-arch-01.savvyblocks.io/api',
        type: 'blockbook',
        apiKey: 'your-api-key'
      },
      tokenApi: {
        url: 'https://eth-arch-01.savvyblocks.io/api',
        type: 'blockbook',
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
};

function mergeDeep(target: any, source: any) {
  if (source && typeof source === 'object') {
    Object.keys(source).forEach(key => {
      if (source[key] && typeof source[key] === 'object') {
        if (!target[key]) target[key] = {}; // Ensure the target key exists
        mergeDeep(target[key], source[key]); // Recurse into deeper objects
      } else {
        target[key] = source[key]; // Directly set the value if it's not an object
      }
    });
  }
}


export function setCustomNetworks(customNetworks: Record<string, Partial<Network>>) {
  Object.keys(customNetworks).forEach(networkId => {
    if (networks[networkId]) {
      mergeDeep(networks[networkId], customNetworks[networkId]);
    } else {
      networks[networkId] = customNetworks[networkId] as Network; // Handle new network definitions
    }
  });
}
