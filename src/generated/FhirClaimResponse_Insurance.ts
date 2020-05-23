import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** This resource provides the adjudication details from the processing of a Claim resource. */
export const FhirClaimResponse_Insurance: t.Type<
  FhirClaimResponse_Insurance,
  FhirClaimResponse_InsuranceOutput
> = t.recursion('FhirClaimResponse_Insurance', () =>
  t.intersection([
    t.type({
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      coverage: t.readonly(FhirReference),
    }),
    t.partial({
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      _businessArrangement: t.readonly(FhirElement),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      _focal: t.readonly(FhirElement),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      _sequence: t.readonly(FhirElement),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      businessArrangement: t.readonly(FhirString),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      claimResponse: t.readonly(FhirReference),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      extension: t.readonlyArray(FhirExtension),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      focal: t.readonly(FhirBoolean),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      id: t.readonly(FhirString),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      sequence: t.readonly(FhirPositiveInt),
    }),
  ])
)

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_Insurance {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _businessArrangement?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _focal?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _sequence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  businessArrangement?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  claimResponse?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  coverage: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  focal?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  sequence?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
}
/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_InsuranceOutput {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _businessArrangement?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _focal?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _sequence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  businessArrangement?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  claimResponse?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  coverage: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  focal?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  sequence?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
}
