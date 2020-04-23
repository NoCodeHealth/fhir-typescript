import * as m from 'monocle-ts';

/**
 * Converts the provided object into an array of `[key, value]` tuples.
 */
export const objectToEntries = <T>() =>
  new m.Iso<Record<string, T>, Array<[string, T]>>(
    (s) => Object.entries(s),
    (a) => a.reduce((q, r) => ({ ...q, [r[0]]: r[1] }), {}),
  );
