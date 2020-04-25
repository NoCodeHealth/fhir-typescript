import * as C from 'io-ts/lib/Codec';
import { Refinement } from 'fp-ts/lib/function';

/**
 * Represents the resource types referenced by the FHIR JSON schema. A valid
 * FHIR JSON representation of a resource must be one of the references within
 * the `oneOf` dictionary.
 */
export interface FhirResourceList {
  /**
   * A dictionary of references to valid FHIR JSON schema resources.
   */
  oneOf: { $ref: string }[];
}

export const isFhirResourceList: Refinement<unknown, FhirResourceList> = (u): u is FhirResourceList =>
  typeof u === 'object' && u !== null && 'oneOf' in u;

export const FhirResourceList: C.Codec<FhirResourceList> = C.type({
  oneOf: C.array(
    C.type({
      $ref: C.string,
    }),
  ),
});
