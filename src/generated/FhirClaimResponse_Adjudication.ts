import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMoney } from './FhirMoney'
import { FhirString } from './FhirString'

/** This resource provides the adjudication details from the processing of a Claim resource. */
export const FhirClaimResponse_Adjudication: t.Type<
  FhirClaimResponse_Adjudication,
  FhirClaimResponse_AdjudicationOutput
> = t.recursion('FhirClaimResponse_Adjudication', () =>
  t.intersection([
    t.type({
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      category: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      _value: t.readonly(FhirElement),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      amount: t.readonly(FhirMoney),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      extension: t.readonlyArray(FhirExtension),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      id: t.readonly(FhirString),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      reason: t.readonly(FhirCodeableConcept),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      value: t.readonly(FhirDecimal),
    }),
  ])
)

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_Adjudication {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _value?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  amount?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  category: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  reason?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  value?: Readonly<t.TypeOf<typeof FhirDecimal>>
}
/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_AdjudicationOutput {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _value?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  amount?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  category: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  reason?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  value?: Readonly<t.OutputOf<typeof FhirDecimal>>
}
