import * as C from 'io-ts/lib/Codec';

import { FhirDefinition } from './definition';
import { FhirDescriptable } from './descriptable';
import { FhirDiscriminator } from './discriminator';

/**
 * Represents the FHIR JSON Schema specification.
 *
 * @see JSON Representation of Resources {@link http://hl7.org/fhir/json.html#schema}
 */
export interface FhirSchema extends FhirDescriptable {
  /**
   * The JSON Schema definition for the FHIR JSON Schema.
   */
  $schema: string;

  /**
   * The unique identifier for the FHIR JSON schema.
   */
  id: string;

  /**
   * Discriminates between data types with `resourceType` properties.
   */
  discriminator: FhirDiscriminator;

  /**
   * Declares the possible types that the schema `resourceType` properties can take on.
   */
  oneOf: { $ref: string }[];

  /**
   * The data type definitions for the FHIR JSON schema.
   */
  definitions: Record<string, FhirDefinition>;
}

export const FhirSchema: C.Codec<FhirSchema> = C.intersection(
  FhirDescriptable,
  C.type({
    $schema: C.string,
    id: C.string,
    discriminator: FhirDiscriminator,
    oneOf: C.array(
      C.type({
        $ref: C.string,
      }),
    ),
    definitions: C.record(FhirDefinition),
  }),
);
