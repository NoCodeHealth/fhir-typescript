import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirString } from './FhirString'

/** This resource provides the adjudication details from the processing of a Claim resource. */
export const FhirClaimResponse_ProcessNote: t.Type<
  FhirClaimResponse_ProcessNote,
  FhirClaimResponse_ProcessNoteOutput
> = t.recursion('FhirClaimResponse_ProcessNote', () =>
  t.partial({
    /** This resource provides the adjudication details from the processing of a Claim resource. */
    _number: t.readonly(FhirElement),
    /** This resource provides the adjudication details from the processing of a Claim resource. */
    _text: t.readonly(FhirElement),
    /** This resource provides the adjudication details from the processing of a Claim resource. */
    _type: t.readonly(FhirElement),
    /** This resource provides the adjudication details from the processing of a Claim resource. */
    extension: t.readonlyArray(FhirExtension),
    /** This resource provides the adjudication details from the processing of a Claim resource. */
    id: t.readonly(FhirString),
    /** This resource provides the adjudication details from the processing of a Claim resource. */
    language: t.readonly(FhirCodeableConcept),
    /** This resource provides the adjudication details from the processing of a Claim resource. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** This resource provides the adjudication details from the processing of a Claim resource. */
    number: t.readonly(FhirPositiveInt),
    /** This resource provides the adjudication details from the processing of a Claim resource. */
    text: t.readonly(FhirString),
    /** This resource provides the adjudication details from the processing of a Claim resource. */
    type: t.readonly(
      t.keyof({
        display: null,
        print: null,
        printoper: null,
      })
    ),
  })
)

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_ProcessNote {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _number?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _text?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  language?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  number?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  text?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  type?: Readonly<'display' | 'print' | 'printoper'>
}
/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_ProcessNoteOutput {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _number?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _text?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  language?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  number?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  text?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  type?: Readonly<'display' | 'print' | 'printoper'>
}
