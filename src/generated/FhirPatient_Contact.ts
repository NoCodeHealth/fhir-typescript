import * as t from 'io-ts'
import { FhirAddress } from './FhirAddress'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactPoint } from './FhirContactPoint'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirHumanName } from './FhirHumanName'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
export const FhirPatient_Contact: t.Type<FhirPatient_Contact, FhirPatient_ContactOutput> = t.recursion(
  'FhirPatient_Contact',
  () =>
    t.partial({
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      _gender: t.readonly(FhirElement),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      address: t.readonly(FhirAddress),
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
      id: t.readonly(FhirString),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      name: t.readonly(FhirHumanName),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      organization: t.readonly(FhirReference),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      period: t.readonly(FhirPeriod),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      relationship: t.readonlyArray(FhirCodeableConcept),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      telecom: t.readonlyArray(FhirContactPoint),
    })
)

/** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
export interface FhirPatient_Contact {
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _gender?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  address?: Readonly<t.TypeOf<typeof FhirAddress>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  gender?: Readonly<'male' | 'female' | 'other' | 'unknown'>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  name?: Readonly<t.TypeOf<typeof FhirHumanName>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  organization?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  relationship?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  telecom?: ReadonlyArray<t.TypeOf<typeof FhirContactPoint>>
}
/** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
export interface FhirPatient_ContactOutput {
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _gender?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  address?: Readonly<t.OutputOf<typeof FhirAddress>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  gender?: Readonly<'male' | 'female' | 'other' | 'unknown'>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  name?: Readonly<t.OutputOf<typeof FhirHumanName>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  organization?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  relationship?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  telecom?: ReadonlyArray<t.OutputOf<typeof FhirContactPoint>>
}
