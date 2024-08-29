[**@sfd-ts-repo-pub/source v0.0.1**](../../../README.md) • **Docs**

***

[@sfd-ts-repo-pub/source v0.0.1](../../../modules.md) / [blockchain-factory/src](../README.md) / BlockchainFactory

# Class: BlockchainFactory

## Constructors

### new BlockchainFactory()

> **new BlockchainFactory**(): [`BlockchainFactory`](BlockchainFactory.md)

#### Returns

[`BlockchainFactory`](BlockchainFactory.md)

## Methods

### createBlockchain()

> `static` **createBlockchain**(`networkId`): `Promise`\<[`IBlockchainInterface`](../../../abstract-core/src/interfaces/IBlockchainInterface.md)\>

#### Parameters

• **networkId**: `string`

#### Returns

`Promise`\<[`IBlockchainInterface`](../../../abstract-core/src/interfaces/IBlockchainInterface.md)\>

#### Defined in

[libs/blockchain-factory/src/lib/blockchain-factory.ts:6](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/blockchain-factory/src/lib/blockchain-factory.ts#L6)

***

### getAllBalances()

> `static` **getAllBalances**(`networkId`, `address`): `Promise`\<[`IAddressBalances`](../../../abstract-core/src/interfaces/IAddressBalances.md)\>

#### Parameters

• **networkId**: `string`

• **address**: `string`

#### Returns

`Promise`\<[`IAddressBalances`](../../../abstract-core/src/interfaces/IAddressBalances.md)\>

#### Defined in

[libs/blockchain-factory/src/lib/blockchain-factory.ts:66](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/blockchain-factory/src/lib/blockchain-factory.ts#L66)

***

### getAssetBalance()

> `static` **getAssetBalance**(`networkId`, `address`, `assetId`): `Promise`\<[`IAssetBalance`](../../../abstract-core/src/interfaces/IAssetBalance.md)\>

#### Parameters

• **networkId**: `string`

• **address**: `string`

• **assetId**: `string`

#### Returns

`Promise`\<[`IAssetBalance`](../../../abstract-core/src/interfaces/IAssetBalance.md)\>

#### Defined in

[libs/blockchain-factory/src/lib/blockchain-factory.ts:58](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/blockchain-factory/src/lib/blockchain-factory.ts#L58)

***

### getAssetsBalances()

> `static` **getAssetsBalances**(`networkId`, `address`, `assetIds`): `Promise`\<[`IAssetBalance`](../../../abstract-core/src/interfaces/IAssetBalance.md)[]\>

#### Parameters

• **networkId**: `string`

• **address**: `string`

• **assetIds**: `string`[]

#### Returns

`Promise`\<[`IAssetBalance`](../../../abstract-core/src/interfaces/IAssetBalance.md)[]\>

#### Defined in

[libs/blockchain-factory/src/lib/blockchain-factory.ts:70](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/blockchain-factory/src/lib/blockchain-factory.ts#L70)

***

### getBalance()

> `static` **getBalance**(`networkId`, `address`): `Promise`\<[`IAddressBalance`](../../../abstract-core/src/interfaces/IAddressBalance.md)\>

#### Parameters

• **networkId**: `string`

• **address**: `string`

#### Returns

`Promise`\<[`IAddressBalance`](../../../abstract-core/src/interfaces/IAddressBalance.md)\>

#### Defined in

[libs/blockchain-factory/src/lib/blockchain-factory.ts:54](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/blockchain-factory/src/lib/blockchain-factory.ts#L54)

***

### getConnection()

> `static` **getConnection**(`networkId`): [`IBlockchainInterface`](../../../abstract-core/src/interfaces/IBlockchainInterface.md)

#### Parameters

• **networkId**: `string`

#### Returns

[`IBlockchainInterface`](../../../abstract-core/src/interfaces/IBlockchainInterface.md)

#### Defined in

[libs/blockchain-factory/src/lib/blockchain-factory.ts:48](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/blockchain-factory/src/lib/blockchain-factory.ts#L48)

***

### getTransactionHistory()

> `static` **getTransactionHistory**(`networkId`, `address`): `Promise`\<[`ITransaction`](../../../abstract-core/src/interfaces/ITransaction.md)[]\>

#### Parameters

• **networkId**: `string`

• **address**: `string`

#### Returns

`Promise`\<[`ITransaction`](../../../abstract-core/src/interfaces/ITransaction.md)[]\>

#### Defined in

[libs/blockchain-factory/src/lib/blockchain-factory.ts:78](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/blockchain-factory/src/lib/blockchain-factory.ts#L78)

***

### registerConnector()

> `static` **registerConnector**(`networkId`, `connector`): [`IBlockchainInterface`](../../../abstract-core/src/interfaces/IBlockchainInterface.md)

#### Parameters

• **networkId**: `string`

• **connector**: [`IBlockchainInterface`](../../../abstract-core/src/interfaces/IBlockchainInterface.md)

#### Returns

[`IBlockchainInterface`](../../../abstract-core/src/interfaces/IBlockchainInterface.md)

#### Defined in

[libs/blockchain-factory/src/lib/blockchain-factory.ts:40](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/blockchain-factory/src/lib/blockchain-factory.ts#L40)

***

### subscribeToBalance()

> `static` **subscribeToBalance**(`networkId`, `address`): `Observable`\<[`IAddressBalance`](../../../abstract-core/src/interfaces/IAddressBalance.md)\>

#### Parameters

• **networkId**: `string`

• **address**: `string`

#### Returns

`Observable`\<[`IAddressBalance`](../../../abstract-core/src/interfaces/IAddressBalance.md)\>

#### Defined in

[libs/blockchain-factory/src/lib/blockchain-factory.ts:82](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/blockchain-factory/src/lib/blockchain-factory.ts#L82)
