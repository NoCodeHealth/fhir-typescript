import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Catalog entries are wrappers that contextualize items included in a catalog. */
export const FhirCatalogEntry_RelatedEntry: t.Type<
  FhirCatalogEntry_RelatedEntry,
  FhirCatalogEntry_RelatedEntryOutput
> = t.recursion('FhirCatalogEntry_RelatedEntry', () =>
  t.intersection([
    t.type({
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      item: t.readonly(FhirReference),
    }),
    t.partial({
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      _relationtype: t.readonly(FhirElement),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      extension: t.readonlyArray(FhirExtension),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      id: t.readonly(FhirString),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      relationtype: t.readonly(
        t.keyof({
          triggers: null,
          'is-replaced-by': null,
        })
      ),
    }),
  ])
)

/** Catalog entries are wrappers that contextualize items included in a catalog. */
export interface FhirCatalogEntry_RelatedEntry {
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  _relationtype?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  item: Readonly<t.TypeOf<typeof FhirReference>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  relationtype?: Readonly<'triggers' | 'is-replaced-by'>
}
/** Catalog entries are wrappers that contextualize items included in a catalog. */
export interface FhirCatalogEntry_RelatedEntryOutput {
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  _relationtype?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  item: Readonly<t.OutputOf<typeof FhirReference>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  relationtype?: Readonly<'triggers' | 'is-replaced-by'>
}
