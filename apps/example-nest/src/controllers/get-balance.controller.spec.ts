import { Test, TestingModule } from '@nestjs/testing';
import { GetBalanceController } from './get-balance.controller';
import { GetBalanceService } from '../services/get-balance.service';

describe('GetBalanceController', () => {
  let controller: GetBalanceController;
  let service: GetBalanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetBalanceController],
      providers: [
        {
          provide: GetBalanceService,
          useValue: {
            execute: jest.fn().mockResolvedValue({ balance: 1000 }),
          },
        },
      ],
    }).compile();

    controller = module.get<GetBalanceController>(GetBalanceController);
    service = module.get<GetBalanceService>(GetBalanceService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return balance', async () => {
    const body = { network: 'eth', address: '0xaddress' };
    const result = await controller.getBalance(body);
    expect(result).toEqual({ balance: 1000 });
    expect(service.execute).toHaveBeenCalledWith('eth', '0xaddress');
  });
});
