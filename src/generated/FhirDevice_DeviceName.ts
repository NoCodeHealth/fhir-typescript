import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export const FhirDevice_DeviceName: t.Type<FhirDevice_DeviceName, FhirDevice_DeviceNameOutput> = t.recursion(
  'FhirDevice_DeviceName',
  () =>
    t.partial({
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      _name: t.readonly(FhirElement),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      _type: t.readonly(FhirElement),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      extension: t.readonlyArray(FhirExtension),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      id: t.readonly(FhirString),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      name: t.readonly(FhirString),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      type: t.readonly(
        t.keyof({
          'udi-label-name': null,
          'user-friendly-name': null,
          'patient-reported-name': null,
          'manufacturer-name': null,
          'model-name': null,
          other: null,
        })
      ),
    })
)

/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export interface FhirDevice_DeviceName {
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  type?: Readonly<
    'udi-label-name' | 'user-friendly-name' | 'patient-reported-name' | 'manufacturer-name' | 'model-name' | 'other'
  >
}
/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export interface FhirDevice_DeviceNameOutput {
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  type?: Readonly<
    'udi-label-name' | 'user-friendly-name' | 'patient-reported-name' | 'manufacturer-name' | 'model-name' | 'other'
  >
}
