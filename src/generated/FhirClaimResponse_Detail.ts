import * as t from 'io-ts'
import { FhirClaimResponse_Adjudication } from './FhirClaimResponse_Adjudication'
import { FhirClaimResponse_SubDetail } from './FhirClaimResponse_SubDetail'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirString } from './FhirString'

/** This resource provides the adjudication details from the processing of a Claim resource. */
export const FhirClaimResponse_Detail: t.Type<FhirClaimResponse_Detail, FhirClaimResponse_DetailOutput> = t.recursion(
  'FhirClaimResponse_Detail',
  () =>
    t.intersection([
      t.type({
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        adjudication: t.readonlyArray(FhirClaimResponse_Adjudication),
      }),
      t.partial({
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        _detailSequence: t.readonly(FhirElement),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        _noteNumber: t.readonlyArray(FhirElement),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        detailSequence: t.readonly(FhirPositiveInt),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        extension: t.readonlyArray(FhirExtension),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        id: t.readonly(FhirString),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        noteNumber: t.readonlyArray(FhirPositiveInt),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        subDetail: t.readonlyArray(FhirClaimResponse_SubDetail),
      }),
    ])
)

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_Detail {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _detailSequence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _noteNumber?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  adjudication: ReadonlyArray<t.TypeOf<typeof FhirClaimResponse_Adjudication>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  detailSequence?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  noteNumber?: ReadonlyArray<t.TypeOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  subDetail?: ReadonlyArray<t.TypeOf<typeof FhirClaimResponse_SubDetail>>
}
/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_DetailOutput {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _detailSequence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _noteNumber?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  adjudication: ReadonlyArray<t.OutputOf<typeof FhirClaimResponse_Adjudication>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  detailSequence?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  noteNumber?: ReadonlyArray<t.OutputOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  subDetail?: ReadonlyArray<t.OutputOf<typeof FhirClaimResponse_SubDetail>>
}
