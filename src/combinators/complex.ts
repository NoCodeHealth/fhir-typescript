import * as t from 'io-ts-codegen';
import { pipe } from 'fp-ts/lib/pipeable';

import { ComplexModel, ComplexModelProperty, ComplexModelArrayProperty } from '../models';
import { toReference } from '../utilities/refs';
import { prefixFhir } from '../utilities/naming';
import { fromPrimitive } from './primitive';

const toArrayPropertyCombinator = (p: ComplexModelArrayProperty): t.TypeReference => {
  if ('$ref' in p.items) {
    return pipe(p.items.$ref, toReference, prefixFhir, t.identifier, t.arrayCombinator);
  }

  return pipe(p.items.enum, t.keyofCombinator, t.arrayCombinator);
};

const toComplexPropertyType = (p: ComplexModelProperty): t.TypeReference => {
  switch (p._tag) {
    case 'array':
      return toArrayPropertyCombinator(p);
    case 'const':
      return t.literalCombinator(p.const);
    case 'enum':
      return t.keyofCombinator(p.enum);
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
