import { Injectable } from '@nestjs/common';
import { getAddressBalance } from '@steadfastdigital/blockchain-factory';

@Injectable()
export class GetAddressBalanceService {
  async execute(network: string, address: string) {
    return await getAddressBalance(network, address);
  }
}
