[**@sfd-ts-repo-pub/source v0.0.1**](../../../README.md) • **Docs**

***

[@sfd-ts-repo-pub/source v0.0.1](../../../modules.md) / [connector-bsc/src](../README.md) / BscConnector

# Class: BscConnector

Abstract class for EVM abstraction.

## Abstract

## Extends

- [`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md)

## Constructors

### new BscConnector()

> **new BscConnector**(`networkId`): [`BscConnector`](BscConnector.md)

#### Parameters

• **networkId**: `string`

#### Returns

[`BscConnector`](BscConnector.md)

#### Overrides

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`constructor`](../../../abstract-evm/src/classes/EvmAbstraction.md#constructors)

#### Defined in

[libs/connector-bsc/src/lib/connector-bsc.ts:4](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/connector-bsc/src/lib/connector-bsc.ts#L4)

## Properties

### \_rpcProvider

> **\_rpcProvider**: `JsonRpcProvider` \| `WebSocketProvider`

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`_rpcProvider`](../../../abstract-evm/src/classes/EvmAbstraction.md#_rpcprovider)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:52](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L52)

***

### id

> **id**: `string`

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`id`](../../../abstract-evm/src/classes/EvmAbstraction.md#id)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:54](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L54)

***

### name

> **name**: `string`

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`name`](../../../abstract-evm/src/classes/EvmAbstraction.md#name)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:55](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L55)

***

### rpcUrl

> **rpcUrl**: `string`

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`rpcUrl`](../../../abstract-evm/src/classes/EvmAbstraction.md#rpcurl)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:56](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L56)

## Methods

### getAllAssetsBalances()

> **getAllAssetsBalances**(`address`): `Promise`\<[`IAssetBalance`](../../../abstract-core/src/interfaces/IAssetBalance.md)[]\>

Fetches balances for all assets.

#### Parameters

• **address**: `string`

The address to fetch all asset balances for.

#### Returns

`Promise`\<[`IAssetBalance`](../../../abstract-core/src/interfaces/IAssetBalance.md)[]\>

The balances of all assets.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`getAllAssetsBalances`](../../../abstract-evm/src/classes/EvmAbstraction.md#getallassetsbalances)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:246](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L246)

***

### getAllBalances()

> **getAllBalances**(`address`): `Promise`\<[`IAddressBalances`](../../../abstract-core/src/interfaces/IAddressBalances.md)\>

Fetches all balances for an address.

#### Parameters

• **address**: `string`

The address to fetch all balances for.

#### Returns

`Promise`\<[`IAddressBalances`](../../../abstract-core/src/interfaces/IAddressBalances.md)\>

The balances of the address.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`getAllBalances`](../../../abstract-evm/src/classes/EvmAbstraction.md#getallbalances)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:157](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L157)

***

### getAssetBalance()

> **getAssetBalance**(`address`, `assetId`): `Promise`\<[`IAssetBalance`](../../../abstract-core/src/interfaces/IAssetBalance.md)\>

Fetches the balance for a specific asset.

#### Parameters

• **address**: `string`

The address to fetch the asset balance for.

• **assetId**: `string`

The ID of the asset.

#### Returns

`Promise`\<[`IAssetBalance`](../../../abstract-core/src/interfaces/IAssetBalance.md)\>

The balance of the specified asset.

#### Throws

If there is an error fetching the balance.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`getAssetBalance`](../../../abstract-evm/src/classes/EvmAbstraction.md#getassetbalance)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:180](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L180)

***

### getAssetsBalances()

> **getAssetsBalances**(`address`, `assetIds`): `Promise`\<[`IAssetBalance`](../../../abstract-core/src/interfaces/IAssetBalance.md)[]\>

Fetches balances for specific assets.

#### Parameters

• **address**: `string`

The address to fetch the asset balances for.

• **assetIds**: `string`[]

The IDs of the assets.

#### Returns

`Promise`\<[`IAssetBalance`](../../../abstract-core/src/interfaces/IAssetBalance.md)[]\>

The balances of the specified assets.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`getAssetsBalances`](../../../abstract-evm/src/classes/EvmAbstraction.md#getassetsbalances)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:229](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L229)

***

### getBalance()

> **getBalance**(`address`): `Promise`\<[`IAddressBalance`](../../../abstract-core/src/interfaces/IAddressBalance.md)\>

Fetches the balance for an address.

#### Parameters

• **address**: `string`

The address to fetch the balance for.

#### Returns

`Promise`\<[`IAddressBalance`](../../../abstract-core/src/interfaces/IAddressBalance.md)\>

The balance of the address.

#### Throws

If there is an error fetching the balance.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`getBalance`](../../../abstract-evm/src/classes/EvmAbstraction.md#getbalance)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:79](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L79)

***

### getRecentTransactions()

> **getRecentTransactions**(`address`, `limit`?): `Promise`\<[`ITransaction`](../../../abstract-core/src/interfaces/ITransaction.md)[]\>

Fetches recent transactions for an address.

#### Parameters

• **address**: `string`

The address to fetch recent transactions for.

• **limit?**: `number`

The maximum number of transactions to fetch (optional).

#### Returns

`Promise`\<[`ITransaction`](../../../abstract-core/src/interfaces/ITransaction.md)[]\>

The list of recent transactions.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`getRecentTransactions`](../../../abstract-evm/src/classes/EvmAbstraction.md#getrecenttransactions)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:132](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L132)

***

### getTransaction()

> **getTransaction**(`hash`): `Promise`\<[`ITransaction`](../../../abstract-core/src/interfaces/ITransaction.md)\>

Fetches a transaction by its hash.

#### Parameters

• **hash**: `string`

The hash of the transaction.

#### Returns

`Promise`\<[`ITransaction`](../../../abstract-core/src/interfaces/ITransaction.md)\>

The transaction details.

#### Throws

If the method is not implemented.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`getTransaction`](../../../abstract-evm/src/classes/EvmAbstraction.md#gettransaction)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:122](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L122)

***

### getTransactionHistory()

> **getTransactionHistory**(`address`, `limit`?): `Promise`\<[`ITransaction`](../../../abstract-core/src/interfaces/ITransaction.md)[]\>

Fetches the transaction history for an address.

#### Parameters

• **address**: `string`

The address to fetch the transaction history for.

• **limit?**: `number`

The maximum number of transactions to fetch (optional).

#### Returns

`Promise`\<[`ITransaction`](../../../abstract-core/src/interfaces/ITransaction.md)[]\>

The list of transactions.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`getTransactionHistory`](../../../abstract-evm/src/classes/EvmAbstraction.md#gettransactionhistory)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:145](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L145)

***

### subscribeToBalance()

> **subscribeToBalance**(`address`): `Observable`\<[`IAddressBalance`](../../../abstract-core/src/interfaces/IAddressBalance.md)\>

Subscribes to balance updates for an address.

#### Parameters

• **address**: `string`

The address to subscribe to balance updates for.

#### Returns

`Observable`\<[`IAddressBalance`](../../../abstract-core/src/interfaces/IAddressBalance.md)\>

An observable for balance updates.

#### Example

```ts
const subscription = evmAbstraction.subscribeToBalance(address).subscribe({
   next: (balance) => console.log('Balance updated:', balance),
   error: (err) => console.error('Error:', err),
 });
```

#### Throws

If the RPC URL is not a valid WebSocket URL.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`subscribeToBalance`](../../../abstract-evm/src/classes/EvmAbstraction.md#subscribetobalance)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:260](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L260)

***

### subscribeToTransactions()

> **subscribeToTransactions**(`address`): `Observable`\<[`ITransaction`](../../../abstract-core/src/interfaces/ITransaction.md)[]\>

Subscribes to transaction updates for an address.

#### Parameters

• **address**: `string`

The address to subscribe to transaction updates for.

#### Returns

`Observable`\<[`ITransaction`](../../../abstract-core/src/interfaces/ITransaction.md)[]\>

An observable for transaction updates.

#### Throws

If the method is not implemented.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`subscribeToTransactions`](../../../abstract-evm/src/classes/EvmAbstraction.md#subscribetotransactions)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:328](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L328)

***

### subscribeToUpdates()

> **subscribeToUpdates**(`address`): `Observable`\<[`IUpdateFeed`](../../../abstract-core/src/interfaces/IUpdateFeed.md)\>

Subscribes to balance and transaction updates for an address.

#### Parameters

• **address**: `string`

The address to subscribe to updates for.

#### Returns

`Observable`\<[`IUpdateFeed`](../../../abstract-core/src/interfaces/IUpdateFeed.md)\>

An observable for balance and transaction updates.

#### Throws

If the method is not implemented.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`subscribeToUpdates`](../../../abstract-evm/src/classes/EvmAbstraction.md#subscribetoupdates)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:338](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L338)
