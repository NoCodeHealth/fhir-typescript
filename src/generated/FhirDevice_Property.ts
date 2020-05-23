import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export const FhirDevice_Property: t.Type<FhirDevice_Property, FhirDevice_PropertyOutput> = t.recursion(
  'FhirDevice_Property',
  () =>
    t.intersection([
      t.type({
        /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
        type: t.readonly(FhirCodeableConcept),
      }),
      t.partial({
        /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
        extension: t.readonlyArray(FhirExtension),
        /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
        id: t.readonly(FhirString),
        /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
        valueCode: t.readonlyArray(FhirCodeableConcept),
        /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
        valueQuantity: t.readonlyArray(FhirQuantity),
      }),
    ])
)

/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export interface FhirDevice_Property {
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  valueCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  valueQuantity?: ReadonlyArray<t.TypeOf<typeof FhirQuantity>>
}
/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export interface FhirDevice_PropertyOutput {
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  valueCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  valueQuantity?: ReadonlyArray<t.OutputOf<typeof FhirQuantity>>
}
