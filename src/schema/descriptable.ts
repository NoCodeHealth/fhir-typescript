import * as C from 'io-ts/lib/Codec';
import * as G from 'io-ts/lib/Guard';

/**
 * Represents an data type in the FHIR specification that has an associated description.
 */
export interface FhirDescriptable {
  /**
   * The description of the data type.
   */
  description: string;
}

export const FhirDescriptable: C.Codec<FhirDescriptable> = C.type({
  description: C.string,
});

export const FhirDescriptableGuard: G.Guard<FhirDescriptable> = G.type({
  description: G.string,
});
