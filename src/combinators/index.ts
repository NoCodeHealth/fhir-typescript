import * as t from 'io-ts-codegen';

import { FhirModels } from '../models';
import { toComplexType } from './complex';
import { toPrimitiveType } from './primitive';
import { toResourceListType } from './resourceList';

export * from './complex';
export * from './primitive';
export * from './resourceList';

export const makeTypes = (model: FhirModels): t.TypeDeclaration => {
  switch (model._tag) {
    default:
    case 'complex':
      return toComplexType(model);
    case 'primitive':
      return toPrimitiveType(model);
    case 'resource-list':
      return toResourceListType(model);
  }
};
