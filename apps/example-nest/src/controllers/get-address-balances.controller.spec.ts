import { Test, TestingModule } from '@nestjs/testing';
import { GetAddressBalancesController } from './get-address-balances.controller';
import { GetAddressBalancesService } from '../services/get-address-balances.service';

describe('GetAddressBalancesController', () => {
  let controller: GetAddressBalancesController;
  let service: GetAddressBalancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAddressBalancesController],
      providers: [
        {
          provide: GetAddressBalancesService,
          useValue: {
            execute: jest.fn().mockResolvedValue({ balance: 1000 }),
          },
        },
      ],
    }).compile();

    controller = module.get<GetAddressBalancesController>(GetAddressBalancesController);
    service = module.get<GetAddressBalancesService>(GetAddressBalancesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return address balances', async () => {
    const body = { network: 'eth', address: '0xaddress' };
    const result = await controller.getAddressBalances(body);
    expect(result).toEqual({ balances: { balance: 1000 } });
    expect(service.execute).toHaveBeenCalledWith('eth', '0xaddress');
  });
});
