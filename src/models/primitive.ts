import * as m from 'monocle-ts';
import * as A from 'fp-ts/lib/Array';
import * as T from 'fp-ts/lib/Tuple';
import { flow, Refinement } from 'fp-ts/lib/function';

import { isPrimitive, FhirPrimitive, FhirSchema } from '../schema';
import { objectToEntries } from '../utilities/lenses';
import { Model } from './model';

export interface PrimitiveModel extends Model<'primitive', FhirPrimitive> {}

export const PrimitiveModel = (def: [string, FhirPrimitive]): PrimitiveModel => ({
  _tag: 'primitive',
  name: T.fst(def),
  ...T.snd(def),
});

export const isPrimitiveModel: Refinement<unknown, PrimitiveModel> = (u): u is PrimitiveModel =>
  u && typeof u !== 'undefined' && (u as PrimitiveModel)._tag === 'primitive';

const lensToPrimitives = m.Lens.fromProp<FhirSchema>()('definitions')
  .composeIso(objectToEntries())
  .composeTraversal(m.fromTraversable(A.array)())
  .filter(flow(T.snd, isPrimitive))
  .asFold() as m.Fold<FhirSchema, [string, FhirPrimitive]>;

export const makePrimitives: (schema: FhirSchema) => PrimitiveModel[] = flow(
  lensToPrimitives.getAll,
  A.map(PrimitiveModel),
);
