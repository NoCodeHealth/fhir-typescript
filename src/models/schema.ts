import { FhirSchema } from '../schema';
import { FhirModel } from './model';

export interface FhirSchemaModel extends FhirModel<'schema', Pick<FhirSchema, '$schema' | 'id' | 'description'>> {}

export const FhirSchemaModel = ({ $schema, id, description }: FhirSchema): FhirSchemaModel => ({
  _tag: 'schema',
  name: 'schema',
  $schema,
  id,
  description,
});
