export interface Network {
  id: string;
  name: string;
  rpcUrl: string;
}

export const networks = {
  ethereum: {
    id: '1',
    name: 'Mainnet',
    rpcUrl: 'https://mainnet.infura.io/v3/your-infura-key'
  },
  ropsten: {
    id: '3',
    name: 'Ropsten',
    rpcUrl: 'https://ropsten.infura.io/v3/your-infura-key'
  }
} as Record<string, Network>;
