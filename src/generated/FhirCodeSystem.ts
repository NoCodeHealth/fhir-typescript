import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeSystem_Concept } from './FhirCodeSystem_Concept'
import { FhirCodeSystem_Filter } from './FhirCodeSystem_Filter'
import { FhirCodeSystem_Property } from './FhirCodeSystem_Property'
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
import { FhirUnsignedInt } from './FhirUnsignedInt'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export const FhirCodeSystem: t.Type<FhirCodeSystem, FhirCodeSystemOutput> = t.recursion('FhirCodeSystem', () =>
  t.intersection([
    t.type({
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      resourceType: t.readonly(t.literal('CodeSystem')),
    }),
    t.partial({
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _caseSensitive: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _compositional: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _content: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _copyright: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _count: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _date: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _description: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _experimental: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _hierarchyMeaning: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _implicitRules: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _language: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _name: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _publisher: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _purpose: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _status: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _title: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _url: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _version: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _versionNeeded: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      caseSensitive: t.readonly(FhirBoolean),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      compositional: t.readonly(FhirBoolean),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      concept: t.readonlyArray(FhirCodeSystem_Concept),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      contact: t.readonlyArray(FhirContactDetail),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      contained: t.readonlyArray(FhirResourceList),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      content: t.readonly(
        t.keyof({
          'not-present': null,
          example: null,
          fragment: null,
          complete: null,
          supplement: null,
        })
      ),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      copyright: t.readonly(FhirMarkdown),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      count: t.readonly(FhirUnsignedInt),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      date: t.readonly(FhirDateTime),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      description: t.readonly(FhirMarkdown),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      experimental: t.readonly(FhirBoolean),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      extension: t.readonlyArray(FhirExtension),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      filter: t.readonlyArray(FhirCodeSystem_Filter),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      hierarchyMeaning: t.readonly(
        t.keyof({
          'grouped-by': null,
          'is-a': null,
          'part-of': null,
          'classified-with': null,
        })
      ),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      id: t.readonly(FhirId),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      implicitRules: t.readonly(FhirUri),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      jurisdiction: t.readonlyArray(FhirCodeableConcept),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      language: t.readonly(FhirCode),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      meta: t.readonly(FhirMeta),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      name: t.readonly(FhirString),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      property: t.readonlyArray(FhirCodeSystem_Property),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      publisher: t.readonly(FhirString),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      purpose: t.readonly(FhirMarkdown),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      status: t.readonly(
        t.keyof({
          draft: null,
          active: null,
          retired: null,
          unknown: null,
        })
      ),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      supplements: t.readonly(FhirCanonical),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      text: t.readonly(FhirNarrative),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      title: t.readonly(FhirString),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      url: t.readonly(FhirUri),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      useContext: t.readonlyArray(FhirUsageContext),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      valueSet: t.readonly(FhirCanonical),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      version: t.readonly(FhirString),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      versionNeeded: t.readonly(FhirBoolean),
    }),
  ])
)

/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export interface FhirCodeSystem {
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _caseSensitive?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _compositional?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _content?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _copyright?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _count?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _experimental?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _hierarchyMeaning?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _purpose?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _versionNeeded?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  caseSensitive?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  compositional?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  concept?: ReadonlyArray<t.TypeOf<typeof FhirCodeSystem_Concept>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  content?: Readonly<'not-present' | 'example' | 'fragment' | 'complete' | 'supplement'>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  copyright?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  count?: Readonly<t.TypeOf<typeof FhirUnsignedInt>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  experimental?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  filter?: ReadonlyArray<t.TypeOf<typeof FhirCodeSystem_Filter>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  hierarchyMeaning?: Readonly<'grouped-by' | 'is-a' | 'part-of' | 'classified-with'>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  property?: ReadonlyArray<t.TypeOf<typeof FhirCodeSystem_Property>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  purpose?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  resourceType: Readonly<'CodeSystem'>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  supplements?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  valueSet?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  versionNeeded?: Readonly<t.TypeOf<typeof FhirBoolean>>
}
/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export interface FhirCodeSystemOutput {
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _caseSensitive?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _compositional?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _content?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _copyright?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _count?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _experimental?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _hierarchyMeaning?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _purpose?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _versionNeeded?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  caseSensitive?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  compositional?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  concept?: ReadonlyArray<t.OutputOf<typeof FhirCodeSystem_Concept>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  content?: Readonly<'not-present' | 'example' | 'fragment' | 'complete' | 'supplement'>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  copyright?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  count?: Readonly<t.OutputOf<typeof FhirUnsignedInt>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  experimental?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  filter?: ReadonlyArray<t.OutputOf<typeof FhirCodeSystem_Filter>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  hierarchyMeaning?: Readonly<'grouped-by' | 'is-a' | 'part-of' | 'classified-with'>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  property?: ReadonlyArray<t.OutputOf<typeof FhirCodeSystem_Property>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  purpose?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  resourceType: Readonly<'CodeSystem'>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  supplements?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  valueSet?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  versionNeeded?: Readonly<t.OutputOf<typeof FhirBoolean>>
}
