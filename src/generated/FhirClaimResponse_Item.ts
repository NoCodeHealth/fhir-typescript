import * as t from 'io-ts'
import { FhirClaimResponse_Adjudication } from './FhirClaimResponse_Adjudication'
import { FhirClaimResponse_Detail } from './FhirClaimResponse_Detail'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirString } from './FhirString'

/** This resource provides the adjudication details from the processing of a Claim resource. */
export const FhirClaimResponse_Item: t.Type<FhirClaimResponse_Item, FhirClaimResponse_ItemOutput> = t.recursion(
  'FhirClaimResponse_Item',
  () =>
    t.intersection([
      t.type({
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        adjudication: t.readonlyArray(FhirClaimResponse_Adjudication),
      }),
      t.partial({
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        _itemSequence: t.readonly(FhirElement),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        _noteNumber: t.readonlyArray(FhirElement),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        detail: t.readonlyArray(FhirClaimResponse_Detail),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        extension: t.readonlyArray(FhirExtension),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        id: t.readonly(FhirString),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        itemSequence: t.readonly(FhirPositiveInt),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** This resource provides the adjudication details from the processing of a Claim resource. */
        noteNumber: t.readonlyArray(FhirPositiveInt),
      }),
    ])
)

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_Item {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _itemSequence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _noteNumber?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  adjudication: ReadonlyArray<t.TypeOf<typeof FhirClaimResponse_Adjudication>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  detail?: ReadonlyArray<t.TypeOf<typeof FhirClaimResponse_Detail>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  itemSequence?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  noteNumber?: ReadonlyArray<t.TypeOf<typeof FhirPositiveInt>>
}
/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_ItemOutput {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _itemSequence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _noteNumber?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  adjudication: ReadonlyArray<t.OutputOf<typeof FhirClaimResponse_Adjudication>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  detail?: ReadonlyArray<t.OutputOf<typeof FhirClaimResponse_Detail>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  itemSequence?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  noteNumber?: ReadonlyArray<t.OutputOf<typeof FhirPositiveInt>>
}
