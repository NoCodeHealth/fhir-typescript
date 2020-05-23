import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDate } from './FhirDate'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMoney } from './FhirMoney'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** This resource provides the details including amount of a payment and allocates the payment items being paid. */
export const FhirPaymentReconciliation_Detail: t.Type<
  FhirPaymentReconciliation_Detail,
  FhirPaymentReconciliation_DetailOutput
> = t.recursion('FhirPaymentReconciliation_Detail', () =>
  t.intersection([
    t.type({
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      type: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      _date: t.readonly(FhirElement),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      amount: t.readonly(FhirMoney),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      date: t.readonly(FhirDate),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      extension: t.readonlyArray(FhirExtension),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      id: t.readonly(FhirString),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      identifier: t.readonly(FhirIdentifier),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      payee: t.readonly(FhirReference),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      predecessor: t.readonly(FhirIdentifier),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      request: t.readonly(FhirReference),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      response: t.readonly(FhirReference),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      responsible: t.readonly(FhirReference),
      /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
      submitter: t.readonly(FhirReference),
    }),
  ])
)

/** This resource provides the details including amount of a payment and allocates the payment items being paid. */
export interface FhirPaymentReconciliation_Detail {
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  amount?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  date?: Readonly<t.TypeOf<typeof FhirDate>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  payee?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  predecessor?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  request?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  response?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  responsible?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  submitter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** This resource provides the details including amount of a payment and allocates the payment items being paid. */
export interface FhirPaymentReconciliation_DetailOutput {
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  amount?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  date?: Readonly<t.OutputOf<typeof FhirDate>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  payee?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  predecessor?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  request?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  response?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  responsible?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  submitter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
