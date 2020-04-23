import { Refinement } from 'fp-ts/lib/function';

import { FhirSchema } from '../schema';
import { Model } from './model';

export interface SchemaModel extends Model<'schema', Pick<FhirSchema, '$schema' | 'id' | 'description'>> {}

export const isSchemaModel: Refinement<unknown, SchemaModel> = (u): u is SchemaModel =>
  u && typeof u !== 'undefined' && (u as SchemaModel)._tag === 'schema';

export const SchemaModel = ({ $schema, id, description }: FhirSchema): SchemaModel => ({
  _tag: 'schema',
  name: 'schema',
  $schema,
  id,
  description,
});
