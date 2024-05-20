import { EvmAbstraction } from '@steadfastdigital/abstract-evm';

export class EthereumConnector extends EvmAbstraction {
  constructor() {
    super('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
  }

  // You can override methods here if Ethereum specific logic is needed
}