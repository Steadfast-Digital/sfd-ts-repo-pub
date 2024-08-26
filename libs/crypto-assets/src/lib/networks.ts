import { INetwork, DeepPartial, INetworkRpc } from './types';

export const NETWORKS: Record<string, INetwork> = {
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
      path: (purpose = 44, slip = 60, account = 0, change = 0, index = 0) =>
        `m/${purpose}'/${slip}'/${account}'/${change}/${index}`,
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
      path: (purpose = 44, slip = 60, account = 0, change = 0, index = 0) =>
        `m/${purpose}'/${slip}'/${account}'/${change}/${index}`,
    },
    connectorLib: '@steadfastdigital/connector-bsc',
  },
};

function mergeDeep(target: any, source: any) {
  if (source && typeof source === 'object') {
    Object.keys(source).forEach((key) => {
      if (source[key] && typeof source[key] === 'object') {
        if (!target[key]) target[key] = {}; // Ensure the target key exists
        mergeDeep(target[key], source[key]); // Recurse into deeper objects
      } else {
        target[key] = source[key]; // Directly set the value if it's not an object
      }
    });
  }
}

export function setCustomNetworks(
  customNetworks: Record<string, DeepPartial<INetwork>>,
) {
  Object.keys(customNetworks).forEach((networkId) => {
    if (NETWORKS[networkId]) {
      mergeDeep(NETWORKS[networkId], customNetworks[networkId]);
    } else {
      NETWORKS[networkId] = customNetworks[networkId] as INetwork; // Handle new network definitions
    }
  });
}

export function readApiKeys() {
  Object.keys(NETWORKS).forEach((networkId) => {
    NETWORKS[networkId].urls.forEach((url) => {
      if (url.apiKeyEnvName) {
        url.apiKey = process.env[url.apiKeyEnvName] || url.apiKey;
      }
    });
  });
}

export function getRpc(
  networkId: string,
  type: string,
  customType?: string,
): INetworkRpc {
  const network = NETWORKS[networkId];
  if (!network) {
    throw new Error(`Network ${networkId} not found`);
  }
  let rpc;
  if (customType) {
    rpc = network.urls.find(
      (url) => url.type === type && url.customType === customType,
    );
  } else {
    rpc = network.urls.find((url) => url.type === type);
  }
  if (!rpc) {
    throw new Error(`RPC ${type} not found for network ${networkId}`);
  }
  return rpc;
}

export function getRpcMaybe(
  networkId: string,
  type: string,
  customType?: string,
): INetworkRpc | undefined {
  try {
    return getRpc(networkId, type, customType);
  } catch (error) {
    return undefined;
  }
}

export function initNetworks() {
  readApiKeys();
}
