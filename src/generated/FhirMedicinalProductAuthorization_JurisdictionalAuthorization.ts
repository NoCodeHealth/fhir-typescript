import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirPeriod } from './FhirPeriod'
import { FhirString } from './FhirString'

/** The regulatory authorization of a medicinal product. */
export const FhirMedicinalProductAuthorization_JurisdictionalAuthorization: t.Type<
  FhirMedicinalProductAuthorization_JurisdictionalAuthorization,
  FhirMedicinalProductAuthorization_JurisdictionalAuthorizationOutput
> = t.recursion('FhirMedicinalProductAuthorization_JurisdictionalAuthorization', () =>
  t.partial({
    /** The regulatory authorization of a medicinal product. */
    country: t.readonly(FhirCodeableConcept),
    /** The regulatory authorization of a medicinal product. */
    extension: t.readonlyArray(FhirExtension),
    /** The regulatory authorization of a medicinal product. */
    id: t.readonly(FhirString),
    /** The regulatory authorization of a medicinal product. */
    identifier: t.readonlyArray(FhirIdentifier),
    /** The regulatory authorization of a medicinal product. */
    jurisdiction: t.readonlyArray(FhirCodeableConcept),
    /** The regulatory authorization of a medicinal product. */
    legalStatusOfSupply: t.readonly(FhirCodeableConcept),
    /** The regulatory authorization of a medicinal product. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The regulatory authorization of a medicinal product. */
    validityPeriod: t.readonly(FhirPeriod),
  })
)

/** The regulatory authorization of a medicinal product. */
export interface FhirMedicinalProductAuthorization_JurisdictionalAuthorization {
  /** The regulatory authorization of a medicinal product. */
  country?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The regulatory authorization of a medicinal product. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The regulatory authorization of a medicinal product. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The regulatory authorization of a medicinal product. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** The regulatory authorization of a medicinal product. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The regulatory authorization of a medicinal product. */
  legalStatusOfSupply?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The regulatory authorization of a medicinal product. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The regulatory authorization of a medicinal product. */
  validityPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
}
/** The regulatory authorization of a medicinal product. */
export interface FhirMedicinalProductAuthorization_JurisdictionalAuthorizationOutput {
  /** The regulatory authorization of a medicinal product. */
  country?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The regulatory authorization of a medicinal product. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The regulatory authorization of a medicinal product. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The regulatory authorization of a medicinal product. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** The regulatory authorization of a medicinal product. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The regulatory authorization of a medicinal product. */
  legalStatusOfSupply?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The regulatory authorization of a medicinal product. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The regulatory authorization of a medicinal product. */
  validityPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
}
