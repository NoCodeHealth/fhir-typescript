import * as C from 'io-ts/lib/Codec';
import * as D from 'io-ts/lib/Decoder';
import * as E from 'io-ts/lib/Encoder';
import * as G from 'io-ts/lib/Guard';

export interface Compat<A> extends D.Decoder<A>, E.Encoder<A>, G.Guard<A> {}

export const makeCompat: <A>(c: C.Codec<A>, g: G.Guard<A>) => Compat<A> = (c, g) => ({
  is: g.is,
  decode: c.decode,
  encode: c.encode,
});

export const lazy = <A>(id: string, f: () => Compat<A>): Compat<A> => {
  return makeCompat(C.lazy(id, f), G.guard.lazy(id, f));
};

export const untaggedUnion: <A extends ReadonlyArray<unknown>>(
  ...ms: { [K in keyof A]: Compat<A[K]> }
) => Compat<A[number]> = (...ms) => ({
  is: G.guard.union(...ms).is,
  decode: D.decoder.union(...ms).decode,
  encode: (a) => ms.find((m) => m.is(a)),
});
