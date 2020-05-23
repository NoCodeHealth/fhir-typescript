import * as t from 'io-ts'
import { FhirAge } from './FhirAge'
import { FhirAllergyIntolerance_Reaction } from './FhirAllergyIntolerance_Reaction'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
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

/** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
export const FhirAllergyIntolerance: t.Type<FhirAllergyIntolerance, FhirAllergyIntoleranceOutput> = t.recursion(
  'FhirAllergyIntolerance',
  () =>
    t.intersection([
      t.type({
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        patient: t.readonly(FhirReference),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        resourceType: t.readonly(t.literal('AllergyIntolerance')),
      }),
      t.partial({
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        _category: t.readonlyArray(FhirElement),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        _criticality: t.readonly(FhirElement),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        _implicitRules: t.readonly(FhirElement),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        _language: t.readonly(FhirElement),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        _lastOccurrence: t.readonly(FhirElement),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        _onsetDateTime: t.readonly(FhirElement),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        _onsetString: t.readonly(FhirElement),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        _recordedDate: t.readonly(FhirElement),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        _type: t.readonly(FhirElement),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        asserter: t.readonly(FhirReference),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        category: t.readonlyArray(
          t.keyof({
            food: null,
            medication: null,
            environment: null,
            biologic: null,
          })
        ),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        clinicalStatus: t.readonly(FhirCodeableConcept),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        code: t.readonly(FhirCodeableConcept),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        contained: t.readonlyArray(FhirResourceList),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        criticality: t.readonly(
          t.keyof({
            low: null,
            high: null,
            'unable-to-assess': null,
          })
        ),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        encounter: t.readonly(FhirReference),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        extension: t.readonlyArray(FhirExtension),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        id: t.readonly(FhirId),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        implicitRules: t.readonly(FhirUri),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        language: t.readonly(FhirCode),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        lastOccurrence: t.readonly(FhirDateTime),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        meta: t.readonly(FhirMeta),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        note: t.readonlyArray(FhirAnnotation),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        onsetAge: t.readonly(FhirAge),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        onsetDateTime: t.readonly(t.string),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        onsetPeriod: t.readonly(FhirPeriod),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        onsetRange: t.readonly(FhirRange),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        onsetString: t.readonly(t.string),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        reaction: t.readonlyArray(FhirAllergyIntolerance_Reaction),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        recordedDate: t.readonly(FhirDateTime),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        recorder: t.readonly(FhirReference),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        text: t.readonly(FhirNarrative),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        type: t.readonly(
          t.keyof({
            allergy: null,
            intolerance: null,
          })
        ),
        /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
        verificationStatus: t.readonly(FhirCodeableConcept),
      }),
    ])
)

/** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
export interface FhirAllergyIntolerance {
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _category?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _criticality?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _lastOccurrence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _onsetDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _onsetString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _recordedDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  asserter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  category?: ReadonlyArray<'food' | 'medication' | 'environment' | 'biologic'>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  clinicalStatus?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  criticality?: Readonly<'low' | 'high' | 'unable-to-assess'>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  lastOccurrence?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  onsetAge?: Readonly<t.TypeOf<typeof FhirAge>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  onsetDateTime?: Readonly<string>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  onsetPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  onsetRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  onsetString?: Readonly<string>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  patient: Readonly<t.TypeOf<typeof FhirReference>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  reaction?: ReadonlyArray<t.TypeOf<typeof FhirAllergyIntolerance_Reaction>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  recordedDate?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  recorder?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  resourceType: Readonly<'AllergyIntolerance'>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  type?: Readonly<'allergy' | 'intolerance'>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  verificationStatus?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
export interface FhirAllergyIntoleranceOutput {
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _category?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _criticality?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _lastOccurrence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _onsetDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _onsetString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _recordedDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  asserter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  category?: ReadonlyArray<'food' | 'medication' | 'environment' | 'biologic'>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  clinicalStatus?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  criticality?: Readonly<'low' | 'high' | 'unable-to-assess'>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  lastOccurrence?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  onsetAge?: Readonly<t.OutputOf<typeof FhirAge>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  onsetDateTime?: Readonly<string>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  onsetPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  onsetRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  onsetString?: Readonly<string>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  patient: Readonly<t.OutputOf<typeof FhirReference>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  reaction?: ReadonlyArray<t.OutputOf<typeof FhirAllergyIntolerance_Reaction>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  recordedDate?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  recorder?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  resourceType: Readonly<'AllergyIntolerance'>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  type?: Readonly<'allergy' | 'intolerance'>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  verificationStatus?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
