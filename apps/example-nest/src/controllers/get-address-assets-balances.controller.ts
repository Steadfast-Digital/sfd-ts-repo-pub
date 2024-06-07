import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { GetAddressAssetsBalancesService } from '../services/get-address-assets-balances.service';

@Controller()
export class GetAddressAssetsBalancesController {
  constructor(private readonly getAddressAssetsBalancesService: GetAddressAssetsBalancesService) {}

  @Post('getAddressAssetsBalances')
  async getAddressAssetsBalances(@Body() body: { network: string; address: string }) {
    try {
      const balances = await this.getAddressAssetsBalancesService.execute(body.network, body.address);
      return { balances };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
