import { Injectable } from '@nestjs/common';
import { getAddressBalances } from '@steadfastdigital/blockchain-factory';

@Injectable()
export class GetAddressBalancesService {
  async execute(network: string, address: string) {
    return await getAddressBalances(network, address);
  }
}
