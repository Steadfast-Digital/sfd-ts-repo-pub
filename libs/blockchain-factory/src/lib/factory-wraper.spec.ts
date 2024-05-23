import { getAddressBalance } from './factory-wraper';

describe('factoryWraper', () => {
  it('should work', async () => {
    const balance = await getAddressBalance('eth', '0xabc');
    console.log(balance);
  });
  it('should through package not installed', async () => {
    const balance = await getAddressBalance('bsc', '0xabc');
    console.log(balance);
  });
});