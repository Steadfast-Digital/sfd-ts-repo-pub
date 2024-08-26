import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { GetBalanceService } from '../services/get-balance.service';

@Controller()
export class GetBalanceController {
  constructor(private readonly _getBalanceService: GetBalanceService) {}

  @Post('getBalance')
  async getBalance(@Body() body: { network: string; address: string }) {
    try {
      const balance = await this._getBalanceService.execute(
        body.network,
        body.address,
      );
      return balance; // Return the balance { balance: 0.0 } as an example
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
