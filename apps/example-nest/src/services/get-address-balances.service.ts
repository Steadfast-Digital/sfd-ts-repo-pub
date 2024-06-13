import { Injectable } from '@nestjs/common';
import { getAddressBalances } from '@steadfastdigital/blockchain-factory';

@Injectable()
export class GetAddressBalancesService {
  async execute(network: string, address: string) {
    try {
      return await getAddressBalances(network, address);
    } catch (error) {
      return { error: `${error.name} - ${error.message}` };
    }
  }
}
