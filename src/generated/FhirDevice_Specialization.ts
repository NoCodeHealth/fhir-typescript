import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export const FhirDevice_Specialization: t.Type<
  FhirDevice_Specialization,
  FhirDevice_SpecializationOutput
> = t.recursion('FhirDevice_Specialization', () =>
  t.intersection([
    t.type({
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      systemType: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      _version: t.readonly(FhirElement),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      extension: t.readonlyArray(FhirExtension),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      id: t.readonly(FhirString),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      version: t.readonly(FhirString),
    }),
  ])
)

/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export interface FhirDevice_Specialization {
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  systemType: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export interface FhirDevice_SpecializationOutput {
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  systemType: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
