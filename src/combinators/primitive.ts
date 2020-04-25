import * as t from 'io-ts-codegen';

import { FhirPrimitiveModel } from '../models';
import { makePrimitiveBrand } from '../validators';

export const fromPrimitive = (m: FhirPrimitiveModel): t.TypeReference => {
  switch (m.type) {
    case 'boolean':
      return t.booleanType;
    case 'number':
      return t.numberType;
    case 'string':
    default:
      return t.stringType;
  }
};

const toPrimitiveBrandCombinator = (m: FhirPrimitiveModel): t.TypeReference =>
  t.brandCombinator(fromPrimitive(m), (x) => makePrimitiveBrand(x, m), m.name);

export const toPrimitiveType = (m: FhirPrimitiveModel): t.TypeDeclaration =>
  t.typeDeclaration(m.name, toPrimitiveBrandCombinator(m), true, false, m.description);
