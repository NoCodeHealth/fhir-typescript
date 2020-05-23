import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export const FhirClaim_Procedure: t.Type<FhirClaim_Procedure, FhirClaim_ProcedureOutput> = t.recursion(
  'FhirClaim_Procedure',
  () =>
    t.partial({
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      _date: t.readonly(FhirElement),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      _sequence: t.readonly(FhirElement),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      date: t.readonly(FhirDateTime),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      extension: t.readonlyArray(FhirExtension),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      id: t.readonly(FhirString),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      procedureCodeableConcept: t.readonly(FhirCodeableConcept),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      procedureReference: t.readonly(FhirReference),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      sequence: t.readonly(FhirPositiveInt),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      type: t.readonlyArray(FhirCodeableConcept),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      udi: t.readonlyArray(FhirReference),
    })
)

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface FhirClaim_Procedure {
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _sequence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  procedureCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  procedureReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  sequence?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  type?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  udi?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
}
/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface FhirClaim_ProcedureOutput {
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _sequence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  procedureCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  procedureReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  sequence?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  type?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  udi?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
}
