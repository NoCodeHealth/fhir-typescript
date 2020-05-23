import * as t from 'io-ts'
import { FhirAttachment } from './FhirAttachment'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExplanationOfBenefit_Accident } from './FhirExplanationOfBenefit_Accident'
import { FhirExplanationOfBenefit_AddItem } from './FhirExplanationOfBenefit_AddItem'
import { FhirExplanationOfBenefit_Adjudication } from './FhirExplanationOfBenefit_Adjudication'
import { FhirExplanationOfBenefit_BenefitBalance } from './FhirExplanationOfBenefit_BenefitBalance'
import { FhirExplanationOfBenefit_CareTeam } from './FhirExplanationOfBenefit_CareTeam'
import { FhirExplanationOfBenefit_Diagnosis } from './FhirExplanationOfBenefit_Diagnosis'
import { FhirExplanationOfBenefit_Insurance } from './FhirExplanationOfBenefit_Insurance'
import { FhirExplanationOfBenefit_Item } from './FhirExplanationOfBenefit_Item'
import { FhirExplanationOfBenefit_Payee } from './FhirExplanationOfBenefit_Payee'
import { FhirExplanationOfBenefit_Payment } from './FhirExplanationOfBenefit_Payment'
import { FhirExplanationOfBenefit_Procedure } from './FhirExplanationOfBenefit_Procedure'
import { FhirExplanationOfBenefit_ProcessNote } from './FhirExplanationOfBenefit_ProcessNote'
import { FhirExplanationOfBenefit_Related } from './FhirExplanationOfBenefit_Related'
import { FhirExplanationOfBenefit_SupportingInfo } from './FhirExplanationOfBenefit_SupportingInfo'
import { FhirExplanationOfBenefit_Total } from './FhirExplanationOfBenefit_Total'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export const FhirExplanationOfBenefit: t.Type<FhirExplanationOfBenefit, FhirExplanationOfBenefitOutput> = t.recursion(
  'FhirExplanationOfBenefit',
  () =>
    t.intersection([
      t.type({
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        insurance: t.readonlyArray(FhirExplanationOfBenefit_Insurance),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        insurer: t.readonly(FhirReference),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        patient: t.readonly(FhirReference),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        provider: t.readonly(FhirReference),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        resourceType: t.readonly(t.literal('ExplanationOfBenefit')),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        type: t.readonly(FhirCodeableConcept),
      }),
      t.partial({
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        _created: t.readonly(FhirElement),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        _disposition: t.readonly(FhirElement),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        _implicitRules: t.readonly(FhirElement),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        _language: t.readonly(FhirElement),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        _outcome: t.readonly(FhirElement),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        _preAuthRef: t.readonlyArray(FhirElement),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        _precedence: t.readonly(FhirElement),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        _status: t.readonly(FhirElement),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        _use: t.readonly(FhirElement),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        accident: t.readonly(FhirExplanationOfBenefit_Accident),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        addItem: t.readonlyArray(FhirExplanationOfBenefit_AddItem),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        adjudication: t.readonlyArray(FhirExplanationOfBenefit_Adjudication),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        benefitBalance: t.readonlyArray(FhirExplanationOfBenefit_BenefitBalance),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        benefitPeriod: t.readonly(FhirPeriod),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        billablePeriod: t.readonly(FhirPeriod),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        careTeam: t.readonlyArray(FhirExplanationOfBenefit_CareTeam),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        claim: t.readonly(FhirReference),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        claimResponse: t.readonly(FhirReference),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        contained: t.readonlyArray(FhirResourceList),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        created: t.readonly(FhirDateTime),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        diagnosis: t.readonlyArray(FhirExplanationOfBenefit_Diagnosis),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        disposition: t.readonly(FhirString),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        enterer: t.readonly(FhirReference),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        extension: t.readonlyArray(FhirExtension),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        facility: t.readonly(FhirReference),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        form: t.readonly(FhirAttachment),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        formCode: t.readonly(FhirCodeableConcept),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        fundsReserve: t.readonly(FhirCodeableConcept),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        fundsReserveRequested: t.readonly(FhirCodeableConcept),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        id: t.readonly(FhirId),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        implicitRules: t.readonly(FhirUri),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        item: t.readonlyArray(FhirExplanationOfBenefit_Item),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        language: t.readonly(FhirCode),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        meta: t.readonly(FhirMeta),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        originalPrescription: t.readonly(FhirReference),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        outcome: t.readonly(FhirCode),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        payee: t.readonly(FhirExplanationOfBenefit_Payee),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        payment: t.readonly(FhirExplanationOfBenefit_Payment),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        preAuthRef: t.readonlyArray(FhirString),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        preAuthRefPeriod: t.readonlyArray(FhirPeriod),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        precedence: t.readonly(FhirPositiveInt),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        prescription: t.readonly(FhirReference),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        priority: t.readonly(FhirCodeableConcept),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        procedure: t.readonlyArray(FhirExplanationOfBenefit_Procedure),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        processNote: t.readonlyArray(FhirExplanationOfBenefit_ProcessNote),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        referral: t.readonly(FhirReference),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        related: t.readonlyArray(FhirExplanationOfBenefit_Related),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        status: t.readonly(
          t.keyof({
            active: null,
            cancelled: null,
            draft: null,
            'entered-in-error': null,
          })
        ),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        subType: t.readonly(FhirCodeableConcept),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        supportingInfo: t.readonlyArray(FhirExplanationOfBenefit_SupportingInfo),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        text: t.readonly(FhirNarrative),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        total: t.readonlyArray(FhirExplanationOfBenefit_Total),
        /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
        use: t.readonly(FhirCode),
      }),
    ])
)

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface FhirExplanationOfBenefit {
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _created?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _disposition?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _outcome?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _preAuthRef?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _precedence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _use?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  accident?: Readonly<t.TypeOf<typeof FhirExplanationOfBenefit_Accident>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  addItem?: ReadonlyArray<t.TypeOf<typeof FhirExplanationOfBenefit_AddItem>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  adjudication?: ReadonlyArray<t.TypeOf<typeof FhirExplanationOfBenefit_Adjudication>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  benefitBalance?: ReadonlyArray<t.TypeOf<typeof FhirExplanationOfBenefit_BenefitBalance>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  benefitPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  billablePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  careTeam?: ReadonlyArray<t.TypeOf<typeof FhirExplanationOfBenefit_CareTeam>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  claim?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  claimResponse?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  created?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  diagnosis?: ReadonlyArray<t.TypeOf<typeof FhirExplanationOfBenefit_Diagnosis>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  disposition?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  enterer?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  facility?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  form?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  formCode?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  fundsReserve?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  fundsReserveRequested?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  insurance: ReadonlyArray<t.TypeOf<typeof FhirExplanationOfBenefit_Insurance>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  insurer: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  item?: ReadonlyArray<t.TypeOf<typeof FhirExplanationOfBenefit_Item>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  originalPrescription?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  outcome?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  patient: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  payee?: Readonly<t.TypeOf<typeof FhirExplanationOfBenefit_Payee>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  payment?: Readonly<t.TypeOf<typeof FhirExplanationOfBenefit_Payment>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  preAuthRef?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  preAuthRefPeriod?: ReadonlyArray<t.TypeOf<typeof FhirPeriod>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  precedence?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  prescription?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  priority?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  procedure?: ReadonlyArray<t.TypeOf<typeof FhirExplanationOfBenefit_Procedure>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  processNote?: ReadonlyArray<t.TypeOf<typeof FhirExplanationOfBenefit_ProcessNote>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  provider: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  referral?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  related?: ReadonlyArray<t.TypeOf<typeof FhirExplanationOfBenefit_Related>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  resourceType: Readonly<'ExplanationOfBenefit'>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  status?: Readonly<'active' | 'cancelled' | 'draft' | 'entered-in-error'>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  subType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  supportingInfo?: ReadonlyArray<t.TypeOf<typeof FhirExplanationOfBenefit_SupportingInfo>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  total?: ReadonlyArray<t.TypeOf<typeof FhirExplanationOfBenefit_Total>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  use?: Readonly<t.TypeOf<typeof FhirCode>>
}
/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface FhirExplanationOfBenefitOutput {
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _created?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _disposition?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _outcome?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _preAuthRef?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _precedence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _use?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  accident?: Readonly<t.OutputOf<typeof FhirExplanationOfBenefit_Accident>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  addItem?: ReadonlyArray<t.OutputOf<typeof FhirExplanationOfBenefit_AddItem>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  adjudication?: ReadonlyArray<t.OutputOf<typeof FhirExplanationOfBenefit_Adjudication>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  benefitBalance?: ReadonlyArray<t.OutputOf<typeof FhirExplanationOfBenefit_BenefitBalance>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  benefitPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  billablePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  careTeam?: ReadonlyArray<t.OutputOf<typeof FhirExplanationOfBenefit_CareTeam>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  claim?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  claimResponse?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  created?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  diagnosis?: ReadonlyArray<t.OutputOf<typeof FhirExplanationOfBenefit_Diagnosis>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  disposition?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  enterer?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  facility?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  form?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  formCode?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  fundsReserve?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  fundsReserveRequested?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  insurance: ReadonlyArray<t.OutputOf<typeof FhirExplanationOfBenefit_Insurance>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  insurer: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  item?: ReadonlyArray<t.OutputOf<typeof FhirExplanationOfBenefit_Item>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  originalPrescription?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  outcome?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  patient: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  payee?: Readonly<t.OutputOf<typeof FhirExplanationOfBenefit_Payee>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  payment?: Readonly<t.OutputOf<typeof FhirExplanationOfBenefit_Payment>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  preAuthRef?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  preAuthRefPeriod?: ReadonlyArray<t.OutputOf<typeof FhirPeriod>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  precedence?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  prescription?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  priority?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  procedure?: ReadonlyArray<t.OutputOf<typeof FhirExplanationOfBenefit_Procedure>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  processNote?: ReadonlyArray<t.OutputOf<typeof FhirExplanationOfBenefit_ProcessNote>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  provider: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  referral?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  related?: ReadonlyArray<t.OutputOf<typeof FhirExplanationOfBenefit_Related>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  resourceType: Readonly<'ExplanationOfBenefit'>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  status?: Readonly<'active' | 'cancelled' | 'draft' | 'entered-in-error'>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  subType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  supportingInfo?: ReadonlyArray<t.OutputOf<typeof FhirExplanationOfBenefit_SupportingInfo>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  total?: ReadonlyArray<t.OutputOf<typeof FhirExplanationOfBenefit_Total>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  use?: Readonly<t.OutputOf<typeof FhirCode>>
}
