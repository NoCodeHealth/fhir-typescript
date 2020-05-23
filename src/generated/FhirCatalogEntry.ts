import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCatalogEntry_RelatedEntry } from './FhirCatalogEntry_RelatedEntry'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** Catalog entries are wrappers that contextualize items included in a catalog. */
export const FhirCatalogEntry: t.Type<FhirCatalogEntry, FhirCatalogEntryOutput> = t.recursion('FhirCatalogEntry', () =>
  t.intersection([
    t.type({
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      referencedItem: t.readonly(FhirReference),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      resourceType: t.readonly(t.literal('CatalogEntry')),
    }),
    t.partial({
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      _implicitRules: t.readonly(FhirElement),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      _language: t.readonly(FhirElement),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      _lastUpdated: t.readonly(FhirElement),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      _orderable: t.readonly(FhirElement),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      _status: t.readonly(FhirElement),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      _validTo: t.readonly(FhirElement),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      additionalCharacteristic: t.readonlyArray(FhirCodeableConcept),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      additionalClassification: t.readonlyArray(FhirCodeableConcept),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      additionalIdentifier: t.readonlyArray(FhirIdentifier),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      classification: t.readonlyArray(FhirCodeableConcept),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      contained: t.readonlyArray(FhirResourceList),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      extension: t.readonlyArray(FhirExtension),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      id: t.readonly(FhirId),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      implicitRules: t.readonly(FhirUri),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      language: t.readonly(FhirCode),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      lastUpdated: t.readonly(FhirDateTime),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      meta: t.readonly(FhirMeta),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      orderable: t.readonly(FhirBoolean),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      relatedEntry: t.readonlyArray(FhirCatalogEntry_RelatedEntry),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      status: t.readonly(
        t.keyof({
          draft: null,
          active: null,
          retired: null,
          unknown: null,
        })
      ),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      text: t.readonly(FhirNarrative),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      type: t.readonly(FhirCodeableConcept),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      validTo: t.readonly(FhirDateTime),
      /** Catalog entries are wrappers that contextualize items included in a catalog. */
      validityPeriod: t.readonly(FhirPeriod),
    }),
  ])
)

/** Catalog entries are wrappers that contextualize items included in a catalog. */
export interface FhirCatalogEntry {
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  _lastUpdated?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  _orderable?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  _validTo?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  additionalCharacteristic?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  additionalClassification?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  additionalIdentifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  classification?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  lastUpdated?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  orderable?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  referencedItem: Readonly<t.TypeOf<typeof FhirReference>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  relatedEntry?: ReadonlyArray<t.TypeOf<typeof FhirCatalogEntry_RelatedEntry>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  resourceType: Readonly<'CatalogEntry'>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  validTo?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  validityPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
}
/** Catalog entries are wrappers that contextualize items included in a catalog. */
export interface FhirCatalogEntryOutput {
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  _lastUpdated?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  _orderable?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  _validTo?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  additionalCharacteristic?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  additionalClassification?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  additionalIdentifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  classification?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  lastUpdated?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  orderable?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  referencedItem: Readonly<t.OutputOf<typeof FhirReference>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  relatedEntry?: ReadonlyArray<t.OutputOf<typeof FhirCatalogEntry_RelatedEntry>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  resourceType: Readonly<'CatalogEntry'>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  validTo?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Catalog entries are wrappers that contextualize items included in a catalog. */
  validityPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
}
