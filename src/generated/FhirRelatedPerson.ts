import * as t from 'io-ts'
import { FhirAddress } from './FhirAddress'
import { FhirAttachment } from './FhirAttachment'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactPoint } from './FhirContactPoint'
import { FhirDate } from './FhirDate'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirHumanName } from './FhirHumanName'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirRelatedPerson_Communication } from './FhirRelatedPerson_Communication'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
export const FhirRelatedPerson: t.Type<FhirRelatedPerson, FhirRelatedPersonOutput> = t.recursion(
  'FhirRelatedPerson',
  () =>
    t.intersection([
      t.type({
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        patient: t.readonly(FhirReference),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        resourceType: t.readonly(t.literal('RelatedPerson')),
      }),
      t.partial({
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        _active: t.readonly(FhirElement),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        _birthDate: t.readonly(FhirElement),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        _gender: t.readonly(FhirElement),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        _implicitRules: t.readonly(FhirElement),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        _language: t.readonly(FhirElement),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        active: t.readonly(FhirBoolean),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        address: t.readonlyArray(FhirAddress),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        birthDate: t.readonly(FhirDate),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        communication: t.readonlyArray(FhirRelatedPerson_Communication),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        contained: t.readonlyArray(FhirResourceList),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        extension: t.readonlyArray(FhirExtension),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        gender: t.readonly(
          t.keyof({
            male: null,
            female: null,
            other: null,
            unknown: null,
          })
        ),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        id: t.readonly(FhirId),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        implicitRules: t.readonly(FhirUri),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        language: t.readonly(FhirCode),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        meta: t.readonly(FhirMeta),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        name: t.readonlyArray(FhirHumanName),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        period: t.readonly(FhirPeriod),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        photo: t.readonlyArray(FhirAttachment),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        relationship: t.readonlyArray(FhirCodeableConcept),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        telecom: t.readonlyArray(FhirContactPoint),
        /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
export interface FhirRelatedPerson {
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  _active?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  _birthDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  _gender?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  active?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  address?: ReadonlyArray<t.TypeOf<typeof FhirAddress>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  birthDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  communication?: ReadonlyArray<t.TypeOf<typeof FhirRelatedPerson_Communication>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  gender?: Readonly<'male' | 'female' | 'other' | 'unknown'>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  name?: ReadonlyArray<t.TypeOf<typeof FhirHumanName>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  patient: Readonly<t.TypeOf<typeof FhirReference>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  photo?: ReadonlyArray<t.TypeOf<typeof FhirAttachment>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  relationship?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  resourceType: Readonly<'RelatedPerson'>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  telecom?: ReadonlyArray<t.TypeOf<typeof FhirContactPoint>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
export interface FhirRelatedPersonOutput {
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  _active?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  _birthDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  _gender?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  active?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  address?: ReadonlyArray<t.OutputOf<typeof FhirAddress>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  birthDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  communication?: ReadonlyArray<t.OutputOf<typeof FhirRelatedPerson_Communication>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  gender?: Readonly<'male' | 'female' | 'other' | 'unknown'>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  name?: ReadonlyArray<t.OutputOf<typeof FhirHumanName>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  patient: Readonly<t.OutputOf<typeof FhirReference>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  photo?: ReadonlyArray<t.OutputOf<typeof FhirAttachment>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  relationship?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  resourceType: Readonly<'RelatedPerson'>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  telecom?: ReadonlyArray<t.OutputOf<typeof FhirContactPoint>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
