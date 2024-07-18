import { Injectable } from '@nestjs/common';
import { getBalance } from '@steadfastdigital/blockchain-factory';

@Injectable()
export class GetBalanceService {
  async execute(network: string, address: string) {
    try {
      return await getBalance(network, address);
    } catch (error) {
      return { error: `${error.name} - ${error.message}` };
    }
  }
}
