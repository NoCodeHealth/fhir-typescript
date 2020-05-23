import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A Map of relationships between 2 structures that can be used to transform data. */
export const FhirStructureMap_Parameter: t.Type<
  FhirStructureMap_Parameter,
  FhirStructureMap_ParameterOutput
> = t.recursion('FhirStructureMap_Parameter', () =>
  t.partial({
    /** A Map of relationships between 2 structures that can be used to transform data. */
    _valueBoolean: t.readonly(FhirElement),
    /** A Map of relationships between 2 structures that can be used to transform data. */
    _valueDecimal: t.readonly(FhirElement),
    /** A Map of relationships between 2 structures that can be used to transform data. */
    _valueId: t.readonly(FhirElement),
    /** A Map of relationships between 2 structures that can be used to transform data. */
    _valueInteger: t.readonly(FhirElement),
    /** A Map of relationships between 2 structures that can be used to transform data. */
    _valueString: t.readonly(FhirElement),
    /** A Map of relationships between 2 structures that can be used to transform data. */
    extension: t.readonlyArray(FhirExtension),
    /** A Map of relationships between 2 structures that can be used to transform data. */
    id: t.readonly(FhirString),
    /** A Map of relationships between 2 structures that can be used to transform data. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A Map of relationships between 2 structures that can be used to transform data. */
    valueBoolean: t.readonly(t.boolean),
    /** A Map of relationships between 2 structures that can be used to transform data. */
    valueDecimal: t.readonly(t.number),
    /** A Map of relationships between 2 structures that can be used to transform data. */
    valueId: t.readonly(t.string),
    /** A Map of relationships between 2 structures that can be used to transform data. */
    valueInteger: t.readonly(t.number),
    /** A Map of relationships between 2 structures that can be used to transform data. */
    valueString: t.readonly(t.string),
  })
)

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface FhirStructureMap_Parameter {
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _valueBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _valueDecimal?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _valueId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _valueInteger?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _valueString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  valueBoolean?: Readonly<boolean>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  valueDecimal?: Readonly<number>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  valueId?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  valueInteger?: Readonly<number>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  valueString?: Readonly<string>
}
/** A Map of relationships between 2 structures that can be used to transform data. */
export interface FhirStructureMap_ParameterOutput {
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _valueBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _valueDecimal?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _valueId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _valueInteger?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _valueString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  valueBoolean?: Readonly<boolean>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  valueDecimal?: Readonly<number>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  valueId?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  valueInteger?: Readonly<number>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  valueString?: Readonly<string>
}
