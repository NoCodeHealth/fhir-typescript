import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirRiskAssessment_Prediction } from './FhirRiskAssessment_Prediction'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
export const FhirRiskAssessment: t.Type<FhirRiskAssessment, FhirRiskAssessmentOutput> = t.recursion(
  'FhirRiskAssessment',
  () =>
    t.intersection([
      t.type({
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        resourceType: t.readonly(t.literal('RiskAssessment')),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        subject: t.readonly(FhirReference),
      }),
      t.partial({
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        _implicitRules: t.readonly(FhirElement),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        _language: t.readonly(FhirElement),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        _mitigation: t.readonly(FhirElement),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        _occurrenceDateTime: t.readonly(FhirElement),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        _status: t.readonly(FhirElement),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        basedOn: t.readonly(FhirReference),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        basis: t.readonlyArray(FhirReference),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        code: t.readonly(FhirCodeableConcept),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        condition: t.readonly(FhirReference),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        contained: t.readonlyArray(FhirResourceList),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        encounter: t.readonly(FhirReference),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        extension: t.readonlyArray(FhirExtension),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        id: t.readonly(FhirId),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        implicitRules: t.readonly(FhirUri),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        language: t.readonly(FhirCode),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        meta: t.readonly(FhirMeta),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        method: t.readonly(FhirCodeableConcept),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        mitigation: t.readonly(FhirString),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        note: t.readonlyArray(FhirAnnotation),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        occurrenceDateTime: t.readonly(t.string),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        occurrencePeriod: t.readonly(FhirPeriod),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        parent: t.readonly(FhirReference),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        performer: t.readonly(FhirReference),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        prediction: t.readonlyArray(FhirRiskAssessment_Prediction),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        reasonCode: t.readonlyArray(FhirCodeableConcept),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        reasonReference: t.readonlyArray(FhirReference),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        status: t.readonly(FhirCode),
        /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
export interface FhirRiskAssessment {
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  _mitigation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  _occurrenceDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  basedOn?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  basis?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  condition?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  method?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  mitigation?: Readonly<t.TypeOf<typeof FhirString>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  occurrenceDateTime?: Readonly<string>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  occurrencePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  parent?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  performer?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  prediction?: ReadonlyArray<t.TypeOf<typeof FhirRiskAssessment_Prediction>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  reasonCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  reasonReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  resourceType: Readonly<'RiskAssessment'>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  subject: Readonly<t.TypeOf<typeof FhirReference>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
export interface FhirRiskAssessmentOutput {
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  _mitigation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  _occurrenceDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  basedOn?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  basis?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  condition?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  method?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  mitigation?: Readonly<t.OutputOf<typeof FhirString>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  occurrenceDateTime?: Readonly<string>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  occurrencePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  parent?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  performer?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  prediction?: ReadonlyArray<t.OutputOf<typeof FhirRiskAssessment_Prediction>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  reasonCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  reasonReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  resourceType: Readonly<'RiskAssessment'>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  subject: Readonly<t.OutputOf<typeof FhirReference>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
