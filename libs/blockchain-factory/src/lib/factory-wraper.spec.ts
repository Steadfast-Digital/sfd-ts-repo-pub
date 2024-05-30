import { getAddressBalance } from './factory-wraper';
import { setCustomNetworks } from '@steadfastdigital/crypto-assets';

describe('factoryWraper', () => {
  it('should work', async () => {
    // const customconfig = {
    //   eth: {
    //     connectorLib: '@steadfastdigital/connector-ethereum',
    //     name: 'Ethereum',
    //   },
    // }
    // setCustomNetworks(customconfig);
    const balance = await getAddressBalance('eth', '0x69c7D0b5F8C9726c9DB57445e87ab41f509Ca271');
    console.log(balance);
  });
  // it('should through package not installed', async () => {
  //   const balance = await getAddressBalance('bsc', '0xabc');
  //   console.log(balance);
  // });
});