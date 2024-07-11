import { Test, TestingModule } from '@nestjs/testing';
import { GetAddressAssetsBalancesController } from './get-address-assets-balances.controller';
import { GetAddressAssetsBalancesService } from '../services/get-address-assets-balances.service';

describe('GetAddressAssetsBalancesController', () => {
  let controller: GetAddressAssetsBalancesController;
  let service: GetAddressAssetsBalancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAddressAssetsBalancesController],
      providers: [
        {
          provide: GetAddressAssetsBalancesService,
          useValue: {
            execute: jest.fn().mockResolvedValue([{ asset: 'asset1' }, { asset: 'asset2' }]),
          },
        },
      ],
    }).compile();

    controller = module.get<GetAddressAssetsBalancesController>(GetAddressAssetsBalancesController);
    service = module.get<GetAddressAssetsBalancesService>(GetAddressAssetsBalancesService);
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
