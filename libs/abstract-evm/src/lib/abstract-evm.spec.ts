import { EvmAbstraction } from './abstract-evm';

describe('EvmAbstraction Integration Tests', () => {
  const testAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'; // Replace with a valid address

  let ethEvmAbstraction: EvmAbstraction;
  let bscEvmAbstraction: EvmAbstraction;

  beforeAll(() => {
    ethEvmAbstraction = new EvmAbstraction('eth');
    bscEvmAbstraction = new EvmAbstraction('bsc');
  });

  it('should fetch ETH address balance', async () => {
    const result = await ethEvmAbstraction.getAddressBalance(testAddress);
    console.log('ETH Address Balance:', result);
    expect(result).toHaveProperty('address', testAddress);
    expect(result.native).toHaveProperty('amount');
  });

  it('should fetch BSC address balance', async () => {
    const result = await bscEvmAbstraction.getAddressBalance(testAddress);
    console.log('BSC Address Balance:', result);
    expect(result).toHaveProperty('address', testAddress);
    expect(result.native).toHaveProperty('amount');
  });

  it('should fetch ETH transaction history', async () => {
    const result = await ethEvmAbstraction.getTransactionHistory(testAddress);
    console.log('ETH Transaction History:', result);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('hash');
  });

  it('should fetch BSC transaction history', async () => {
    const result = await bscEvmAbstraction.getTransactionHistory(testAddress);
    console.log('BSC Transaction History:', result);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('hash');
  });

  it('should fetch ETH address balances', async () => {
    const result = await ethEvmAbstraction.getAddressBalances(testAddress);
    console.log('ETH Address Balances:', result);
    expect(result).toHaveProperty('address', testAddress);
    expect(result.native).toHaveProperty('amount');
    expect(result.tokens.length).toBeGreaterThanOrEqual(0);
  });

  it('should fetch BSC address balances', async () => {
    const result = await bscEvmAbstraction.getAddressBalances(testAddress);
    console.log('BSC Address Balances:', result);
    expect(result).toHaveProperty('address', testAddress);
    expect(result.native).toHaveProperty('amount');
    expect(result.tokens.length).toBeGreaterThanOrEqual(0);
  });

  it('should fetch ETH address asset balance', async () => {
    const assetId = 'eth'; // Replace with a valid assetId if needed
    const result = await ethEvmAbstraction.getAddressAssetBalance(testAddress, assetId);
    console.log('ETH Address Asset Balance:', result);
    expect(result.asset).toHaveProperty('id', assetId);
    expect(result).toHaveProperty('amount');
  });

  it('should fetch BSC address asset balance', async () => {
    const assetId = 'bsc'; // Replace with a valid assetId if needed
    const result = await bscEvmAbstraction.getAddressAssetBalance(testAddress, assetId);
    console.log('BSC Address Asset Balance:', result);
    expect(result.asset).toHaveProperty('id', assetId);
    expect(result).toHaveProperty('amount');
  });

  it('should fetch ETH address assets balances', async () => {
    const assetIds = ['eth']; // Replace with valid assetIds if needed
    const result = await ethEvmAbstraction.getAddressAssetsBalances(testAddress, assetIds);
    console.log('ETH Address Assets Balances:', result);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].asset).toHaveProperty('id', 'eth');
    expect(result[0]).toHaveProperty('amount');
  });

  it('should fetch BSC address assets balances', async () => {
    const assetIds = ['bsc']; // Replace with valid assetIds if needed
    const result = await bscEvmAbstraction.getAddressAssetsBalances(testAddress, assetIds);
    console.log('BSC Address Assets Balances:', result);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].asset).toHaveProperty('id', 'bsc');
    expect(result[0]).toHaveProperty('amount');
  });
});
