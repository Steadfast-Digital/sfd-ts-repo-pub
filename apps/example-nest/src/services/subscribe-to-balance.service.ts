// subscribe-to-balance.service.ts
import { Injectable } from '@nestjs/common';
import { subscribeToBalance } from '@steadfastdigital/blockchain-factory';
import { Observable } from 'rxjs';
import { IAddressBalance } from '@steadfastdigital/abstract-core';

@Injectable()
export class SubscribeToBalanceService {
  execute(network: string, address: string): Observable<IAddressBalance> {
    return subscribeToBalance(network, address);
  }
}
