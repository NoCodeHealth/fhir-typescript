import * as m from 'monocle-ts';
import * as A from 'fp-ts/lib/Array';
import * as R from 'fp-ts/lib/Record';
import { flow } from 'fp-ts/lib/function';

import { isFhirResourceList, FhirDefinition, FhirResourceList, FhirSchema } from '../schema';
import { toReference } from '../utilities/refs';
import { FhirModel } from './model';

export interface FhirResourceListModel extends FhirModel<'resource-list', { resources: string[] }> {}

const lensToRef = m.Lens.fromProp<{ $ref: string }>()('$ref');

export const lensToResourceList: m.Fold<FhirSchema, { $ref: string }[]> = m.Lens.fromProp<FhirSchema>()('definitions')
  .composeTraversal(m.fromTraversable(R.record)())
  .composePrism(m.Prism.fromPredicate<FhirDefinition, FhirResourceList>(isFhirResourceList))
  .composeLens(m.Lens.fromProp<FhirResourceList>()('oneOf'))
  .asFold();

const FhirResourceListModel = (t: { $ref: string }[]): FhirResourceListModel => ({
  _tag: 'resource-list',
  name: 'FhirResourceList',
  resources: A.array.map(m.fromFoldable(A.array)<{ $ref: string }>().composeLens(lensToRef).getAll(t), toReference),
});

export const makeResourceLists: (schema: FhirSchema) => FhirResourceListModel[] = flow(
  lensToResourceList.getAll,
  A.map(FhirResourceListModel),
);
