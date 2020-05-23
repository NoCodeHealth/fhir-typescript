import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirRatio } from './FhirRatio'
import { FhirString } from './FhirString'

/** An ingredient of a manufactured item or pharmaceutical product. */
export const FhirMedicinalProductIngredient_ReferenceStrength: t.Type<
  FhirMedicinalProductIngredient_ReferenceStrength,
  FhirMedicinalProductIngredient_ReferenceStrengthOutput
> = t.recursion('FhirMedicinalProductIngredient_ReferenceStrength', () =>
  t.intersection([
    t.type({
      /** An ingredient of a manufactured item or pharmaceutical product. */
      strength: t.readonly(FhirRatio),
    }),
    t.partial({
      /** An ingredient of a manufactured item or pharmaceutical product. */
      _measurementPoint: t.readonly(FhirElement),
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
      strengthLowLimit: t.readonly(FhirRatio),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      substance: t.readonly(FhirCodeableConcept),
    }),
  ])
)

/** An ingredient of a manufactured item or pharmaceutical product. */
export interface FhirMedicinalProductIngredient_ReferenceStrength {
  /** An ingredient of a manufactured item or pharmaceutical product. */
  _measurementPoint?: Readonly<t.TypeOf<typeof FhirElement>>
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
  strength: Readonly<t.TypeOf<typeof FhirRatio>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  strengthLowLimit?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  substance?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** An ingredient of a manufactured item or pharmaceutical product. */
export interface FhirMedicinalProductIngredient_ReferenceStrengthOutput {
  /** An ingredient of a manufactured item or pharmaceutical product. */
  _measurementPoint?: Readonly<t.OutputOf<typeof FhirElement>>
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
  strength: Readonly<t.OutputOf<typeof FhirRatio>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  strengthLowLimit?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  substance?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
