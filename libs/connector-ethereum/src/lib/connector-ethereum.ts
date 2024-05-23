import { EvmAbstraction } from '@steadfastdigital/abstract-evm';

export class EthereumConnector extends EvmAbstraction {
  constructor(networkId: string) {
    super(networkId);
  }
  // You can override methods here if Ethereum specific logic is needed
}