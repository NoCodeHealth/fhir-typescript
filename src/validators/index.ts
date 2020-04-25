import { FhirPrimitiveModel } from '../models';
import { checkInteger } from './checkInteger';
import { checkMaximum } from './checkMaximum';
import { checkMaxItems } from './checkMaxItems';
import { checkMaxLength } from './checkMaxLength';
import { checkMinimum } from './checkMinimum';
import { checkMinItems } from './checkMinItems';
import { checkMinLength } from './checkMinLength';
import { checkMultipleOf } from './checkMultipleOf';
import { checkPattern } from './checkPattern';

export const makePrimitiveBrand = (x: string, m: FhirPrimitiveModel) =>
  m.pattern ? checkPattern(x, m.pattern) : 'true';

export const generateChecks = <T extends Record<string, any>>(x: string, schema: T): string => {
  const checks = [
    ...(schema.pattern ? [checkPattern(x, schema.pattern)] : []),
    ...(schema.minLength ? [checkMinLength(x, schema.minLength)] : []),
    ...(schema.maxLength ? [checkMaxLength(x, schema.maxLength)] : []),
    ...(schema.minimum ? [checkMinimum(x, schema.minimum)] : []),
    ...(schema.maximum ? [checkMaximum(x, schema.maximum)] : []),
    ...(schema.multipleOf ? [checkMultipleOf(x, schema.multipleOf)] : []),
    ...(schema.type === 'integer' ? [checkInteger(x)] : []),
    ...(schema.minItems ? [checkMinItems(x, schema.minItems)] : []),
    ...(schema.maxItems ? [checkMaxItems(x, schema.maxItems)] : []),
  ];

  return checks.length ? checks.join(' && ') : 'true';
};
