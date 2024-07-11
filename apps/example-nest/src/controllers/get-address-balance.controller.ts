import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { GetAddressBalanceService } from '../services/get-address-balance.service';

@Controller()
export class GetAddressBalanceController {
  constructor(private readonly getAddressBalanceService: GetAddressBalanceService) {}

  @Post('getAddressBalance')
  async getBalance(@Body() body: { network: string; address: string }) {
    try {
      const balance = await this.getAddressBalanceService.execute(body.network, body.address);
      return balance; // Return the balance { balance: 0.0 } as an example
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
