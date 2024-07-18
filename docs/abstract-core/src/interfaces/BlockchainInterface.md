[**@sfd-ts-repo-pub/source v0.0.0**](../../../README.md) • **Docs**

***

[@sfd-ts-repo-pub/source v0.0.0](../../../modules.md) / [abstract-core/src](../README.md) / BlockchainInterface

# Interface: BlockchainInterface

Interface for blockchain interactions.
 BlockchainInterface

## Methods

### getAllAssetsBalances()

> **getAllAssetsBalances**(`address`): `Promise`\<[`AssetBalance`](AssetBalance.md)[]\>

Fetch balances for all assets.

#### Parameters

• **address**: `string`

The address to fetch all asset balances for.

#### Returns

`Promise`\<[`AssetBalance`](AssetBalance.md)[]\>

The balances of all assets.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:131](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/abstract-core/src/lib/abstract-core.ts#L131)

***

### getAllBalances()

> **getAllBalances**(`address`): `Promise`\<[`AddressBalances`](AddressBalances.md)\>

Fetch all balances for an address.

#### Parameters

• **address**: `string`

The address to fetch all balances for.

#### Returns

`Promise`\<[`AddressBalances`](AddressBalances.md)\>

The balances of the address.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:108](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/abstract-core/src/lib/abstract-core.ts#L108)

***

### getAssetBalance()

> **getAssetBalance**(`address`, `assetId`): `Promise`\<[`AssetBalance`](AssetBalance.md)\>

Fetch the balance for a specific asset.

#### Parameters

• **address**: `string`

The address to fetch the asset balance for.

• **assetId**: `string`

The ID of the asset.

#### Returns

`Promise`\<[`AssetBalance`](AssetBalance.md)\>

The balance of the specified asset.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:116](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/abstract-core/src/lib/abstract-core.ts#L116)

***

### getAssetsBalances()

> **getAssetsBalances**(`address`, `assetIds`): `Promise`\<[`AssetBalance`](AssetBalance.md)[]\>

Fetch balances for specific assets.

#### Parameters

• **address**: `string`

The address to fetch the asset balances for.

• **assetIds**: `string`[]

The IDs of the assets.

#### Returns

`Promise`\<[`AssetBalance`](AssetBalance.md)[]\>

The balances of the specified assets.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:124](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/abstract-core/src/lib/abstract-core.ts#L124)

***

### getBalance()

> **getBalance**(`address`): `Promise`\<[`AddressBalance`](AddressBalance.md)\>

Fetch the balance for an address.

#### Parameters

• **address**: `string`

The address to fetch the balance for.

#### Returns

`Promise`\<[`AddressBalance`](AddressBalance.md)\>

The balance of the address.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:101](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/abstract-core/src/lib/abstract-core.ts#L101)

***

### getRecentTransactions()

> **getRecentTransactions**(`address`, `limit`?): `Promise`\<[`Transaction`](Transaction.md)[]\>

Fetch recent transactions for an address.

#### Parameters

• **address**: `string`

The address to fetch recent transactions for.

• **limit?**: `number`

The maximum number of transactions to fetch (optional).

#### Returns

`Promise`\<[`Transaction`](Transaction.md)[]\>

The list of recent transactions.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:146](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/abstract-core/src/lib/abstract-core.ts#L146)

***

### getTransaction()

> **getTransaction**(`hash`): `Promise`\<[`Transaction`](Transaction.md)\>

Fetch a transaction by its hash.

#### Parameters

• **hash**: `string`

The hash of the transaction.

#### Returns

`Promise`\<[`Transaction`](Transaction.md)\>

The transaction details.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:138](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/abstract-core/src/lib/abstract-core.ts#L138)

***

### getTransactionHistory()

> **getTransactionHistory**(`address`, `limit`?, `sblock`?, `eblock`?): `Promise`\<[`Transaction`](Transaction.md)[]\>

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

`Promise`\<[`Transaction`](Transaction.md)[]\>

The list of transactions.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:156](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/abstract-core/src/lib/abstract-core.ts#L156)

***

### subscribeToBalance()

> **subscribeToBalance**(`address`): `Observable`\<[`AddressBalance`](AddressBalance.md)\>

Subscribe to balance updates for an address.

#### Parameters

• **address**: `string`

The address to subscribe to balance updates for.

#### Returns

`Observable`\<[`AddressBalance`](AddressBalance.md)\>

An observable for balance updates.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:163](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/abstract-core/src/lib/abstract-core.ts#L163)

***

### subscribeToTransactions()

> **subscribeToTransactions**(`address`): `Observable`\<[`Transaction`](Transaction.md)[]\>

Subscribe to transaction updates for an address.

#### Parameters

• **address**: `string`

The address to subscribe to transaction updates for.

#### Returns

`Observable`\<[`Transaction`](Transaction.md)[]\>

An observable for transaction updates.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:170](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/abstract-core/src/lib/abstract-core.ts#L170)

***

### subscribeToUpdates()

> **subscribeToUpdates**(`address`): `Observable`\<[`UpdateFeed`](UpdateFeed.md)\>

Subscribe to balance and transaction updates for an address.

#### Parameters

• **address**: `string`

The address to subscribe to updates for.

#### Returns

`Observable`\<[`UpdateFeed`](UpdateFeed.md)\>

An observable for balance and transaction updates.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:177](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/abstract-core/src/lib/abstract-core.ts#L177)
