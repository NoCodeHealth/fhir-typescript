import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
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
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirTestScript_Destination } from './FhirTestScript_Destination'
import { FhirTestScript_Fixture } from './FhirTestScript_Fixture'
import { FhirTestScript_Metadata } from './FhirTestScript_Metadata'
import { FhirTestScript_Origin } from './FhirTestScript_Origin'
import { FhirTestScript_Setup } from './FhirTestScript_Setup'
import { FhirTestScript_Teardown } from './FhirTestScript_Teardown'
import { FhirTestScript_Test } from './FhirTestScript_Test'
import { FhirTestScript_Variable } from './FhirTestScript_Variable'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export const FhirTestScript: t.Type<FhirTestScript, FhirTestScriptOutput> = t.recursion('FhirTestScript', () =>
  t.intersection([
    t.type({
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      resourceType: t.readonly(t.literal('TestScript')),
    }),
    t.partial({
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _copyright: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _date: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _description: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _experimental: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _implicitRules: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _language: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _name: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _publisher: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _purpose: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _status: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _title: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _url: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _version: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      contact: t.readonlyArray(FhirContactDetail),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      contained: t.readonlyArray(FhirResourceList),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      copyright: t.readonly(FhirMarkdown),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      date: t.readonly(FhirDateTime),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      description: t.readonly(FhirMarkdown),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      destination: t.readonlyArray(FhirTestScript_Destination),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      experimental: t.readonly(FhirBoolean),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      extension: t.readonlyArray(FhirExtension),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      fixture: t.readonlyArray(FhirTestScript_Fixture),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      id: t.readonly(FhirId),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      identifier: t.readonly(FhirIdentifier),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      implicitRules: t.readonly(FhirUri),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      jurisdiction: t.readonlyArray(FhirCodeableConcept),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      language: t.readonly(FhirCode),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      meta: t.readonly(FhirMeta),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      metadata: t.readonly(FhirTestScript_Metadata),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      name: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      origin: t.readonlyArray(FhirTestScript_Origin),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      profile: t.readonlyArray(FhirReference),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      publisher: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      purpose: t.readonly(FhirMarkdown),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      setup: t.readonly(FhirTestScript_Setup),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      status: t.readonly(
        t.keyof({
          draft: null,
          active: null,
          retired: null,
          unknown: null,
        })
      ),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      teardown: t.readonly(FhirTestScript_Teardown),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      test: t.readonlyArray(FhirTestScript_Test),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      text: t.readonly(FhirNarrative),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      title: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      url: t.readonly(FhirUri),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      useContext: t.readonlyArray(FhirUsageContext),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      variable: t.readonlyArray(FhirTestScript_Variable),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      version: t.readonly(FhirString),
    }),
  ])
)

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _copyright?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _experimental?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _purpose?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  copyright?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  destination?: ReadonlyArray<t.TypeOf<typeof FhirTestScript_Destination>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  experimental?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  fixture?: ReadonlyArray<t.TypeOf<typeof FhirTestScript_Fixture>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  metadata?: Readonly<t.TypeOf<typeof FhirTestScript_Metadata>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  origin?: ReadonlyArray<t.TypeOf<typeof FhirTestScript_Origin>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  profile?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  purpose?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  resourceType: Readonly<'TestScript'>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  setup?: Readonly<t.TypeOf<typeof FhirTestScript_Setup>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  teardown?: Readonly<t.TypeOf<typeof FhirTestScript_Teardown>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  test?: ReadonlyArray<t.TypeOf<typeof FhirTestScript_Test>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  variable?: ReadonlyArray<t.TypeOf<typeof FhirTestScript_Variable>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScriptOutput {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _copyright?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _experimental?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _purpose?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  copyright?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  destination?: ReadonlyArray<t.OutputOf<typeof FhirTestScript_Destination>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  experimental?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  fixture?: ReadonlyArray<t.OutputOf<typeof FhirTestScript_Fixture>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  metadata?: Readonly<t.OutputOf<typeof FhirTestScript_Metadata>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  origin?: ReadonlyArray<t.OutputOf<typeof FhirTestScript_Origin>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  profile?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  purpose?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  resourceType: Readonly<'TestScript'>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  setup?: Readonly<t.OutputOf<typeof FhirTestScript_Setup>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  teardown?: Readonly<t.OutputOf<typeof FhirTestScript_Teardown>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  test?: ReadonlyArray<t.OutputOf<typeof FhirTestScript_Test>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  variable?: ReadonlyArray<t.OutputOf<typeof FhirTestScript_Variable>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
