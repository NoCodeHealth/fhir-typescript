import * as t from 'io-ts-codegen';

import { ComplexModel, ComplexModelProperty, ComplexModelArrayProperty } from '../models';
import { toReference } from '../utilities/refs';
import { prefixFhir } from '../utilities/naming';
import { fromPrimitive } from './primitive';

const toArrayPropertyCombinator = (p: ComplexModelArrayProperty): t.TypeReference => {
  if ('$ref' in p.items) {
    return t.arrayCombinator(t.identifier(prefixFhir(toReference(p.items.$ref))));
  }

  return t.arrayCombinator(t.keyofCombinator(p.items.enum.map((e) => (typeof e === 'number' ? `"${e}"` : e))));
};

const toComplexPropertyType = (p: ComplexModelProperty): t.TypeReference => {
  switch (p._tag) {
    case 'array':
      return toArrayPropertyCombinator(p);
    case 'const':
      return t.literalCombinator(p.const);
    case 'enum':
      return t.keyofCombinator(p.enum.map((e) => (typeof e === 'number' ? `"${e}"` : e)));
    case 'primitive':
      return fromPrimitive(p);
    case 'ref':
      return t.identifier(prefixFhir(toReference(p.$ref)));
    default:
      return t.stringType;
  }
};

const toComplexCombinator = (m: ComplexModel): t.TypeReference => {
  return t.interfaceCombinator(
    m.properties.map((prop) =>
      t.property(prop.name, toComplexPropertyType(prop), !(m.required || []).includes(prop.name), m.description),
    ),
    m.name,
  );
};

export const toComplexType = (m: ComplexModel): t.TypeDeclaration =>
  t.typeDeclaration(prefixFhir(m.name), toComplexCombinator(m), true, false, m.description);
