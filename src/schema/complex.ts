import * as C from 'io-ts/lib/Codec';
import { Refinement } from 'fp-ts/lib/function';

import { FhirDescriptable } from './descriptable';
import { FhirProperty } from './property';

/**
 * A complex data type as defined in the FHIR JSON schema specification.
 *
 * @see Representation of Elements and Complex Data Types {@link http://hl7.org/fhir/json.html#complex}
 */
export interface FhirComplex extends FhirDescriptable {
  /**
   * The property definitions for the data type.
   */
  properties: Record<string, FhirProperty>;

  /**
   * Additional properties for the data type.
   */
  additionalProperties: false;

  /**
   * Properties that must be present for the data type to be considered valid.
   */
  required?: string[];
}

export const isComplex: Refinement<unknown, FhirComplex> = (u): u is FhirComplex =>
  typeof u === 'object' && u !== null && 'properties' in u;

export const FhirComplex: C.Codec<FhirComplex> = C.intersection(
  FhirDescriptable,
  C.intersection(
    C.type({
      properties: C.record(FhirProperty),
      additionalProperties: C.literal(false),
    }),
    C.partial({
      required: C.array(C.string),
    }),
  ),
);
