[**@sfd-ts-repo-pub/source v0.0.0**](../../../README.md) • **Docs**

***

[@sfd-ts-repo-pub/source v0.0.0](../../../modules.md) / [blockchain-factory/src](../README.md) / BlockchainFactory

# Class: BlockchainFactory

## Constructors

### new BlockchainFactory()

> **new BlockchainFactory**(): [`BlockchainFactory`](BlockchainFactory.md)

#### Returns

[`BlockchainFactory`](BlockchainFactory.md)

## Methods

### createBlockchain()

> `static` **createBlockchain**(`networkId`): `Promise`\<[`BlockchainInterface`](../../../abstract-core/src/interfaces/BlockchainInterface.md)\>

#### Parameters

• **networkId**: `string`

#### Returns

`Promise`\<[`BlockchainInterface`](../../../abstract-core/src/interfaces/BlockchainInterface.md)\>

#### Defined in

[libs/blockchain-factory/src/lib/blockchain-factory.ts:6](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/blockchain-factory/src/lib/blockchain-factory.ts#L6)

***

### getAllBalances()

> `static` **getAllBalances**(`networkId`, `address`): `Promise`\<[`AddressBalances`](../../../abstract-core/src/interfaces/AddressBalances.md)\>

#### Parameters

• **networkId**: `string`

• **address**: `string`

#### Returns

`Promise`\<[`AddressBalances`](../../../abstract-core/src/interfaces/AddressBalances.md)\>

#### Defined in

[libs/blockchain-factory/src/lib/blockchain-factory.ts:55](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/blockchain-factory/src/lib/blockchain-factory.ts#L55)

***

### getAssetBalance()

> `static` **getAssetBalance**(`networkId`, `address`, `assetId`): `Promise`\<[`AssetBalance`](../../../abstract-core/src/interfaces/AssetBalance.md)\>

#### Parameters

• **networkId**: `string`

• **address**: `string`

• **assetId**: `string`

#### Returns

`Promise`\<[`AssetBalance`](../../../abstract-core/src/interfaces/AssetBalance.md)\>

#### Defined in

[libs/blockchain-factory/src/lib/blockchain-factory.ts:51](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/blockchain-factory/src/lib/blockchain-factory.ts#L51)

***

### getAssetsBalances()

> `static` **getAssetsBalances**(`networkId`, `address`, `assetIds`): `Promise`\<[`AssetBalance`](../../../abstract-core/src/interfaces/AssetBalance.md)[]\>

#### Parameters

• **networkId**: `string`

• **address**: `string`

• **assetIds**: `string`[]

#### Returns

`Promise`\<[`AssetBalance`](../../../abstract-core/src/interfaces/AssetBalance.md)[]\>

#### Defined in

[libs/blockchain-factory/src/lib/blockchain-factory.ts:59](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/blockchain-factory/src/lib/blockchain-factory.ts#L59)

***

### getBalance()

> `static` **getBalance**(`networkId`, `address`): `Promise`\<[`AddressBalance`](../../../abstract-core/src/interfaces/AddressBalance.md)\>

#### Parameters

• **networkId**: `string`

• **address**: `string`

#### Returns

`Promise`\<[`AddressBalance`](../../../abstract-core/src/interfaces/AddressBalance.md)\>

#### Defined in

[libs/blockchain-factory/src/lib/blockchain-factory.ts:47](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/blockchain-factory/src/lib/blockchain-factory.ts#L47)

***

### getConnection()

> `static` **getConnection**(`networkId`): [`BlockchainInterface`](../../../abstract-core/src/interfaces/BlockchainInterface.md)

#### Parameters

• **networkId**: `string`

#### Returns

[`BlockchainInterface`](../../../abstract-core/src/interfaces/BlockchainInterface.md)

#### Defined in

[libs/blockchain-factory/src/lib/blockchain-factory.ts:41](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/blockchain-factory/src/lib/blockchain-factory.ts#L41)

***

### getTransactionHistory()

> `static` **getTransactionHistory**(`networkId`, `address`): `Promise`\<[`Transaction`](../../../abstract-core/src/interfaces/Transaction.md)[]\>

#### Parameters

• **networkId**: `string`

• **address**: `string`

#### Returns

`Promise`\<[`Transaction`](../../../abstract-core/src/interfaces/Transaction.md)[]\>

#### Defined in

[libs/blockchain-factory/src/lib/blockchain-factory.ts:63](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/blockchain-factory/src/lib/blockchain-factory.ts#L63)

***

### registerConnector()

> `static` **registerConnector**(`networkId`, `connector`): [`BlockchainInterface`](../../../abstract-core/src/interfaces/BlockchainInterface.md)

#### Parameters

• **networkId**: `string`

• **connector**: [`BlockchainInterface`](../../../abstract-core/src/interfaces/BlockchainInterface.md)

#### Returns

[`BlockchainInterface`](../../../abstract-core/src/interfaces/BlockchainInterface.md)

#### Defined in

[libs/blockchain-factory/src/lib/blockchain-factory.ts:33](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/blockchain-factory/src/lib/blockchain-factory.ts#L33)

***

### subscribeToBalance()

> `static` **subscribeToBalance**(`networkId`, `address`): `Observable`\<[`AddressBalance`](../../../abstract-core/src/interfaces/AddressBalance.md)\>

#### Parameters

• **networkId**: `string`

• **address**: `string`

#### Returns

`Observable`\<[`AddressBalance`](../../../abstract-core/src/interfaces/AddressBalance.md)\>

#### Defined in

[libs/blockchain-factory/src/lib/blockchain-factory.ts:67](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/7c03207a60081ee1420569768bbbd8451528de43/libs/blockchain-factory/src/lib/blockchain-factory.ts#L67)
