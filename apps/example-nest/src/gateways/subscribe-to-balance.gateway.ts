import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Observable } from 'rxjs';
import { IAddressBalance } from '@steadfastdigital/abstract-core';
import { Logger } from '@steadfastdigital/utils';

import { SubscribeToBalanceService } from '../services/subscribe-to-balance.service';

@WebSocketGateway()
export class SubscribeToBalanceGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  constructor(
    private readonly _subscribeToBalanceService: SubscribeToBalanceService,
  ) {}

  handleConnection(client: Socket) {
    Logger.debug(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    Logger.debug(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('subscribeToBalance')
  handleSubscribeToBalance(
    client: Socket,
    data: { network: string; address: string },
  ): void {
    if (!client) {
      Logger.error(`Client object is undefined`);
      return;
    }

    try {
      Logger.debug(
        `Subscribing to balance updates for ${data.address} on ${data.network} for client ${client.id}`,
      );
      const balanceObservable: Observable<IAddressBalance> =
        this._subscribeToBalanceService.execute(data.network, data.address);

      const subscription = balanceObservable.subscribe({
        next: (balance) => {
          Logger.debug(`Emitting balanceUpdate to client ${client.id}`);
          if (client && client.emit) {
            client.emit('balanceUpdate', balance);
          } else {
            Logger.error(
              `Client object is undefined when trying to emit balanceUpdate`,
            );
          }
        },
        error: (err) => {
          Logger.error(
            `Error while subscribing to balance updates: ${err.message}`,
          );
          if (client && client.emit) {
            client.emit('error', err.message);
          } else {
            Logger.error(
              `Client object is undefined when trying to emit error`,
            );
          }
        },
      });

      client.on('disconnect', () => {
        Logger.debug(`Client disconnected: ${client.id}`);
        subscription.unsubscribe();
      });
    } catch (error) {
      Logger.error(`Error in handleSubscribeToBalance: ${error.message}`);
      if (client && client.emit) {
        client.emit('error', error.message);
      } else {
        Logger.error(`Client object is undefined when trying to emit error`);
      }
    }
  }
}
