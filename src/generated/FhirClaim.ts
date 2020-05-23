import * as t from 'io-ts'
import { FhirClaim_Accident } from './FhirClaim_Accident'
import { FhirClaim_CareTeam } from './FhirClaim_CareTeam'
import { FhirClaim_Diagnosis } from './FhirClaim_Diagnosis'
import { FhirClaim_Insurance } from './FhirClaim_Insurance'
import { FhirClaim_Item } from './FhirClaim_Item'
import { FhirClaim_Payee } from './FhirClaim_Payee'
import { FhirClaim_Procedure } from './FhirClaim_Procedure'
import { FhirClaim_Related } from './FhirClaim_Related'
import { FhirClaim_SupportingInfo } from './FhirClaim_SupportingInfo'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirMoney } from './FhirMoney'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export const FhirClaim: t.Type<FhirClaim, FhirClaimOutput> = t.recursion('FhirClaim', () =>
  t.intersection([
    t.type({
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      insurance: t.readonlyArray(FhirClaim_Insurance),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      patient: t.readonly(FhirReference),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      priority: t.readonly(FhirCodeableConcept),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      provider: t.readonly(FhirReference),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      resourceType: t.readonly(t.literal('Claim')),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      type: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      _created: t.readonly(FhirElement),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      _implicitRules: t.readonly(FhirElement),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      _language: t.readonly(FhirElement),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      _status: t.readonly(FhirElement),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      _use: t.readonly(FhirElement),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      accident: t.readonly(FhirClaim_Accident),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      billablePeriod: t.readonly(FhirPeriod),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      careTeam: t.readonlyArray(FhirClaim_CareTeam),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      contained: t.readonlyArray(FhirResourceList),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      created: t.readonly(FhirDateTime),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      diagnosis: t.readonlyArray(FhirClaim_Diagnosis),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      enterer: t.readonly(FhirReference),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      extension: t.readonlyArray(FhirExtension),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      facility: t.readonly(FhirReference),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      fundsReserve: t.readonly(FhirCodeableConcept),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      id: t.readonly(FhirId),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      implicitRules: t.readonly(FhirUri),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      insurer: t.readonly(FhirReference),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      item: t.readonlyArray(FhirClaim_Item),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      language: t.readonly(FhirCode),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      meta: t.readonly(FhirMeta),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      originalPrescription: t.readonly(FhirReference),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      payee: t.readonly(FhirClaim_Payee),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      prescription: t.readonly(FhirReference),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      procedure: t.readonlyArray(FhirClaim_Procedure),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      referral: t.readonly(FhirReference),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      related: t.readonlyArray(FhirClaim_Related),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      status: t.readonly(FhirCode),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      subType: t.readonly(FhirCodeableConcept),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      supportingInfo: t.readonlyArray(FhirClaim_SupportingInfo),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      text: t.readonly(FhirNarrative),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      total: t.readonly(FhirMoney),
      /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
      use: t.readonly(
        t.keyof({
          claim: null,
          preauthorization: null,
          predetermination: null,
        })
      ),
    }),
  ])
)

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface FhirClaim {
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _created?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _use?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  accident?: Readonly<t.TypeOf<typeof FhirClaim_Accident>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  billablePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  careTeam?: ReadonlyArray<t.TypeOf<typeof FhirClaim_CareTeam>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  created?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  diagnosis?: ReadonlyArray<t.TypeOf<typeof FhirClaim_Diagnosis>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  enterer?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  facility?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  fundsReserve?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  insurance: ReadonlyArray<t.TypeOf<typeof FhirClaim_Insurance>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  insurer?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  item?: ReadonlyArray<t.TypeOf<typeof FhirClaim_Item>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  originalPrescription?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  patient: Readonly<t.TypeOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  payee?: Readonly<t.TypeOf<typeof FhirClaim_Payee>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  prescription?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  priority: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  procedure?: ReadonlyArray<t.TypeOf<typeof FhirClaim_Procedure>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  provider: Readonly<t.TypeOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  referral?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  related?: ReadonlyArray<t.TypeOf<typeof FhirClaim_Related>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  resourceType: Readonly<'Claim'>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  subType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  supportingInfo?: ReadonlyArray<t.TypeOf<typeof FhirClaim_SupportingInfo>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  total?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  use?: Readonly<'claim' | 'preauthorization' | 'predetermination'>
}
/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface FhirClaimOutput {
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _created?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _use?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  accident?: Readonly<t.OutputOf<typeof FhirClaim_Accident>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  billablePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  careTeam?: ReadonlyArray<t.OutputOf<typeof FhirClaim_CareTeam>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  created?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  diagnosis?: ReadonlyArray<t.OutputOf<typeof FhirClaim_Diagnosis>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  enterer?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  facility?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  fundsReserve?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  insurance: ReadonlyArray<t.OutputOf<typeof FhirClaim_Insurance>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  insurer?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  item?: ReadonlyArray<t.OutputOf<typeof FhirClaim_Item>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  originalPrescription?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  patient: Readonly<t.OutputOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  payee?: Readonly<t.OutputOf<typeof FhirClaim_Payee>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  prescription?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  priority: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  procedure?: ReadonlyArray<t.OutputOf<typeof FhirClaim_Procedure>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  provider: Readonly<t.OutputOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  referral?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  related?: ReadonlyArray<t.OutputOf<typeof FhirClaim_Related>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  resourceType: Readonly<'Claim'>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  subType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  supportingInfo?: ReadonlyArray<t.OutputOf<typeof FhirClaim_SupportingInfo>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  total?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  use?: Readonly<'claim' | 'preauthorization' | 'predetermination'>
}
