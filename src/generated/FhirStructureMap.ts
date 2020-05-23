import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactDetail } from './FhirContactDetail'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirStructureMap_Group } from './FhirStructureMap_Group'
import { FhirStructureMap_Structure } from './FhirStructureMap_Structure'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** A Map of relationships between 2 structures that can be used to transform data. */
export const FhirStructureMap: t.Type<FhirStructureMap, FhirStructureMapOutput> = t.recursion('FhirStructureMap', () =>
  t.intersection([
    t.type({
      /** A Map of relationships between 2 structures that can be used to transform data. */
      group: t.readonlyArray(FhirStructureMap_Group),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      resourceType: t.readonly(t.literal('StructureMap')),
    }),
    t.partial({
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _copyright: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _date: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _description: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _experimental: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _implicitRules: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _language: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _name: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _publisher: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _purpose: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _status: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _title: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _url: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _version: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      contact: t.readonlyArray(FhirContactDetail),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      contained: t.readonlyArray(FhirResourceList),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      copyright: t.readonly(FhirMarkdown),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      date: t.readonly(FhirDateTime),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      description: t.readonly(FhirMarkdown),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      experimental: t.readonly(FhirBoolean),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      extension: t.readonlyArray(FhirExtension),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      id: t.readonly(FhirId),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      implicitRules: t.readonly(FhirUri),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      import: t.readonlyArray(FhirCanonical),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      jurisdiction: t.readonlyArray(FhirCodeableConcept),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      language: t.readonly(FhirCode),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      meta: t.readonly(FhirMeta),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      name: t.readonly(FhirString),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      publisher: t.readonly(FhirString),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      purpose: t.readonly(FhirMarkdown),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      status: t.readonly(
        t.keyof({
          draft: null,
          active: null,
          retired: null,
          unknown: null,
        })
      ),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      structure: t.readonlyArray(FhirStructureMap_Structure),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      text: t.readonly(FhirNarrative),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      title: t.readonly(FhirString),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      url: t.readonly(FhirUri),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      useContext: t.readonlyArray(FhirUsageContext),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      version: t.readonly(FhirString),
    }),
  ])
)

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface FhirStructureMap {
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _copyright?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _experimental?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _purpose?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  copyright?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  experimental?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  group: ReadonlyArray<t.TypeOf<typeof FhirStructureMap_Group>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  import?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  purpose?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  resourceType: Readonly<'StructureMap'>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  structure?: ReadonlyArray<t.TypeOf<typeof FhirStructureMap_Structure>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A Map of relationships between 2 structures that can be used to transform data. */
export interface FhirStructureMapOutput {
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _copyright?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _experimental?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _purpose?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  copyright?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  experimental?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  group: ReadonlyArray<t.OutputOf<typeof FhirStructureMap_Group>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  import?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  purpose?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  resourceType: Readonly<'StructureMap'>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  structure?: ReadonlyArray<t.OutputOf<typeof FhirStructureMap_Structure>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
