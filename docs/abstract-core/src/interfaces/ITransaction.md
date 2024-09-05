[**@sfd-ts-repo-pub/source v0.0.1**](../../../README.md) • **Docs**

***

[@sfd-ts-repo-pub/source v0.0.1](../../../modules.md) / [abstract-core/src](../README.md) / ITransaction

# Interface: ITransaction

## Properties

### asset

> **asset**: [`INativeAsset`](../../../crypto-assets/src/interfaces/INativeAsset.md) \| [`ITokenAsset`](../../../crypto-assets/src/interfaces/ITokenAsset.md)

The asset involved in the transaction.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:75](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L75)

***

### blockNumber

> **blockNumber**: `number`

The block number in which the transaction was included.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:72](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L72)

***

### fee

> **fee**: `object`

The transaction fee.

#### amount

> **amount**: `string`

#### asset

> **asset**: [`INativeAsset`](../../../crypto-assets/src/interfaces/INativeAsset.md)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:68](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L68)

***

### from

> **from**: `string`

The address from which the transaction was sent.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:65](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L65)

***

### hash

> **hash**: `string`

The hash of the transaction.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:64](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L64)

***

### nonce

> **nonce**: `number`

The nonce of the transaction.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:76](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L76)

***

### status

> **status**: `"confirmed"` \| `"pending"` \| `"failed"`

The status of the transaction.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:74](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L74)

***

### timestamp

> **timestamp**: `number`

The timestamp of the transaction.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:73](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L73)

***

### to

> **to**: `null` \| `string`

The address to which the transaction was sent (can be null).

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:66](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L66)

***

### value

> **value**: `string`

The value of the transaction.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:67](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L67)
