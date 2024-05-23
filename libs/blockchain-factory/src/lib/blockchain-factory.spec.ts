import { BlockchainFactory } from './blockchain-factory';

describe('blockchainFactory', () => {
  it('should work', () => {
    BlockchainFactory.createBlockchain('eth');
  });
});
