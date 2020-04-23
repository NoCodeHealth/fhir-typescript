import * as C from 'io-ts/lib/Codec';
import * as G from 'io-ts/lib/Guard';
import { Refinement } from 'fp-ts/lib/function';

import { makeCompat, untaggedUnion, Compat } from '../utilities/codecs';
import { FhirDescriptable, FhirDescriptableGuard } from './descriptable';
import { isPrimitive, FhirPrimitive } from './primitive';

/**
 * Represents the possible property types contained within a complex FHIR element.
 *
 * @see FHIR JSON Representation of Resources {@link http://hl7.org/fhir/json.html#schema}
 */
export type FhirProperty =
  | FhirArrayProperty
  | FhirConstProperty
  | FhirEnumProperty
  | FhirPrimitiveProperty
  | FhirRefProperty;

/**
 * Represents an array property of a complex FHIR element. Specifies the type of
 * items that may be present in the array.
 *
 * @see FHIR JSON Representation of Resources {@link http://hl7.org/fhir/json.html#schema}
 */
export interface FhirArrayProperty extends FhirDescriptable {
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

/**
 * Represents a property with a literal value.
 */
export interface FhirConstProperty extends FhirDescriptable {
  /**
   * The literal value of the property.
   */
  const: string;
}

/**
 * Represents a property that can take on one of a discriminated union of unique enumerated string
 * values.
 */
export interface FhirEnumProperty extends FhirDescriptable {
  /**
   * The possible values for the property.
   */
  enum: string[];
}

/**
 * Represents a property that has a primitive value (i.e. `boolean`, `number`, or `string`).
 */
export type FhirPrimitiveProperty = FhirPrimitive;

/**
 * Represents a property that has the value of another data type referenced in the FHIR JSON schema.
 */
export interface FhirRefProperty extends FhirDescriptable {
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

const compatArrayEnumItem = makeCompat(
  FhirEnumArrayItem,
  G.type({
    enum: G.array(G.string),
  }),
);

const compatArrayRefItem = makeCompat(
  FhirRefArrayItem,
  G.type({
    $ref: G.string,
  }),
);

export const FhirArrayItem: Compat<FhirArrayItem> = untaggedUnion(compatArrayEnumItem, compatArrayRefItem);

export const FhirArrayProperty: C.Codec<FhirArrayProperty> = C.intersection(
  FhirDescriptable,
  C.type({
    type: C.literal('array'),
    items: FhirArrayItem,
  }),
);

export const FhirConstProperty: C.Codec<FhirConstProperty> = C.intersection(
  FhirDescriptable,
  C.type({
    const: C.string,
  }),
);

export const FhirEnumProperty: C.Codec<FhirEnumProperty> = C.intersection(
  FhirDescriptable,
  C.type({
    enum: C.array(C.string),
  }),
);

export const FhirPrimitiveProperty = FhirPrimitive;

export const FhirRefProperty: C.Codec<FhirRefProperty> = C.intersection(
  FhirDescriptable,
  C.type({
    $ref: C.string,
  }),
);

export const FhirProperty: Compat<FhirProperty> = untaggedUnion(
  makeCompat(
    FhirArrayProperty,
    G.intersection(
      FhirDescriptableGuard,
      G.type({
        type: G.literal('array'),
        items: G.intersection(compatArrayEnumItem, compatArrayRefItem),
      }),
    ),
  ),
  makeCompat(
    FhirConstProperty,
    G.intersection(
      FhirDescriptableGuard,
      G.type({
        const: G.string,
      }),
    ),
  ),
  makeCompat(
    FhirEnumProperty,
    G.intersection(
      FhirDescriptableGuard,
      G.type({
        enum: G.array(G.string),
      }),
    ),
  ),
  makeCompat(
    FhirPrimitiveProperty,
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
    FhirRefProperty,
    G.intersection(
      FhirDescriptableGuard,
      G.type({
        $ref: G.string,
      }),
    ),
  ),
);

export const isEnumArrayItem: Refinement<FhirArrayItem, FhirEnumArrayItem> = (item): item is FhirEnumArrayItem =>
  'enum' in item;

export const isEnumArrayItemC: C.Codec<FhirEnumArrayItem> = C.refinement<FhirArrayItem, FhirEnumArrayItem>(
  FhirArrayItem,
  isEnumArrayItem,
  'FhirEnumArrayItem',
);

export const isRefArrayItem: Refinement<FhirArrayItem, FhirRefArrayItem> = (item): item is FhirRefArrayItem =>
  '$ref' in item;

export const isRefArrayItemC: C.Codec<FhirRefArrayItem> = C.refinement(
  FhirArrayItem,
  isRefArrayItem,
  'FhirRefArrayItem',
);

export const isArrayProperty: Refinement<FhirProperty, FhirArrayProperty> = (prop): prop is FhirArrayProperty =>
  'items' in prop;

export const isArrayPropertyC: C.Codec<FhirArrayProperty> = C.refinement<FhirProperty, FhirArrayProperty>(
  FhirProperty,
  isArrayProperty,
  'FhirArrayProperty',
);

export const isConstProperty: Refinement<FhirProperty, FhirConstProperty> = (prop): prop is FhirConstProperty =>
  'const' in prop;

export const isConstPropertyC: C.Codec<FhirConstProperty> = C.refinement<FhirProperty, FhirConstProperty>(
  FhirProperty,
  isConstProperty,
  'FhirConstProperty',
);

export const isEnumProperty: Refinement<FhirProperty, FhirEnumProperty> = (prop): prop is FhirEnumProperty =>
  'enum' in prop;

export const isEnumPropertyC: C.Codec<FhirEnumProperty> = C.refinement<FhirProperty, FhirEnumProperty>(
  FhirProperty,
  isEnumProperty,
  'FhirEnumProperty',
);

export const isPrimitivePropertyC: C.Codec<FhirPrimitiveProperty> = C.refinement<FhirProperty, FhirPrimitiveProperty>(
  FhirProperty,
  isPrimitive,
  'FhirPrimitiveProperty',
);

export const isRefProperty: Refinement<FhirProperty, FhirRefProperty> = (prop): prop is FhirRefProperty =>
  '$ref' in prop;

export const isRefPropertyC: C.Codec<FhirRefProperty> = C.refinement<FhirProperty, FhirRefProperty>(
  FhirProperty,
  isRefProperty,
  'FhirRefProperty',
);
