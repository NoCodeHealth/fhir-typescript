import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirRange } from './FhirRange'
import { FhirString } from './FhirString'

/** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
export const FhirDeviceRequest_Parameter: t.Type<
  FhirDeviceRequest_Parameter,
  FhirDeviceRequest_ParameterOutput
> = t.recursion('FhirDeviceRequest_Parameter', () =>
  t.partial({
    /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
    _valueBoolean: t.readonly(FhirElement),
    /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
    code: t.readonly(FhirCodeableConcept),
    /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
    extension: t.readonlyArray(FhirExtension),
    /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
    id: t.readonly(FhirString),
    /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
    valueBoolean: t.readonly(t.boolean),
    /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
    valueCodeableConcept: t.readonly(FhirCodeableConcept),
    /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
    valueQuantity: t.readonly(FhirQuantity),
    /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
    valueRange: t.readonly(FhirRange),
  })
)

/** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
export interface FhirDeviceRequest_Parameter {
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  _valueBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  valueBoolean?: Readonly<boolean>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  valueCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  valueQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  valueRange?: Readonly<t.TypeOf<typeof FhirRange>>
}
/** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
export interface FhirDeviceRequest_ParameterOutput {
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  _valueBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  valueBoolean?: Readonly<boolean>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  valueCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  valueQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  valueRange?: Readonly<t.OutputOf<typeof FhirRange>>
}
