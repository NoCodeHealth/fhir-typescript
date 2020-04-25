import * as m from 'monocle-ts';
import * as A from 'fp-ts/lib/Array';
import { pipe } from 'fp-ts/lib/pipeable';

import {
  isFhirArrayModel,
  isFhirRefArrayItemModel,
  isFhirRefModel,
  FhirComplexModel,
  FhirArrayItemModel,
  FhirArrayModel,
  FhirPrimitiveModel,
  FhirPropertyModel,
  FhirRefModel,
  FhirRefArrayItemModel,
  FhirResourceListModel,
} from '../models';

const lensToComplexRefs = m.Lens.fromProp<FhirComplexModel>()('properties')
  .composeTraversal(m.fromTraversable(A.array)())
  .composePrism(m.Prism.fromPredicate<FhirPropertyModel, FhirRefModel>(isFhirRefModel))
  .composeGetter(new m.Getter((a) => a.$ref));

const lensToComplexArrayRefs = m.Lens.fromProp<FhirComplexModel>()('properties')
  .composeTraversal(m.fromTraversable(A.array)())
  .composePrism(m.Prism.fromPredicate<FhirPropertyModel, FhirArrayModel>(isFhirArrayModel))
  .composeLens(m.Lens.fromProp<FhirArrayModel>()('items'))
  .composePrism(m.Prism.fromPredicate<FhirArrayItemModel, FhirRefArrayItemModel>(isFhirRefArrayItemModel))
  .composeGetter(new m.Getter((a) => a.$ref));

const lensToResourceListRefs = m.Lens.fromProp<FhirResourceListModel>()('resources').asFold();

export const makeReferences = (model: FhirComplexModel | FhirPrimitiveModel | FhirResourceListModel): string[] => {
  switch (model._tag) {
    case 'complex':
      return [...lensToComplexRefs.getAll(model), ...lensToComplexArrayRefs.getAll(model)];
    case 'resource-list':
      return pipe(lensToResourceListRefs.getAll(model), A.flatten);
    default:
      return [];
  }
};
