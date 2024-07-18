import { Test, TestingModule } from '@nestjs/testing';
import { GetAssetsBalancesController } from './get-assets-balances.controller';
import { GetAssetsBalancesService } from '../services/get-assets-balances.service';

describe('GetAssetsBalancesController', () => {
  let controller: GetAssetsBalancesController;
  let service: GetAssetsBalancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAssetsBalancesController],
      providers: [
        {
          provide: GetAssetsBalancesService,
          useValue: {
            execute: jest.fn().mockResolvedValue([{ asset: 'asset1' }, { asset: 'asset2' }]),
          },
        },
      ],
    }).compile();

    controller = module.get<GetAssetsBalancesController>(GetAssetsBalancesController);
    service = module.get<GetAssetsBalancesService>(GetAssetsBalancesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return address asset balances', async () => {
    const body = { network: 'eth', address: '0xaddress' };
    const result = await controller.getAssetsBalances(body);
    expect(result).toEqual({ balances: [{ asset: 'asset1' }, { asset: 'asset2' }] });
    expect(service.execute).toHaveBeenCalledWith('eth', '0xaddress');
  });
});
