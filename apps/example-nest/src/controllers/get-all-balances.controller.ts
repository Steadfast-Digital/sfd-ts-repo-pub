import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { GetBalancesService } from '../services/get-all-balances.service';

@Controller()
export class GetBalancesController {
  constructor(private readonly GetBalancesService: GetBalancesService) {}

  @Post('getBalances')
  async getAllBalances(@Body() body: { network: string; address: string }) {
    try {
      const balances = await this.GetBalancesService.execute(body.network, body.address);
      return { balances };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
