import * as t from 'io-ts'
import { FhirAttachment } from './FhirAttachment'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export const FhirClaim_SupportingInfo: t.Type<FhirClaim_SupportingInfo, FhirClaim_SupportingInfoOutput> = t.recursion(
  'FhirClaim_SupportingInfo',
  () =>
    t.intersection([
      t.type({
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        category: t.readonly(FhirCodeableConcept),
      }),
      t.partial({
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        _sequence: t.readonly(FhirElement),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        _timingDate: t.readonly(FhirElement),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        _valueBoolean: t.readonly(FhirElement),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        _valueString: t.readonly(FhirElement),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        code: t.readonly(FhirCodeableConcept),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        extension: t.readonlyArray(FhirExtension),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        id: t.readonly(FhirString),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        reason: t.readonly(FhirCodeableConcept),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        sequence: t.readonly(FhirPositiveInt),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        timingDate: t.readonly(t.string),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        timingPeriod: t.readonly(FhirPeriod),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        valueAttachment: t.readonly(FhirAttachment),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        valueBoolean: t.readonly(t.boolean),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        valueQuantity: t.readonly(FhirQuantity),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        valueReference: t.readonly(FhirReference),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        valueString: t.readonly(t.string),
      }),
    ])
)

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface FhirClaim_SupportingInfo {
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _sequence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _timingDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _valueBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _valueString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  category: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  reason?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  sequence?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  timingDate?: Readonly<string>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  timingPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  valueAttachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  valueBoolean?: Readonly<boolean>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  valueQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  valueReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  valueString?: Readonly<string>
}
/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface FhirClaim_SupportingInfoOutput {
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _sequence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _timingDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _valueBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _valueString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  category: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  reason?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  sequence?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  timingDate?: Readonly<string>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  timingPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  valueAttachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  valueBoolean?: Readonly<boolean>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  valueQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  valueReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  valueString?: Readonly<string>
}
