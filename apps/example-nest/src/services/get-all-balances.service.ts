import { Injectable } from '@nestjs/common';
import { getAllBalances } from '@steadfastdigital/blockchain-factory';

@Injectable()
export class GetBalancesService {
  async execute(network: string, address: string) {
    try {
      return await getAllBalances(network, address);
    } catch (error) {
      return { error: `${error.name} - ${error.message}` };
    }
  }
}
