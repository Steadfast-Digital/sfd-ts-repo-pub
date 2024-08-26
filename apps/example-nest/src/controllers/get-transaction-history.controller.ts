import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { GetTransactionHistoryService } from '../services/get-transaction-history.service';

@Controller()
export class GetTransactionHistoryController {
  constructor(
    private readonly _getTransactionHistoryService: GetTransactionHistoryService,
  ) {}

  @Post('getTransactionHistory')
  async getTransactionHistory(
    @Body() body: { network: string; address: string },
  ) {
    try {
      const transactions = await this._getTransactionHistoryService.execute(
        body.network,
        body.address,
      );
      return { transactions };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
