import { eqString } from 'fp-ts/lib/Eq'
import { fold, monoidAll } from 'fp-ts/lib/Monoid'
import { elem, fromArray } from 'fp-ts/lib/ReadonlyArray'
import { hasOwnProperty } from 'fp-ts/lib/Record'
import { pipe, Refinement } from 'fp-ts/lib/function'
import * as D from 'io-ts/lib/Decoder'

// =================================================================================
// model
// =================================================================================

/**
 * Represents an schema element that has an associated description.
 *
 * @since 0.1.0
 */
export const Descriptable = D.type({
  /**
   * The description of the data type.
   */
  description: D.string
})

/**
 * @since 0.1.0
 */
export type Descriptable = D.TypeOf<typeof Descriptable>

/**
 * A constant value.
 *
 * @since 0.1.0
 */
const Const = D.type({
  /**
   * The constant.
   */
  const: D.string
})

/**
 * @since 0.1.0
 */
export type Const = D.TypeOf<typeof Const>

/**
 * A discriminated union of possible values.
 *
 * @since 0.1.0
 */
export const Enum = D.type({
  /**
   * The possible values.
   */
  enum: D.array(D.string)
})

/**
 * @since 0.1.0
 */
export type Enum = D.TypeOf<typeof Enum>

/**
 * A reference to another element.
 *
 * @since 0.1.0
 */
export const Ref = D.type({
  /**
   * The ref string.
   */
  $ref: D.string
})

/**
 * @since 0.1.0
 */
export type Ref = D.TypeOf<typeof Ref>

/**
 * The possible values of an array.
 *
 * @since 0.1.0
 */
export const ArrayItem = D.union(Enum, Ref)

/**
 *
 * @since 0.1.0
 */
export type ArrayItem = D.TypeOf<typeof ArrayItem>

/**
 * Represents an array property type.
 *
 * @since 0.1.0
 */
export const ArrayProperty = pipe(
  D.type({
    type: D.literal('array'),
    items: ArrayItem
  }),
  D.intersect(Descriptable)
)

/**
 * @since 0.1.0
 */
export type ArrayProperty = D.TypeOf<typeof ArrayProperty>

/**
 * A property with a constant value.
 *
 * @since 0.1.0
 */
export const ConstProperty = pipe(Const, D.intersect(Descriptable))

/**
 * @since 0.1.0
 */
export type ConstProperty = D.TypeOf<typeof ConstProperty>

/**
 * A property that can take on one of a discriminated union of values.
 *
 * @since 0.1.0
 */
export const EnumProperty = pipe(Enum, D.intersect(Descriptable))

/**
 * @since 0.1.0
 */
export type EnumProperty = D.TypeOf<typeof EnumProperty>

/**
 * Represents a primitive property type.
 *
 * @since 0.1.0
 */
export const PrimitiveProperty = pipe(
  D.type({
    type: D.literal('boolean', 'number', 'string')
  }),
  D.intersect(
    D.partial({
      /**
       * Optional RegEx string that the primitive should match.
       */
      pattern: D.string
    })
  ),
  D.intersect(Descriptable)
)

/**
 * @since 0.1.0
 */
export type PrimitiveProperty = D.TypeOf<typeof PrimitiveProperty>

/**
 * A property that references another element.
 *
 * @since 0.1.0
 */
export const RefProperty = pipe(Ref, D.intersect(Descriptable))

/**
 * @since 0.1.0
 */
export type RefProperty = D.TypeOf<typeof RefProperty>

/**
 * Represents possible property types.
 *
 * @since 0.1.0
 */
export const Property = D.union(ConstProperty, EnumProperty, RefProperty, ArrayProperty, PrimitiveProperty)

/**
 * @since 0.1.0
 */
export type Property = D.TypeOf<typeof Property>

/**
 * Represents a property that allows for discrimination between data types that can be represented by the schema.
 *
 * @since 0.1.0
 */
export const Discriminator = D.type({
  /**
   * The name of the property that serves as the discriminator.
   */
  propertyName: D.literal('resourceType'),

  /**
   * Maps between resource names and references to their definitions.
   */
  mapping: D.record(D.string)
})

/**
 * @since 0.1.0
 */
export type Discriminator = D.TypeOf<typeof Discriminator>

/**
 * Represents valid resource types that can be represented by the schema.
 *
 * @since 0.1.0
 */
export const ResourceList = D.type({
  /**
   * An array of valid schema references.
   */
  oneOf: D.array(Ref)
})

/**
 * @since 0.1.0
 */
