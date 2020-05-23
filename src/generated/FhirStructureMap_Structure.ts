import * as t from 'io-ts'
import { FhirCanonical } from './FhirCanonical'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A Map of relationships between 2 structures that can be used to transform data. */
export const FhirStructureMap_Structure: t.Type<
  FhirStructureMap_Structure,
  FhirStructureMap_StructureOutput
> = t.recursion('FhirStructureMap_Structure', () =>
  t.intersection([
    t.type({
      /** A Map of relationships between 2 structures that can be used to transform data. */
      url: t.readonly(FhirCanonical),
    }),
    t.partial({
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _alias: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _documentation: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _mode: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      alias: t.readonly(FhirString),
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
          queried: null,
          target: null,
          produced: null,
        })
      ),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface FhirStructureMap_Structure {
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _alias?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _documentation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _mode?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  alias?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  documentation?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  mode?: Readonly<'source' | 'queried' | 'target' | 'produced'>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  url: Readonly<t.TypeOf<typeof FhirCanonical>>
}
/** A Map of relationships between 2 structures that can be used to transform data. */
export interface FhirStructureMap_StructureOutput {
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _alias?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _documentation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _mode?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  alias?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  documentation?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  mode?: Readonly<'source' | 'queried' | 'target' | 'produced'>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  url: Readonly<t.OutputOf<typeof FhirCanonical>>
}
