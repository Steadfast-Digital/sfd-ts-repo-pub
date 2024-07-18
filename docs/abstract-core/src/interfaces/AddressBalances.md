[**@sfd-ts-repo-pub/source v0.0.0**](../../../README.md) • **Docs**

***

[@sfd-ts-repo-pub/source v0.0.0](../../../modules.md) / [abstract-core/src](../README.md) / AddressBalances

# Interface: AddressBalances

## Extends

- [`AddressBalance`](AddressBalance.md)

## Properties

### address

> **address**: `string`

The address for which the balance is fetched.

#### Inherited from

[`AddressBalance`](AddressBalance.md).[`address`](AddressBalance.md#address)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:23](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/abstract-core/src/lib/abstract-core.ts#L23)

***

### fees

> **fees**: [`NativeAssetBalance`](../type-aliases/NativeAssetBalance.md)[]

The balance of fees in native assets.

#### Inherited from

[`AddressBalance`](AddressBalance.md).[`fees`](AddressBalance.md#fees)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:25](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/abstract-core/src/lib/abstract-core.ts#L25)

***

### native

> **native**: [`NativeAssetBalance`](../type-aliases/NativeAssetBalance.md)

The balance of the native asset.

#### Inherited from

[`AddressBalance`](AddressBalance.md).[`native`](AddressBalance.md#native)

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:24](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/abstract-core/src/lib/abstract-core.ts#L24)

***

### tokens

> **tokens**: [`AssetBalance`](AssetBalance.md)[]

The balances of various token assets.

#### Defined in

[libs/abstract-core/src/lib/abstract-core.ts:45](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/abstract-core/src/lib/abstract-core.ts#L45)
