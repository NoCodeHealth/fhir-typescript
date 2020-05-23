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
import { FhirPatient_Communication } from './FhirPatient_Communication'
import { FhirPatient_Contact } from './FhirPatient_Contact'
import { FhirPatient_Link } from './FhirPatient_Link'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
export const FhirPatient: t.Type<FhirPatient, FhirPatientOutput> = t.recursion('FhirPatient', () =>
  t.intersection([
    t.type({
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      resourceType: t.readonly(t.literal('Patient')),
    }),
    t.partial({
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      _active: t.readonly(FhirElement),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      _birthDate: t.readonly(FhirElement),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      _deceasedBoolean: t.readonly(FhirElement),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      _deceasedDateTime: t.readonly(FhirElement),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      _gender: t.readonly(FhirElement),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      _implicitRules: t.readonly(FhirElement),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      _language: t.readonly(FhirElement),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      _multipleBirthBoolean: t.readonly(FhirElement),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      _multipleBirthInteger: t.readonly(FhirElement),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      active: t.readonly(FhirBoolean),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      address: t.readonlyArray(FhirAddress),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      birthDate: t.readonly(FhirDate),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      communication: t.readonlyArray(FhirPatient_Communication),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      contact: t.readonlyArray(FhirPatient_Contact),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      contained: t.readonlyArray(FhirResourceList),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      deceasedBoolean: t.readonly(t.boolean),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      deceasedDateTime: t.readonly(t.string),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      extension: t.readonlyArray(FhirExtension),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      gender: t.readonly(
        t.keyof({
          male: null,
          female: null,
          other: null,
          unknown: null,
        })
      ),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      generalPractitioner: t.readonlyArray(FhirReference),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      id: t.readonly(FhirId),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      implicitRules: t.readonly(FhirUri),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      language: t.readonly(FhirCode),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      link: t.readonlyArray(FhirPatient_Link),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      managingOrganization: t.readonly(FhirReference),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      maritalStatus: t.readonly(FhirCodeableConcept),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      meta: t.readonly(FhirMeta),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      multipleBirthBoolean: t.readonly(t.boolean),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      multipleBirthInteger: t.readonly(t.number),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      name: t.readonlyArray(FhirHumanName),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      photo: t.readonlyArray(FhirAttachment),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      telecom: t.readonlyArray(FhirContactPoint),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
export interface FhirPatient {
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _active?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _birthDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _deceasedBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _deceasedDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _gender?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _multipleBirthBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _multipleBirthInteger?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  active?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  address?: ReadonlyArray<t.TypeOf<typeof FhirAddress>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  birthDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  communication?: ReadonlyArray<t.TypeOf<typeof FhirPatient_Communication>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirPatient_Contact>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  deceasedBoolean?: Readonly<boolean>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  deceasedDateTime?: Readonly<string>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  gender?: Readonly<'male' | 'female' | 'other' | 'unknown'>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  generalPractitioner?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  link?: ReadonlyArray<t.TypeOf<typeof FhirPatient_Link>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  managingOrganization?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  maritalStatus?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  multipleBirthBoolean?: Readonly<boolean>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  multipleBirthInteger?: Readonly<number>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  name?: ReadonlyArray<t.TypeOf<typeof FhirHumanName>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  photo?: ReadonlyArray<t.TypeOf<typeof FhirAttachment>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  resourceType: Readonly<'Patient'>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  telecom?: ReadonlyArray<t.TypeOf<typeof FhirContactPoint>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
export interface FhirPatientOutput {
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _active?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _birthDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _deceasedBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _deceasedDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _gender?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _multipleBirthBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _multipleBirthInteger?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  active?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  address?: ReadonlyArray<t.OutputOf<typeof FhirAddress>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  birthDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  communication?: ReadonlyArray<t.OutputOf<typeof FhirPatient_Communication>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirPatient_Contact>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  deceasedBoolean?: Readonly<boolean>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  deceasedDateTime?: Readonly<string>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  gender?: Readonly<'male' | 'female' | 'other' | 'unknown'>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  generalPractitioner?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  link?: ReadonlyArray<t.OutputOf<typeof FhirPatient_Link>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  managingOrganization?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  maritalStatus?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  multipleBirthBoolean?: Readonly<boolean>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  multipleBirthInteger?: Readonly<number>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  name?: ReadonlyArray<t.OutputOf<typeof FhirHumanName>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  photo?: ReadonlyArray<t.OutputOf<typeof FhirAttachment>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  resourceType: Readonly<'Patient'>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  telecom?: ReadonlyArray<t.OutputOf<typeof FhirContactPoint>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
