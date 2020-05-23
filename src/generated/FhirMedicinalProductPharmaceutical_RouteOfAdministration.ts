import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDuration } from './FhirDuration'
import { FhirExtension } from './FhirExtension'
import { FhirMedicinalProductPharmaceutical_TargetSpecies } from './FhirMedicinalProductPharmaceutical_TargetSpecies'
import { FhirQuantity } from './FhirQuantity'
import { FhirRatio } from './FhirRatio'
import { FhirString } from './FhirString'

/** A pharmaceutical product described in terms of its composition and dose form. */
export const FhirMedicinalProductPharmaceutical_RouteOfAdministration: t.Type<
  FhirMedicinalProductPharmaceutical_RouteOfAdministration,
  FhirMedicinalProductPharmaceutical_RouteOfAdministrationOutput
> = t.recursion('FhirMedicinalProductPharmaceutical_RouteOfAdministration', () =>
  t.intersection([
    t.type({
      /** A pharmaceutical product described in terms of its composition and dose form. */
      code: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** A pharmaceutical product described in terms of its composition and dose form. */
      extension: t.readonlyArray(FhirExtension),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      firstDose: t.readonly(FhirQuantity),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      id: t.readonly(FhirString),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      maxDosePerDay: t.readonly(FhirQuantity),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      maxDosePerTreatmentPeriod: t.readonly(FhirRatio),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      maxSingleDose: t.readonly(FhirQuantity),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      maxTreatmentPeriod: t.readonly(FhirDuration),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      targetSpecies: t.readonlyArray(FhirMedicinalProductPharmaceutical_TargetSpecies),
    }),
  ])
)

/** A pharmaceutical product described in terms of its composition and dose form. */
export interface FhirMedicinalProductPharmaceutical_RouteOfAdministration {
  /** A pharmaceutical product described in terms of its composition and dose form. */
  code: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  firstDose?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  maxDosePerDay?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  maxDosePerTreatmentPeriod?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  maxSingleDose?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  maxTreatmentPeriod?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  targetSpecies?: ReadonlyArray<t.TypeOf<typeof FhirMedicinalProductPharmaceutical_TargetSpecies>>
}
/** A pharmaceutical product described in terms of its composition and dose form. */
export interface FhirMedicinalProductPharmaceutical_RouteOfAdministrationOutput {
  /** A pharmaceutical product described in terms of its composition and dose form. */
  code: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  firstDose?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  maxDosePerDay?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  maxDosePerTreatmentPeriod?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  maxSingleDose?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  maxTreatmentPeriod?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  targetSpecies?: ReadonlyArray<t.OutputOf<typeof FhirMedicinalProductPharmaceutical_TargetSpecies>>
}
