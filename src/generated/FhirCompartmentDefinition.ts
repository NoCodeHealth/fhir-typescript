import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirCompartmentDefinition_Resource } from './FhirCompartmentDefinition_Resource'
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
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** A compartment definition that defines how resources are accessed on a server. */
export const FhirCompartmentDefinition: t.Type<
  FhirCompartmentDefinition,
  FhirCompartmentDefinitionOutput
> = t.recursion('FhirCompartmentDefinition', () =>
  t.intersection([
    t.type({
      /** A compartment definition that defines how resources are accessed on a server. */
      resourceType: t.readonly(t.literal('CompartmentDefinition')),
    }),
    t.partial({
      /** A compartment definition that defines how resources are accessed on a server. */
      _code: t.readonly(FhirElement),
      /** A compartment definition that defines how resources are accessed on a server. */
      _date: t.readonly(FhirElement),
      /** A compartment definition that defines how resources are accessed on a server. */
      _description: t.readonly(FhirElement),
      /** A compartment definition that defines how resources are accessed on a server. */
      _experimental: t.readonly(FhirElement),
      /** A compartment definition that defines how resources are accessed on a server. */
      _implicitRules: t.readonly(FhirElement),
      /** A compartment definition that defines how resources are accessed on a server. */
      _language: t.readonly(FhirElement),
      /** A compartment definition that defines how resources are accessed on a server. */
      _name: t.readonly(FhirElement),
      /** A compartment definition that defines how resources are accessed on a server. */
      _publisher: t.readonly(FhirElement),
      /** A compartment definition that defines how resources are accessed on a server. */
      _purpose: t.readonly(FhirElement),
      /** A compartment definition that defines how resources are accessed on a server. */
      _search: t.readonly(FhirElement),
      /** A compartment definition that defines how resources are accessed on a server. */
      _status: t.readonly(FhirElement),
      /** A compartment definition that defines how resources are accessed on a server. */
      _url: t.readonly(FhirElement),
      /** A compartment definition that defines how resources are accessed on a server. */
      _version: t.readonly(FhirElement),
      /** A compartment definition that defines how resources are accessed on a server. */
      code: t.readonly(
        t.keyof({
          Patient: null,
          Encounter: null,
          RelatedPerson: null,
          Practitioner: null,
          Device: null,
        })
      ),
      /** A compartment definition that defines how resources are accessed on a server. */
      contact: t.readonlyArray(FhirContactDetail),
      /** A compartment definition that defines how resources are accessed on a server. */
      contained: t.readonlyArray(FhirResourceList),
      /** A compartment definition that defines how resources are accessed on a server. */
      date: t.readonly(FhirDateTime),
      /** A compartment definition that defines how resources are accessed on a server. */
      description: t.readonly(FhirMarkdown),
      /** A compartment definition that defines how resources are accessed on a server. */
      experimental: t.readonly(FhirBoolean),
      /** A compartment definition that defines how resources are accessed on a server. */
      extension: t.readonlyArray(FhirExtension),
      /** A compartment definition that defines how resources are accessed on a server. */
      id: t.readonly(FhirId),
      /** A compartment definition that defines how resources are accessed on a server. */
      implicitRules: t.readonly(FhirUri),
      /** A compartment definition that defines how resources are accessed on a server. */
      language: t.readonly(FhirCode),
      /** A compartment definition that defines how resources are accessed on a server. */
      meta: t.readonly(FhirMeta),
      /** A compartment definition that defines how resources are accessed on a server. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A compartment definition that defines how resources are accessed on a server. */
      name: t.readonly(FhirString),
      /** A compartment definition that defines how resources are accessed on a server. */
      publisher: t.readonly(FhirString),
      /** A compartment definition that defines how resources are accessed on a server. */
      purpose: t.readonly(FhirMarkdown),
      /** A compartment definition that defines how resources are accessed on a server. */
      resource: t.readonlyArray(FhirCompartmentDefinition_Resource),
      /** A compartment definition that defines how resources are accessed on a server. */
      search: t.readonly(FhirBoolean),
      /** A compartment definition that defines how resources are accessed on a server. */
      status: t.readonly(
        t.keyof({
          draft: null,
          active: null,
          retired: null,
          unknown: null,
        })
      ),
      /** A compartment definition that defines how resources are accessed on a server. */
      text: t.readonly(FhirNarrative),
      /** A compartment definition that defines how resources are accessed on a server. */
      url: t.readonly(FhirUri),
      /** A compartment definition that defines how resources are accessed on a server. */
      useContext: t.readonlyArray(FhirUsageContext),
      /** A compartment definition that defines how resources are accessed on a server. */
      version: t.readonly(FhirString),
    }),
  ])
)

