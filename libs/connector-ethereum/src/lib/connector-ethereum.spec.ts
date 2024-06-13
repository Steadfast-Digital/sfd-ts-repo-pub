import { EthereumConnector } from './connector-ethereum';


describe('EvmAbstraction Integration Tests', () => {
  const testAddress = '0x938B8B088E419278DaBfAAEDADA7a83ab7D75A7E';

  let ethEvmAbstraction: EthereumConnector;

  beforeAll(() => {
    ethEvmAbstraction = new EthereumConnector('eth');
  });

  it('should fetch ETH address balance', async () => {
    const result = await ethEvmAbstraction.getAddressBalance(testAddress);
    console.log('ETH Address Balance:', result);
    expect(result).toHaveProperty('address', testAddress);
    expect(result.native).toHaveProperty('amount');
  });

  it('should fetch ETH transaction history', async () => {
    const result = await ethEvmAbstraction.getTransactionHistory(testAddress);
    console.log('ETH Transaction History:', result);
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

  it('should fetch ETH address asset balance', async () => {
    const assetId = 'usdc'; // Replace with a valid assetId if needed
    const result = await ethEvmAbstraction.getAddressAssetBalance(testAddress, assetId);
    console.log('ETH Address Asset Balance:', result);
    expect(result).toHaveProperty('amount');
  });

  it('should fetch ETH address assets balances', async () => {
    const assetIds = ['usdc']; // Replace with valid assetIds if needed
    const result = await ethEvmAbstraction.getAddressAssetsBalances(testAddress, assetIds);
    console.log('ETH Address Assets Balances:', result);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('amount');
  });

});
