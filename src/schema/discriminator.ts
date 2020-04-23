import * as C from 'io-ts/lib/Codec';

/**
 * Represents the resource property that discriminates between data types
 * represented by the FHIR JSON schema.
 */
export interface FhirDiscriminator {
  /**
   * The `resourceType` field discriminates between resources that are valid
   * representations of the FHIR JSON schema.
   */
  propertyName: 'resourceType';

  /**
   * A mapping between `resourceType` names and the reference to their definitions.
   */
  mapping: Record<string, string>;
}

export const FhirDiscriminator: C.Codec<FhirDiscriminator> = C.type({
  propertyName: C.literal('resourceType'),
  mapping: C.record(C.string),
});
