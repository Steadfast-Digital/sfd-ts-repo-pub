import { Test, TestingModule } from '@nestjs/testing';
import { GetAddressAssetsBalancesService } from './get-address-assets-balances.service';
import { getAddressAssetsBalances } from '@steadfastdigital/blockchain-factory';

jest.mock('@steadfastdigital/blockchain-factory', () => ({
  getAddressAssetsBalances: jest.fn(),
}));

describe('GetAddressAssetsBalancesService', () => {
  let service: GetAddressAssetsBalancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAddressAssetsBalancesService],
    }).compile();

    service = module.get<GetAddressAssetsBalancesService>(GetAddressAssetsBalancesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return address asset balances', async () => {
    const mockBalances = [{ asset: 'asset1' }, { asset: 'asset2' }];
    (getAddressAssetsBalances as jest.Mock).mockResolvedValue(mockBalances);

    const result = await service.execute('eth', '0xaddress');
    expect(result).toEqual(mockBalances);
  });
});
