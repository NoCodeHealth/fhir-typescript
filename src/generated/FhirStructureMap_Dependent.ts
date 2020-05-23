import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirString } from './FhirString'

/** A Map of relationships between 2 structures that can be used to transform data. */
export const FhirStructureMap_Dependent: t.Type<
  FhirStructureMap_Dependent,
  FhirStructureMap_DependentOutput
> = t.recursion('FhirStructureMap_Dependent', () =>
  t.partial({
    /** A Map of relationships between 2 structures that can be used to transform data. */
    _name: t.readonly(FhirElement),
    /** A Map of relationships between 2 structures that can be used to transform data. */
    _variable: t.readonlyArray(FhirElement),
    /** A Map of relationships between 2 structures that can be used to transform data. */
    extension: t.readonlyArray(FhirExtension),
    /** A Map of relationships between 2 structures that can be used to transform data. */
    id: t.readonly(FhirString),
    /** A Map of relationships between 2 structures that can be used to transform data. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A Map of relationships between 2 structures that can be used to transform data. */
    name: t.readonly(FhirId),
    /** A Map of relationships between 2 structures that can be used to transform data. */
    variable: t.readonlyArray(FhirString),
  })
)

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface FhirStructureMap_Dependent {
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _variable?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  name?: Readonly<t.TypeOf<typeof FhirId>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  variable?: ReadonlyArray<t.TypeOf<typeof FhirString>>
}
/** A Map of relationships between 2 structures that can be used to transform data. */
export interface FhirStructureMap_DependentOutput {
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _variable?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  name?: Readonly<t.OutputOf<typeof FhirId>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  variable?: ReadonlyArray<t.OutputOf<typeof FhirString>>
}
