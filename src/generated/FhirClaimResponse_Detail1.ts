import * as t from 'io-ts'
import { FhirClaimResponse_Adjudication } from './FhirClaimResponse_Adjudication'
import { FhirClaimResponse_SubDetail1 } from './FhirClaimResponse_SubDetail1'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMoney } from './FhirMoney'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** This resource provides the adjudication details from the processing of a Claim resource. */
export const FhirClaimResponse_Detail1: t.Type<
  FhirClaimResponse_Detail1,
  FhirClaimResponse_Detail1Output
> = t.recursion('FhirClaimResponse_Detail1', () =>
  t.intersection([
    t.type({
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      adjudication: t.readonlyArray(FhirClaimResponse_Adjudication),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      productOrService: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      _factor: t.readonly(FhirElement),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      _noteNumber: t.readonlyArray(FhirElement),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      extension: t.readonlyArray(FhirExtension),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      factor: t.readonly(FhirDecimal),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      id: t.readonly(FhirString),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      modifier: t.readonlyArray(FhirCodeableConcept),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      net: t.readonly(FhirMoney),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      noteNumber: t.readonlyArray(FhirPositiveInt),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      quantity: t.readonly(FhirQuantity),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      subDetail: t.readonlyArray(FhirClaimResponse_SubDetail1),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      unitPrice: t.readonly(FhirMoney),
    }),
  ])
)

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_Detail1 {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _factor?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _noteNumber?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  adjudication: ReadonlyArray<t.TypeOf<typeof FhirClaimResponse_Adjudication>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  factor?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifier?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  net?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  noteNumber?: ReadonlyArray<t.TypeOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  productOrService: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  quantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  subDetail?: ReadonlyArray<t.TypeOf<typeof FhirClaimResponse_SubDetail1>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  unitPrice?: Readonly<t.TypeOf<typeof FhirMoney>>
}
/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_Detail1Output {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _factor?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _noteNumber?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  adjudication: ReadonlyArray<t.OutputOf<typeof FhirClaimResponse_Adjudication>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  factor?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifier?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  net?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  noteNumber?: ReadonlyArray<t.OutputOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  productOrService: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  quantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  subDetail?: ReadonlyArray<t.OutputOf<typeof FhirClaimResponse_SubDetail1>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  unitPrice?: Readonly<t.OutputOf<typeof FhirMoney>>
}
