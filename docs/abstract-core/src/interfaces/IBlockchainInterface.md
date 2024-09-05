[**@sfd-ts-repo-pub/source v0.0.1**](../../../README.md) • **Docs**

***

[@sfd-ts-repo-pub/source v0.0.1](../../../modules.md) / [abstract-core/src](../README.md) / IBlockchainInterface

# Interface: IBlockchainInterface

Interface for blockchain interactions.
 IBlockchainInterface

## Methods

### getAllAssetsBalances()

> **getAllAssetsBalances**(`address`): `Promise`\<[`IAssetBalance`](IAssetBalance.md)[]\>

Fetch balances for all assets.

#### Parameters

• **address**: `string`

The address to fetch all asset balances for.

#### Returns

`Promise`\<[`IAssetBalance`](IAssetBalance.md)[]\>

The balances of all assets.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:134](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L134)

***

### getAllBalances()

> **getAllBalances**(`address`): `Promise`\<[`IAddressBalances`](IAddressBalances.md)\>

Fetch all balances for an address.

#### Parameters

• **address**: `string`

The address to fetch all balances for.

#### Returns

`Promise`\<[`IAddressBalances`](IAddressBalances.md)\>

The balances of the address.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:108](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L108)

***

### getAssetBalance()

> **getAssetBalance**(`address`, `assetId`): `Promise`\<[`IAssetBalance`](IAssetBalance.md)\>

Fetch the balance for a specific asset.

#### Parameters

• **address**: `string`

The address to fetch the asset balance for.

• **assetId**: `string`

The ID of the asset.

#### Returns

`Promise`\<[`IAssetBalance`](IAssetBalance.md)\>

The balance of the specified asset.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:116](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L116)

***

### getAssetsBalances()

> **getAssetsBalances**(`address`, `assetIds`): `Promise`\<[`IAssetBalance`](IAssetBalance.md)[]\>

Fetch balances for specific assets.

#### Parameters

• **address**: `string`

The address to fetch the asset balances for.

• **assetIds**: `string`[]

The IDs of the assets.

#### Returns

`Promise`\<[`IAssetBalance`](IAssetBalance.md)[]\>

The balances of the specified assets.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:124](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L124)

***

### getBalance()

> **getBalance**(`address`): `Promise`\<[`IAddressBalance`](IAddressBalance.md)\>

Fetch the balance for an address.

#### Parameters

• **address**: `string`

The address to fetch the balance for.

#### Returns

`Promise`\<[`IAddressBalance`](IAddressBalance.md)\>

The balance of the address.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:101](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L101)

***

### getRecentTransactions()

> **getRecentTransactions**(`address`, `limit`?): `Promise`\<[`ITransaction`](ITransaction.md)[]\>

Fetch recent transactions for an address.

#### Parameters

• **address**: `string`

The address to fetch recent transactions for.

• **limit?**: `number`

The maximum number of transactions to fetch (optional).

#### Returns

`Promise`\<[`ITransaction`](ITransaction.md)[]\>

The list of recent transactions.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:149](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L149)

***

### getTransaction()

> **getTransaction**(`hash`): `Promise`\<[`ITransaction`](ITransaction.md)\>

Fetch a transaction by its hash.

#### Parameters

• **hash**: `string`

The hash of the transaction.

#### Returns

`Promise`\<[`ITransaction`](ITransaction.md)\>

The transaction details.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:141](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L141)

***

### getTransactionHistory()

> **getTransactionHistory**(`address`, `limit`?, `sblock`?, `eblock`?): `Promise`\<[`ITransaction`](ITransaction.md)[]\>

Fetch transaction history for an address.

#### Parameters

• **address**: `string`

The address to fetch the transaction history for.

• **limit?**: `number`

The maximum number of transactions to fetch (optional).

• **sblock?**: `number`

The start block number (optional).

• **eblock?**: `number`

The end block number (optional).

#### Returns

`Promise`\<[`ITransaction`](ITransaction.md)[]\>

The list of transactions.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:162](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L162)

***

### subscribeToBalance()

> **subscribeToBalance**(`address`): `Observable`\<[`IAddressBalance`](IAddressBalance.md)\>

Subscribe to balance updates for an address.

#### Parameters

• **address**: `string`

The address to subscribe to balance updates for.

#### Returns

`Observable`\<[`IAddressBalance`](IAddressBalance.md)\>

An observable for balance updates.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:174](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L174)

***

### subscribeToTransactions()

> **subscribeToTransactions**(`address`): `Observable`\<[`ITransaction`](ITransaction.md)[]\>

Subscribe to transaction updates for an address.

#### Parameters

• **address**: `string`

The address to subscribe to transaction updates for.

#### Returns

`Observable`\<[`ITransaction`](ITransaction.md)[]\>

An observable for transaction updates.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:181](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L181)

***

### subscribeToUpdates()

> **subscribeToUpdates**(`address`): `Observable`\<[`IUpdateFeed`](IUpdateFeed.md)\>

Subscribe to balance and transaction updates for an address.

#### Parameters

• **address**: `string`

The address to subscribe to updates for.

#### Returns

`Observable`\<[`IUpdateFeed`](IUpdateFeed.md)\>

An observable for balance and transaction updates.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:188](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L188)
