import { config } from 'dotenv';
import { readApiKeys } from '@steadfastdigital/crypto-assets';

import { BscConnector } from './connector-bsc';

// Load environment variables from .env file
config();

describe('EvmAbstraction Integration Tests', () => {
  const testAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'; // Replace with a valid address

  let bscEvmAbstraction: BscConnector;

  beforeAll(() => {
    readApiKeys();
    bscEvmAbstraction = new BscConnector('bsc');
  });

  it('should fetch BSC address balance', async () => {
    const result = await bscEvmAbstraction.getBalance(testAddress);
    console.log('BSC Address Balance:', result);
    expect(result).toHaveProperty('address', testAddress);
    expect(result.native).toHaveProperty('amount');
  });

  // it('should fetch BSC transaction history', async () => {
  //   const result = await bscEvmAbstraction.getTransactionHistory(testAddress);
  //   console.log('BSC Transaction History:', result);
  //   expect(result.length).toBeGreaterThan(0);
  //   expect(result[0]).toHaveProperty('hash');
  // });

  // it('should fetch BSC address balances', async () => {
  //   const result = await bscEvmAbstraction.getAllBalances(testAddress);
  //   console.log('BSC Address Balances:', result);
  //   expect(result).toHaveProperty('address', testAddress);
  //   expect(result.native).toHaveProperty('amount');
  //   expect(result.tokens.length).toBeGreaterThanOrEqual(0);
  // });

  // it('should fetch BSC address asset balance', async () => {
  //   const assetId = 'usdc'; // Replace with a valid assetId if needed
  //   const result = await bscEvmAbstraction.getAssetBalance(
  //     testAddress,
  //     assetId,
  //   );
  //   console.log('BSC Address Asset Balance:', result);
  //   expect(result.asset).toHaveProperty('id', assetId);
  //   expect(result).toHaveProperty('amount');
  // });

  // it('should fetch BSC address assets balances', async () => {
  //   const assetIds = ['usdc']; // Replace with valid assetIds if needed
  //   const result = await bscEvmAbstraction.getAssetsBalances(
  //     testAddress,
  //     assetIds,
  //   );
  //   console.log('BSC Address Assets Balances:', result);
  //   expect(result.length).toBeGreaterThan(0);
  //   expect(result[0].asset).toHaveProperty('id', 'usdc');
  //   expect(result[0]).toHaveProperty('amount');
  // });
});
