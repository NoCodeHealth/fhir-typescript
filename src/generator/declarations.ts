import * as A from 'fp-ts/lib/Array';

import { FhirComplexModel, FhirPrimitiveModel, FhirResourceListModel } from '../models';
import { makeReferences } from './references';

export interface Declaration {
  model: FhirComplexModel | FhirPrimitiveModel | FhirResourceListModel;
  references: string[];
}

export const Declaration = (model: FhirComplexModel | FhirPrimitiveModel | FhirResourceListModel): Declaration => ({
  model,
  references: makeReferences(model),
});

export const toDeclarations: (
  models: (FhirComplexModel | FhirPrimitiveModel | FhirResourceListModel)[],
) => Declaration[] = A.map(Declaration);
