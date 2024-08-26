import { Test, TestingModule } from '@nestjs/testing';
import { getAllBalances } from '@steadfastdigital/blockchain-factory';

import { GetBalancesService } from './get-all-balances.service';

jest.mock('@steadfastdigital/blockchain-factory', () => ({
  getAllBalances: jest.fn(),
}));

describe('GetBalancesService', () => {
  let service: GetBalancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetBalancesService],
    }).compile();

    service = module.get<GetBalancesService>(GetBalancesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return address balances', async () => {
    const mockBalances = { balance: 1000 };
    (getAllBalances as jest.Mock).mockResolvedValue(mockBalances);

    const result = await service.execute('eth', '0xaddress');
    expect(result).toEqual(mockBalances);
  });
});
