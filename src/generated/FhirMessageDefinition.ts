import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCoding } from './FhirCoding'
import { FhirContactDetail } from './FhirContactDetail'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirMessageDefinition_AllowedResponse } from './FhirMessageDefinition_AllowedResponse'
import { FhirMessageDefinition_Focus } from './FhirMessageDefinition_Focus'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
export const FhirMessageDefinition: t.Type<FhirMessageDefinition, FhirMessageDefinitionOutput> = t.recursion(
  'FhirMessageDefinition',
  () =>
    t.intersection([
      t.type({
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        resourceType: t.readonly(t.literal('MessageDefinition')),
      }),
      t.partial({
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        _category: t.readonly(FhirElement),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        _copyright: t.readonly(FhirElement),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        _date: t.readonly(FhirElement),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        _description: t.readonly(FhirElement),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        _eventUri: t.readonly(FhirElement),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        _experimental: t.readonly(FhirElement),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        _implicitRules: t.readonly(FhirElement),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        _language: t.readonly(FhirElement),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        _name: t.readonly(FhirElement),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        _publisher: t.readonly(FhirElement),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        _purpose: t.readonly(FhirElement),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        _responseRequired: t.readonly(FhirElement),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        _status: t.readonly(FhirElement),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        _title: t.readonly(FhirElement),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        _url: t.readonly(FhirElement),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        _version: t.readonly(FhirElement),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        allowedResponse: t.readonlyArray(FhirMessageDefinition_AllowedResponse),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        base: t.readonly(FhirCanonical),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        category: t.readonly(
          t.keyof({
            consequence: null,
            currency: null,
            notification: null,
          })
        ),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        contact: t.readonlyArray(FhirContactDetail),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        contained: t.readonlyArray(FhirResourceList),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        copyright: t.readonly(FhirMarkdown),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        date: t.readonly(FhirDateTime),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        description: t.readonly(FhirMarkdown),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        eventCoding: t.readonly(FhirCoding),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        eventUri: t.readonly(t.string),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        experimental: t.readonly(FhirBoolean),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        extension: t.readonlyArray(FhirExtension),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        focus: t.readonlyArray(FhirMessageDefinition_Focus),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        graph: t.readonlyArray(FhirCanonical),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        id: t.readonly(FhirId),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        implicitRules: t.readonly(FhirUri),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        jurisdiction: t.readonlyArray(FhirCodeableConcept),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        language: t.readonly(FhirCode),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        meta: t.readonly(FhirMeta),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        name: t.readonly(FhirString),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        parent: t.readonlyArray(FhirCanonical),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        publisher: t.readonly(FhirString),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        purpose: t.readonly(FhirMarkdown),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        replaces: t.readonlyArray(FhirCanonical),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        responseRequired: t.readonly(
          t.keyof({
            always: null,
            'on-error': null,
            never: null,
            'on-success': null,
          })
        ),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        status: t.readonly(
          t.keyof({
            draft: null,
            active: null,
            retired: null,
            unknown: null,
          })
        ),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        text: t.readonly(FhirNarrative),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        title: t.readonly(FhirString),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        url: t.readonly(FhirUri),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        useContext: t.readonlyArray(FhirUsageContext),
        /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
        version: t.readonly(FhirString),
      }),
    ])
)

/** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
export interface FhirMessageDefinition {
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _category?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _copyright?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _eventUri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _experimental?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _purpose?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _responseRequired?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  allowedResponse?: ReadonlyArray<t.TypeOf<typeof FhirMessageDefinition_AllowedResponse>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  base?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  category?: Readonly<'consequence' | 'currency' | 'notification'>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  copyright?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  eventCoding?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  eventUri?: Readonly<string>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  experimental?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  focus?: ReadonlyArray<t.TypeOf<typeof FhirMessageDefinition_Focus>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  graph?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  parent?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  purpose?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  replaces?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  resourceType: Readonly<'MessageDefinition'>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  responseRequired?: Readonly<'always' | 'on-error' | 'never' | 'on-success'>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
export interface FhirMessageDefinitionOutput {
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _category?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _copyright?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _eventUri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _experimental?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _purpose?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _responseRequired?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  allowedResponse?: ReadonlyArray<t.OutputOf<typeof FhirMessageDefinition_AllowedResponse>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  base?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  category?: Readonly<'consequence' | 'currency' | 'notification'>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  copyright?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  eventCoding?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  eventUri?: Readonly<string>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  experimental?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  focus?: ReadonlyArray<t.OutputOf<typeof FhirMessageDefinition_Focus>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  graph?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  parent?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  purpose?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  replaces?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  resourceType: Readonly<'MessageDefinition'>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  responseRequired?: Readonly<'always' | 'on-error' | 'never' | 'on-success'>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
