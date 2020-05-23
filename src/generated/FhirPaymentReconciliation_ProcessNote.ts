import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** This resource provides the details including amount of a payment and allocates the payment items being paid. */
export const FhirPaymentReconciliation_ProcessNote: t.Type<
  FhirPaymentReconciliation_ProcessNote,
  FhirPaymentReconciliation_ProcessNoteOutput
> = t.recursion('FhirPaymentReconciliation_ProcessNote', () =>
  t.partial({
    /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
    _text: t.readonly(FhirElement),
    /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
    _type: t.readonly(FhirElement),
    /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
    extension: t.readonlyArray(FhirExtension),
    /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
    id: t.readonly(FhirString),
    /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
    text: t.readonly(FhirString),
    /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
    type: t.readonly(
      t.keyof({
        display: null,
        print: null,
        printoper: null,
      })
    ),
  })
)

/** This resource provides the details including amount of a payment and allocates the payment items being paid. */
export interface FhirPaymentReconciliation_ProcessNote {
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _text?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  text?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  type?: Readonly<'display' | 'print' | 'printoper'>
}
/** This resource provides the details including amount of a payment and allocates the payment items being paid. */
export interface FhirPaymentReconciliation_ProcessNoteOutput {
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _text?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  text?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides the details including amount of a payment and allocates the payment items being paid. */
  type?: Readonly<'display' | 'print' | 'printoper'>
}
