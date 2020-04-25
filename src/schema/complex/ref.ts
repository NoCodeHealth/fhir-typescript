import * as C from 'io-ts/lib/Codec';
import { Refinement } from 'fp-ts/lib/function';

import { FhirDescriptable } from '../descriptable';
import { FhirProperty } from './index';

/**
 * Represents a property that has the value of another data type referenced in the FHIR JSON schema.
 */
export interface FhirRef extends FhirDescriptable {
  /**
   * A reference to another data type within the FHIR JSON Schema.
   * Takes the form of `#/definitions/<data-type>`.
   */
  $ref: string;
}

export const FhirRef: C.Codec<FhirRef> = C.intersection(
  FhirDescriptable,
  C.type({
    $ref: C.string,
  }),
);

export const isFhirRef: Refinement<FhirProperty, FhirRef> = (prop): prop is FhirRef => '$ref' in prop;
