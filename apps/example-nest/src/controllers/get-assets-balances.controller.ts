import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { GetAssetsBalancesService } from '../services/get-assets-balances.service';

@Controller()
export class GetAssetsBalancesController {
  constructor(private readonly getAssetsBalancesService: GetAssetsBalancesService) {}

  @Post('GetAssetsBalances')
  async getAssetsBalances(@Body() body: { network: string; address: string }) {
    try {
      const balances = await this.getAssetsBalancesService.execute(body.network, body.address);
      return { balances };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
