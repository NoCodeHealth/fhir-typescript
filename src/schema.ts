import * as D from 'io-ts/lib/Decoder'

/**
 * Represents an FHIR data type that has an associated description.
 *
 * @since 0.0.1
 */
export const FhirDescriptable = D.type({
  /**
   * The description of the data type.
   */
  description: D.string
})

/**
 * @since 0.0.1
 */
export type FhirDescriptable = D.TypeOf<typeof FhirDescriptable>

const descriptable: <A>(decoder: D.Decoder<A>) => D.Decoder<A & FhirDescriptable> = (d) =>
  D.intersection(FhirDescriptable, d)

/**
 * Represents a primitive FHIR data type.
 *
 * @since 0.0.1
 */
export const FhirPrimitive = descriptable(
  D.intersection(
    D.type({
      type: D.literal('boolean', 'number', 'string')
    }),
    D.partial({
      /**
       * Optional regex pattern that the primitive should match.
       */
      pattern: D.string
    })
  )
)

/**
 * @since 0.0.1
 */
export type FhirPrimitive = D.TypeOf<typeof FhirPrimitive>

/**
 * Represents a FHIR property with a literal value.
 *
 * @since 0.0.1
 */
export const FhirConst = descriptable(
  D.type({
    /**
     * The literal value.
     */
    const: D.string
  })
)

/**
 * @since 0.0.1
 */
export type FhirConst = D.TypeOf<typeof FhirConst>

/**
 * Represents a property that can take on one of a discriminated union of unique enumerated values.
 *
 * @since 0.0.1
 */
export const FhirEnum = descriptable(
  /**
   * The possible values for the property.
   */
  D.type({
    enum: D.array(D.string)
  })
)

/**
 * @since 0.0.1
 */
export type FhirEnum = D.TypeOf<typeof FhirEnum>

/**
 * Represents a property that references another element within the FHIR schema.
 *
 * @since 0.0.1
 */
export const FhirRef = descriptable(
  D.type({
    /**
     * The element reference.
     */
    $ref: D.string
  })
)

/**
 * @since 0.0.1
 */
export type FhirRef = D.TypeOf<typeof FhirRef>

/**
 * Represents allowable array item types as a discriminated union of unique enumerated values.
 *
 * @since 0.0.1
 */
export const FhirEnumArrayItem = D.type({
  /**
   * The possible values for the array item.
   */
  enum: D.array(D.string)
})

/**
 * @since 0.0.1
 */
export type FhirEnumArrayItem = D.TypeOf<typeof FhirEnumArrayItem>

/**
 * Represents allowable array item types as a reference to another element within the FHIR schema.
 *
 * @since 0.0.1
 */
export const FhirRefArrayItem = D.type({
  /**
   * The element reference.
   */
  $ref: D.string
})

/**
 * @since 0.0.1
 */
export type FhirRefArrayItem = D.TypeOf<typeof FhirRefArrayItem>

/**
 * Represents the items contained within an FHIR array property.
 *
 * @since 0.0.1
 */
export const FhirArrayItem = D.union(FhirEnumArrayItem, FhirRefArrayItem)

/**
 * @since 0.0.1
 */
export type FhirArrayItem = D.TypeOf<typeof FhirArrayItem>

/**
 * Represents an array property of a complex FHIR element.
 *
 * @since 0.0.1
 */
export const FhirArray = descriptable(
  D.type({
    type: D.literal('array'),
    /**
     * The items that may be contained within the array.
     */
    items: FhirArrayItem
  })
)

/**
 * @since 0.0.1
 */
export type FhirArray = D.TypeOf<typeof FhirArray>

/**
 * Represents a complex resource property.
 *
 * @since 0.0.1
 */
export const FhirProperty = D.union(FhirArray, FhirConst, FhirEnum, FhirPrimitive, FhirRef)

/**
 * @since 0.0.1
 */
export type FhirProperty = D.TypeOf<typeof FhirProperty>

/**
 * Represents the resource property that discriminates between data types represented by the FHIR schema.
 *
 * @since 0.0.1
 */
export const FhirDiscriminator = D.type({
  propertyName: D.literal('resourceType'),
  /**
   * A mapping between `resourceType` names and the reference to their definitions.
   */
  mapping: D.record(D.string)
})

/**
 * @since 0.0.1
 */
export type FhirDiscriminator = D.TypeOf<typeof FhirDiscriminator>

/**
 * Represents the resource types referenced by the FHIR JSON schema. A valid
 * FHIR representation of a resource must be one of the references within
 * the `oneOf` dictionary.
 *
 * @since 0.0.1
 */
export const FhirResourceList = D.type({
  /**
   * A dictionary of references to valid FHIR schema resources.
   */
  oneOf: D.array(D.type({ $ref: D.string }))
})

/**
 * @since 0.0.1
 */
export type FhirResourceList = D.TypeOf<typeof FhirResourceList>

/**
 * A complex data type as defined in the FHIR JSON schema specification.
 *
 * @see http://hl7.org/fhir/json.html#complex
 *
 * @since 0.0.1
 */
export const FhirComplex = descriptable(
  D.intersection(
    D.type({
      /**
       * The property definitions for the data type.
       */
      properties: D.record(FhirProperty),
      /**
       * Additional properties for the data type.
       */
      additionalProperties: D.literal(false)
    }),
    D.partial({
      /**
       * Properties that must be present for the data type to be considered valid.
       */
      required: D.array(D.string)
    })
  )
)

/**
 * @since 0.0.1
 */
export type FhirComplex = D.TypeOf<typeof FhirComplex>

/**
 * Represents a definition of a primitive or complex data type.
 *
 * @see FHIR Data Types {@link http://hl7.org/fhir/datatypes.html}
 *
 * @since 0.0.1
 */
export const FhirDefinition = D.union(FhirComplex, FhirPrimitive, FhirResourceList)

/**
 * @since 0.0.1
 */
export type FhirDefinition = D.TypeOf<typeof FhirDefinition>

/**
 * Represents the FHIR JSON Schema specification.
 *
 * @see http://hl7.org/fhir/json.html#schema
 *
 * @since 0.0.1
 */
export const FhirSchema = descriptable(
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
     * Discriminates between data types with `resourceType` properties.
     */
    discriminator: FhirDiscriminator,
    /**
     * Declares the possible types that the schema `resourceType` properties can take on.
     */
    oneOf: D.array(D.type({ $ref: D.string })),
    /**
     * The data type definitions for the FHIR JSON schema.
     */
    definitions: D.record(FhirDefinition)
  })
)

/**
 * @since 0.0.1
 */
export type FhirSchema = D.TypeOf<typeof FhirSchema>
