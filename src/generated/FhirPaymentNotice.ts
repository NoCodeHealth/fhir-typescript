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
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
export const FhirPaymentNotice: t.Type<FhirPaymentNotice, FhirPaymentNoticeOutput> = t.recursion(
  'FhirPaymentNotice',
  () =>
    t.intersection([
      t.type({
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        amount: t.readonly(FhirMoney),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        payment: t.readonly(FhirReference),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        recipient: t.readonly(FhirReference),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        resourceType: t.readonly(t.literal('PaymentNotice')),
      }),
      t.partial({
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        _created: t.readonly(FhirElement),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        _implicitRules: t.readonly(FhirElement),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        _language: t.readonly(FhirElement),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        _paymentDate: t.readonly(FhirElement),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        _status: t.readonly(FhirElement),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        contained: t.readonlyArray(FhirResourceList),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        created: t.readonly(FhirDateTime),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        extension: t.readonlyArray(FhirExtension),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        id: t.readonly(FhirId),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        implicitRules: t.readonly(FhirUri),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        language: t.readonly(FhirCode),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        meta: t.readonly(FhirMeta),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        payee: t.readonly(FhirReference),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        paymentDate: t.readonly(FhirDate),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        paymentStatus: t.readonly(FhirCodeableConcept),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        provider: t.readonly(FhirReference),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        request: t.readonly(FhirReference),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        response: t.readonly(FhirReference),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        status: t.readonly(FhirCode),
        /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
export interface FhirPaymentNotice {
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  _created?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  _paymentDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  amount: Readonly<t.TypeOf<typeof FhirMoney>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  created?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  payee?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  payment: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  paymentDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  paymentStatus?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  provider?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  recipient: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  request?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  resourceType: Readonly<'PaymentNotice'>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  response?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
export interface FhirPaymentNoticeOutput {
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  _created?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  _paymentDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  amount: Readonly<t.OutputOf<typeof FhirMoney>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  created?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  payee?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  payment: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  paymentDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  paymentStatus?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  provider?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  recipient: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  request?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  resourceType: Readonly<'PaymentNotice'>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  response?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
