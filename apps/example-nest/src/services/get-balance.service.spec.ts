import { Test, TestingModule } from '@nestjs/testing';
import { GetBalanceService } from './get-balance.service';
import { getBalance } from '@steadfastdigital/blockchain-factory';

jest.mock('@steadfastdigital/blockchain-factory', () => ({
  getBalance: jest.fn(),
}));

describe('GetBalanceService', () => {
  let service: GetBalanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetBalanceService],
    }).compile();

    service = module.get<GetBalanceService>(GetBalanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return balance', async () => {
    const mockBalance = { balance: 1000 };
    (getBalance as jest.Mock).mockResolvedValue(mockBalance);
    
    const result = await service.execute('eth', '0xaddress');
    expect(result).toEqual(mockBalance);
  });
});
