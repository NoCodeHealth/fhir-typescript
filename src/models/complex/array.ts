import * as T from 'fp-ts/lib/Tuple';
import { flow, Refinement } from 'fp-ts/lib/function';

import { isRefArrayItem, FhirEnumArrayItem, FhirRefArrayItem, FhirArray } from '../../schema';
import { prefixFhir } from '../../utilities/naming';
import { toReference } from '../../utilities/refs';
import { FhirModel } from '../model';

export type FhirArrayItemModel = FhirEnumArrayItemModel | FhirRefArrayItemModel;

export interface FhirArrayModel extends FhirModel<'array', FhirArray> {
  items: FhirArrayItemModel;
}

export interface FhirEnumArrayItemModel extends FhirModel<'enum-item', FhirEnumArrayItem> {}

export interface FhirRefArrayItemModel extends FhirModel<'ref-item', FhirRefArrayItem> {}

export const FhirEnumArrayItemModel = (item: FhirEnumArrayItem): FhirEnumArrayItemModel => ({
  _tag: 'enum-item',
  name: 'enum-item',
  ...item,
});

export const FhirRefArrayItemModel = (item: FhirRefArrayItem): FhirRefArrayItemModel => ({
  _tag: 'ref-item',
  name: 'ref-item',
  $ref: flow(toReference, prefixFhir)(item.$ref),
});

const toArrayItem = ({ items }: FhirArray) => {
  return isRefArrayItem(items) ? FhirRefArrayItemModel(items) : FhirEnumArrayItemModel(items);
};

export const FhirArrayModel = (prop: [string, FhirArray]): FhirArrayModel => ({
  _tag: 'array',
  name: T.fst(prop),
  ...T.snd(prop),
  items: toArrayItem(T.snd(prop)),
});

export const isFhirArrayModel: Refinement<unknown, FhirArrayModel> = (u): u is FhirArrayModel =>
  u && typeof u !== 'undefined' && (u as FhirArrayModel)._tag === 'array';

export const isFhirEnumArrayItemModel: Refinement<unknown, FhirEnumArrayItemModel> = (u): u is FhirEnumArrayItemModel =>
  u && typeof u !== 'undefined' && (u as FhirEnumArrayItemModel)._tag === 'enum-item';

export const isFhirRefArrayItemModel: Refinement<unknown, FhirRefArrayItemModel> = (u): u is FhirRefArrayItemModel =>
  u && typeof u !== 'undefined' && (u as FhirRefArrayItemModel)._tag === 'ref-item';
