import * as m from 'monocle-ts';
import * as A from 'fp-ts/lib/Array';
import * as O from 'fp-ts/lib/Option';
import * as R from 'fp-ts/lib/Record';
import * as T from 'fp-ts/lib/Tuple';
import { flow, Refinement } from 'fp-ts/lib/function';
import { pipe } from 'fp-ts/lib/pipeable';

import {
  isFhirArray,
  isFhirComplex,
  isFhirConst,
  isFhirEnum,
  isFhirPrimitive,
  isFhirRef,
  FhirComplex,
  FhirProperty,
  FhirSchema,
} from '../../schema';
import { objectToEntries } from '../../utilities/lenses';
import { prefixFhir } from '../../utilities/naming';
import { FhirModel } from '../model';
import { FhirPrimitiveModel } from '../primitive';
import { FhirArrayModel } from './array';
import { FhirConstModel } from './const';
import { FhirEnumModel } from './enum';
import { FhirRefModel } from './ref';

export * from './array';
export * from './const';
export * from './enum';
export * from './ref';

export interface FhirComplexModel
  extends FhirModel<'complex', Omit<FhirComplex, 'properties'> & { properties: FhirPropertyModel[] }> {}

export type FhirPropertyModel = FhirPrimitiveModel | FhirArrayModel | FhirConstModel | FhirEnumModel | FhirRefModel;

const toProperties = (name: string) => (prop: FhirProperty): O.Option<FhirPropertyModel> =>
  isFhirArray(prop)
    ? O.some(FhirArrayModel([name, prop]))
    : isFhirConst(prop)
    ? O.some(FhirConstModel([name, prop]))
    : isFhirEnum(prop)
    ? O.some(FhirEnumModel([name, prop]))
    : isFhirPrimitive(prop)
    ? O.some(FhirPrimitiveModel([name, prop]))
    : isFhirRef(prop)
    ? O.some(FhirRefModel([name, prop]))
    : O.none;

export const FhirComplexModel = ([name, { properties, ...rest }]: [string, FhirComplex]): FhirComplexModel => ({
  _tag: 'complex',
  name: prefixFhir(name),
  properties: pipe(
    R.toArray(properties),
    A.map((p) => toProperties(T.fst(p))(T.snd(p))),
    A.compact,
  ),
  ...rest,
});

export const isFhirComplexModel: Refinement<unknown, FhirComplexModel> = (u): u is FhirComplexModel =>
  u && typeof u !== 'undefined' && (u as FhirComplexModel)._tag === 'complex';

const lensToComplex = m.Lens.fromProp<FhirSchema>()('definitions')
  .composeIso(objectToEntries())
  .composeTraversal(m.fromTraversable(A.array)())
  .filter(flow(T.snd, isFhirComplex))
  .asFold() as m.Fold<FhirSchema, [string, FhirComplex]>;

export const makeComplex: (schema: FhirSchema) => FhirComplexModel[] = flow(
  lensToComplex.getAll,
  A.map(FhirComplexModel),
);
