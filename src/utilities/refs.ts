import * as A from 'fp-ts/lib/Array';
import * as O from 'fp-ts/lib/Option';
import { flow } from 'fp-ts/lib/function';

const split = (c: string) => (s: string) => s.split(c);

export const toReference = flow(
  split('/'),
  A.last,
  O.getOrElse(() => ''),
);
