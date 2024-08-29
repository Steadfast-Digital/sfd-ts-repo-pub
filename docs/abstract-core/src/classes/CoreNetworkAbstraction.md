[**@sfd-ts-repo-pub/source v0.0.1**](../../../README.md) • **Docs**

***

[@sfd-ts-repo-pub/source v0.0.1](../../../modules.md) / [abstract-core/src](../README.md) / CoreNetworkAbstraction

# Class: `abstract` CoreNetworkAbstraction

Abstract class for core network interactions.
 CoreNetworkAbstraction

## Extended by

- [`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md)

## Implements

- [`IBlockchainInterface`](../interfaces/IBlockchainInterface.md)

## Constructors

### new CoreNetworkAbstraction()

> **new CoreNetworkAbstraction**(`networkId`): [`CoreNetworkAbstraction`](CoreNetworkAbstraction.md)

Creates an instance of CoreNetworkAbstraction.

#### Parameters

• **networkId**: `string`

The network ID.

#### Returns

[`CoreNetworkAbstraction`](CoreNetworkAbstraction.md)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:203](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L203)

## Methods

### getAllAssetsBalances()

> `abstract` **getAllAssetsBalances**(`address`): `Promise`\<[`IAssetBalance`](../interfaces/IAssetBalance.md)[]\>

Fetch balances for all assets.

#### Parameters

• **address**: `string`

The address to fetch all asset balances for.

#### Returns

`Promise`\<[`IAssetBalance`](../interfaces/IAssetBalance.md)[]\>

The balances of all assets.

#### Implementation of

[`IBlockchainInterface`](../interfaces/IBlockchainInterface.md).[`getAllAssetsBalances`](../interfaces/IBlockchainInterface.md#getallassetsbalances)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:217](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L217)

***

### getAllBalances()

> `abstract` **getAllBalances**(`address`): `Promise`\<[`IAddressBalances`](../interfaces/IAddressBalances.md)\>

Fetch all balances for an address.

#### Parameters

• **address**: `string`

The address to fetch all balances for.

#### Returns

`Promise`\<[`IAddressBalances`](../interfaces/IAddressBalances.md)\>

The balances of the address.

#### Implementation of

[`IBlockchainInterface`](../interfaces/IBlockchainInterface.md).[`getAllBalances`](../interfaces/IBlockchainInterface.md#getallbalances)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:208](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L208)

***

### getAssetBalance()

> `abstract` **getAssetBalance**(`address`, `assetId`): `Promise`\<[`IAssetBalance`](../interfaces/IAssetBalance.md)\>

Fetch the balance for a specific asset.

#### Parameters

• **address**: `string`

The address to fetch the asset balance for.

• **assetId**: `string`

The ID of the asset.

#### Returns

`Promise`\<[`IAssetBalance`](../interfaces/IAssetBalance.md)\>

The balance of the specified asset.

#### Implementation of

[`IBlockchainInterface`](../interfaces/IBlockchainInterface.md).[`getAssetBalance`](../interfaces/IBlockchainInterface.md#getassetbalance)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:209](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L209)

***

### getAssetsBalances()

> `abstract` **getAssetsBalances**(`address`, `assetIds`): `Promise`\<[`IAssetBalance`](../interfaces/IAssetBalance.md)[]\>

Fetch balances for specific assets.

#### Parameters

• **address**: `string`

The address to fetch the asset balances for.

• **assetIds**: `string`[]

The IDs of the assets.

#### Returns

`Promise`\<[`IAssetBalance`](../interfaces/IAssetBalance.md)[]\>

The balances of the specified assets.

#### Implementation of

[`IBlockchainInterface`](../interfaces/IBlockchainInterface.md).[`getAssetsBalances`](../interfaces/IBlockchainInterface.md#getassetsbalances)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:213](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L213)

***

### getBalance()

> `abstract` **getBalance**(`address`): `Promise`\<[`IAddressBalance`](../interfaces/IAddressBalance.md)\>

Fetch the balance for an address.

#### Parameters

• **address**: `string`

The address to fetch the balance for.

#### Returns

`Promise`\<[`IAddressBalance`](../interfaces/IAddressBalance.md)\>

The balance of the address.

#### Implementation of

[`IBlockchainInterface`](../interfaces/IBlockchainInterface.md).[`getBalance`](../interfaces/IBlockchainInterface.md#getbalance)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:207](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L207)

***

### getRecentTransactions()

> `abstract` **getRecentTransactions**(`address`, `limit`?): `Promise`\<[`ITransaction`](../interfaces/ITransaction.md)[]\>

Fetch recent transactions for an address.

#### Parameters

• **address**: `string`

The address to fetch recent transactions for.

• **limit?**: `number`

The maximum number of transactions to fetch (optional).

#### Returns

`Promise`\<[`ITransaction`](../interfaces/ITransaction.md)[]\>

The list of recent transactions.

#### Implementation of

[`IBlockchainInterface`](../interfaces/IBlockchainInterface.md).[`getRecentTransactions`](../interfaces/IBlockchainInterface.md#getrecenttransactions)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:219](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L219)

***

### getTransaction()

> `abstract` **getTransaction**(`hash`): `Promise`\<[`ITransaction`](../interfaces/ITransaction.md)\>

Fetch a transaction by its hash.

#### Parameters

• **hash**: `string`

The hash of the transaction.

#### Returns

`Promise`\<[`ITransaction`](../interfaces/ITransaction.md)\>

The transaction details.

#### Implementation of

[`IBlockchainInterface`](../interfaces/IBlockchainInterface.md).[`getTransaction`](../interfaces/IBlockchainInterface.md#gettransaction)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:218](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L218)

***

### getTransactionHistory()

> `abstract` **getTransactionHistory**(`address`, `limit`?, `sblock`?, `eblock`?): `Promise`\<[`ITransaction`](../interfaces/ITransaction.md)[]\>

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

`Promise`\<[`ITransaction`](../interfaces/ITransaction.md)[]\>

The list of transactions.

#### Implementation of

[`IBlockchainInterface`](../interfaces/IBlockchainInterface.md).[`getTransactionHistory`](../interfaces/IBlockchainInterface.md#gettransactionhistory)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:223](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L223)

***

### subscribeToBalance()

> `abstract` **subscribeToBalance**(`address`): `Observable`\<[`IAddressBalance`](../interfaces/IAddressBalance.md)\>

Subscribe to balance updates for an address.

#### Parameters

• **address**: `string`

The address to subscribe to balance updates for.

#### Returns

`Observable`\<[`IAddressBalance`](../interfaces/IAddressBalance.md)\>

An observable for balance updates.

#### Implementation of

[`IBlockchainInterface`](../interfaces/IBlockchainInterface.md).[`subscribeToBalance`](../interfaces/IBlockchainInterface.md#subscribetobalance)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:229](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L229)

***

### subscribeToTransactions()

> `abstract` **subscribeToTransactions**(`address`): `Observable`\<[`ITransaction`](../interfaces/ITransaction.md)[]\>

Subscribe to transaction updates for an address.

#### Parameters

• **address**: `string`

The address to subscribe to transaction updates for.

#### Returns

`Observable`\<[`ITransaction`](../interfaces/ITransaction.md)[]\>

An observable for transaction updates.

#### Implementation of

[`IBlockchainInterface`](../interfaces/IBlockchainInterface.md).[`subscribeToTransactions`](../interfaces/IBlockchainInterface.md#subscribetotransactions)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:230](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L230)

***

### subscribeToUpdates()

> `abstract` **subscribeToUpdates**(`address`): `Observable`\<[`IUpdateFeed`](../interfaces/IUpdateFeed.md)\>

Subscribe to balance and transaction updates for an address.

#### Parameters

• **address**: `string`

The address to subscribe to updates for.

#### Returns

`Observable`\<[`IUpdateFeed`](../interfaces/IUpdateFeed.md)\>

An observable for balance and transaction updates.

#### Implementation of

[`IBlockchainInterface`](../interfaces/IBlockchainInterface.md).[`subscribeToUpdates`](../interfaces/IBlockchainInterface.md#subscribetoupdates)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:231](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L231)
