import * as T from 'fp-ts/lib/Tuple';
import { flow, Refinement } from 'fp-ts/lib/function';

import { FhirRef } from '../../schema';
import { prefixFhir } from '../../utilities/naming';
import { toReference } from '../../utilities/refs';
import { FhirModel } from '../model';

export interface FhirRefModel extends FhirModel<'ref', FhirRef> {}

export const FhirRefModel = (prop: [string, FhirRef]): FhirRefModel => ({
  _tag: 'ref',
  name: T.fst(prop),
  ...T.snd(prop),
  $ref: flow(toReference, prefixFhir)(T.snd(prop).$ref),
});

export const isFhirRefModel: Refinement<unknown, FhirRefModel> = (u): u is FhirRefModel =>
  u && typeof u !== 'undefined' && (u as FhirRefModel)._tag === 'ref';
