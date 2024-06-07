import { Test, TestingModule } from '@nestjs/testing';
import { GetTransactionHistoryController } from './get-transaction-history.controller';
import { GetTransactionHistoryService } from '../services/get-transaction-history.service';

describe('GetTransactionHistoryController', () => {
  let controller: GetTransactionHistoryController;
  let service: GetTransactionHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetTransactionHistoryController],
      providers: [
        {
          provide: GetTransactionHistoryService,
          useValue: {
            execute: jest.fn().mockResolvedValue([{ tx: 'tx1' }, { tx: 'tx2' }]),
          },
        },
      ],
    }).compile();

    controller = module.get<GetTransactionHistoryController>(GetTransactionHistoryController);
    service = module.get<GetTransactionHistoryService>(GetTransactionHistoryService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return transaction history', async () => {
    const body = { network: 'eth', address: '0xaddress' };
    const result = await controller.getTransactionHistory(body);
    expect(result).toEqual({ transactions: [{ tx: 'tx1' }, { tx: 'tx2' }] });
    expect(service.execute).toHaveBeenCalledWith('eth', '0xaddress');
  });
});
