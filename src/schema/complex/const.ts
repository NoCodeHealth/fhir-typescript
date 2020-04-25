import * as C from 'io-ts/lib/Codec';
import { Refinement } from 'fp-ts/lib/function';

import { FhirDescriptable } from '../descriptable';
import { FhirProperty } from './index';

/**
 * Represents a property with a literal value.
 */
export interface FhirConst extends FhirDescriptable {
  /**
   * The literal value of the property.
   */
  const: string;
}

export const FhirConst: C.Codec<FhirConst> = C.intersection(
  FhirDescriptable,
  C.type({
    const: C.string,
  }),
);

export const isFhirConst: Refinement<FhirProperty, FhirConst> = (prop): prop is FhirConst => 'const' in prop;
