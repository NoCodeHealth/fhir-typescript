import * as m from 'monocle-ts';
import * as A from 'fp-ts/lib/Array';
import * as R from 'fp-ts/lib/Record';
import { flow, Refinement } from 'fp-ts/lib/function';

import { isResourceList, FhirDefinition, FhirResourceList, FhirSchema } from '../schema';
import { toReference } from '../utilities/refs';
import { Model } from './model';

export interface ResourceListModel extends Model<'resource-list', { resources: string[] }> {}

export const isResourceListModel: Refinement<unknown, ResourceListModel> = (u): u is ResourceListModel =>
  u && typeof u !== 'undefined' && (u as ResourceListModel)._tag === 'resource-list';

const lensToRef = m.Lens.fromProp<{ $ref: string }>()('$ref');

export const lensToResourceList: m.Fold<FhirSchema, { $ref: string }[]> = m.Lens.fromProp<FhirSchema>()('definitions')
  .composeTraversal(m.fromTraversable(R.record)())
  .composePrism(m.Prism.fromPredicate<FhirDefinition, FhirResourceList>(isResourceList))
  .composeLens(m.Lens.fromProp<FhirResourceList>()('oneOf'))
  .asFold();

const ResourceListModel = (t: { $ref: string }[]): ResourceListModel => ({
  _tag: 'resource-list',
  name: 'ResourceList',
  resources: A.array.map(m.fromFoldable(A.array)<{ $ref: string }>().composeLens(lensToRef).getAll(t), toReference),
});

export const makeResourceLists: (schema: FhirSchema) => ResourceListModel[] = flow(
  lensToResourceList.getAll,
  A.map(ResourceListModel),
);
