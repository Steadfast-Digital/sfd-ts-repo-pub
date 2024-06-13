import { Injectable } from '@nestjs/common';
import { getTransactionHistory } from '@steadfastdigital/blockchain-factory';

@Injectable()
export class GetTransactionHistoryService {
  async execute(network: string, address: string) {
    try {
      return await getTransactionHistory(network, address);
    } catch (error) {
      return { error: `${error.name} - ${error.message}` };
    }
  }
}
