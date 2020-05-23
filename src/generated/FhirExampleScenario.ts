import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactDetail } from './FhirContactDetail'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExampleScenario_Actor } from './FhirExampleScenario_Actor'
import { FhirExampleScenario_Instance } from './FhirExampleScenario_Instance'
import { FhirExampleScenario_Process } from './FhirExampleScenario_Process'
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

/** Example of workflow instance. */
export const FhirExampleScenario: t.Type<FhirExampleScenario, FhirExampleScenarioOutput> = t.recursion(
  'FhirExampleScenario',
  () =>
    t.intersection([
      t.type({
        /** Example of workflow instance. */
        resourceType: t.readonly(t.literal('ExampleScenario')),
      }),
      t.partial({
        /** Example of workflow instance. */
        _copyright: t.readonly(FhirElement),
        /** Example of workflow instance. */
        _date: t.readonly(FhirElement),
        /** Example of workflow instance. */
        _experimental: t.readonly(FhirElement),
        /** Example of workflow instance. */
        _implicitRules: t.readonly(FhirElement),
        /** Example of workflow instance. */
        _language: t.readonly(FhirElement),
        /** Example of workflow instance. */
        _name: t.readonly(FhirElement),
        /** Example of workflow instance. */
        _publisher: t.readonly(FhirElement),
        /** Example of workflow instance. */
        _purpose: t.readonly(FhirElement),
        /** Example of workflow instance. */
        _status: t.readonly(FhirElement),
        /** Example of workflow instance. */
        _url: t.readonly(FhirElement),
        /** Example of workflow instance. */
        _version: t.readonly(FhirElement),
        /** Example of workflow instance. */
        actor: t.readonlyArray(FhirExampleScenario_Actor),
        /** Example of workflow instance. */
        contact: t.readonlyArray(FhirContactDetail),
        /** Example of workflow instance. */
        contained: t.readonlyArray(FhirResourceList),
        /** Example of workflow instance. */
        copyright: t.readonly(FhirMarkdown),
        /** Example of workflow instance. */
        date: t.readonly(FhirDateTime),
        /** Example of workflow instance. */
        experimental: t.readonly(FhirBoolean),
        /** Example of workflow instance. */
        extension: t.readonlyArray(FhirExtension),
        /** Example of workflow instance. */
        id: t.readonly(FhirId),
        /** Example of workflow instance. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** Example of workflow instance. */
        implicitRules: t.readonly(FhirUri),
        /** Example of workflow instance. */
        instance: t.readonlyArray(FhirExampleScenario_Instance),
        /** Example of workflow instance. */
        jurisdiction: t.readonlyArray(FhirCodeableConcept),
        /** Example of workflow instance. */
        language: t.readonly(FhirCode),
        /** Example of workflow instance. */
        meta: t.readonly(FhirMeta),
        /** Example of workflow instance. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Example of workflow instance. */
        name: t.readonly(FhirString),
        /** Example of workflow instance. */
        process: t.readonlyArray(FhirExampleScenario_Process),
        /** Example of workflow instance. */
        publisher: t.readonly(FhirString),
        /** Example of workflow instance. */
        purpose: t.readonly(FhirMarkdown),
        /** Example of workflow instance. */
        status: t.readonly(
          t.keyof({
            draft: null,
            active: null,
            retired: null,
            unknown: null,
          })
        ),
        /** Example of workflow instance. */
        text: t.readonly(FhirNarrative),
        /** Example of workflow instance. */
        url: t.readonly(FhirUri),
        /** Example of workflow instance. */
        useContext: t.readonlyArray(FhirUsageContext),
        /** Example of workflow instance. */
        version: t.readonly(FhirString),
        /** Example of workflow instance. */
        workflow: t.readonlyArray(FhirCanonical),
      }),
    ])
)

/** Example of workflow instance. */
export interface FhirExampleScenario {
  /** Example of workflow instance. */
  _copyright?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _experimental?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _purpose?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  actor?: ReadonlyArray<t.TypeOf<typeof FhirExampleScenario_Actor>>
  /** Example of workflow instance. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** Example of workflow instance. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Example of workflow instance. */
  copyright?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** Example of workflow instance. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Example of workflow instance. */
  experimental?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Example of workflow instance. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Example of workflow instance. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Example of workflow instance. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Example of workflow instance. */
  instance?: ReadonlyArray<t.TypeOf<typeof FhirExampleScenario_Instance>>
  /** Example of workflow instance. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Example of workflow instance. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Example of workflow instance. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Example of workflow instance. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** Example of workflow instance. */
  process?: ReadonlyArray<t.TypeOf<typeof FhirExampleScenario_Process>>
  /** Example of workflow instance. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** Example of workflow instance. */
  purpose?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** Example of workflow instance. */
  resourceType: Readonly<'ExampleScenario'>
  /** Example of workflow instance. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** Example of workflow instance. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Example of workflow instance. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Example of workflow instance. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** Example of workflow instance. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
  /** Example of workflow instance. */
  workflow?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
}
/** Example of workflow instance. */
export interface FhirExampleScenarioOutput {
  /** Example of workflow instance. */
  _copyright?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _experimental?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _purpose?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  actor?: ReadonlyArray<t.OutputOf<typeof FhirExampleScenario_Actor>>
  /** Example of workflow instance. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** Example of workflow instance. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Example of workflow instance. */
  copyright?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** Example of workflow instance. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Example of workflow instance. */
  experimental?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Example of workflow instance. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Example of workflow instance. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Example of workflow instance. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Example of workflow instance. */
  instance?: ReadonlyArray<t.OutputOf<typeof FhirExampleScenario_Instance>>
  /** Example of workflow instance. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Example of workflow instance. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Example of workflow instance. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Example of workflow instance. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** Example of workflow instance. */
  process?: ReadonlyArray<t.OutputOf<typeof FhirExampleScenario_Process>>
  /** Example of workflow instance. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** Example of workflow instance. */
  purpose?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** Example of workflow instance. */
  resourceType: Readonly<'ExampleScenario'>
  /** Example of workflow instance. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** Example of workflow instance. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Example of workflow instance. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Example of workflow instance. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** Example of workflow instance. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
  /** Example of workflow instance. */
  workflow?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
}
