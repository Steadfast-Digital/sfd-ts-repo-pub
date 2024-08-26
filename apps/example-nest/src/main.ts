/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { BlockchainFactory } from '@steadfastdigital/blockchain-factory';
import EthConnector from '@steadfastdigital/connector-ethereum';
import BscConnector from '@steadfastdigital/connector-bsc';
import { initNetworks } from '@steadfastdigital/crypto-assets';
import { config } from 'dotenv';

// eslint-disable-next-line import/order
import { WsAdapter } from './ws-adapter';

config();
initNetworks();

BlockchainFactory.registerConnector('eth', new EthConnector('eth'));
BlockchainFactory.registerConnector('bsc', new BscConnector('bsc'));

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors({
    origin: 'http://localhost:3000', // Update to match the origin of your React app
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  app.useWebSocketAdapter(new WsAdapter(app)); // Use the custom WebSocket adapter

  const port = process.env.PORT || 3001;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
