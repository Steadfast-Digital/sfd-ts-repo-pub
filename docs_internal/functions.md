| Function | Description | Parameters | Returns |
| --- | --- | --- | --- |
| CoreNetworkAbstraction.getBalance |  | address: string | Promise<AddressBalance> |
| CoreNetworkAbstraction.getAllBalances |  | address: string | Promise<AddressBalances> |
| CoreNetworkAbstraction.getAssetBalance |  | address: string, assetId: string | Promise<AssetBalance> |
| CoreNetworkAbstraction.getAssetsBalances |  | address: string, assetIds: string[] | Promise<AssetBalance[]> |
| CoreNetworkAbstraction.getAllAssetsBalances |  | address: string | Promise<AssetBalance[]> |
| CoreNetworkAbstraction.getTransaction |  | hash: string | Promise<Transaction> |
| CoreNetworkAbstraction.getRecentTransactions |  | address: string, limit: number | undefined | Promise<Transaction[]> |
| CoreNetworkAbstraction.getTransactionHistory |  | address: string, limit: number | undefined, sblock: number | undefined, eblock: number | undefined | Promise<Transaction[]> |
| CoreNetworkAbstraction.subscribeToBalance |  | address: string | Observable<AddressBalance> |
| CoreNetworkAbstraction.subscribeToTransactions |  | address: string | Observable<Transaction[]> |
| CoreNetworkAbstraction.subscribeToUpdates |  | address: string | Observable<UpdateFeed> |
