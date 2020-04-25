import * as A from 'fp-ts/lib/Array';
import { FhirSchema } from '../schema';
import { makeComplex, FhirComplexModel } from './complex';
import { makePrimitives, FhirPrimitiveModel } from './primitive';
import { makeResourceLists, FhirResourceListModel } from './resourceList';

export * from './complex';
export * from './declaration';
export * from './model';
export * from './primitive';
export * from './resourceList';
export * from './schema';

const M = A.getMonoid<FhirComplexModel | FhirPrimitiveModel | FhirResourceListModel>();

export const makeModels = (schema: FhirSchema): (FhirComplexModel | FhirPrimitiveModel | FhirResourceListModel)[] =>
  M.concat(makeComplex(schema), M.concat(makePrimitives(schema), makeResourceLists(schema)));
