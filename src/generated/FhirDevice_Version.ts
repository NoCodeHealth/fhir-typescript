import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirString } from './FhirString'

/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export const FhirDevice_Version: t.Type<FhirDevice_Version, FhirDevice_VersionOutput> = t.recursion(
  'FhirDevice_Version',
  () =>
    t.partial({
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      _value: t.readonly(FhirElement),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      component: t.readonly(FhirIdentifier),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      extension: t.readonlyArray(FhirExtension),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      id: t.readonly(FhirString),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      type: t.readonly(FhirCodeableConcept),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      value: t.readonly(FhirString),
    })
)

/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export interface FhirDevice_Version {
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _value?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  component?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  value?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export interface FhirDevice_VersionOutput {
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _value?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  component?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  value?: Readonly<t.OutputOf<typeof FhirString>>
}
