import { Test, TestingModule } from '@nestjs/testing';
import { GetTransactionHistoryService } from './get-transaction-history.service';
import { getTransactionHistory } from '@steadfastdigital/blockchain-factory';

jest.mock('@steadfastdigital/blockchain-factory', () => ({
  getTransactionHistory: jest.fn(),
}));

describe('GetTransactionHistoryService', () => {
  let service: GetTransactionHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetTransactionHistoryService],
    }).compile();

    service = module.get<GetTransactionHistoryService>(GetTransactionHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return transaction history', async () => {
    const mockTransactions = [{ tx: 'tx1' }, { tx: 'tx2' }];
    (getTransactionHistory as jest.Mock).mockResolvedValue(mockTransactions);

    const result = await service.execute('eth', '0xaddress');
    expect(result).toEqual(mockTransactions);
  });
});
