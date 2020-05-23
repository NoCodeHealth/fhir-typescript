import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDate } from './FhirDate'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMoney } from './FhirMoney'
import { FhirString } from './FhirString'

/** This resource provides the adjudication details from the processing of a Claim resource. */
export const FhirClaimResponse_Payment: t.Type<
  FhirClaimResponse_Payment,
  FhirClaimResponse_PaymentOutput
> = t.recursion('FhirClaimResponse_Payment', () =>
  t.intersection([
    t.type({
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      amount: t.readonly(FhirMoney),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      type: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      _date: t.readonly(FhirElement),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      adjustment: t.readonly(FhirMoney),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      adjustmentReason: t.readonly(FhirCodeableConcept),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      date: t.readonly(FhirDate),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      extension: t.readonlyArray(FhirExtension),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      id: t.readonly(FhirString),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      identifier: t.readonly(FhirIdentifier),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_Payment {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  adjustment?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  adjustmentReason?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  amount: Readonly<t.TypeOf<typeof FhirMoney>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  date?: Readonly<t.TypeOf<typeof FhirDate>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_PaymentOutput {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  adjustment?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  adjustmentReason?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  amount: Readonly<t.OutputOf<typeof FhirMoney>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  date?: Readonly<t.OutputOf<typeof FhirDate>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
