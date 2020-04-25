import * as C from 'io-ts/lib/Codec';
import { Refinement } from 'fp-ts/lib/function';

import { FhirDescriptable } from '../descriptable';
import { FhirProperty } from './index';

/**
 * Represents a property that can take on one of a discriminated union of unique enumerated string
 * values.
 */
export interface FhirEnum extends FhirDescriptable {
  /**
   * The possible values for the property.
   */
  enum: string[];
}

export const FhirEnum: C.Codec<FhirEnum> = C.intersection(
  FhirDescriptable,
  C.type({
    enum: C.array(C.string),
  }),
);

export const isFhirEnum: Refinement<FhirProperty, FhirEnum> = (prop): prop is FhirEnum => 'enum' in prop;
