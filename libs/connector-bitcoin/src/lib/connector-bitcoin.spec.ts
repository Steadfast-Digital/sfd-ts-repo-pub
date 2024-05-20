import { connectorBitcoin } from './connector-bitcoin';

describe('connectorBitcoin', () => {
  it('should work', () => {
    expect(connectorBitcoin()).toEqual('connector-bitcoin');
  });
});
