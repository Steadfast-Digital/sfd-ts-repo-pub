import { connectorEthereum } from './connector-ethereum';

describe('connectorEthereum', () => {
  it('should work', () => {
    expect(connectorEthereum()).toEqual('connector-ethereum');
  });
});
