import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export const FhirClaim_CareTeam: t.Type<FhirClaim_CareTeam, FhirClaim_CareTeamOutput> = t.recursion(
  'FhirClaim_CareTeam',
  () =>
    t.intersection([
      t.type({
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        provider: t.readonly(FhirReference),
      }),
      t.partial({
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        _responsible: t.readonly(FhirElement),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        _sequence: t.readonly(FhirElement),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        extension: t.readonlyArray(FhirExtension),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        id: t.readonly(FhirString),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        qualification: t.readonly(FhirCodeableConcept),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        responsible: t.readonly(FhirBoolean),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        role: t.readonly(FhirCodeableConcept),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        sequence: t.readonly(FhirPositiveInt),
      }),
    ])
)

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface FhirClaim_CareTeam {
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _responsible?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _sequence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  provider: Readonly<t.TypeOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  qualification?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  responsible?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  role?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  sequence?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
}
/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface FhirClaim_CareTeamOutput {
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _responsible?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _sequence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  provider: Readonly<t.OutputOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  qualification?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  responsible?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  role?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  sequence?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
}
