import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDate } from './FhirDate'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirTiming } from './FhirTiming'
import { FhirUri } from './FhirUri'
import { FhirVerificationResult_Attestation } from './FhirVerificationResult_Attestation'
import { FhirVerificationResult_PrimarySource } from './FhirVerificationResult_PrimarySource'
import { FhirVerificationResult_Validator } from './FhirVerificationResult_Validator'

/** Describes validation requirements, source(s), status and dates for one or more elements. */
export const FhirVerificationResult: t.Type<FhirVerificationResult, FhirVerificationResultOutput> = t.recursion(
  'FhirVerificationResult',
  () =>
    t.intersection([
      t.type({
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        resourceType: t.readonly(t.literal('VerificationResult')),
      }),
      t.partial({
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        _implicitRules: t.readonly(FhirElement),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        _language: t.readonly(FhirElement),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        _lastPerformed: t.readonly(FhirElement),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        _nextScheduled: t.readonly(FhirElement),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        _status: t.readonly(FhirElement),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        _statusDate: t.readonly(FhirElement),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        _targetLocation: t.readonlyArray(FhirElement),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        attestation: t.readonly(FhirVerificationResult_Attestation),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        contained: t.readonlyArray(FhirResourceList),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        extension: t.readonlyArray(FhirExtension),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        failureAction: t.readonly(FhirCodeableConcept),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        frequency: t.readonly(FhirTiming),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        id: t.readonly(FhirId),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        implicitRules: t.readonly(FhirUri),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        language: t.readonly(FhirCode),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        lastPerformed: t.readonly(FhirDateTime),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        meta: t.readonly(FhirMeta),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        need: t.readonly(FhirCodeableConcept),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        nextScheduled: t.readonly(FhirDate),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        primarySource: t.readonlyArray(FhirVerificationResult_PrimarySource),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        status: t.readonly(FhirCode),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        statusDate: t.readonly(FhirDateTime),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        target: t.readonlyArray(FhirReference),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        targetLocation: t.readonlyArray(FhirString),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        text: t.readonly(FhirNarrative),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        validationProcess: t.readonlyArray(FhirCodeableConcept),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        validationType: t.readonly(FhirCodeableConcept),
        /** Describes validation requirements, source(s), status and dates for one or more elements. */
        validator: t.readonlyArray(FhirVerificationResult_Validator),
      }),
    ])
)

/** Describes validation requirements, source(s), status and dates for one or more elements. */
export interface FhirVerificationResult {
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _lastPerformed?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _nextScheduled?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _statusDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _targetLocation?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  attestation?: Readonly<t.TypeOf<typeof FhirVerificationResult_Attestation>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  failureAction?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  frequency?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  lastPerformed?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  need?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  nextScheduled?: Readonly<t.TypeOf<typeof FhirDate>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  primarySource?: ReadonlyArray<t.TypeOf<typeof FhirVerificationResult_PrimarySource>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  resourceType: Readonly<'VerificationResult'>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  statusDate?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  target?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  targetLocation?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  validationProcess?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  validationType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  validator?: ReadonlyArray<t.TypeOf<typeof FhirVerificationResult_Validator>>
}
/** Describes validation requirements, source(s), status and dates for one or more elements. */
export interface FhirVerificationResultOutput {
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _lastPerformed?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _nextScheduled?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _statusDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _targetLocation?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  attestation?: Readonly<t.OutputOf<typeof FhirVerificationResult_Attestation>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  failureAction?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  frequency?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  lastPerformed?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  need?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  nextScheduled?: Readonly<t.OutputOf<typeof FhirDate>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  primarySource?: ReadonlyArray<t.OutputOf<typeof FhirVerificationResult_PrimarySource>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  resourceType: Readonly<'VerificationResult'>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  statusDate?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  target?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  targetLocation?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  validationProcess?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  validationType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  validator?: ReadonlyArray<t.OutputOf<typeof FhirVerificationResult_Validator>>
}
