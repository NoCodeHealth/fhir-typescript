import * as t from 'io-ts'
import { FhirAttachment } from './FhirAttachment'
import { FhirClaimResponse_AddItem } from './FhirClaimResponse_AddItem'
import { FhirClaimResponse_Adjudication } from './FhirClaimResponse_Adjudication'
import { FhirClaimResponse_Error } from './FhirClaimResponse_Error'
import { FhirClaimResponse_Insurance } from './FhirClaimResponse_Insurance'
import { FhirClaimResponse_Item } from './FhirClaimResponse_Item'
import { FhirClaimResponse_Payment } from './FhirClaimResponse_Payment'
import { FhirClaimResponse_ProcessNote } from './FhirClaimResponse_ProcessNote'
import { FhirClaimResponse_Total } from './FhirClaimResponse_Total'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** This resource provides the adjudication details from the processing of a Claim resource. */
export const FhirClaimResponse: t.Type<FhirClaimResponse, FhirClaimResponseOutput> = t.recursion(
  'FhirClaimResponse',
  () =>
    t.intersection([
      t.type({
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        insurer: t.readonly(FhirReference),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        patient: t.readonly(FhirReference),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        resourceType: t.readonly(t.literal('ClaimResponse')),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        type: t.readonly(FhirCodeableConcept),
      }),
      t.partial({
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        _created: t.readonly(FhirElement),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        _disposition: t.readonly(FhirElement),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        _implicitRules: t.readonly(FhirElement),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        _language: t.readonly(FhirElement),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        _outcome: t.readonly(FhirElement),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        _preAuthRef: t.readonly(FhirElement),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        _status: t.readonly(FhirElement),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        _use: t.readonly(FhirElement),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        addItem: t.readonlyArray(FhirClaimResponse_AddItem),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        adjudication: t.readonlyArray(FhirClaimResponse_Adjudication),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        communicationRequest: t.readonlyArray(FhirReference),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        contained: t.readonlyArray(FhirResourceList),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        created: t.readonly(FhirDateTime),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        disposition: t.readonly(FhirString),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        error: t.readonlyArray(FhirClaimResponse_Error),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        extension: t.readonlyArray(FhirExtension),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        form: t.readonly(FhirAttachment),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        formCode: t.readonly(FhirCodeableConcept),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        fundsReserve: t.readonly(FhirCodeableConcept),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        id: t.readonly(FhirId),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        implicitRules: t.readonly(FhirUri),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        insurance: t.readonlyArray(FhirClaimResponse_Insurance),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        item: t.readonlyArray(FhirClaimResponse_Item),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        language: t.readonly(FhirCode),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        meta: t.readonly(FhirMeta),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        outcome: t.readonly(FhirCode),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        payeeType: t.readonly(FhirCodeableConcept),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        payment: t.readonly(FhirClaimResponse_Payment),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        preAuthPeriod: t.readonly(FhirPeriod),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        preAuthRef: t.readonly(FhirString),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        processNote: t.readonlyArray(FhirClaimResponse_ProcessNote),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        request: t.readonly(FhirReference),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        requestor: t.readonly(FhirReference),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        status: t.readonly(FhirCode),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        subType: t.readonly(FhirCodeableConcept),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        text: t.readonly(FhirNarrative),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        total: t.readonlyArray(FhirClaimResponse_Total),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        use: t.readonly(FhirCode),
      }),
    ])
)

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _created?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _disposition?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _outcome?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _preAuthRef?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _use?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  addItem?: ReadonlyArray<t.TypeOf<typeof FhirClaimResponse_AddItem>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  adjudication?: ReadonlyArray<t.TypeOf<typeof FhirClaimResponse_Adjudication>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  communicationRequest?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  created?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  disposition?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  error?: ReadonlyArray<t.TypeOf<typeof FhirClaimResponse_Error>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  form?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  formCode?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  fundsReserve?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  insurance?: ReadonlyArray<t.TypeOf<typeof FhirClaimResponse_Insurance>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  insurer: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  item?: ReadonlyArray<t.TypeOf<typeof FhirClaimResponse_Item>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  outcome?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  patient: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  payeeType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  payment?: Readonly<t.TypeOf<typeof FhirClaimResponse_Payment>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  preAuthPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  preAuthRef?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  processNote?: ReadonlyArray<t.TypeOf<typeof FhirClaimResponse_ProcessNote>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  request?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  requestor?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  resourceType: Readonly<'ClaimResponse'>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  subType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  total?: ReadonlyArray<t.TypeOf<typeof FhirClaimResponse_Total>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  use?: Readonly<t.TypeOf<typeof FhirCode>>
}
/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponseOutput {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _created?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _disposition?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _outcome?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _preAuthRef?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _use?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  addItem?: ReadonlyArray<t.OutputOf<typeof FhirClaimResponse_AddItem>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  adjudication?: ReadonlyArray<t.OutputOf<typeof FhirClaimResponse_Adjudication>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  communicationRequest?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  created?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  disposition?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  error?: ReadonlyArray<t.OutputOf<typeof FhirClaimResponse_Error>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  form?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  formCode?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  fundsReserve?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  insurance?: ReadonlyArray<t.OutputOf<typeof FhirClaimResponse_Insurance>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  insurer: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  item?: ReadonlyArray<t.OutputOf<typeof FhirClaimResponse_Item>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  outcome?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  patient: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  payeeType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  payment?: Readonly<t.OutputOf<typeof FhirClaimResponse_Payment>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  preAuthPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  preAuthRef?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  processNote?: ReadonlyArray<t.OutputOf<typeof FhirClaimResponse_ProcessNote>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  request?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  requestor?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  resourceType: Readonly<'ClaimResponse'>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  subType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  total?: ReadonlyArray<t.OutputOf<typeof FhirClaimResponse_Total>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  use?: Readonly<t.OutputOf<typeof FhirCode>>
}
