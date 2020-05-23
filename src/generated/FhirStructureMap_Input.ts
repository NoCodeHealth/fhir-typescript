import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirString } from './FhirString'

/** A Map of relationships between 2 structures that can be used to transform data. */
export const FhirStructureMap_Input: t.Type<FhirStructureMap_Input, FhirStructureMap_InputOutput> = t.recursion(
  'FhirStructureMap_Input',
  () =>
    t.partial({
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _documentation: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _mode: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _name: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _type: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      documentation: t.readonly(FhirString),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      extension: t.readonlyArray(FhirExtension),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      id: t.readonly(FhirString),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      mode: t.readonly(
        t.keyof({
          source: null,
          target: null,
        })
      ),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      name: t.readonly(FhirId),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      type: t.readonly(FhirString),
    })
)

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface FhirStructureMap_Input {
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _documentation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _mode?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  documentation?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  mode?: Readonly<'source' | 'target'>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  name?: Readonly<t.TypeOf<typeof FhirId>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  type?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A Map of relationships between 2 structures that can be used to transform data. */
export interface FhirStructureMap_InputOutput {
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _documentation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _mode?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  documentation?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  mode?: Readonly<'source' | 'target'>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  name?: Readonly<t.OutputOf<typeof FhirId>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  type?: Readonly<t.OutputOf<typeof FhirString>>
}
