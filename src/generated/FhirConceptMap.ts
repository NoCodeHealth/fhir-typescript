import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirConceptMap_Group } from './FhirConceptMap_Group'
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
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export const FhirConceptMap: t.Type<FhirConceptMap, FhirConceptMapOutput> = t.recursion('FhirConceptMap', () =>
  t.intersection([
    t.type({
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      resourceType: t.readonly(t.literal('ConceptMap')),
    }),
    t.partial({
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _copyright: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _date: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _description: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _experimental: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _implicitRules: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _language: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _name: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _publisher: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _purpose: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _sourceCanonical: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _sourceUri: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _status: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _targetCanonical: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _targetUri: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _title: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _url: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _version: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      contact: t.readonlyArray(FhirContactDetail),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      contained: t.readonlyArray(FhirResourceList),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      copyright: t.readonly(FhirMarkdown),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      date: t.readonly(FhirDateTime),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      description: t.readonly(FhirMarkdown),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      experimental: t.readonly(FhirBoolean),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      extension: t.readonlyArray(FhirExtension),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      group: t.readonlyArray(FhirConceptMap_Group),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      id: t.readonly(FhirId),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      identifier: t.readonly(FhirIdentifier),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      implicitRules: t.readonly(FhirUri),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      jurisdiction: t.readonlyArray(FhirCodeableConcept),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      language: t.readonly(FhirCode),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      meta: t.readonly(FhirMeta),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      name: t.readonly(FhirString),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      publisher: t.readonly(FhirString),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      purpose: t.readonly(FhirMarkdown),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      sourceCanonical: t.readonly(t.string),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      sourceUri: t.readonly(t.string),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      status: t.readonly(
        t.keyof({
          draft: null,
          active: null,
          retired: null,
          unknown: null,
        })
      ),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      targetCanonical: t.readonly(t.string),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      targetUri: t.readonly(t.string),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      text: t.readonly(FhirNarrative),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      title: t.readonly(FhirString),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      url: t.readonly(FhirUri),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      useContext: t.readonlyArray(FhirUsageContext),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      version: t.readonly(FhirString),
    }),
  ])
)

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface FhirConceptMap {
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _copyright?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _experimental?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _purpose?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _sourceCanonical?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _sourceUri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _targetCanonical?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _targetUri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  copyright?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  experimental?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  group?: ReadonlyArray<t.TypeOf<typeof FhirConceptMap_Group>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  purpose?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  resourceType: Readonly<'ConceptMap'>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  sourceCanonical?: Readonly<string>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  sourceUri?: Readonly<string>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  targetCanonical?: Readonly<string>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  targetUri?: Readonly<string>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface FhirConceptMapOutput {
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _copyright?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _experimental?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _purpose?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _sourceCanonical?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _sourceUri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _targetCanonical?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _targetUri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  copyright?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  experimental?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  group?: ReadonlyArray<t.OutputOf<typeof FhirConceptMap_Group>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  purpose?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  resourceType: Readonly<'ConceptMap'>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  sourceCanonical?: Readonly<string>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  sourceUri?: Readonly<string>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  targetCanonical?: Readonly<string>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  targetUri?: Readonly<string>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
