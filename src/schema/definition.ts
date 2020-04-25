import * as C from 'io-ts/lib/Codec';
import * as G from 'io-ts/lib/Guard';

import { makeCompat, untaggedUnion, Compat } from '../utilities/codecs';
import { isFhirComplex, FhirComplex } from './complex';
import { FhirDescriptableGuard } from './descriptable';
import { isFhirPrimitive, FhirPrimitive } from './primitive';
import { FhirProperty } from './property';
import { isFhirResourceList, FhirResourceList } from './resourceList';

/**
 * Represents a definition of a primitive or complex data type.
 *
 * @see FHIR Data Types {@link http://hl7.org/fhir/datatypes.html}
 */
export type FhirDefinition = FhirComplex | FhirPrimitive | FhirResourceList;

export const FhirDefinition: Compat<FhirDefinition> = untaggedUnion(
  makeCompat(
    FhirComplex,
    G.intersection(
      FhirDescriptableGuard,
      G.type({
        properties: G.record(FhirProperty),
        additionalProperties: G.literal(false),
        required: G.array(G.string),
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
    FhirResourceList,
    G.type({
      oneOf: G.array(
        G.type({
          $ref: G.string,
        }),
      ),
    }),
  ),
);

export const isPrimitiveDefinition: C.Codec<FhirPrimitive> = C.refinement<FhirDefinition, FhirPrimitive>(
  FhirDefinition,
  isFhirPrimitive,
  'FhirPrimitive',
);

export const isComplexDefinition: C.Codec<FhirComplex> = C.refinement<FhirDefinition, FhirComplex>(
  FhirDefinition,
  isFhirComplex,
  'FhirComplex',
);

export const isResourceListDefinition: C.Codec<FhirResourceList> = C.refinement<FhirDefinition, FhirResourceList>(
  FhirDefinition,
  isFhirResourceList,
  'FhirResourceList',
);
