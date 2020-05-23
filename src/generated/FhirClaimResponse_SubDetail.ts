import * as t from 'io-ts'
import { FhirClaimResponse_Adjudication } from './FhirClaimResponse_Adjudication'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirString } from './FhirString'

/** This resource provides the adjudication details from the processing of a Claim resource. */
export const FhirClaimResponse_SubDetail: t.Type<
  FhirClaimResponse_SubDetail,
  FhirClaimResponse_SubDetailOutput
> = t.recursion('FhirClaimResponse_SubDetail', () =>
  t.partial({
    /** This resource provides the adjudication details from the processing of a Claim resource. */
    _noteNumber: t.readonlyArray(FhirElement),
    /** This resource provides the adjudication details from the processing of a Claim resource. */
    _subDetailSequence: t.readonly(FhirElement),
    /** This resource provides the adjudication details from the processing of a Claim resource. */
    adjudication: t.readonlyArray(FhirClaimResponse_Adjudication),
    /** This resource provides the adjudication details from the processing of a Claim resource. */
    extension: t.readonlyArray(FhirExtension),
    /** This resource provides the adjudication details from the processing of a Claim resource. */
    id: t.readonly(FhirString),
    /** This resource provides the adjudication details from the processing of a Claim resource. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** This resource provides the adjudication details from the processing of a Claim resource. */
    noteNumber: t.readonlyArray(FhirPositiveInt),
    /** This resource provides the adjudication details from the processing of a Claim resource. */
    subDetailSequence: t.readonly(FhirPositiveInt),
  })
)

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_SubDetail {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _noteNumber?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _subDetailSequence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  adjudication?: ReadonlyArray<t.TypeOf<typeof FhirClaimResponse_Adjudication>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  noteNumber?: ReadonlyArray<t.TypeOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  subDetailSequence?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
}
/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_SubDetailOutput {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _noteNumber?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _subDetailSequence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  adjudication?: ReadonlyArray<t.OutputOf<typeof FhirClaimResponse_Adjudication>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  noteNumber?: ReadonlyArray<t.OutputOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  subDetailSequence?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
}
