import { Test, TestingModule } from '@nestjs/testing';
import { GetAddressBalanceService } from './get-address-balance.service';
import { getAddressBalance } from '@steadfastdigital/blockchain-factory';

jest.mock('@steadfastdigital/blockchain-factory', () => ({
  getAddressBalance: jest.fn(),
}));

describe('GetAddressBalanceService', () => {
  let service: GetAddressBalanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAddressBalanceService],
    }).compile();

    service = module.get<GetAddressBalanceService>(GetAddressBalanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return balance', async () => {
    const mockBalance = { balance: 1000 };
    (getAddressBalance as jest.Mock).mockResolvedValue(mockBalance);
    
    const result = await service.execute('eth', '0xaddress');
    expect(result).toEqual(mockBalance);
  });
});
