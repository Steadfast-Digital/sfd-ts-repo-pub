import { Injectable } from '@nestjs/common';
import { getAddressAssetsBalances } from '@steadfastdigital/blockchain-factory';

@Injectable()
export class GetAddressAssetsBalancesService {
  async execute(network: string, address: string) {
    try {
      return await getAddressAssetsBalances(network, address, []);
    } catch (error) {
      return { error: `${error.name} - ${error.message}` };
    }
  }
}