export type ResourceList = D.TypeOf<typeof ResourceList>

/**
 * A complex data type as defined in the FHIR JSON schema specification.
 *
 * @see http://hl7.org/fhir/json.html#complex
 *
 * @since 0.0.1
 */
export const Complex = pipe(
  D.type({
    /**
     * The property definitions for the data type.
     */
    properties: D.record(Property),
    /**
     * Additional properties for the data type.
     */
    additionalProperties: D.literal(false)
  }),
  D.intersect(
    D.partial({
      /**
       * Properties that are required for the resource to be valid.
       */
      required: D.array(D.string)
    })
  ),
  D.intersect(Descriptable)
)

/**
 * @since 0.1.0
 */
export type Complex = D.TypeOf<typeof Complex>

/**
 * Represents a definition of a primitive or complex data type.
 *
 * @see FHIR Data Types {@link http://hl7.org/fhir/datatypes.html}
 *
 * @since 0.1.0
 */
export const Definition = D.union(Complex, PrimitiveProperty, ResourceList)

/**
 * @since 0.1.0
 */
export type Definition = D.TypeOf<typeof Definition>

/**
 * Represents the FHIR JSON Schema specification.
 *
 * @see http://hl7.org/fhir/json.html#schema
 *
 * @since 0.1.0
 */
export const Schema = pipe(
  D.type({
    /**
     * The JSON Schema definition for the FHIR JSON Schema.
     */
    $schema: D.string,

    /**
     * The unique identifier for the FHIR JSON schema.
     */
    id: D.string,

    /**
     * The schema discriminator.
     */
    discriminator: Discriminator,

    /**
     * The possible resource types that can be represented by the schema.
     */
    oneOf: D.array(Ref),

    /**
     * The data type definitions for the schema.
     */
    definitions: D.record(Definition)
  })
)

/**
 * @since 0.1.0
 */
export type Schema = D.TypeOf<typeof Schema>

// =================================================================================
// guards
// =================================================================================

const hasPrimitiveType = (a: string) => pipe(fromArray(['boolean', 'number', 'string']), elem(eqString)(a))

/**
 * @since 0.1.0
 */
export const isEnum: Refinement<ArrayItem, Enum> = (a): a is Enum => hasOwnProperty('enum', a as Enum)

/**
 * @since 0.1.0
 */
export const isRef: Refinement<ArrayItem, Ref> = (a): a is Ref => hasOwnProperty('$ref', a as Ref)

/**
 * @since 0.1.0
 */
export const isArrayProperty: Refinement<Property, ArrayProperty> = (a): a is ArrayProperty =>
  fold(monoidAll)([hasOwnProperty('type', a as ArrayProperty), eqString.equals((a as ArrayProperty).type, 'array')])

/**
 * @since 0.1.0
 */
export const isConstProperty: Refinement<Property, ConstProperty> = (a): a is ConstProperty =>
  fold(monoidAll)([hasOwnProperty('const', a as ConstProperty), hasOwnProperty('description', a as ConstProperty)])

/**
 * @since 0.1.0
 */
export const isEnumProperty: Refinement<Property, EnumProperty> = (a): a is EnumProperty =>
  fold(monoidAll)([hasOwnProperty('enum', a as EnumProperty), hasOwnProperty('description', a as EnumProperty)])

/**
 * @since 0.1.0
 */
export const isPrimitiveProperty: Refinement<Property, PrimitiveProperty> = (a): a is PrimitiveProperty =>
  fold(monoidAll)([
    hasOwnProperty('type', a as Record<string, unknown>),
    hasPrimitiveType((a as PrimitiveProperty).type)
  ])

/**
 * @since 0.1.0
 */
export const isRefProperty: Refinement<Property, RefProperty> = (a): a is RefProperty =>
  fold(monoidAll)([hasOwnProperty('$ref', a as RefProperty), hasOwnProperty('description', a as RefProperty)])

/**
 * @since 0.1.0
 */
export const isPrimitive: Refinement<Definition, PrimitiveProperty> = (d): d is PrimitiveProperty =>
  isPrimitiveProperty(d as Property)

/**
 * @since 0.1.0
 */
export const isComplex: Refinement<Definition, Complex> = (a): a is Complex =>
  hasOwnProperty('properties', a as Record<string, unknown>)

/**
 * @since 0.1.0
 */
export const isResourceList: Refinement<Definition, ResourceList> = (a): a is ResourceList =>
  hasOwnProperty('oneOf', a as ResourceList)
