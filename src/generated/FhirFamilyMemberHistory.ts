import * as t from 'io-ts'
import { FhirAge } from './FhirAge'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirBoolean } from './FhirBoolean'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirFamilyMemberHistory_Condition } from './FhirFamilyMemberHistory_Condition'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirRange } from './FhirRange'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
export const FhirFamilyMemberHistory: t.Type<FhirFamilyMemberHistory, FhirFamilyMemberHistoryOutput> = t.recursion(
  'FhirFamilyMemberHistory',
  () =>
    t.intersection([
      t.type({
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        patient: t.readonly(FhirReference),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        relationship: t.readonly(FhirCodeableConcept),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        resourceType: t.readonly(t.literal('FamilyMemberHistory')),
      }),
      t.partial({
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        _ageString: t.readonly(FhirElement),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        _bornDate: t.readonly(FhirElement),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        _bornString: t.readonly(FhirElement),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        _date: t.readonly(FhirElement),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        _deceasedBoolean: t.readonly(FhirElement),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        _deceasedDate: t.readonly(FhirElement),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        _deceasedString: t.readonly(FhirElement),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        _estimatedAge: t.readonly(FhirElement),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        _implicitRules: t.readonly(FhirElement),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        _instantiatesUri: t.readonlyArray(FhirElement),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        _language: t.readonly(FhirElement),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        _name: t.readonly(FhirElement),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        _status: t.readonly(FhirElement),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        ageAge: t.readonly(FhirAge),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        ageRange: t.readonly(FhirRange),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        ageString: t.readonly(t.string),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        bornDate: t.readonly(t.string),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        bornPeriod: t.readonly(FhirPeriod),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        bornString: t.readonly(t.string),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        condition: t.readonlyArray(FhirFamilyMemberHistory_Condition),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        contained: t.readonlyArray(FhirResourceList),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        dataAbsentReason: t.readonly(FhirCodeableConcept),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        date: t.readonly(FhirDateTime),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        deceasedAge: t.readonly(FhirAge),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        deceasedBoolean: t.readonly(t.boolean),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        deceasedDate: t.readonly(t.string),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        deceasedRange: t.readonly(FhirRange),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        deceasedString: t.readonly(t.string),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        estimatedAge: t.readonly(FhirBoolean),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        extension: t.readonlyArray(FhirExtension),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        id: t.readonly(FhirId),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        implicitRules: t.readonly(FhirUri),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        instantiatesCanonical: t.readonlyArray(FhirCanonical),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        instantiatesUri: t.readonlyArray(FhirUri),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        language: t.readonly(FhirCode),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        meta: t.readonly(FhirMeta),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        name: t.readonly(FhirString),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        note: t.readonlyArray(FhirAnnotation),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        reasonCode: t.readonlyArray(FhirCodeableConcept),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        reasonReference: t.readonlyArray(FhirReference),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        sex: t.readonly(FhirCodeableConcept),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        status: t.readonly(
          t.keyof({
            partial: null,
            completed: null,
            'entered-in-error': null,
            'health-unknown': null,
          })
        ),
        /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
export interface FhirFamilyMemberHistory {
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _ageString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _bornDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _bornString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _deceasedBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _deceasedDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _deceasedString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _estimatedAge?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _instantiatesUri?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  ageAge?: Readonly<t.TypeOf<typeof FhirAge>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  ageRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  ageString?: Readonly<string>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  bornDate?: Readonly<string>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  bornPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  bornString?: Readonly<string>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  condition?: ReadonlyArray<t.TypeOf<typeof FhirFamilyMemberHistory_Condition>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  dataAbsentReason?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  deceasedAge?: Readonly<t.TypeOf<typeof FhirAge>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  deceasedBoolean?: Readonly<boolean>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  deceasedDate?: Readonly<string>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  deceasedRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  deceasedString?: Readonly<string>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  estimatedAge?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  instantiatesCanonical?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  instantiatesUri?: ReadonlyArray<t.TypeOf<typeof FhirUri>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  patient: Readonly<t.TypeOf<typeof FhirReference>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  reasonCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  reasonReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  relationship: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  resourceType: Readonly<'FamilyMemberHistory'>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  sex?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  status?: Readonly<'partial' | 'completed' | 'entered-in-error' | 'health-unknown'>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
export interface FhirFamilyMemberHistoryOutput {
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _ageString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _bornDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _bornString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _deceasedBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _deceasedDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _deceasedString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _estimatedAge?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _instantiatesUri?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  ageAge?: Readonly<t.OutputOf<typeof FhirAge>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  ageRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  ageString?: Readonly<string>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  bornDate?: Readonly<string>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  bornPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  bornString?: Readonly<string>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  condition?: ReadonlyArray<t.OutputOf<typeof FhirFamilyMemberHistory_Condition>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  dataAbsentReason?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  deceasedAge?: Readonly<t.OutputOf<typeof FhirAge>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  deceasedBoolean?: Readonly<boolean>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  deceasedDate?: Readonly<string>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  deceasedRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  deceasedString?: Readonly<string>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  estimatedAge?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  instantiatesCanonical?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  instantiatesUri?: ReadonlyArray<t.OutputOf<typeof FhirUri>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  patient: Readonly<t.OutputOf<typeof FhirReference>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  reasonCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  reasonReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  relationship: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  resourceType: Readonly<'FamilyMemberHistory'>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  sex?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  status?: Readonly<'partial' | 'completed' | 'entered-in-error' | 'health-unknown'>
  /** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
