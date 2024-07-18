[**@sfd-ts-repo-pub/source v0.0.0**](../../../README.md) • **Docs**

***

[@sfd-ts-repo-pub/source v0.0.0](../../../modules.md) / [crypto-assets/src](../README.md) / Network

# Interface: Network

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

[libs/crypto-assets/src/lib/types.ts:59](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/crypto-assets/src/lib/types.ts#L59)

***

### chainId

> **chainId**: `number`

#### Defined in

[libs/crypto-assets/src/lib/types.ts:29](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/crypto-assets/src/lib/types.ts#L29)

***

### connectorLib

> **connectorLib**: `string`

#### Defined in

[libs/crypto-assets/src/lib/types.ts:71](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/crypto-assets/src/lib/types.ts#L71)

***

### family

> **family**: `string`

#### Defined in

[libs/crypto-assets/src/lib/types.ts:57](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/crypto-assets/src/lib/types.ts#L57)

***

### id

> **id**: `string`

#### Defined in

[libs/crypto-assets/src/lib/types.ts:27](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/crypto-assets/src/lib/types.ts#L27)

***

### name

> **name**: `string`

#### Defined in

[libs/crypto-assets/src/lib/types.ts:28](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/crypto-assets/src/lib/types.ts#L28)

***

### type

> **type**: `string`

#### Defined in

[libs/crypto-assets/src/lib/types.ts:58](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/crypto-assets/src/lib/types.ts#L58)

***

### urls

> **urls**: `object`

#### consensus

> **consensus**: `object`

#### consensus.apiKey?

> `optional` **apiKey**: `string`

#### consensus.type

> **type**: `string`

#### consensus.url

> **url**: `string`

#### explorer

> **explorer**: `object`

#### explorer.apiKey?

> `optional` **apiKey**: `string`

#### explorer.type

> **type**: `string`

#### explorer.url

> **url**: `string`

#### rpc

> **rpc**: `object`

#### rpc.apiKey?

> `optional` **apiKey**: `string`

#### rpc.type

> **type**: `string`

#### rpc.url

> **url**: `string`

#### tokenApi

> **tokenApi**: `object`

#### tokenApi.apiKey?

> `optional` **apiKey**: `string`

#### tokenApi.type

> **type**: `string`

#### tokenApi.url

> **url**: `string`

#### txApi

> **txApi**: `object`

#### txApi.apiKey?

> `optional` **apiKey**: `string`

#### txApi.type

> **type**: `string`

#### txApi.url

> **url**: `string`

#### Defined in

[libs/crypto-assets/src/lib/types.ts:30](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/crypto-assets/src/lib/types.ts#L30)
