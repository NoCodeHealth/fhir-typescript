import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInteger } from './FhirInteger'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'
import { FhirVisionPrescription_Prism } from './FhirVisionPrescription_Prism'

/** An authorization for the provision of glasses and/or contact lenses to a patient. */
export const FhirVisionPrescription_LensSpecification: t.Type<
  FhirVisionPrescription_LensSpecification,
  FhirVisionPrescription_LensSpecificationOutput
> = t.recursion('FhirVisionPrescription_LensSpecification', () =>
  t.intersection([
    t.type({
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      product: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      _add: t.readonly(FhirElement),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      _axis: t.readonly(FhirElement),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      _backCurve: t.readonly(FhirElement),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      _brand: t.readonly(FhirElement),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      _color: t.readonly(FhirElement),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      _cylinder: t.readonly(FhirElement),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      _diameter: t.readonly(FhirElement),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      _eye: t.readonly(FhirElement),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      _power: t.readonly(FhirElement),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      _sphere: t.readonly(FhirElement),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      add: t.readonly(FhirDecimal),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      axis: t.readonly(FhirInteger),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      backCurve: t.readonly(FhirDecimal),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      brand: t.readonly(FhirString),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      color: t.readonly(FhirString),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      cylinder: t.readonly(FhirDecimal),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      diameter: t.readonly(FhirDecimal),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      duration: t.readonly(FhirQuantity),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      extension: t.readonlyArray(FhirExtension),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      eye: t.readonly(
        t.keyof({
          right: null,
          left: null,
        })
      ),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      id: t.readonly(FhirString),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      note: t.readonlyArray(FhirAnnotation),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      power: t.readonly(FhirDecimal),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      prism: t.readonlyArray(FhirVisionPrescription_Prism),
      /** An authorization for the provision of glasses and/or contact lenses to a patient. */
      sphere: t.readonly(FhirDecimal),
    }),
  ])
)

/** An authorization for the provision of glasses and/or contact lenses to a patient. */
export interface FhirVisionPrescription_LensSpecification {
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _add?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _axis?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _backCurve?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _brand?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _color?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _cylinder?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _diameter?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _eye?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _power?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _sphere?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  add?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  axis?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  backCurve?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  brand?: Readonly<t.TypeOf<typeof FhirString>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  color?: Readonly<t.TypeOf<typeof FhirString>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  cylinder?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  diameter?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  duration?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  eye?: Readonly<'right' | 'left'>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  power?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  prism?: ReadonlyArray<t.TypeOf<typeof FhirVisionPrescription_Prism>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  product: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  sphere?: Readonly<t.TypeOf<typeof FhirDecimal>>
}
/** An authorization for the provision of glasses and/or contact lenses to a patient. */
export interface FhirVisionPrescription_LensSpecificationOutput {
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _add?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _axis?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _backCurve?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _brand?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _color?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _cylinder?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _diameter?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _eye?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _power?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _sphere?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  add?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  axis?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  backCurve?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  brand?: Readonly<t.OutputOf<typeof FhirString>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  color?: Readonly<t.OutputOf<typeof FhirString>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  cylinder?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  diameter?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  duration?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  eye?: Readonly<'right' | 'left'>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  power?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  prism?: ReadonlyArray<t.OutputOf<typeof FhirVisionPrescription_Prism>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  product: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  sphere?: Readonly<t.OutputOf<typeof FhirDecimal>>
}
