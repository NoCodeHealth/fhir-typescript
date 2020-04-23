import * as A from 'fp-ts/lib/Array';

import { FhirSchema } from '../schema';
import { makeComplex, ComplexModel } from './complex';
import { makePrimitives, PrimitiveModel } from './primitive';
import { makeResourceLists, ResourceListModel } from './resourceList';

export * from './complex';
export * from './model';
export * from './primitive';
export * from './resourceList';
export * from './schema';

const M = A.getMonoid<ComplexModel | PrimitiveModel | ResourceListModel>();

export const makeModels = (schema: FhirSchema) =>
  M.concat(makeComplex(schema), M.concat(makePrimitives(schema), makeResourceLists(schema)));
