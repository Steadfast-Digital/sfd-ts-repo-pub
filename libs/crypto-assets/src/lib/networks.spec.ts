import { NETWORKS } from './networks';

describe('NETWORKS', () => {
  it('should work', () => {
    expect(NETWORKS['eth']).toBeTruthy();
  });
});
