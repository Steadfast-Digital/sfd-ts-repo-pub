import { Injectable } from '@nestjs/common';
import { getAddressBalance } from '@steadfastdigital/blockchain-factory';

@Injectable()
export class GetAddressBalanceService {
  async execute(network: string, address: string) {
    try {
      return await getBalance(network, address);
    } catch (error) {
      return { error: `${error.name} - ${error.message}` };
    }
  }
}
