import { Network, DeepPartial } from './types';

export const networks: Record<string, Network> = {
  eth: {
    id: 'eth',
    name: 'Ethereum',
    chainId: 1,
    urls: [
      {
        url: 'wss://eth-arch-01.savvyblocks.io/rpc',
        type: 'wss-node',
        customType: 'blockbook',
        apiKey: '',
        apiKeyEnvName: 'SFD_ETH_RPC_API_KEY',
      },
      {
        url: 'https://eth-arch-01.savvyblocks.io/api',
        type: 'api',
        customType: 'blockbook',
        apiKey: '',
        apiKeyEnvName: 'SFD_ETH_API_KEY',
      },
      {
        url: 'https://etherscan.io',
        type: 'explorer',
      },
    ],
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
    urls: [
      {
        url: 'https://bsc-dataseed.binance.org',
        type: 'node',
      },
      {
        url: 'https://api.bscscan.com/api',
        type: 'api',
        customType: 'etherscan',
        apiKey: 'your-api-key',
        apiKeyEnvName: 'SFD_BSC_API_KEY',
      },
      {
        url: 'https://bscscan.com',
        type: 'explorer',
      },
    ],
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


export function setCustomNetworks(customNetworks: Record<string, DeepPartial<Network>>) {
  Object.keys(customNetworks).forEach(networkId => {
    if (networks[networkId]) {
      mergeDeep(networks[networkId], customNetworks[networkId]);
    } else {
      networks[networkId] = customNetworks[networkId] as Network; // Handle new network definitions
    }
  });
}

export function readApiKeys() {
  Object.keys(networks).forEach(networkId => {
    networks[networkId].urls.forEach(url => {
      if (url.apiKeyEnvName) {
        url.apiKey = process.env[url.apiKeyEnvName] || url.apiKey;
      }
    });
  });
}

export function getRpc(networkId: string, type: string, customType?: string) {
  const network = networks[networkId];
  if (!network) {
    throw new Error(`Network ${networkId} not found`);
  }
  if (customType) {
    return network.urls.find(url => url.type === type && url.customType === customType);
  }
  return network.urls.find(url => url.type === type);
}

export function initNetworks() {
  readApiKeys();
}