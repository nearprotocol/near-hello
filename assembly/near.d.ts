declare interface Object {
  encode(): Uint8Array
}

declare function decode<T>(arr: Uint8Array | null): T;
