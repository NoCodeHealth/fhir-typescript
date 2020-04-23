import * as t from 'io-ts-codegen';

import { PrimitiveModel } from '../models';
import { prefixFhir } from '../utilities/naming';
import { makePrimitiveBrand } from '../validators';

export const fromPrimitive = (m: PrimitiveModel): t.TypeReference => {
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

const toPrimitiveBrandCombinator = (m: PrimitiveModel): t.TypeReference =>
  t.brandCombinator(fromPrimitive(m), (x) => makePrimitiveBrand(x, m), prefixFhir(m.name));

export const toPrimitiveType = (m: PrimitiveModel): t.TypeDeclaration =>
  t.typeDeclaration(prefixFhir(m.name), toPrimitiveBrandCombinator(m), true, false, m.description);
