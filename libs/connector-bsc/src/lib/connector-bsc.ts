import { EvmAbstraction } from '@steadfastdigital/abstract-evm';

export class BscConnector extends EvmAbstraction {
  constructor(networkId: string) {
    super(networkId);
  }
  // You can override methods here if Bsc specific logic is needed
}
