import * as t from 'io-ts'
import { FhirAge } from './FhirAge'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCondition_Evidence } from './FhirCondition_Evidence'
import { FhirCondition_Stage } from './FhirCondition_Stage'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirRange } from './FhirRange'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
export const FhirCondition: t.Type<FhirCondition, FhirConditionOutput> = t.recursion('FhirCondition', () =>
  t.intersection([
    t.type({
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      resourceType: t.readonly(t.literal('Condition')),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      subject: t.readonly(FhirReference),
    }),
    t.partial({
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      _abatementDateTime: t.readonly(FhirElement),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      _abatementString: t.readonly(FhirElement),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      _implicitRules: t.readonly(FhirElement),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      _language: t.readonly(FhirElement),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      _onsetDateTime: t.readonly(FhirElement),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      _onsetString: t.readonly(FhirElement),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      _recordedDate: t.readonly(FhirElement),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      abatementAge: t.readonly(FhirAge),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      abatementDateTime: t.readonly(t.string),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      abatementPeriod: t.readonly(FhirPeriod),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      abatementRange: t.readonly(FhirRange),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      abatementString: t.readonly(t.string),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      asserter: t.readonly(FhirReference),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      bodySite: t.readonlyArray(FhirCodeableConcept),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      category: t.readonlyArray(FhirCodeableConcept),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      clinicalStatus: t.readonly(FhirCodeableConcept),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      code: t.readonly(FhirCodeableConcept),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      contained: t.readonlyArray(FhirResourceList),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      encounter: t.readonly(FhirReference),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      evidence: t.readonlyArray(FhirCondition_Evidence),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      extension: t.readonlyArray(FhirExtension),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      id: t.readonly(FhirId),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      implicitRules: t.readonly(FhirUri),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      language: t.readonly(FhirCode),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      meta: t.readonly(FhirMeta),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      note: t.readonlyArray(FhirAnnotation),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      onsetAge: t.readonly(FhirAge),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      onsetDateTime: t.readonly(t.string),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      onsetPeriod: t.readonly(FhirPeriod),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      onsetRange: t.readonly(FhirRange),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      onsetString: t.readonly(t.string),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      recordedDate: t.readonly(FhirDateTime),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      recorder: t.readonly(FhirReference),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      severity: t.readonly(FhirCodeableConcept),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      stage: t.readonlyArray(FhirCondition_Stage),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      text: t.readonly(FhirNarrative),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      verificationStatus: t.readonly(FhirCodeableConcept),
    }),
  ])
)

/** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
export interface FhirCondition {
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  _abatementDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  _abatementString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  _onsetDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  _onsetString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  _recordedDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  abatementAge?: Readonly<t.TypeOf<typeof FhirAge>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  abatementDateTime?: Readonly<string>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  abatementPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  abatementRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  abatementString?: Readonly<string>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  asserter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  bodySite?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  category?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  clinicalStatus?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  evidence?: ReadonlyArray<t.TypeOf<typeof FhirCondition_Evidence>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  onsetAge?: Readonly<t.TypeOf<typeof FhirAge>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  onsetDateTime?: Readonly<string>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  onsetPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  onsetRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  onsetString?: Readonly<string>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  recordedDate?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  recorder?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  resourceType: Readonly<'Condition'>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  severity?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  stage?: ReadonlyArray<t.TypeOf<typeof FhirCondition_Stage>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  subject: Readonly<t.TypeOf<typeof FhirReference>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  verificationStatus?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
export interface FhirConditionOutput {
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  _abatementDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  _abatementString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  _onsetDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  _onsetString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  _recordedDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  abatementAge?: Readonly<t.OutputOf<typeof FhirAge>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  abatementDateTime?: Readonly<string>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  abatementPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  abatementRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  abatementString?: Readonly<string>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  asserter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  bodySite?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  category?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  clinicalStatus?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  evidence?: ReadonlyArray<t.OutputOf<typeof FhirCondition_Evidence>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  onsetAge?: Readonly<t.OutputOf<typeof FhirAge>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  onsetDateTime?: Readonly<string>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  onsetPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  onsetRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  onsetString?: Readonly<string>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  recordedDate?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  recorder?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  resourceType: Readonly<'Condition'>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  severity?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  stage?: ReadonlyArray<t.OutputOf<typeof FhirCondition_Stage>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  subject: Readonly<t.OutputOf<typeof FhirReference>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  verificationStatus?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
