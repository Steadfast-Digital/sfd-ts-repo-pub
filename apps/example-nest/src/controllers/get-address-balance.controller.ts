import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { GetAddressBalanceService } from '../services/get-address-balance.service';

@Controller()
export class GetAddressBalanceController {
  constructor(private readonly getAddressBalanceService: GetAddressBalanceService) {}

  @Post('getAddressBalance')
  async getAddressBalance(@Body() body: { network: string; address: string }) {
    try {
      const balance = await this.getAddressBalanceService.execute(body.network, body.address);
      return { balance };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
