import * as t from 'io-ts-codegen';

import {
  isComplexModel,
  isPrimitiveModel,
  isResourceListModel,
  ComplexModel,
  PrimitiveModel,
  ResourceListModel,
} from '../models';
import { toComplexType } from './complex';
import { toPrimitiveType } from './primitive';
import { toResourceListType } from './resourceList';

export * from './complex';
export * from './primitive';
export * from './resourceList';

export const makeTypes = (
  model: ComplexModel | PrimitiveModel | ResourceListModel,
): t.TypeDeclaration | t.CustomTypeDeclaration =>
  isComplexModel(model)
    ? toComplexType(model)
    : isPrimitiveModel(model)
    ? toPrimitiveType(model)
    : isResourceListModel(model)
    ? toResourceListType(model)
    : t.customTypeDeclaration('unknown', 'unknown', 'unknown');
