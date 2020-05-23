import * as t from 'io-ts'
import { FhirAddress } from './FhirAddress'
import { FhirAttachment } from './FhirAttachment'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirContactPoint } from './FhirContactPoint'
import { FhirDate } from './FhirDate'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirHumanName } from './FhirHumanName'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPerson_Link } from './FhirPerson_Link'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** Demographics and administrative information about a person independent of a specific health-related context. */
export const FhirPerson: t.Type<FhirPerson, FhirPersonOutput> = t.recursion('FhirPerson', () =>
  t.intersection([
    t.type({
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      resourceType: t.readonly(t.literal('Person')),
    }),
    t.partial({
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      _active: t.readonly(FhirElement),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      _birthDate: t.readonly(FhirElement),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      _gender: t.readonly(FhirElement),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      _implicitRules: t.readonly(FhirElement),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      _language: t.readonly(FhirElement),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      active: t.readonly(FhirBoolean),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      address: t.readonlyArray(FhirAddress),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      birthDate: t.readonly(FhirDate),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      contained: t.readonlyArray(FhirResourceList),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      extension: t.readonlyArray(FhirExtension),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      gender: t.readonly(
        t.keyof({
          male: null,
          female: null,
          other: null,
          unknown: null,
        })
      ),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      id: t.readonly(FhirId),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      implicitRules: t.readonly(FhirUri),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      language: t.readonly(FhirCode),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      link: t.readonlyArray(FhirPerson_Link),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      managingOrganization: t.readonly(FhirReference),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      meta: t.readonly(FhirMeta),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      name: t.readonlyArray(FhirHumanName),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      photo: t.readonly(FhirAttachment),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      telecom: t.readonlyArray(FhirContactPoint),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** Demographics and administrative information about a person independent of a specific health-related context. */
export interface FhirPerson {
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  _active?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  _birthDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  _gender?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  active?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  address?: ReadonlyArray<t.TypeOf<typeof FhirAddress>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  birthDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  gender?: Readonly<'male' | 'female' | 'other' | 'unknown'>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  link?: ReadonlyArray<t.TypeOf<typeof FhirPerson_Link>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  managingOrganization?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  name?: ReadonlyArray<t.TypeOf<typeof FhirHumanName>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  photo?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  resourceType: Readonly<'Person'>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  telecom?: ReadonlyArray<t.TypeOf<typeof FhirContactPoint>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** Demographics and administrative information about a person independent of a specific health-related context. */
export interface FhirPersonOutput {
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  _active?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  _birthDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  _gender?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  active?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  address?: ReadonlyArray<t.OutputOf<typeof FhirAddress>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  birthDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  gender?: Readonly<'male' | 'female' | 'other' | 'unknown'>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  link?: ReadonlyArray<t.OutputOf<typeof FhirPerson_Link>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  managingOrganization?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  name?: ReadonlyArray<t.OutputOf<typeof FhirHumanName>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  photo?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  resourceType: Readonly<'Person'>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  telecom?: ReadonlyArray<t.OutputOf<typeof FhirContactPoint>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
