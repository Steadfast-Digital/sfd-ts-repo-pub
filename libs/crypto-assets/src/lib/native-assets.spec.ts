import { NATIVE_ASSETS } from './native-assets';

describe('nativeAssets', () => {
  it('should work', () => {
    expect(NATIVE_ASSETS.length).toBeGreaterThan(1);
  });
});
