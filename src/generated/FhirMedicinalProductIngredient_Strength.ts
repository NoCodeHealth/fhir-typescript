import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMedicinalProductIngredient_ReferenceStrength } from './FhirMedicinalProductIngredient_ReferenceStrength'
import { FhirRatio } from './FhirRatio'
import { FhirString } from './FhirString'

/** An ingredient of a manufactured item or pharmaceutical product. */
export const FhirMedicinalProductIngredient_Strength: t.Type<
  FhirMedicinalProductIngredient_Strength,
  FhirMedicinalProductIngredient_StrengthOutput
> = t.recursion('FhirMedicinalProductIngredient_Strength', () =>
  t.intersection([
    t.type({
      /** An ingredient of a manufactured item or pharmaceutical product. */
      presentation: t.readonly(FhirRatio),
    }),
    t.partial({
      /** An ingredient of a manufactured item or pharmaceutical product. */
      _measurementPoint: t.readonly(FhirElement),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      concentration: t.readonly(FhirRatio),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      concentrationLowLimit: t.readonly(FhirRatio),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      country: t.readonlyArray(FhirCodeableConcept),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      extension: t.readonlyArray(FhirExtension),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      id: t.readonly(FhirString),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      measurementPoint: t.readonly(FhirString),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      presentationLowLimit: t.readonly(FhirRatio),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      referenceStrength: t.readonlyArray(FhirMedicinalProductIngredient_ReferenceStrength),
    }),
  ])
)

/** An ingredient of a manufactured item or pharmaceutical product. */
export interface FhirMedicinalProductIngredient_Strength {
  /** An ingredient of a manufactured item or pharmaceutical product. */
  _measurementPoint?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  concentration?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  concentrationLowLimit?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  country?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  measurementPoint?: Readonly<t.TypeOf<typeof FhirString>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  presentation: Readonly<t.TypeOf<typeof FhirRatio>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  presentationLowLimit?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  referenceStrength?: ReadonlyArray<t.TypeOf<typeof FhirMedicinalProductIngredient_ReferenceStrength>>
}
/** An ingredient of a manufactured item or pharmaceutical product. */
export interface FhirMedicinalProductIngredient_StrengthOutput {
  /** An ingredient of a manufactured item or pharmaceutical product. */
  _measurementPoint?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  concentration?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  concentrationLowLimit?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  country?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  measurementPoint?: Readonly<t.OutputOf<typeof FhirString>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  presentation: Readonly<t.OutputOf<typeof FhirRatio>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  presentationLowLimit?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  referenceStrength?: ReadonlyArray<t.OutputOf<typeof FhirMedicinalProductIngredient_ReferenceStrength>>
}
