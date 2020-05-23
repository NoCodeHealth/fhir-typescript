import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirMedicinalProductIngredient_Strength } from './FhirMedicinalProductIngredient_Strength'
import { FhirString } from './FhirString'

/** An ingredient of a manufactured item or pharmaceutical product. */
export const FhirMedicinalProductIngredient_SpecifiedSubstance: t.Type<
  FhirMedicinalProductIngredient_SpecifiedSubstance,
  FhirMedicinalProductIngredient_SpecifiedSubstanceOutput
> = t.recursion('FhirMedicinalProductIngredient_SpecifiedSubstance', () =>
  t.intersection([
    t.type({
      /** An ingredient of a manufactured item or pharmaceutical product. */
      code: t.readonly(FhirCodeableConcept),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      group: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** An ingredient of a manufactured item or pharmaceutical product. */
      confidentiality: t.readonly(FhirCodeableConcept),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      extension: t.readonlyArray(FhirExtension),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      id: t.readonly(FhirString),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      strength: t.readonlyArray(FhirMedicinalProductIngredient_Strength),
    }),
  ])
)

/** An ingredient of a manufactured item or pharmaceutical product. */
export interface FhirMedicinalProductIngredient_SpecifiedSubstance {
  /** An ingredient of a manufactured item or pharmaceutical product. */
  code: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  confidentiality?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  group: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  strength?: ReadonlyArray<t.TypeOf<typeof FhirMedicinalProductIngredient_Strength>>
}
/** An ingredient of a manufactured item or pharmaceutical product. */
export interface FhirMedicinalProductIngredient_SpecifiedSubstanceOutput {
  /** An ingredient of a manufactured item or pharmaceutical product. */
  code: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  confidentiality?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  group: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  strength?: ReadonlyArray<t.OutputOf<typeof FhirMedicinalProductIngredient_Strength>>
}
