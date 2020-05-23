import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** A pharmaceutical product described in terms of its composition and dose form. */
export const FhirMedicinalProductPharmaceutical_WithdrawalPeriod: t.Type<
  FhirMedicinalProductPharmaceutical_WithdrawalPeriod,
  FhirMedicinalProductPharmaceutical_WithdrawalPeriodOutput
> = t.recursion('FhirMedicinalProductPharmaceutical_WithdrawalPeriod', () =>
  t.intersection([
    t.type({
      /** A pharmaceutical product described in terms of its composition and dose form. */
      tissue: t.readonly(FhirCodeableConcept),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      value: t.readonly(FhirQuantity),
    }),
    t.partial({
      /** A pharmaceutical product described in terms of its composition and dose form. */
      _supportingInformation: t.readonly(FhirElement),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      extension: t.readonlyArray(FhirExtension),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      id: t.readonly(FhirString),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      supportingInformation: t.readonly(FhirString),
    }),
  ])
)

/** A pharmaceutical product described in terms of its composition and dose form. */
export interface FhirMedicinalProductPharmaceutical_WithdrawalPeriod {
  /** A pharmaceutical product described in terms of its composition and dose form. */
  _supportingInformation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  supportingInformation?: Readonly<t.TypeOf<typeof FhirString>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  tissue: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  value: Readonly<t.TypeOf<typeof FhirQuantity>>
}
/** A pharmaceutical product described in terms of its composition and dose form. */
export interface FhirMedicinalProductPharmaceutical_WithdrawalPeriodOutput {
  /** A pharmaceutical product described in terms of its composition and dose form. */
  _supportingInformation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  supportingInformation?: Readonly<t.OutputOf<typeof FhirString>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  tissue: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  value: Readonly<t.OutputOf<typeof FhirQuantity>>
}
