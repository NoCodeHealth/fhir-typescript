import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirDateTime } from './FhirDateTime'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirTestReport_Participant } from './FhirTestReport_Participant'
import { FhirTestReport_Setup } from './FhirTestReport_Setup'
import { FhirTestReport_Teardown } from './FhirTestReport_Teardown'
import { FhirTestReport_Test } from './FhirTestReport_Test'
import { FhirUri } from './FhirUri'

/** A summary of information based on the results of executing a TestScript. */
export const FhirTestReport: t.Type<FhirTestReport, FhirTestReportOutput> = t.recursion('FhirTestReport', () =>
  t.intersection([
    t.type({
      /** A summary of information based on the results of executing a TestScript. */
      resourceType: t.readonly(t.literal('TestReport')),
      /** A summary of information based on the results of executing a TestScript. */
      testScript: t.readonly(FhirReference),
    }),
    t.partial({
      /** A summary of information based on the results of executing a TestScript. */
      _implicitRules: t.readonly(FhirElement),
      /** A summary of information based on the results of executing a TestScript. */
      _issued: t.readonly(FhirElement),
      /** A summary of information based on the results of executing a TestScript. */
      _language: t.readonly(FhirElement),
      /** A summary of information based on the results of executing a TestScript. */
      _name: t.readonly(FhirElement),
      /** A summary of information based on the results of executing a TestScript. */
      _result: t.readonly(FhirElement),
      /** A summary of information based on the results of executing a TestScript. */
      _score: t.readonly(FhirElement),
      /** A summary of information based on the results of executing a TestScript. */
      _status: t.readonly(FhirElement),
      /** A summary of information based on the results of executing a TestScript. */
      _tester: t.readonly(FhirElement),
      /** A summary of information based on the results of executing a TestScript. */
      contained: t.readonlyArray(FhirResourceList),
      /** A summary of information based on the results of executing a TestScript. */
      extension: t.readonlyArray(FhirExtension),
      /** A summary of information based on the results of executing a TestScript. */
      id: t.readonly(FhirId),
      /** A summary of information based on the results of executing a TestScript. */
      identifier: t.readonly(FhirIdentifier),
      /** A summary of information based on the results of executing a TestScript. */
      implicitRules: t.readonly(FhirUri),
      /** A summary of information based on the results of executing a TestScript. */
      issued: t.readonly(FhirDateTime),
      /** A summary of information based on the results of executing a TestScript. */
      language: t.readonly(FhirCode),
      /** A summary of information based on the results of executing a TestScript. */
      meta: t.readonly(FhirMeta),
      /** A summary of information based on the results of executing a TestScript. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A summary of information based on the results of executing a TestScript. */
      name: t.readonly(FhirString),
      /** A summary of information based on the results of executing a TestScript. */
      participant: t.readonlyArray(FhirTestReport_Participant),
      /** A summary of information based on the results of executing a TestScript. */
      result: t.readonly(
        t.keyof({
          pass: null,
          fail: null,
          pending: null,
        })
      ),
      /** A summary of information based on the results of executing a TestScript. */
      score: t.readonly(FhirDecimal),
      /** A summary of information based on the results of executing a TestScript. */
      setup: t.readonly(FhirTestReport_Setup),
      /** A summary of information based on the results of executing a TestScript. */
      status: t.readonly(
        t.keyof({
          completed: null,
          'in-progress': null,
          waiting: null,
          stopped: null,
          'entered-in-error': null,
        })
      ),
      /** A summary of information based on the results of executing a TestScript. */
      teardown: t.readonly(FhirTestReport_Teardown),
      /** A summary of information based on the results of executing a TestScript. */
      test: t.readonlyArray(FhirTestReport_Test),
      /** A summary of information based on the results of executing a TestScript. */
      tester: t.readonly(FhirString),
      /** A summary of information based on the results of executing a TestScript. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** A summary of information based on the results of executing a TestScript. */
export interface FhirTestReport {
  /** A summary of information based on the results of executing a TestScript. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _issued?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _result?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _score?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _tester?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A summary of information based on the results of executing a TestScript. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A summary of information based on the results of executing a TestScript. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A summary of information based on the results of executing a TestScript. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A summary of information based on the results of executing a TestScript. */
  issued?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A summary of information based on the results of executing a TestScript. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A summary of information based on the results of executing a TestScript. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A summary of information based on the results of executing a TestScript. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  participant?: ReadonlyArray<t.TypeOf<typeof FhirTestReport_Participant>>
  /** A summary of information based on the results of executing a TestScript. */
  resourceType: Readonly<'TestReport'>
  /** A summary of information based on the results of executing a TestScript. */
  result?: Readonly<'pass' | 'fail' | 'pending'>
  /** A summary of information based on the results of executing a TestScript. */
  score?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** A summary of information based on the results of executing a TestScript. */
  setup?: Readonly<t.TypeOf<typeof FhirTestReport_Setup>>
  /** A summary of information based on the results of executing a TestScript. */
  status?: Readonly<'completed' | 'in-progress' | 'waiting' | 'stopped' | 'entered-in-error'>
  /** A summary of information based on the results of executing a TestScript. */
  teardown?: Readonly<t.TypeOf<typeof FhirTestReport_Teardown>>
  /** A summary of information based on the results of executing a TestScript. */
  test?: ReadonlyArray<t.TypeOf<typeof FhirTestReport_Test>>
  /** A summary of information based on the results of executing a TestScript. */
  testScript: Readonly<t.TypeOf<typeof FhirReference>>
  /** A summary of information based on the results of executing a TestScript. */
  tester?: Readonly<t.TypeOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A summary of information based on the results of executing a TestScript. */
export interface FhirTestReportOutput {
  /** A summary of information based on the results of executing a TestScript. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _issued?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _result?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _score?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _tester?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A summary of information based on the results of executing a TestScript. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A summary of information based on the results of executing a TestScript. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A summary of information based on the results of executing a TestScript. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A summary of information based on the results of executing a TestScript. */
  issued?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A summary of information based on the results of executing a TestScript. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A summary of information based on the results of executing a TestScript. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A summary of information based on the results of executing a TestScript. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  participant?: ReadonlyArray<t.OutputOf<typeof FhirTestReport_Participant>>
  /** A summary of information based on the results of executing a TestScript. */
  resourceType: Readonly<'TestReport'>
  /** A summary of information based on the results of executing a TestScript. */
  result?: Readonly<'pass' | 'fail' | 'pending'>
  /** A summary of information based on the results of executing a TestScript. */
  score?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** A summary of information based on the results of executing a TestScript. */
  setup?: Readonly<t.OutputOf<typeof FhirTestReport_Setup>>
  /** A summary of information based on the results of executing a TestScript. */
  status?: Readonly<'completed' | 'in-progress' | 'waiting' | 'stopped' | 'entered-in-error'>
  /** A summary of information based on the results of executing a TestScript. */
  teardown?: Readonly<t.OutputOf<typeof FhirTestReport_Teardown>>
  /** A summary of information based on the results of executing a TestScript. */
  test?: ReadonlyArray<t.OutputOf<typeof FhirTestReport_Test>>
  /** A summary of information based on the results of executing a TestScript. */
  testScript: Readonly<t.OutputOf<typeof FhirReference>>
  /** A summary of information based on the results of executing a TestScript. */
  tester?: Readonly<t.OutputOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
