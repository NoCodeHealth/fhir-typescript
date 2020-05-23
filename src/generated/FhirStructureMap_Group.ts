import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirString } from './FhirString'
import { FhirStructureMap_Input } from './FhirStructureMap_Input'
import { FhirStructureMap_Rule } from './FhirStructureMap_Rule'

/** A Map of relationships between 2 structures that can be used to transform data. */
export const FhirStructureMap_Group: t.Type<FhirStructureMap_Group, FhirStructureMap_GroupOutput> = t.recursion(
  'FhirStructureMap_Group',
  () =>
    t.intersection([
      t.type({
        /** A Map of relationships between 2 structures that can be used to transform data. */
        input: t.readonlyArray(FhirStructureMap_Input),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        rule: t.readonlyArray(FhirStructureMap_Rule),
      }),
      t.partial({
        /** A Map of relationships between 2 structures that can be used to transform data. */
        _documentation: t.readonly(FhirElement),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        _extends: t.readonly(FhirElement),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        _name: t.readonly(FhirElement),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        _typeMode: t.readonly(FhirElement),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        documentation: t.readonly(FhirString),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        extends: t.readonly(FhirId),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        extension: t.readonlyArray(FhirExtension),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        id: t.readonly(FhirString),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        name: t.readonly(FhirId),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        typeMode: t.readonly(
          t.keyof({
            none: null,
            types: null,
            'type-and-types': null,
          })
        ),
      }),
    ])
)

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface FhirStructureMap_Group {
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _documentation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _extends?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _typeMode?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  documentation?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extends?: Readonly<t.TypeOf<typeof FhirId>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  input: ReadonlyArray<t.TypeOf<typeof FhirStructureMap_Input>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  name?: Readonly<t.TypeOf<typeof FhirId>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  rule: ReadonlyArray<t.TypeOf<typeof FhirStructureMap_Rule>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  typeMode?: Readonly<'none' | 'types' | 'type-and-types'>
}
/** A Map of relationships between 2 structures that can be used to transform data. */
export interface FhirStructureMap_GroupOutput {
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _documentation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _extends?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _typeMode?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  documentation?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extends?: Readonly<t.OutputOf<typeof FhirId>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  input: ReadonlyArray<t.OutputOf<typeof FhirStructureMap_Input>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  name?: Readonly<t.OutputOf<typeof FhirId>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  rule: ReadonlyArray<t.OutputOf<typeof FhirStructureMap_Rule>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  typeMode?: Readonly<'none' | 'types' | 'type-and-types'>
}
