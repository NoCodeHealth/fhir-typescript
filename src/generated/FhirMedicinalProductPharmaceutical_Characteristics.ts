import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A pharmaceutical product described in terms of its composition and dose form. */
export const FhirMedicinalProductPharmaceutical_Characteristics: t.Type<
  FhirMedicinalProductPharmaceutical_Characteristics,
  FhirMedicinalProductPharmaceutical_CharacteristicsOutput
> = t.recursion('FhirMedicinalProductPharmaceutical_Characteristics', () =>
  t.intersection([
    t.type({
      /** A pharmaceutical product described in terms of its composition and dose form. */
      code: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** A pharmaceutical product described in terms of its composition and dose form. */
      extension: t.readonlyArray(FhirExtension),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      id: t.readonly(FhirString),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      status: t.readonly(FhirCodeableConcept),
    }),
  ])
)

/** A pharmaceutical product described in terms of its composition and dose form. */
export interface FhirMedicinalProductPharmaceutical_Characteristics {
  /** A pharmaceutical product described in terms of its composition and dose form. */
  code: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  status?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** A pharmaceutical product described in terms of its composition and dose form. */
export interface FhirMedicinalProductPharmaceutical_CharacteristicsOutput {
  /** A pharmaceutical product described in terms of its composition and dose form. */
  code: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  status?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
