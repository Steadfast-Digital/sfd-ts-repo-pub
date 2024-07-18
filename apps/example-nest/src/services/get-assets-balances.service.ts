import { Injectable } from '@nestjs/common';
import { getAssetsBalances } from '@steadfastdigital/blockchain-factory';

@Injectable()
export class GetAssetsBalancesService {
  async execute(network: string, address: string) {
    try {
      return await getAssetsBalances(network, address, []);
    } catch (error) {
      return { error: `${error.name} - ${error.message}` };
    }
  }
}
