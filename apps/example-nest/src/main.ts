/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { BlockchainFactory } from '@steadfastdigital/blockchain-factory';
import EthConnector from '@steadfastdigital/connector-ethereum';
import BscConnector from '@steadfastdigital/connector-bsc';

BlockchainFactory.registerConnector('eth', new EthConnector('eth'));
BlockchainFactory.registerConnector('bsc', new BscConnector('bsc'));

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  const port = process.env.PORT || 3001;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
