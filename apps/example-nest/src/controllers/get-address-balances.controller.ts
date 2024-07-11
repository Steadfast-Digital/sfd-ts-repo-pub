import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { GetAddressBalancesService } from '../services/get-address-balances.service';

@Controller()
export class GetAddressBalancesController {
  constructor(private readonly getAddressBalancesService: GetAddressBalancesService) {}

  @Post('getAddressBalances')
  async getAllBalances(@Body() body: { network: string; address: string }) {
    try {
      const balances = await this.getAddressBalancesService.execute(body.network, body.address);
      return { balances };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
