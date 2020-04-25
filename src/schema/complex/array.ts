import * as C from 'io-ts/lib/Codec';
import * as G from 'io-ts/lib/Guard';
import { Refinement } from 'fp-ts/lib/function';

import { makeCompat, untaggedUnion, Compat } from '../../utilities/codecs';
import { FhirDescriptable } from '../descriptable';
import { FhirProperty } from './index';

/**
 * Represents an array property of a complex FHIR element. Specifies the type of
 * items that may be present in the array.
 *
 * @see FHIR JSON Representation of Resources {@link http://hl7.org/fhir/json.html#schema}
 */
export interface FhirArray extends FhirDescriptable {
  /**
   * The property type. Restricted to the literal value `"array"` for array properties.
   */
  type: 'array';

  /**
   * The items that may be contained within the array.
   */
  items: FhirArrayItem;
}

/**
 * Represents an item of an FHIR array property.
 */
export type FhirArrayItem = FhirEnumArrayItem | FhirRefArrayItem;

/**
 * Represents an array item that can take on one of a discriminated union of unique enumerated
 * string values.
 */
export interface FhirEnumArrayItem {
  /**
   * The possible values for the item.
   */
  enum: string[];
}

/**
 * Represents a reference to another data type within the FHIR JSON Schema which defines the data
 * type for the items in the array.
 */
export interface FhirRefArrayItem {
  /**
   * A reference to another data type within the FHIR JSON Schema.
   * Takes the form of `#/definitions/<data-type>`.
   */
  $ref: string;
}

export const FhirEnumArrayItem: C.Codec<FhirEnumArrayItem> = C.type({
  enum: C.array(C.string),
});

export const FhirRefArrayItem: C.Codec<FhirRefArrayItem> = C.type({
  $ref: C.string,
});

export const compatArrayEnumItem = makeCompat(
  FhirEnumArrayItem,
  G.type({
    enum: G.array(G.string),
  }),
);

export const compatArrayRefItem = makeCompat(
  FhirRefArrayItem,
  G.type({
    $ref: G.string,
  }),
);

export const FhirArrayItem: Compat<FhirArrayItem> = untaggedUnion(compatArrayEnumItem, compatArrayRefItem);

export const FhirArray: C.Codec<FhirArray> = C.intersection(
  FhirDescriptable,
  C.type({
    type: C.literal('array'),
    items: FhirArrayItem,
  }),
);

export const isEnumArrayItem: Refinement<FhirArrayItem, FhirEnumArrayItem> = (item): item is FhirEnumArrayItem =>
  'enum' in item;

export const isRefArrayItem: Refinement<FhirArrayItem, FhirRefArrayItem> = (item): item is FhirRefArrayItem =>
  '$ref' in item;

export const isFhirArray: Refinement<FhirProperty, FhirArray> = (prop): prop is FhirArray => 'items' in prop;
