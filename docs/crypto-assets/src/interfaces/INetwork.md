[**@sfd-ts-repo-pub/source v0.0.1**](../../../README.md) • **Docs**

***

[@sfd-ts-repo-pub/source v0.0.1](../../../modules.md) / [crypto-assets/src](../README.md) / INetwork

# Interface: INetwork

## Properties

### bip44

> **bip44**: `object`

#### purpose

> **purpose**: `object`

#### purpose.default

> **default**: `number`

#### purpose.segwit?

> `optional` **segwit**: `number`

#### purpose.staking?

> `optional` **staking**: `number`

#### purpose.taproot?

> `optional` **taproot**: `number`

#### slip

> **slip**: `number`

#### path()

##### Parameters

• **purpose?**: `number`

• **slip?**: `number`

• **account?**: `number`

• **change?**: `number`

• **index?**: `number`

##### Returns

`string`

#### Defined in

[libs/crypto-assets/src/lib/types.ts:48](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/crypto-assets/src/lib/types.ts#L48)

***

### chainId

> **chainId**: `number`

#### Defined in

[libs/crypto-assets/src/lib/types.ts:44](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/crypto-assets/src/lib/types.ts#L44)

***

### connectorLib

> **connectorLib**: `string`

#### Defined in

[libs/crypto-assets/src/lib/types.ts:66](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/crypto-assets/src/lib/types.ts#L66)

***

### family

> **family**: `string`

#### Defined in

[libs/crypto-assets/src/lib/types.ts:46](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/crypto-assets/src/lib/types.ts#L46)

***

### id

> **id**: `string`

#### Defined in

[libs/crypto-assets/src/lib/types.ts:42](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/crypto-assets/src/lib/types.ts#L42)

***

### name

> **name**: `string`

#### Defined in

[libs/crypto-assets/src/lib/types.ts:43](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/crypto-assets/src/lib/types.ts#L43)

***

### type

> **type**: `string`

#### Defined in

[libs/crypto-assets/src/lib/types.ts:47](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/crypto-assets/src/lib/types.ts#L47)

***

### urls

> **urls**: [`INetworkRpc`](INetworkRpc.md)[]

#### Defined in

[libs/crypto-assets/src/lib/types.ts:45](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/crypto-assets/src/lib/types.ts#L45)
