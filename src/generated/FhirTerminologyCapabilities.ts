import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactDetail } from './FhirContactDetail'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirTerminologyCapabilities_Closure } from './FhirTerminologyCapabilities_Closure'
import { FhirTerminologyCapabilities_CodeSystem } from './FhirTerminologyCapabilities_CodeSystem'
import { FhirTerminologyCapabilities_Expansion } from './FhirTerminologyCapabilities_Expansion'
import { FhirTerminologyCapabilities_Implementation } from './FhirTerminologyCapabilities_Implementation'
import { FhirTerminologyCapabilities_Software } from './FhirTerminologyCapabilities_Software'
import { FhirTerminologyCapabilities_Translation } from './FhirTerminologyCapabilities_Translation'
import { FhirTerminologyCapabilities_ValidateCode } from './FhirTerminologyCapabilities_ValidateCode'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export const FhirTerminologyCapabilities: t.Type<
  FhirTerminologyCapabilities,
  FhirTerminologyCapabilitiesOutput
> = t.recursion('FhirTerminologyCapabilities', () =>
  t.intersection([
    t.type({
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      resourceType: t.readonly(t.literal('TerminologyCapabilities')),
    }),
    t.partial({
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      _codeSearch: t.readonly(FhirElement),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      _copyright: t.readonly(FhirElement),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      _date: t.readonly(FhirElement),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      _description: t.readonly(FhirElement),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      _experimental: t.readonly(FhirElement),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      _implicitRules: t.readonly(FhirElement),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      _kind: t.readonly(FhirElement),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      _language: t.readonly(FhirElement),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      _lockedDate: t.readonly(FhirElement),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      _name: t.readonly(FhirElement),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      _publisher: t.readonly(FhirElement),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      _purpose: t.readonly(FhirElement),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      _status: t.readonly(FhirElement),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      _title: t.readonly(FhirElement),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      _url: t.readonly(FhirElement),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      _version: t.readonly(FhirElement),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      closure: t.readonly(FhirTerminologyCapabilities_Closure),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      codeSearch: t.readonly(
        t.keyof({
          explicit: null,
          all: null,
        })
      ),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      codeSystem: t.readonlyArray(FhirTerminologyCapabilities_CodeSystem),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      contact: t.readonlyArray(FhirContactDetail),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      contained: t.readonlyArray(FhirResourceList),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      copyright: t.readonly(FhirMarkdown),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      date: t.readonly(FhirDateTime),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      description: t.readonly(FhirMarkdown),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      expansion: t.readonly(FhirTerminologyCapabilities_Expansion),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      experimental: t.readonly(FhirBoolean),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      extension: t.readonlyArray(FhirExtension),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      id: t.readonly(FhirId),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      implementation: t.readonly(FhirTerminologyCapabilities_Implementation),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      implicitRules: t.readonly(FhirUri),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      jurisdiction: t.readonlyArray(FhirCodeableConcept),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      kind: t.readonly(FhirCode),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      language: t.readonly(FhirCode),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      lockedDate: t.readonly(FhirBoolean),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      meta: t.readonly(FhirMeta),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      name: t.readonly(FhirString),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      publisher: t.readonly(FhirString),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      purpose: t.readonly(FhirMarkdown),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      software: t.readonly(FhirTerminologyCapabilities_Software),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      status: t.readonly(
        t.keyof({
          draft: null,
          active: null,
          retired: null,
          unknown: null,
        })
      ),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      text: t.readonly(FhirNarrative),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      title: t.readonly(FhirString),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      translation: t.readonly(FhirTerminologyCapabilities_Translation),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      url: t.readonly(FhirUri),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      useContext: t.readonlyArray(FhirUsageContext),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      validateCode: t.readonly(FhirTerminologyCapabilities_ValidateCode),
      /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
      version: t.readonly(FhirString),
    }),
  ])
)

/** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface FhirTerminologyCapabilities {
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _codeSearch?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _copyright?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _experimental?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _kind?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _lockedDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _purpose?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  closure?: Readonly<t.TypeOf<typeof FhirTerminologyCapabilities_Closure>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  codeSearch?: Readonly<'explicit' | 'all'>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  codeSystem?: ReadonlyArray<t.TypeOf<typeof FhirTerminologyCapabilities_CodeSystem>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  copyright?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  expansion?: Readonly<t.TypeOf<typeof FhirTerminologyCapabilities_Expansion>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  experimental?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  implementation?: Readonly<t.TypeOf<typeof FhirTerminologyCapabilities_Implementation>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  kind?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  lockedDate?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  purpose?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  resourceType: Readonly<'TerminologyCapabilities'>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  software?: Readonly<t.TypeOf<typeof FhirTerminologyCapabilities_Software>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  translation?: Readonly<t.TypeOf<typeof FhirTerminologyCapabilities_Translation>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  validateCode?: Readonly<t.TypeOf<typeof FhirTerminologyCapabilities_ValidateCode>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface FhirTerminologyCapabilitiesOutput {
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _codeSearch?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _copyright?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _experimental?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _kind?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _lockedDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _purpose?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  closure?: Readonly<t.OutputOf<typeof FhirTerminologyCapabilities_Closure>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  codeSearch?: Readonly<'explicit' | 'all'>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  codeSystem?: ReadonlyArray<t.OutputOf<typeof FhirTerminologyCapabilities_CodeSystem>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  copyright?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  expansion?: Readonly<t.OutputOf<typeof FhirTerminologyCapabilities_Expansion>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  experimental?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  implementation?: Readonly<t.OutputOf<typeof FhirTerminologyCapabilities_Implementation>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  kind?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  lockedDate?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  purpose?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  resourceType: Readonly<'TerminologyCapabilities'>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  software?: Readonly<t.OutputOf<typeof FhirTerminologyCapabilities_Software>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  translation?: Readonly<t.OutputOf<typeof FhirTerminologyCapabilities_Translation>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  validateCode?: Readonly<t.OutputOf<typeof FhirTerminologyCapabilities_ValidateCode>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