/** A compartment definition that defines how resources are accessed on a server. */
export interface FhirCompartmentDefinition {
  /** A compartment definition that defines how resources are accessed on a server. */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _experimental?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _purpose?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _search?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  code?: Readonly<'Patient' | 'Encounter' | 'RelatedPerson' | 'Practitioner' | 'Device'>
  /** A compartment definition that defines how resources are accessed on a server. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** A compartment definition that defines how resources are accessed on a server. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A compartment definition that defines how resources are accessed on a server. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A compartment definition that defines how resources are accessed on a server. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A compartment definition that defines how resources are accessed on a server. */
  experimental?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A compartment definition that defines how resources are accessed on a server. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A compartment definition that defines how resources are accessed on a server. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A compartment definition that defines how resources are accessed on a server. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A compartment definition that defines how resources are accessed on a server. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A compartment definition that defines how resources are accessed on a server. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A compartment definition that defines how resources are accessed on a server. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A compartment definition that defines how resources are accessed on a server. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A compartment definition that defines how resources are accessed on a server. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** A compartment definition that defines how resources are accessed on a server. */
  purpose?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A compartment definition that defines how resources are accessed on a server. */
  resource?: ReadonlyArray<t.TypeOf<typeof FhirCompartmentDefinition_Resource>>
  /** A compartment definition that defines how resources are accessed on a server. */
  resourceType: Readonly<'CompartmentDefinition'>
  /** A compartment definition that defines how resources are accessed on a server. */
  search?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A compartment definition that defines how resources are accessed on a server. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A compartment definition that defines how resources are accessed on a server. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A compartment definition that defines how resources are accessed on a server. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A compartment definition that defines how resources are accessed on a server. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** A compartment definition that defines how resources are accessed on a server. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A compartment definition that defines how resources are accessed on a server. */
export interface FhirCompartmentDefinitionOutput {
  /** A compartment definition that defines how resources are accessed on a server. */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _experimental?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _purpose?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _search?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  code?: Readonly<'Patient' | 'Encounter' | 'RelatedPerson' | 'Practitioner' | 'Device'>
  /** A compartment definition that defines how resources are accessed on a server. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** A compartment definition that defines how resources are accessed on a server. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A compartment definition that defines how resources are accessed on a server. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A compartment definition that defines how resources are accessed on a server. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A compartment definition that defines how resources are accessed on a server. */
  experimental?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A compartment definition that defines how resources are accessed on a server. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A compartment definition that defines how resources are accessed on a server. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A compartment definition that defines how resources are accessed on a server. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A compartment definition that defines how resources are accessed on a server. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A compartment definition that defines how resources are accessed on a server. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A compartment definition that defines how resources are accessed on a server. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A compartment definition that defines how resources are accessed on a server. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A compartment definition that defines how resources are accessed on a server. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** A compartment definition that defines how resources are accessed on a server. */
  purpose?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A compartment definition that defines how resources are accessed on a server. */
  resource?: ReadonlyArray<t.OutputOf<typeof FhirCompartmentDefinition_Resource>>
  /** A compartment definition that defines how resources are accessed on a server. */
  resourceType: Readonly<'CompartmentDefinition'>
  /** A compartment definition that defines how resources are accessed on a server. */
  search?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A compartment definition that defines how resources are accessed on a server. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A compartment definition that defines how resources are accessed on a server. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A compartment definition that defines how resources are accessed on a server. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A compartment definition that defines how resources are accessed on a server. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** A compartment definition that defines how resources are accessed on a server. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
