import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactDetail } from './FhirContactDetail'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirMeta } from './FhirMeta'
import { FhirNamingSystem_UniqueId } from './FhirNamingSystem_UniqueId'
import { FhirNarrative } from './FhirNarrative'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
export const FhirNamingSystem: t.Type<FhirNamingSystem, FhirNamingSystemOutput> = t.recursion('FhirNamingSystem', () =>
  t.intersection([
    t.type({
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      resourceType: t.readonly(t.literal('NamingSystem')),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      uniqueId: t.readonlyArray(FhirNamingSystem_UniqueId),
    }),
    t.partial({
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      _date: t.readonly(FhirElement),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      _description: t.readonly(FhirElement),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      _implicitRules: t.readonly(FhirElement),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      _kind: t.readonly(FhirElement),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      _language: t.readonly(FhirElement),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      _name: t.readonly(FhirElement),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      _publisher: t.readonly(FhirElement),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      _responsible: t.readonly(FhirElement),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      _status: t.readonly(FhirElement),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      _usage: t.readonly(FhirElement),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      contact: t.readonlyArray(FhirContactDetail),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      contained: t.readonlyArray(FhirResourceList),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      date: t.readonly(FhirDateTime),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      description: t.readonly(FhirMarkdown),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      extension: t.readonlyArray(FhirExtension),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      id: t.readonly(FhirId),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      implicitRules: t.readonly(FhirUri),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      jurisdiction: t.readonlyArray(FhirCodeableConcept),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      kind: t.readonly(
        t.keyof({
          codesystem: null,
          identifier: null,
          root: null,
        })
      ),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      language: t.readonly(FhirCode),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      meta: t.readonly(FhirMeta),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      name: t.readonly(FhirString),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      publisher: t.readonly(FhirString),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      responsible: t.readonly(FhirString),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      status: t.readonly(
        t.keyof({
          draft: null,
          active: null,
          retired: null,
          unknown: null,
        })
      ),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      text: t.readonly(FhirNarrative),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      type: t.readonly(FhirCodeableConcept),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      usage: t.readonly(FhirString),
      /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
      useContext: t.readonlyArray(FhirUsageContext),
    }),
  ])
)

/** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
export interface FhirNamingSystem {
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _kind?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _responsible?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _usage?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  kind?: Readonly<'codesystem' | 'identifier' | 'root'>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  resourceType: Readonly<'NamingSystem'>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  responsible?: Readonly<t.TypeOf<typeof FhirString>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  uniqueId: ReadonlyArray<t.TypeOf<typeof FhirNamingSystem_UniqueId>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  usage?: Readonly<t.TypeOf<typeof FhirString>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
}
/** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
export interface FhirNamingSystemOutput {
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _kind?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _responsible?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _usage?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  kind?: Readonly<'codesystem' | 'identifier' | 'root'>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  resourceType: Readonly<'NamingSystem'>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  responsible?: Readonly<t.OutputOf<typeof FhirString>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  uniqueId: ReadonlyArray<t.OutputOf<typeof FhirNamingSystem_UniqueId>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  usage?: Readonly<t.OutputOf<typeof FhirString>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
}
