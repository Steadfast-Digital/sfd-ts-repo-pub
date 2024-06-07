import { Test, TestingModule } from '@nestjs/testing';
import { GetAddressBalancesService } from './get-address-balances.service';
import { getAddressBalances } from '@steadfastdigital/blockchain-factory';

jest.mock('@steadfastdigital/blockchain-factory', () => ({
  getAddressBalances: jest.fn(),
}));

describe('GetAddressBalancesService', () => {
  let service: GetAddressBalancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAddressBalancesService],
    }).compile();

    service = module.get<GetAddressBalancesService>(GetAddressBalancesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return address balances', async () => {
    const mockBalances = { balance: 1000 };
    (getAddressBalances as jest.Mock).mockResolvedValue(mockBalances);

    const result = await service.execute('eth', '0xaddress');
    expect(result).toEqual(mockBalances);
  });
});
