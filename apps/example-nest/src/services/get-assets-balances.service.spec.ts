import { Test, TestingModule } from '@nestjs/testing';
import { getAssetsBalances } from '@steadfastdigital/blockchain-factory';

import { GetAssetsBalancesService } from './get-assets-balances.service';

jest.mock('@steadfastdigital/blockchain-factory', () => ({
  getAssetsBalances: jest.fn(),
}));

describe('GetAssetsBalancesService', () => {
  let service: GetAssetsBalancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAssetsBalancesService],
    }).compile();

    service = module.get<GetAssetsBalancesService>(GetAssetsBalancesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return address asset balances', async () => {
    const mockBalances = [{ asset: 'asset1' }, { asset: 'asset2' }];
    (getAssetsBalances as jest.Mock).mockResolvedValue(mockBalances);

    const result = await service.execute('eth', '0xaddress');
    expect(result).toEqual(mockBalances);
  });
});
