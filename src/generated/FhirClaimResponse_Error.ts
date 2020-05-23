import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirString } from './FhirString'

/** This resource provides the adjudication details from the processing of a Claim resource. */
export const FhirClaimResponse_Error: t.Type<FhirClaimResponse_Error, FhirClaimResponse_ErrorOutput> = t.recursion(
  'FhirClaimResponse_Error',
  () =>
    t.intersection([
      t.type({
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        code: t.readonly(FhirCodeableConcept),
      }),
      t.partial({
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        _detailSequence: t.readonly(FhirElement),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        _itemSequence: t.readonly(FhirElement),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        _subDetailSequence: t.readonly(FhirElement),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        detailSequence: t.readonly(FhirPositiveInt),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        extension: t.readonlyArray(FhirExtension),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        id: t.readonly(FhirString),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        itemSequence: t.readonly(FhirPositiveInt),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        subDetailSequence: t.readonly(FhirPositiveInt),
      }),
    ])
)

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_Error {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _detailSequence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _itemSequence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _subDetailSequence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  code: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  detailSequence?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  itemSequence?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  subDetailSequence?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
}
/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_ErrorOutput {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _detailSequence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _itemSequence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _subDetailSequence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  code: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  detailSequence?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  itemSequence?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  subDetailSequence?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
}
