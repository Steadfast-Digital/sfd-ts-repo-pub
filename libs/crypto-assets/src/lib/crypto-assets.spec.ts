import { TOKEN_ASSETS } from './crypto-assets';

describe('cryptoAssets', () => {
  it('should work', () => {
    expect(TOKEN_ASSETS.length).toBeGreaterThan(5);
  });
});
