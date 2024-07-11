import { Test, TestingModule } from '@nestjs/testing';
import { GetAddressBalanceController } from './get-address-balance.controller';
import { GetAddressBalanceService } from '../services/get-address-balance.service';

describe('GetAddressBalanceController', () => {
  let controller: GetAddressBalanceController;
  let service: GetAddressBalanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAddressBalanceController],
      providers: [
        {
          provide: GetAddressBalanceService,
          useValue: {
            execute: jest.fn().mockResolvedValue({ balance: 1000 }),
          },
        },
      ],
    }).compile();

    controller = module.get<GetAddressBalanceController>(GetAddressBalanceController);
    service = module.get<GetAddressBalanceService>(GetAddressBalanceService);
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
