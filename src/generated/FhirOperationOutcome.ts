import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirOperationOutcome_Issue } from './FhirOperationOutcome_Issue'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** A collection of error, warning, or information messages that result from a system action. */
export const FhirOperationOutcome: t.Type<FhirOperationOutcome, FhirOperationOutcomeOutput> = t.recursion(
  'FhirOperationOutcome',
  () =>
    t.intersection([
      t.type({
        /** A collection of error, warning, or information messages that result from a system action. */
        issue: t.readonlyArray(FhirOperationOutcome_Issue),
        /** A collection of error, warning, or information messages that result from a system action. */
        resourceType: t.readonly(t.literal('OperationOutcome')),
      }),
      t.partial({
        /** A collection of error, warning, or information messages that result from a system action. */
        _implicitRules: t.readonly(FhirElement),
        /** A collection of error, warning, or information messages that result from a system action. */
        _language: t.readonly(FhirElement),
        /** A collection of error, warning, or information messages that result from a system action. */
        contained: t.readonlyArray(FhirResourceList),
        /** A collection of error, warning, or information messages that result from a system action. */
        extension: t.readonlyArray(FhirExtension),
        /** A collection of error, warning, or information messages that result from a system action. */
        id: t.readonly(FhirId),
        /** A collection of error, warning, or information messages that result from a system action. */
        implicitRules: t.readonly(FhirUri),
        /** A collection of error, warning, or information messages that result from a system action. */
        language: t.readonly(FhirCode),
        /** A collection of error, warning, or information messages that result from a system action. */
        meta: t.readonly(FhirMeta),
        /** A collection of error, warning, or information messages that result from a system action. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A collection of error, warning, or information messages that result from a system action. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** A collection of error, warning, or information messages that result from a system action. */
export interface FhirOperationOutcome {
  /** A collection of error, warning, or information messages that result from a system action. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A collection of error, warning, or information messages that result from a system action. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A collection of error, warning, or information messages that result from a system action. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A collection of error, warning, or information messages that result from a system action. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A collection of error, warning, or information messages that result from a system action. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A collection of error, warning, or information messages that result from a system action. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A collection of error, warning, or information messages that result from a system action. */
  issue: ReadonlyArray<t.TypeOf<typeof FhirOperationOutcome_Issue>>
  /** A collection of error, warning, or information messages that result from a system action. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A collection of error, warning, or information messages that result from a system action. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A collection of error, warning, or information messages that result from a system action. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A collection of error, warning, or information messages that result from a system action. */
  resourceType: Readonly<'OperationOutcome'>
  /** A collection of error, warning, or information messages that result from a system action. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A collection of error, warning, or information messages that result from a system action. */
export interface FhirOperationOutcomeOutput {
  /** A collection of error, warning, or information messages that result from a system action. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A collection of error, warning, or information messages that result from a system action. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A collection of error, warning, or information messages that result from a system action. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A collection of error, warning, or information messages that result from a system action. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A collection of error, warning, or information messages that result from a system action. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A collection of error, warning, or information messages that result from a system action. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A collection of error, warning, or information messages that result from a system action. */
  issue: ReadonlyArray<t.OutputOf<typeof FhirOperationOutcome_Issue>>
  /** A collection of error, warning, or information messages that result from a system action. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A collection of error, warning, or information messages that result from a system action. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A collection of error, warning, or information messages that result from a system action. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A collection of error, warning, or information messages that result from a system action. */
  resourceType: Readonly<'OperationOutcome'>
  /** A collection of error, warning, or information messages that result from a system action. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
