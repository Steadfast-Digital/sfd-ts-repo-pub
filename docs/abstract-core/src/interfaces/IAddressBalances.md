[**@sfd-ts-repo-pub/source v0.0.1**](../../../README.md) • **Docs**

***

[@sfd-ts-repo-pub/source v0.0.1](../../../modules.md) / [abstract-core/src](../README.md) / IAddressBalances

# Interface: IAddressBalances

## Extends

- [`IAddressBalance`](IAddressBalance.md)

## Properties

### address

> **address**: `string`

The address for which the balance is fetched.

#### Inherited from

[`IAddressBalance`](IAddressBalance.md).[`address`](IAddressBalance.md#address)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:23](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L23)

***

### fees

> **fees**: [`INativeAssetBalance`](INativeAssetBalance.md)[]

The balance of fees in native assets.

#### Inherited from

[`IAddressBalance`](IAddressBalance.md).[`fees`](IAddressBalance.md#fees)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:25](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L25)

***

### native

> **native**: [`INativeAssetBalance`](INativeAssetBalance.md)

The balance of the native asset.

#### Inherited from

[`IAddressBalance`](IAddressBalance.md).[`native`](IAddressBalance.md#native)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:24](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L24)

***

### tokens

> **tokens**: [`IAssetBalance`](IAssetBalance.md)[]

The balances of various token assets.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:45](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/fc79dbd051d9d700fc06cf580f06693f6be34283/libs/abstract-core/src/lib/abstract-core.ts#L45)
