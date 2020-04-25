import * as m from 'monocle-ts';
import * as A from 'fp-ts/lib/Array';
import * as T from 'fp-ts/lib/Tuple';
import { flow } from 'fp-ts/lib/function';
import { pipe } from 'fp-ts/lib/pipeable';

import { isFhirPrimitive, FhirPrimitive, FhirSchema } from '../schema';
import { objectToEntries } from '../utilities/lenses';
import { prefixFhir } from '../utilities/naming';
import { FhirModel } from './model';

export interface FhirPrimitiveModel extends FhirModel<'primitive', FhirPrimitive> {}

export const FhirPrimitiveModel = (def: [string, FhirPrimitive]): FhirPrimitiveModel => ({
  _tag: 'primitive',
  name: pipe(T.fst(def), prefixFhir),
  ...T.snd(def),
});

const lensToPrimitives = m.Lens.fromProp<FhirSchema>()('definitions')
  .composeIso(objectToEntries())
  .composeTraversal(m.fromTraversable(A.array)())
  .filter(flow(T.snd, isFhirPrimitive))
  .asFold() as m.Fold<FhirSchema, [string, FhirPrimitive]>;

export const makePrimitives: (schema: FhirSchema) => FhirPrimitiveModel[] = flow(
  lensToPrimitives.getAll,
  A.map(FhirPrimitiveModel),
);
