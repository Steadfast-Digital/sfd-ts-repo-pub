[**@sfd-ts-repo-pub/source v0.0.0**](../../../README.md) • **Docs**

***

[@sfd-ts-repo-pub/source v0.0.0](../../../modules.md) / [abstract-core/src](../README.md) / CoreNetworkAbstraction

# Class: `abstract` CoreNetworkAbstraction

Abstract class for core network interactions.
 CoreNetworkAbstraction

## Extended by

- [`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md)

## Implements

- [`BlockchainInterface`](../interfaces/BlockchainInterface.md)

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

[libs/abstract-core/src/lib/abstract-core.ts:192](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-core/src/lib/abstract-core.ts#L192)

## Methods

### getAllAssetsBalances()

> `abstract` **getAllAssetsBalances**(`address`): `Promise`\<[`AssetBalance`](../interfaces/AssetBalance.md)[]\>

Fetch balances for all assets.

#### Parameters

• **address**: `string`

The address to fetch all asset balances for.

#### Returns

`Promise`\<[`AssetBalance`](../interfaces/AssetBalance.md)[]\>

The balances of all assets.

#### Implementation of

[`BlockchainInterface`](../interfaces/BlockchainInterface.md).[`getAllAssetsBalances`](../interfaces/BlockchainInterface.md#getallassetsbalances)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:200](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-core/src/lib/abstract-core.ts#L200)

***

### getAllBalances()

> `abstract` **getAllBalances**(`address`): `Promise`\<[`AddressBalances`](../interfaces/AddressBalances.md)\>

Fetch all balances for an address.

#### Parameters

• **address**: `string`

The address to fetch all balances for.

#### Returns

`Promise`\<[`AddressBalances`](../interfaces/AddressBalances.md)\>

The balances of the address.

#### Implementation of

[`BlockchainInterface`](../interfaces/BlockchainInterface.md).[`getAllBalances`](../interfaces/BlockchainInterface.md#getallbalances)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:197](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-core/src/lib/abstract-core.ts#L197)

***

### getAssetBalance()

> `abstract` **getAssetBalance**(`address`, `assetId`): `Promise`\<[`AssetBalance`](../interfaces/AssetBalance.md)\>

Fetch the balance for a specific asset.

#### Parameters

• **address**: `string`

The address to fetch the asset balance for.

• **assetId**: `string`

The ID of the asset.

#### Returns

`Promise`\<[`AssetBalance`](../interfaces/AssetBalance.md)\>

The balance of the specified asset.

#### Implementation of

[`BlockchainInterface`](../interfaces/BlockchainInterface.md).[`getAssetBalance`](../interfaces/BlockchainInterface.md#getassetbalance)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:198](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-core/src/lib/abstract-core.ts#L198)

***

### getAssetsBalances()

> `abstract` **getAssetsBalances**(`address`, `assetIds`): `Promise`\<[`AssetBalance`](../interfaces/AssetBalance.md)[]\>

Fetch balances for specific assets.

#### Parameters

• **address**: `string`

The address to fetch the asset balances for.

• **assetIds**: `string`[]

The IDs of the assets.

#### Returns

`Promise`\<[`AssetBalance`](../interfaces/AssetBalance.md)[]\>

The balances of the specified assets.

#### Implementation of

[`BlockchainInterface`](../interfaces/BlockchainInterface.md).[`getAssetsBalances`](../interfaces/BlockchainInterface.md#getassetsbalances)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:199](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-core/src/lib/abstract-core.ts#L199)

***

### getBalance()

> `abstract` **getBalance**(`address`): `Promise`\<[`AddressBalance`](../interfaces/AddressBalance.md)\>

Fetch the balance for an address.

#### Parameters

• **address**: `string`

The address to fetch the balance for.

#### Returns

`Promise`\<[`AddressBalance`](../interfaces/AddressBalance.md)\>

The balance of the address.

#### Implementation of

[`BlockchainInterface`](../interfaces/BlockchainInterface.md).[`getBalance`](../interfaces/BlockchainInterface.md#getbalance)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:196](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-core/src/lib/abstract-core.ts#L196)

***

### getRecentTransactions()

> `abstract` **getRecentTransactions**(`address`, `limit`?): `Promise`\<[`Transaction`](../interfaces/Transaction.md)[]\>

Fetch recent transactions for an address.

#### Parameters

• **address**: `string`

The address to fetch recent transactions for.

• **limit?**: `number`

The maximum number of transactions to fetch (optional).

#### Returns

`Promise`\<[`Transaction`](../interfaces/Transaction.md)[]\>

The list of recent transactions.

#### Implementation of

[`BlockchainInterface`](../interfaces/BlockchainInterface.md).[`getRecentTransactions`](../interfaces/BlockchainInterface.md#getrecenttransactions)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:202](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-core/src/lib/abstract-core.ts#L202)

***

### getTransaction()

> `abstract` **getTransaction**(`hash`): `Promise`\<[`Transaction`](../interfaces/Transaction.md)\>

Fetch a transaction by its hash.

#### Parameters

• **hash**: `string`

The hash of the transaction.

#### Returns

`Promise`\<[`Transaction`](../interfaces/Transaction.md)\>

The transaction details.

#### Implementation of

[`BlockchainInterface`](../interfaces/BlockchainInterface.md).[`getTransaction`](../interfaces/BlockchainInterface.md#gettransaction)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:201](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-core/src/lib/abstract-core.ts#L201)

***

### getTransactionHistory()

> `abstract` **getTransactionHistory**(`address`, `limit`?, `sblock`?, `eblock`?): `Promise`\<[`Transaction`](../interfaces/Transaction.md)[]\>

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

`Promise`\<[`Transaction`](../interfaces/Transaction.md)[]\>

The list of transactions.

#### Implementation of

[`BlockchainInterface`](../interfaces/BlockchainInterface.md).[`getTransactionHistory`](../interfaces/BlockchainInterface.md#gettransactionhistory)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:203](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-core/src/lib/abstract-core.ts#L203)

***

### subscribeToBalance()

> `abstract` **subscribeToBalance**(`address`): `Observable`\<[`AddressBalance`](../interfaces/AddressBalance.md)\>

Subscribe to balance updates for an address.

#### Parameters

• **address**: `string`

The address to subscribe to balance updates for.

#### Returns

`Observable`\<[`AddressBalance`](../interfaces/AddressBalance.md)\>

An observable for balance updates.

#### Implementation of

[`BlockchainInterface`](../interfaces/BlockchainInterface.md).[`subscribeToBalance`](../interfaces/BlockchainInterface.md#subscribetobalance)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:204](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-core/src/lib/abstract-core.ts#L204)

***

### subscribeToTransactions()

> `abstract` **subscribeToTransactions**(`address`): `Observable`\<[`Transaction`](../interfaces/Transaction.md)[]\>

Subscribe to transaction updates for an address.

#### Parameters

• **address**: `string`

The address to subscribe to transaction updates for.

#### Returns

`Observable`\<[`Transaction`](../interfaces/Transaction.md)[]\>

An observable for transaction updates.

#### Implementation of

[`BlockchainInterface`](../interfaces/BlockchainInterface.md).[`subscribeToTransactions`](../interfaces/BlockchainInterface.md#subscribetotransactions)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:205](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-core/src/lib/abstract-core.ts#L205)

***

### subscribeToUpdates()

> `abstract` **subscribeToUpdates**(`address`): `Observable`\<[`UpdateFeed`](../interfaces/UpdateFeed.md)\>

Subscribe to balance and transaction updates for an address.

#### Parameters

• **address**: `string`

The address to subscribe to updates for.

#### Returns

`Observable`\<[`UpdateFeed`](../interfaces/UpdateFeed.md)\>

An observable for balance and transaction updates.

#### Implementation of

[`BlockchainInterface`](../interfaces/BlockchainInterface.md).[`subscribeToUpdates`](../interfaces/BlockchainInterface.md#subscribetoupdates)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:206](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-core/src/lib/abstract-core.ts#L206)
