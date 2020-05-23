import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirRange } from './FhirRange'
import { FhirString } from './FhirString'

/** A record of a request for a medication, substance or device used in the healthcare setting. */
export const FhirSupplyRequest_Parameter: t.Type<
  FhirSupplyRequest_Parameter,
  FhirSupplyRequest_ParameterOutput
> = t.recursion('FhirSupplyRequest_Parameter', () =>
  t.partial({
    /** A record of a request for a medication, substance or device used in the healthcare setting. */
    _valueBoolean: t.readonly(FhirElement),
    /** A record of a request for a medication, substance or device used in the healthcare setting. */
    code: t.readonly(FhirCodeableConcept),
    /** A record of a request for a medication, substance or device used in the healthcare setting. */
    extension: t.readonlyArray(FhirExtension),
    /** A record of a request for a medication, substance or device used in the healthcare setting. */
    id: t.readonly(FhirString),
    /** A record of a request for a medication, substance or device used in the healthcare setting. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A record of a request for a medication, substance or device used in the healthcare setting. */
    valueBoolean: t.readonly(t.boolean),
    /** A record of a request for a medication, substance or device used in the healthcare setting. */
    valueCodeableConcept: t.readonly(FhirCodeableConcept),
    /** A record of a request for a medication, substance or device used in the healthcare setting. */
    valueQuantity: t.readonly(FhirQuantity),
    /** A record of a request for a medication, substance or device used in the healthcare setting. */
    valueRange: t.readonly(FhirRange),
  })
)

/** A record of a request for a medication, substance or device used in the healthcare setting. */
export interface FhirSupplyRequest_Parameter {
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  _valueBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  valueBoolean?: Readonly<boolean>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  valueCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  valueQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  valueRange?: Readonly<t.TypeOf<typeof FhirRange>>
}
/** A record of a request for a medication, substance or device used in the healthcare setting. */
export interface FhirSupplyRequest_ParameterOutput {
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  _valueBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  valueBoolean?: Readonly<boolean>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  valueCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  valueQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  valueRange?: Readonly<t.OutputOf<typeof FhirRange>>
}
