import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
export const FhirImmunizationEvaluation: t.Type<
  FhirImmunizationEvaluation,
  FhirImmunizationEvaluationOutput
> = t.recursion('FhirImmunizationEvaluation', () =>
  t.intersection([
    t.type({
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      doseStatus: t.readonly(FhirCodeableConcept),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      immunizationEvent: t.readonly(FhirReference),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      patient: t.readonly(FhirReference),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      resourceType: t.readonly(t.literal('ImmunizationEvaluation')),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      targetDisease: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      _date: t.readonly(FhirElement),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      _description: t.readonly(FhirElement),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      _doseNumberPositiveInt: t.readonly(FhirElement),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      _doseNumberString: t.readonly(FhirElement),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      _implicitRules: t.readonly(FhirElement),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      _language: t.readonly(FhirElement),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      _series: t.readonly(FhirElement),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      _seriesDosesPositiveInt: t.readonly(FhirElement),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      _seriesDosesString: t.readonly(FhirElement),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      _status: t.readonly(FhirElement),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      authority: t.readonly(FhirReference),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      contained: t.readonlyArray(FhirResourceList),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      date: t.readonly(FhirDateTime),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      description: t.readonly(FhirString),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      doseNumberPositiveInt: t.readonly(t.number),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      doseNumberString: t.readonly(t.string),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      doseStatusReason: t.readonlyArray(FhirCodeableConcept),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      extension: t.readonlyArray(FhirExtension),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      id: t.readonly(FhirId),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      implicitRules: t.readonly(FhirUri),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      language: t.readonly(FhirCode),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      meta: t.readonly(FhirMeta),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      series: t.readonly(FhirString),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      seriesDosesPositiveInt: t.readonly(t.number),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      seriesDosesString: t.readonly(t.string),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      status: t.readonly(FhirCode),
      /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
export interface FhirImmunizationEvaluation {
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _doseNumberPositiveInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _doseNumberString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _series?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _seriesDosesPositiveInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _seriesDosesString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  authority?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  doseNumberPositiveInt?: Readonly<number>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  doseNumberString?: Readonly<string>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  doseStatus: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  doseStatusReason?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  immunizationEvent: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  patient: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  resourceType: Readonly<'ImmunizationEvaluation'>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  series?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  seriesDosesPositiveInt?: Readonly<number>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  seriesDosesString?: Readonly<string>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  targetDisease: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
export interface FhirImmunizationEvaluationOutput {
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _doseNumberPositiveInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _doseNumberString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _series?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _seriesDosesPositiveInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _seriesDosesString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  authority?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  doseNumberPositiveInt?: Readonly<number>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  doseNumberString?: Readonly<string>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  doseStatus: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  doseStatusReason?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  immunizationEvent: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  patient: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  resourceType: Readonly<'ImmunizationEvaluation'>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  series?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  seriesDosesPositiveInt?: Readonly<number>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  seriesDosesString?: Readonly<string>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  targetDisease: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
