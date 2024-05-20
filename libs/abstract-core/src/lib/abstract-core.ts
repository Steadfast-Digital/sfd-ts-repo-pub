export interface AddressBalance {
  address: string;
  nativeBalance: string;
  networkId: string;
  networkName: string;
  balances: [
    {
      asset: string;
      amount: string;
    }
  ];
}

export interface Transaction {
  hash: string;
  // Define transaction structure
}

export abstract class CoreNetworkAbstraction {
  abstract getAddressBalance(address: string, networkId: string): Promise<AddressBalance>;
  abstract getTransactionHistory(address: string, networkId: string): Promise<Transaction[]>;
}
