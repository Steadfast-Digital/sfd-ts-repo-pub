### Core Abstraction Class and Functions

| Function/Interface | Purpose | Inputs | Outputs |
|---------|---------|---------|---------|
| `CoreNetworkAbstraction` | Abstract base class for network interactions | `networkId: string` | `An instance of CoreNetworkAbstraction` |
| `getBalance` | Fetch the balance for an address | `address: string` | `Promise<AddressBalance>` |
| `getAllBalances` | Fetch all balances for an address | `address: string` | `Promise<AddressBalances>` |
| `getAssetBalance` | Fetch the balance for a specific asset | `address: string, assetId: string` | `Promise<AssetBalance>` |
| `getAssetsBalances` | Fetch balances for specific assets | `address: string, assetIds: string[]` | `Promise<AssetBalance[]>` |
| `getAllAssetsBalances` | Fetch balances for all assets | `address: string` | `Promise<AssetBalance[]>` |
| `getTransaction` | Fetch a transaction by its hash | `hash: string` | `Promise<Transaction>` |
| `getRecentTransactions` | Fetch recent transactions for an address | `address: string, limit?: number` | `Promise<Transaction[]>` |
| `getTransactionHistory` | Fetch transaction history for an address | `address: string, limit?: number, sblock?: number, eblock?: number` | `Promise<Transaction[]>` |
| `subscribeToBalance` | Subscribe to balance updates for an address | `address: string` | `Observable<AddressBalance>` |
| `subscribeToTransactions` | Subscribe to transaction updates for an address | `address: string` | `Observable<Transaction[]>` |
| `subscribeToUpdates` | Subscribe to balance and transaction updates for an address | `address: string` | `Observable<UpdateFeed>` |

### Function Implementation in Different Packages

| Function                    | `@steadfastdigital/abstract-core` | `@steadfastdigital/abstract-evm` |
|-----------------|-----------------|-----------------|
| `CoreNetworkAbstraction`                | ✅ | ✅ |
| `getBalance`                | ✅ | ✅ |
| `getAllBalances`                | ✅ | ✅ |
| `getAssetBalance`                | ✅ | ✅ |
| `getAssetsBalances`                | ✅ | ✅ |
| `getAllAssetsBalances`                | ✅ | ✅ |
| `getTransaction`                | ✅ | ❌ |
| `getRecentTransactions`                | ✅ | ✅ |
| `getTransactionHistory`                | ✅ | ✅ |
| `subscribeToBalance`                | ✅ | ✅ |
| `subscribeToTransactions`                | ✅ | ❌ |
| `subscribeToUpdates`                | ✅ | ❌ |
