import * as t from 'io-ts'
import { FhirAge } from './FhirAge'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirRange } from './FhirRange'
import { FhirString } from './FhirString'

/** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
export const FhirFamilyMemberHistory_Condition: t.Type<
  FhirFamilyMemberHistory_Condition,
  FhirFamilyMemberHistory_ConditionOutput
> = t.recursion('FhirFamilyMemberHistory_Condition', () =>
  t.intersection([
    t.type({
      /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
      code: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
      _contributedToDeath: t.readonly(FhirElement),
      /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
      _onsetString: t.readonly(FhirElement),
      /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
      contributedToDeath: t.readonly(FhirBoolean),
      /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
      extension: t.readonlyArray(FhirExtension),
      /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
      id: t.readonly(FhirString),
      /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
      note: t.readonlyArray(FhirAnnotation),
      /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
      onsetAge: t.readonly(FhirAge),
      /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
      onsetPeriod: t.readonly(FhirPeriod),
      /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
      onsetRange: t.readonly(FhirRange),
      /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
      onsetString: t.readonly(t.string),
      /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
      outcome: t.readonly(FhirCodeableConcept),
    }),
  ])
)

/** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
export interface FhirFamilyMemberHistory_Condition {
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _contributedToDeath?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _onsetString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  code: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  contributedToDeath?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  onsetAge?: Readonly<t.TypeOf<typeof FhirAge>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  onsetPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  onsetRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  onsetString?: Readonly<string>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  outcome?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
export interface FhirFamilyMemberHistory_ConditionOutput {
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _contributedToDeath?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _onsetString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  code: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  contributedToDeath?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  onsetAge?: Readonly<t.OutputOf<typeof FhirAge>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  onsetPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  onsetRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  onsetString?: Readonly<string>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  outcome?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
