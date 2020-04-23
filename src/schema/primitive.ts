import * as C from 'io-ts/lib/Codec';
import { Refinement } from 'fp-ts/lib/function';

import { FhirDescriptable } from './descriptable';

/**
 * A primitive data type as defined in the FHIR JSON schema specification.
 *
 * @see Representation of Primitive Elements {@link http://hl7.org/fhir/json.html#primitive}
 */
export interface FhirPrimitive extends FhirDescriptable {
  /**
   * The type of the primitive. Must be one of `boolean`, `number`, or `string`.
   */
  type: 'boolean' | 'number' | 'string';
  pattern?: string;
}

export const isPrimitive: Refinement<unknown, FhirPrimitive> = (u): u is FhirPrimitive =>
  typeof u === 'object' &&
  u !== null &&
  !('properties' in u) &&
  'type' in u &&
  ['boolean', 'number', 'string'].some((key) => (u as any).type === key);

export const FhirPrimitive: C.Codec<FhirPrimitive> = C.intersection(
  FhirDescriptable,
  C.intersection(
    C.type({
      type: C.literal('boolean', 'number', 'string'),
    }),
    C.partial({
      pattern: C.string,
    }),
  ),
);
