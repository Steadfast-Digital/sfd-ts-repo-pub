import { Test, TestingModule } from '@nestjs/testing';
import { GetBalancesController } from './get-all-balances.controller';
import { GetBalancesService } from '../services/get-all-balances.service';

describe('GetBalancesController', () => {
  let controller: GetBalancesController;
  let service: GetBalancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetBalancesController],
      providers: [
        {
          provide: GetBalancesService,
          useValue: {
            execute: jest.fn().mockResolvedValue({ balance: 1000 }),
          },
        },
      ],
    }).compile();

    controller = module.get<GetBalancesController>(GetBalancesController);
    service = module.get<GetBalancesService>(GetBalancesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return address balances', async () => {
    const body = { network: 'eth', address: '0xaddress' };
    const result = await controller.getAllBalances(body);
    expect(result).toEqual({ balances: { balance: 1000 } });
    expect(service.execute).toHaveBeenCalledWith('eth', '0xaddress');
  });
});
