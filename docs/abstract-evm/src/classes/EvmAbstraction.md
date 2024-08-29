[**@sfd-ts-repo-pub/source v0.0.1**](../../../README.md) • **Docs**

***

[@sfd-ts-repo-pub/source v0.0.1](../../../modules.md) / [abstract-evm/src](../README.md) / EvmAbstraction

# Class: `abstract` EvmAbstraction

Abstract class for EVM abstraction.

## Abstract

## Extends

- [`CoreNetworkAbstraction`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md)

## Extended by

- [`BscConnector`](../../../connector-bsc/src/classes/BscConnector.md)
- [`EthereumConnector`](../../../connector-ethereum/src/classes/EthereumConnector.md)

## Constructors

### new EvmAbstraction()

> **new EvmAbstraction**(`networkId`): [`EvmAbstraction`](EvmAbstraction.md)

Creates an instance of EvmAbstraction.

#### Parameters

• **networkId**: `string`

The network ID.

#### Returns

[`EvmAbstraction`](EvmAbstraction.md)

#### Overrides

[`CoreNetworkAbstraction`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md).[`constructor`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md#constructors)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:62](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L62)

## Properties

### \_rpcProvider

> **\_rpcProvider**: `JsonRpcProvider` \| `WebSocketProvider`

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:52](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L52)

***

### id

> **id**: `string`

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:54](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L54)

***

### name

> **name**: `string`

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:55](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L55)

***

### rpcUrl

> **rpcUrl**: `string`

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

#### Overrides

[`CoreNetworkAbstraction`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md).[`getAllAssetsBalances`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md#getallassetsbalances)

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

#### Overrides

[`CoreNetworkAbstraction`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md).[`getAllBalances`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md#getallbalances)

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

#### Overrides

[`CoreNetworkAbstraction`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md).[`getAssetBalance`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md#getassetbalance)

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

#### Overrides

[`CoreNetworkAbstraction`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md).[`getAssetsBalances`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md#getassetsbalances)

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

#### Overrides

[`CoreNetworkAbstraction`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md).[`getBalance`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md#getbalance)

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

#### Overrides

[`CoreNetworkAbstraction`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md).[`getRecentTransactions`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md#getrecenttransactions)

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

#### Overrides

[`CoreNetworkAbstraction`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md).[`getTransaction`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md#gettransaction)

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

#### Overrides

[`CoreNetworkAbstraction`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md).[`getTransactionHistory`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md#gettransactionhistory)

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

#### Overrides

[`CoreNetworkAbstraction`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md).[`subscribeToBalance`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md#subscribetobalance)

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

#### Overrides

[`CoreNetworkAbstraction`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md).[`subscribeToTransactions`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md#subscribetotransactions)

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

#### Overrides

[`CoreNetworkAbstraction`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md).[`subscribeToUpdates`](../../../abstract-core/src/classes/CoreNetworkAbstraction.md#subscribetoupdates)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:338](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-evm/src/lib/abstract-evm.ts#L338)
