import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirInvoice_LineItem } from './FhirInvoice_LineItem'
import { FhirInvoice_Participant } from './FhirInvoice_Participant'
import { FhirInvoice_PriceComponent } from './FhirInvoice_PriceComponent'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirMeta } from './FhirMeta'
import { FhirMoney } from './FhirMoney'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
export const FhirInvoice: t.Type<FhirInvoice, FhirInvoiceOutput> = t.recursion('FhirInvoice', () =>
  t.intersection([
    t.type({
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      resourceType: t.readonly(t.literal('Invoice')),
    }),
    t.partial({
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      _cancelledReason: t.readonly(FhirElement),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      _date: t.readonly(FhirElement),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      _implicitRules: t.readonly(FhirElement),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      _language: t.readonly(FhirElement),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      _paymentTerms: t.readonly(FhirElement),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      _status: t.readonly(FhirElement),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      account: t.readonly(FhirReference),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      cancelledReason: t.readonly(FhirString),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      contained: t.readonlyArray(FhirResourceList),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      date: t.readonly(FhirDateTime),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      extension: t.readonlyArray(FhirExtension),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      id: t.readonly(FhirId),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      implicitRules: t.readonly(FhirUri),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      issuer: t.readonly(FhirReference),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      language: t.readonly(FhirCode),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      lineItem: t.readonlyArray(FhirInvoice_LineItem),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      meta: t.readonly(FhirMeta),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      note: t.readonlyArray(FhirAnnotation),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      participant: t.readonlyArray(FhirInvoice_Participant),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      paymentTerms: t.readonly(FhirMarkdown),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      recipient: t.readonly(FhirReference),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      status: t.readonly(
        t.keyof({
          draft: null,
          issued: null,
          balanced: null,
          cancelled: null,
          'entered-in-error': null,
        })
      ),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      subject: t.readonly(FhirReference),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      text: t.readonly(FhirNarrative),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      totalGross: t.readonly(FhirMoney),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      totalNet: t.readonly(FhirMoney),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      totalPriceComponent: t.readonlyArray(FhirInvoice_PriceComponent),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      type: t.readonly(FhirCodeableConcept),
    }),
  ])
)

/** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
export interface FhirInvoice {
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  _cancelledReason?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  _paymentTerms?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  account?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  cancelledReason?: Readonly<t.TypeOf<typeof FhirString>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  issuer?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  lineItem?: ReadonlyArray<t.TypeOf<typeof FhirInvoice_LineItem>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  participant?: ReadonlyArray<t.TypeOf<typeof FhirInvoice_Participant>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  paymentTerms?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  recipient?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  resourceType: Readonly<'Invoice'>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  status?: Readonly<'draft' | 'issued' | 'balanced' | 'cancelled' | 'entered-in-error'>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  subject?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  totalGross?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  totalNet?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  totalPriceComponent?: ReadonlyArray<t.TypeOf<typeof FhirInvoice_PriceComponent>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
export interface FhirInvoiceOutput {
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  _cancelledReason?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  _paymentTerms?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  account?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  cancelledReason?: Readonly<t.OutputOf<typeof FhirString>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  issuer?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  lineItem?: ReadonlyArray<t.OutputOf<typeof FhirInvoice_LineItem>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  participant?: ReadonlyArray<t.OutputOf<typeof FhirInvoice_Participant>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  paymentTerms?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  recipient?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  resourceType: Readonly<'Invoice'>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  status?: Readonly<'draft' | 'issued' | 'balanced' | 'cancelled' | 'entered-in-error'>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  subject?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  totalGross?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  totalNet?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  totalPriceComponent?: ReadonlyArray<t.OutputOf<typeof FhirInvoice_PriceComponent>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
