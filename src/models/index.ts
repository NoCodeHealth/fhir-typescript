import * as A from 'fp-ts/lib/Array';
import { FhirSchema } from '../schema';
import { makeComplex, FhirComplexModel } from './complex';
import { makePrimitives, FhirPrimitiveModel } from './primitive';
import { makeResourceLists, FhirResourceListModel } from './resourceList';

export * from './complex';
export * from './model';
export * from './primitive';
export * from './resourceList';
export * from './schema';

export type FhirModels = FhirComplexModel | FhirPrimitiveModel | FhirResourceListModel;

const M = A.getMonoid<FhirModels>();

export const makeModels = (schema: FhirSchema): FhirModels[] =>
  M.concat(makeComplex(schema), M.concat(makePrimitives(schema), makeResourceLists(schema)));
