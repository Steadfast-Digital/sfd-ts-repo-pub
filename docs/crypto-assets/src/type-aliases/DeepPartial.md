[**@sfd-ts-repo-pub/source v0.0.0**](../../../README.md) • **Docs**

***

[@sfd-ts-repo-pub/source v0.0.0](../../../modules.md) / [crypto-assets/src](../README.md) / DeepPartial

# Type Alias: DeepPartial\<T\>

> **DeepPartial**\<`T`\>: `{ [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P] }`

## Type Parameters

• **T**

## Defined in

[libs/crypto-assets/src/lib/types.ts:2](https://github.com/Steadfast-Digital/sfd-ts-repo-pub/blob/0d845dfd87d2789cbb80b278a373d711dc881248/libs/crypto-assets/src/lib/types.ts#L2)
