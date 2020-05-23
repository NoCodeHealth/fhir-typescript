import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDate } from './FhirDate'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirMoney } from './FhirMoney'
import { FhirNarrative } from './FhirNarrative'
import { FhirPaymentReconciliation_Detail } from './FhirPaymentReconciliation_Detail'
import { FhirPaymentReconciliation_ProcessNote } from './FhirPaymentReconciliation_ProcessNote'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** This resource provides the details including amount of a payment and allocates the payment items being paid. */
export const FhirPaymentReconciliation: t.Type<
  FhirPaymentReconciliation,
  FhirPaymentReconciliationOutput
> = t.recursion('FhirPaymentReconciliation', () =>
  t.intersection([
    t.type({
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      paymentAmount: t.readonly(FhirMoney),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      resourceType: t.readonly(t.literal('PaymentReconciliation')),
    }),
    t.partial({
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      _created: t.readonly(FhirElement),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      _disposition: t.readonly(FhirElement),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      _implicitRules: t.readonly(FhirElement),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      _language: t.readonly(FhirElement),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      _outcome: t.readonly(FhirElement),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      _paymentDate: t.readonly(FhirElement),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      _status: t.readonly(FhirElement),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      contained: t.readonlyArray(FhirResourceList),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      created: t.readonly(FhirDateTime),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      detail: t.readonlyArray(FhirPaymentReconciliation_Detail),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      disposition: t.readonly(FhirString),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      extension: t.readonlyArray(FhirExtension),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      formCode: t.readonly(FhirCodeableConcept),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      id: t.readonly(FhirId),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      implicitRules: t.readonly(FhirUri),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      language: t.readonly(FhirCode),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      meta: t.readonly(FhirMeta),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      outcome: t.readonly(
        t.keyof({
          queued: null,
          complete: null,
          error: null,
          partial: null,
        })
      ),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      paymentDate: t.readonly(FhirDate),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      paymentIdentifier: t.readonly(FhirIdentifier),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      paymentIssuer: t.readonly(FhirReference),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      period: t.readonly(FhirPeriod),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      processNote: t.readonlyArray(FhirPaymentReconciliation_ProcessNote),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      request: t.readonly(FhirReference),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      requestor: t.readonly(FhirReference),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      status: t.readonly(FhirCode),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** This resource provides the details including amount of a payment and allocates the payment items being paid. */
export interface FhirPaymentReconciliation {
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _created?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _disposition?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _outcome?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _paymentDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  created?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  detail?: ReadonlyArray<t.TypeOf<typeof FhirPaymentReconciliation_Detail>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  disposition?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  formCode?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  outcome?: Readonly<'queued' | 'complete' | 'error' | 'partial'>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  paymentAmount: Readonly<t.TypeOf<typeof FhirMoney>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  paymentDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  paymentIdentifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  paymentIssuer?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  processNote?: ReadonlyArray<t.TypeOf<typeof FhirPaymentReconciliation_ProcessNote>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  request?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  requestor?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  resourceType: Readonly<'PaymentReconciliation'>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** This resource provides the details including amount of a payment and allocates the payment items being paid. */
export interface FhirPaymentReconciliationOutput {
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _created?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _disposition?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _outcome?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _paymentDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  created?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  detail?: ReadonlyArray<t.OutputOf<typeof FhirPaymentReconciliation_Detail>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  disposition?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  formCode?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  outcome?: Readonly<'queued' | 'complete' | 'error' | 'partial'>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  paymentAmount: Readonly<t.OutputOf<typeof FhirMoney>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  paymentDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  paymentIdentifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  paymentIssuer?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  processNote?: ReadonlyArray<t.OutputOf<typeof FhirPaymentReconciliation_ProcessNote>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  request?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  requestor?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  resourceType: Readonly<'PaymentReconciliation'>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
