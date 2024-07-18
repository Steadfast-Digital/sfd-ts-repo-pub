[**@sfd-ts-repo-pub/source v0.0.0**](../../../README.md) • **Docs**

***

[@sfd-ts-repo-pub/source v0.0.0](../../../modules.md) / [connector-ethereum/src](../README.md) / EthereumConnector

# Class: EthereumConnector

Abstract class for EVM abstraction.

## Abstract

## Extends

- [`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md)

## Constructors

### new EthereumConnector()

> **new EthereumConnector**(`networkId`): [`EthereumConnector`](EthereumConnector.md)

#### Parameters

• **networkId**: `string`

#### Returns

[`EthereumConnector`](EthereumConnector.md)

#### Overrides

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`constructor`](../../../abstract-evm/src/classes/EvmAbstraction.md#constructors)

#### Defined in

[libs/connector-ethereum/src/lib/connector-ethereum.ts:4](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/connector-ethereum/src/lib/connector-ethereum.ts#L4)

## Properties

### \_rpcProvider

> **\_rpcProvider**: `JsonRpcProvider` \| `WebSocketProvider`

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`_rpcProvider`](../../../abstract-evm/src/classes/EvmAbstraction.md#_rpcprovider)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:35](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-evm/src/lib/abstract-evm.ts#L35)

## Methods

### getAllAssetsBalances()

> **getAllAssetsBalances**(`address`): `Promise`\<[`AssetBalance`](../../../abstract-core/src/interfaces/AssetBalance.md)[]\>

Fetches balances for all assets.

#### Parameters

• **address**: `string`

The address to fetch all asset balances for.

#### Returns

`Promise`\<[`AssetBalance`](../../../abstract-core/src/interfaces/AssetBalance.md)[]\>

The balances of all assets.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`getAllAssetsBalances`](../../../abstract-evm/src/classes/EvmAbstraction.md#getallassetsbalances)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:202](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-evm/src/lib/abstract-evm.ts#L202)

***

### getAllBalances()

> **getAllBalances**(`address`): `Promise`\<[`AddressBalances`](../../../abstract-core/src/interfaces/AddressBalances.md)\>

Fetches all balances for an address.

#### Parameters

• **address**: `string`

The address to fetch all balances for.

#### Returns

`Promise`\<[`AddressBalances`](../../../abstract-core/src/interfaces/AddressBalances.md)\>

The balances of the address.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`getAllBalances`](../../../abstract-evm/src/classes/EvmAbstraction.md#getallbalances)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:126](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-evm/src/lib/abstract-evm.ts#L126)

***

### getAssetBalance()

> **getAssetBalance**(`address`, `assetId`): `Promise`\<[`AssetBalance`](../../../abstract-core/src/interfaces/AssetBalance.md)\>

Fetches the balance for a specific asset.

#### Parameters

• **address**: `string`

The address to fetch the asset balance for.

• **assetId**: `string`

The ID of the asset.

#### Returns

`Promise`\<[`AssetBalance`](../../../abstract-core/src/interfaces/AssetBalance.md)\>

The balance of the specified asset.

#### Throws

If there is an error fetching the balance.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`getAssetBalance`](../../../abstract-evm/src/classes/EvmAbstraction.md#getassetbalance)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:147](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-evm/src/lib/abstract-evm.ts#L147)

***

### getAssetsBalances()

> **getAssetsBalances**(`address`, `assetIds`): `Promise`\<[`AssetBalance`](../../../abstract-core/src/interfaces/AssetBalance.md)[]\>

Fetches balances for specific assets.

#### Parameters

• **address**: `string`

The address to fetch the asset balances for.

• **assetIds**: `string`[]

The IDs of the assets.

#### Returns

`Promise`\<[`AssetBalance`](../../../abstract-core/src/interfaces/AssetBalance.md)[]\>

The balances of the specified assets.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`getAssetsBalances`](../../../abstract-evm/src/classes/EvmAbstraction.md#getassetsbalances)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:188](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-evm/src/lib/abstract-evm.ts#L188)

***

### getBalance()

> **getBalance**(`address`): `Promise`\<[`AddressBalance`](../../../abstract-core/src/interfaces/AddressBalance.md)\>

Fetches the balance for an address.

#### Parameters

• **address**: `string`

The address to fetch the balance for.

#### Returns

`Promise`\<[`AddressBalance`](../../../abstract-core/src/interfaces/AddressBalance.md)\>

The balance of the address.

#### Throws

If there is an error fetching the balance.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`getBalance`](../../../abstract-evm/src/classes/EvmAbstraction.md#getbalance)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:53](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-evm/src/lib/abstract-evm.ts#L53)

***

### getRecentTransactions()

> **getRecentTransactions**(`address`, `limit`?): `Promise`\<[`Transaction`](../../../abstract-core/src/interfaces/Transaction.md)[]\>

Fetches recent transactions for an address.

#### Parameters

• **address**: `string`

The address to fetch recent transactions for.

• **limit?**: `number`

The maximum number of transactions to fetch (optional).

#### Returns

`Promise`\<[`Transaction`](../../../abstract-core/src/interfaces/Transaction.md)[]\>

The list of recent transactions.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`getRecentTransactions`](../../../abstract-evm/src/classes/EvmAbstraction.md#getrecenttransactions)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:107](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-evm/src/lib/abstract-evm.ts#L107)

***

### getTransaction()

> **getTransaction**(`hash`): `Promise`\<[`Transaction`](../../../abstract-core/src/interfaces/Transaction.md)\>

Fetches a transaction by its hash.

#### Parameters

• **hash**: `string`

The hash of the transaction.

#### Returns

`Promise`\<[`Transaction`](../../../abstract-core/src/interfaces/Transaction.md)\>

The transaction details.

#### Throws

If the method is not implemented.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`getTransaction`](../../../abstract-evm/src/classes/EvmAbstraction.md#gettransaction)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:97](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-evm/src/lib/abstract-evm.ts#L97)

***

### getTransactionHistory()

> **getTransactionHistory**(`address`, `limit`?): `Promise`\<[`Transaction`](../../../abstract-core/src/interfaces/Transaction.md)[]\>

Fetches the transaction history for an address.

#### Parameters

• **address**: `string`

The address to fetch the transaction history for.

• **limit?**: `number`

The maximum number of transactions to fetch (optional).

#### Returns

`Promise`\<[`Transaction`](../../../abstract-core/src/interfaces/Transaction.md)[]\>

The list of transactions.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`getTransactionHistory`](../../../abstract-evm/src/classes/EvmAbstraction.md#gettransactionhistory)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:117](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-evm/src/lib/abstract-evm.ts#L117)

***

### subscribeToBalance()

> **subscribeToBalance**(`address`): `Observable`\<[`AddressBalance`](../../../abstract-core/src/interfaces/AddressBalance.md)\>

Subscribes to balance updates for an address.

#### Parameters

• **address**: `string`

The address to subscribe to balance updates for.

#### Returns

`Observable`\<[`AddressBalance`](../../../abstract-core/src/interfaces/AddressBalance.md)\>

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

[libs/abstract-evm/src/lib/abstract-evm.ts:216](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-evm/src/lib/abstract-evm.ts#L216)

***

### subscribeToTransactions()

> **subscribeToTransactions**(`address`): `Observable`\<[`Transaction`](../../../abstract-core/src/interfaces/Transaction.md)[]\>

Subscribes to transaction updates for an address.

#### Parameters

• **address**: `string`

The address to subscribe to transaction updates for.

#### Returns

`Observable`\<[`Transaction`](../../../abstract-core/src/interfaces/Transaction.md)[]\>

An observable for transaction updates.

#### Throws

If the method is not implemented.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`subscribeToTransactions`](../../../abstract-evm/src/classes/EvmAbstraction.md#subscribetotransactions)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:274](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-evm/src/lib/abstract-evm.ts#L274)

***

### subscribeToUpdates()

> **subscribeToUpdates**(`address`): `Observable`\<[`UpdateFeed`](../../../abstract-core/src/interfaces/UpdateFeed.md)\>

Subscribes to balance and transaction updates for an address.

#### Parameters

• **address**: `string`

The address to subscribe to updates for.

#### Returns

`Observable`\<[`UpdateFeed`](../../../abstract-core/src/interfaces/UpdateFeed.md)\>

An observable for balance and transaction updates.

#### Throws

If the method is not implemented.

#### Inherited from

[`EvmAbstraction`](../../../abstract-evm/src/classes/EvmAbstraction.md).[`subscribeToUpdates`](../../../abstract-evm/src/classes/EvmAbstraction.md#subscribetoupdates)

#### Defined in

[libs/abstract-evm/src/lib/abstract-evm.ts:284](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/abstract-evm/src/lib/abstract-evm.ts#L284)
