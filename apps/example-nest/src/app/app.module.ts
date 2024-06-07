import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GetAddressBalanceController } from '../controllers/get-address-balance.controller';
import { GetTransactionHistoryController } from '../controllers/get-transaction-history.controller';
import { GetAddressAssetsBalancesController } from '../controllers/get-address-assets-balances.controller';
import { GetAddressBalancesController } from '../controllers/get-address-balances.controller';

import { GetAddressBalanceService } from '../services/get-address-balance.service';
import { GetTransactionHistoryService } from '../services/get-transaction-history.service';
import { GetAddressAssetsBalancesService } from '../services/get-address-assets-balances.service';
import { GetAddressBalancesService } from '../services/get-address-balances.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    GetAddressBalanceController,
    GetTransactionHistoryController,
    GetAddressAssetsBalancesController,
    GetAddressBalancesController,
  ],
  providers: [
    AppService,
    GetAddressBalanceService,
    GetTransactionHistoryService,
    GetAddressAssetsBalancesService,
    GetAddressBalancesService,
  ],
})
export class AppModule {}
