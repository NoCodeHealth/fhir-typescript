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
import { FhirMarkdown } from './FhirMarkdown'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirOperationDefinition_Overload } from './FhirOperationDefinition_Overload'
import { FhirOperationDefinition_Parameter } from './FhirOperationDefinition_Parameter'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export const FhirOperationDefinition: t.Type<FhirOperationDefinition, FhirOperationDefinitionOutput> = t.recursion(
  'FhirOperationDefinition',
  () =>
    t.intersection([
      t.type({
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        resourceType: t.readonly(t.literal('OperationDefinition')),
      }),
      t.partial({
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _affectsState: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _code: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _comment: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _date: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _description: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _experimental: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _implicitRules: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _instance: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _kind: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _language: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _name: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _publisher: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _purpose: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _resource: t.readonlyArray(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _status: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _system: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _title: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _type: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _url: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        _version: t.readonly(FhirElement),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        affectsState: t.readonly(FhirBoolean),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        base: t.readonly(FhirCanonical),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        code: t.readonly(FhirCode),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        comment: t.readonly(FhirMarkdown),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        contact: t.readonlyArray(FhirContactDetail),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        contained: t.readonlyArray(FhirResourceList),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        date: t.readonly(FhirDateTime),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        description: t.readonly(FhirMarkdown),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        experimental: t.readonly(FhirBoolean),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        extension: t.readonlyArray(FhirExtension),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        id: t.readonly(FhirId),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        implicitRules: t.readonly(FhirUri),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        inputProfile: t.readonly(FhirCanonical),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        instance: t.readonly(FhirBoolean),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        jurisdiction: t.readonlyArray(FhirCodeableConcept),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        kind: t.readonly(
          t.keyof({
            operation: null,
            query: null,
          })
        ),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        language: t.readonly(FhirCode),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        meta: t.readonly(FhirMeta),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        name: t.readonly(FhirString),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        outputProfile: t.readonly(FhirCanonical),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        overload: t.readonlyArray(FhirOperationDefinition_Overload),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        parameter: t.readonlyArray(FhirOperationDefinition_Parameter),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        publisher: t.readonly(FhirString),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        purpose: t.readonly(FhirMarkdown),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        resource: t.readonlyArray(FhirCode),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        status: t.readonly(
          t.keyof({
            draft: null,
            active: null,
            retired: null,
            unknown: null,
          })
        ),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        system: t.readonly(FhirBoolean),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        text: t.readonly(FhirNarrative),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        title: t.readonly(FhirString),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        type: t.readonly(FhirBoolean),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        url: t.readonly(FhirUri),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        useContext: t.readonlyArray(FhirUsageContext),
        /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
        version: t.readonly(FhirString),
      }),
    ])
)

/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export interface FhirOperationDefinition {
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _affectsState?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _comment?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _experimental?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _instance?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _kind?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _purpose?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _resource?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _system?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  affectsState?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  base?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  code?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  comment?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  experimental?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  inputProfile?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  instance?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  kind?: Readonly<'operation' | 'query'>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  outputProfile?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  overload?: ReadonlyArray<t.TypeOf<typeof FhirOperationDefinition_Overload>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  parameter?: ReadonlyArray<t.TypeOf<typeof FhirOperationDefinition_Parameter>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  purpose?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  resource?: ReadonlyArray<t.TypeOf<typeof FhirCode>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  resourceType: Readonly<'OperationDefinition'>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  system?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  type?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export interface FhirOperationDefinitionOutput {
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _affectsState?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _comment?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _experimental?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _instance?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _kind?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _purpose?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _resource?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _system?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  affectsState?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  base?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  code?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  comment?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  experimental?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  inputProfile?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  instance?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  kind?: Readonly<'operation' | 'query'>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  outputProfile?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  overload?: ReadonlyArray<t.OutputOf<typeof FhirOperationDefinition_Overload>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  parameter?: ReadonlyArray<t.OutputOf<typeof FhirOperationDefinition_Parameter>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  purpose?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  resource?: ReadonlyArray<t.OutputOf<typeof FhirCode>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  resourceType: Readonly<'OperationDefinition'>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  system?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  type?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
