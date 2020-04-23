import * as m from 'monocle-ts';
import * as A from 'fp-ts/lib/Array';
import * as O from 'fp-ts/lib/Option';
import * as R from 'fp-ts/lib/Record';
import * as T from 'fp-ts/lib/Tuple';
import { flow, Refinement } from 'fp-ts/lib/function';
import { pipe } from 'fp-ts/lib/pipeable';

import {
  isComplex,
  isArrayProperty,
  isConstProperty,
  isEnumProperty,
  isPrimitive,
  isRefProperty,
  FhirArrayProperty,
  FhirConstProperty,
  FhirEnumProperty,
  FhirComplex,
  FhirProperty,
  FhirRefProperty,
  FhirSchema,
} from '../schema';
import { objectToEntries } from '../utilities/lenses';
import { Model } from './model';
import { PrimitiveModel } from './primitive';

export interface ComplexModel
  extends Model<'complex', Omit<FhirComplex, 'properties'> & { properties: ComplexModelProperty[] }> {}

export type ComplexModelProperty =
  | PrimitiveModel
  | ComplexModelArrayProperty
  | ComplexModelConstProperty
  | ComplexModelEnumProperty
  | ComplexModelRefProperty;

export interface ComplexModelArrayProperty extends Model<'array', FhirArrayProperty> {}

export const ComplexModelArrayProperty = (prop: [string, FhirArrayProperty]): ComplexModelArrayProperty => ({
  _tag: 'array',
  name: T.fst(prop),
  ...T.snd(prop),
});

export interface ComplexModelConstProperty extends Model<'const', FhirConstProperty> {}

export const ComplexModelConstProperty = (prop: [string, FhirConstProperty]): ComplexModelConstProperty => ({
  _tag: 'const',
  name: T.fst(prop),
  ...T.snd(prop),
});

export interface ComplexModelEnumProperty extends Model<'enum', FhirEnumProperty> {}

export const ComplexModelEnumProperty = (prop: [string, FhirEnumProperty]): ComplexModelEnumProperty => ({
  _tag: 'enum',
  name: T.fst(prop),
  ...T.snd(prop),
});

export interface ComplexModelRefProperty extends Model<'ref', FhirRefProperty> {}

export const ComplexModelRefProperty = (prop: [string, FhirRefProperty]): ComplexModelRefProperty => ({
  _tag: 'ref',
  name: T.fst(prop),
  ...T.snd(prop),
});

const toProperties = (name: string) => (prop: FhirProperty): O.Option<ComplexModelProperty> =>
  isArrayProperty(prop)
    ? O.some(ComplexModelArrayProperty([name, prop]))
    : isConstProperty(prop)
    ? O.some(ComplexModelConstProperty([name, prop]))
    : isEnumProperty(prop)
    ? O.some(ComplexModelEnumProperty([name, prop]))
    : isPrimitive(prop)
    ? O.some(PrimitiveModel([name, prop]))
    : isRefProperty(prop)
    ? O.some(ComplexModelRefProperty([name, prop]))
    : O.none;

export const ComplexModel = ([name, { properties, ...rest }]: [string, FhirComplex]): ComplexModel => ({
  _tag: 'complex',
  name,
  properties: pipe(
    R.toArray(properties),
    A.map((p) => toProperties(T.fst(p))(T.snd(p))),
    A.compact,
  ),
  ...rest,
});

export const isComplexModel: Refinement<unknown, ComplexModel> = (u): u is ComplexModel =>
  u && typeof u !== 'undefined' && (u as ComplexModel)._tag === 'complex';

const lensToComplex = m.Lens.fromProp<FhirSchema>()('definitions')
  .composeIso(objectToEntries())
  .composeTraversal(m.fromTraversable(A.array)())
  .filter(flow(T.snd, isComplex))
  .asFold() as m.Fold<FhirSchema, [string, FhirComplex]>;

export const makeComplex: (schema: FhirSchema) => ComplexModel[] = flow(lensToComplex.getAll, A.map(ComplexModel));
