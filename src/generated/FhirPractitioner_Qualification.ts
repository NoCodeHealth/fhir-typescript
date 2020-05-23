import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A person who is directly or indirectly involved in the provisioning of healthcare. */
export const FhirPractitioner_Qualification: t.Type<
  FhirPractitioner_Qualification,
  FhirPractitioner_QualificationOutput
> = t.recursion('FhirPractitioner_Qualification', () =>
  t.intersection([
    t.type({
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      code: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      extension: t.readonlyArray(FhirExtension),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      id: t.readonly(FhirString),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      issuer: t.readonly(FhirReference),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A person who is directly or indirectly involved in the provisioning of healthcare. */
      period: t.readonly(FhirPeriod),
    }),
  ])
)

/** A person who is directly or indirectly involved in the provisioning of healthcare. */
export interface FhirPractitioner_Qualification {
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  code: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  issuer?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
}
/** A person who is directly or indirectly involved in the provisioning of healthcare. */
export interface FhirPractitioner_QualificationOutput {
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  code: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  issuer?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A person who is directly or indirectly involved in the provisioning of healthcare. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
}
