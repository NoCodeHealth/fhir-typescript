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
import { FhirPractitioner_Qualification } from './FhirPractitioner_Qualification'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** A person who is directly or indirectly involved in the provisioning of healthcare. */
export const FhirPractitioner: t.Type<FhirPractitioner, FhirPractitionerOutput> = t.recursion('FhirPractitioner', () =>
  t.intersection([
    t.type({
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      resourceType: t.readonly(t.literal('Practitioner')),
    }),
    t.partial({
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      _active: t.readonly(FhirElement),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      _birthDate: t.readonly(FhirElement),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      _gender: t.readonly(FhirElement),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      _implicitRules: t.readonly(FhirElement),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      _language: t.readonly(FhirElement),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      active: t.readonly(FhirBoolean),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      address: t.readonlyArray(FhirAddress),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      birthDate: t.readonly(FhirDate),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      communication: t.readonlyArray(FhirCodeableConcept),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      contained: t.readonlyArray(FhirResourceList),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      extension: t.readonlyArray(FhirExtension),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      gender: t.readonly(
        t.keyof({
          male: null,
          female: null,
          other: null,
          unknown: null,
        })
      ),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      id: t.readonly(FhirId),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      implicitRules: t.readonly(FhirUri),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      language: t.readonly(FhirCode),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      meta: t.readonly(FhirMeta),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      name: t.readonlyArray(FhirHumanName),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      photo: t.readonlyArray(FhirAttachment),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      qualification: t.readonlyArray(FhirPractitioner_Qualification),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      telecom: t.readonlyArray(FhirContactPoint),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** A person who is directly or indirectly involved in the provisioning of healthcare. */
export interface FhirPractitioner {
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  _active?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  _birthDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  _gender?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  active?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  address?: ReadonlyArray<t.TypeOf<typeof FhirAddress>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  birthDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  communication?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  gender?: Readonly<'male' | 'female' | 'other' | 'unknown'>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  name?: ReadonlyArray<t.TypeOf<typeof FhirHumanName>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  photo?: ReadonlyArray<t.TypeOf<typeof FhirAttachment>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  qualification?: ReadonlyArray<t.TypeOf<typeof FhirPractitioner_Qualification>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  resourceType: Readonly<'Practitioner'>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  telecom?: ReadonlyArray<t.TypeOf<typeof FhirContactPoint>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A person who is directly or indirectly involved in the provisioning of healthcare. */
export interface FhirPractitionerOutput {
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  _active?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  _birthDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  _gender?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  active?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  address?: ReadonlyArray<t.OutputOf<typeof FhirAddress>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  birthDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  communication?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  gender?: Readonly<'male' | 'female' | 'other' | 'unknown'>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  name?: ReadonlyArray<t.OutputOf<typeof FhirHumanName>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  photo?: ReadonlyArray<t.OutputOf<typeof FhirAttachment>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  qualification?: ReadonlyArray<t.OutputOf<typeof FhirPractitioner_Qualification>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  resourceType: Readonly<'Practitioner'>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  telecom?: ReadonlyArray<t.OutputOf<typeof FhirContactPoint>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
