import * as C from 'io-ts/lib/Codec';
import * as G from 'io-ts/lib/Guard';
import { Refinement } from 'fp-ts/lib/function';

import { FhirDescriptable, FhirDescriptableGuard } from '../descriptable';
import { FhirPrimitive } from '../primitive';
import { lazy, makeCompat, untaggedUnion, Compat } from '../../utilities/codecs';
/* eslint-disable import/no-cycle */
import { FhirArray, compatArrayEnumItem, compatArrayRefItem } from './array';
import { FhirConst } from './const';
import { FhirEnum } from './enum';
import { FhirRef } from './ref';

export * from './array';
export * from './const';
export * from './enum';
export * from './ref';
/* eslint-enable import/no-cycle */

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

/**
 * Represents the possible property types contained within a complex FHIR element.
 *
 * @see FHIR JSON Representation of Resources {@link http://hl7.org/fhir/json.html#schema}
 */
export type FhirProperty = FhirArray | FhirConst | FhirEnum | FhirPrimitive | FhirRef;

export const FhirProperty: Compat<FhirProperty> = lazy('FhirProperty', () =>
  untaggedUnion(
    makeCompat(
      FhirArray,
      G.intersection(
        FhirDescriptableGuard,
        G.type({
          type: G.literal('array'),
          items: G.intersection(compatArrayEnumItem, compatArrayRefItem),
        }),
      ),
    ),
    makeCompat(
      FhirConst,
      G.intersection(
        FhirDescriptableGuard,
        G.type({
          const: G.string,
        }),
      ),
    ),
    makeCompat(
      FhirEnum,
      G.intersection(
        FhirDescriptableGuard,
        G.type({
          enum: G.array(G.string),
        }),
      ),
    ),
    makeCompat(
      FhirPrimitive,
      G.intersection(
        FhirDescriptableGuard,
        G.intersection(
          G.type({
            type: G.literal('boolean', 'number', 'string'),
          }),
          G.partial({
            pattern: G.string,
          }),
        ),
      ),
    ),
    makeCompat(
      FhirRef,
      G.intersection(
        FhirDescriptableGuard,
        G.type({
          $ref: G.string,
        }),
      ),
    ),
  ),
);

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

export const isFhirComplex: Refinement<unknown, FhirComplex> = (u): u is FhirComplex =>
  typeof u === 'object' && u !== null && 'properties' in u;
