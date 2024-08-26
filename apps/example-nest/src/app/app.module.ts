import { Module } from '@nestjs/common';

import { GetBalanceController } from '../controllers/get-balance.controller';
import { GetTransactionHistoryController } from '../controllers/get-transaction-history.controller';
import { GetAssetsBalancesController } from '../controllers/get-assets-balances.controller';
import { GetBalancesController } from '../controllers/get-all-balances.controller';
import { GetBalanceService } from '../services/get-balance.service';
import { GetTransactionHistoryService } from '../services/get-transaction-history.service';
import { GetAssetsBalancesService } from '../services/get-assets-balances.service';
import { GetBalancesService } from '../services/get-all-balances.service';
import { SubscribeToBalanceService } from '../services/subscribe-to-balance.service';
import { SubscribeToBalanceGateway } from '../gateways/subscribe-to-balance.gateway';

import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    GetBalanceController,
    GetTransactionHistoryController,
    GetAssetsBalancesController,
    GetBalancesController,
  ],
  providers: [
    AppService,
    GetBalanceService,
    GetTransactionHistoryService,
    GetAssetsBalancesService,
    GetBalancesService,
    SubscribeToBalanceService,
    SubscribeToBalanceGateway,
  ],
})
export class AppModule {}
