import { Injectable } from '@nestjs/common';
import { getAddressAssetsBalances } from '@steadfastdigital/blockchain-factory';

@Injectable()
export class GetAddressAssetsBalancesService {
  async execute(network: string, address: string) {
    return await getAddressAssetsBalances(network, address, []);
  }
}
