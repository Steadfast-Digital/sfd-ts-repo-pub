import { blockchainFactory } from './blockchain-factory';

describe('blockchainFactory', () => {
  it('should work', () => {
    expect(blockchainFactory()).toEqual('blockchain-factory');
  });
});
