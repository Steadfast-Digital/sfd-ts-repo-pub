import { getAddressBalance, getAddressBalances, getTransactionHistory, getAddressAssetsBalances } from './factory-wraper';
import { setCustomNetworks } from '@steadfastdigital/crypto-assets';

describe('factoryWraper', () => {
  it('should work', async () => {
    const customconfig = {
      eth: {
        connectorLib: '@steadfastdigital/connector-ethereum',
        name: 'Ethereum',
      },
    }
    setCustomNetworks(customconfig);
    const balance = await getBalance('eth', '0x69c7D0b5F8C9726c9DB57445e87ab41f509Ca271');
    console.log(balance);
  });
  // it('should through package not installed', async () => {
  //   const balance = await getBalance('bsc', '0xabc');
  //   console.log(balance);
  // });

  it('should get transaction history', async () => {
    const transactions = await getTransactionHistory('eth', '0x69c7D0b5F8C9726c9DB57445e87ab41f509Ca271');
    console.log(transactions[0]);
  }, 10000); // Set timeout to 10 seconds for this test

  it('should get address asset balances', async () => {
    const balance = await getAssetsBalances('eth', '0x938B8B088E419278DaBfAAEDADA7a83ab7D75A7E', []);
    console.log(balance[0]);
  }, 10000); // Set timeout to 10 seconds for this test

  it('should get address balances', async () => {
    const balance = await getAllBalances('eth', '0x938B8B088E419278DaBfAAEDADA7a83ab7D75A7E');
    console.log(balance);
  }, 10000); // Set timeout to 10 seconds for this test
});