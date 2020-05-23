import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A reference from one resource to another. */
export const FhirReference: t.Type<FhirReference, FhirReferenceOutput> = t.recursion('FhirReference', () =>
  t.partial({
    /** A reference from one resource to another. */
    _display: t.readonly(FhirElement),
    /** A reference from one resource to another. */
    _reference: t.readonly(FhirElement),
    /** A reference from one resource to another. */
    _type: t.readonly(FhirElement),
    /** A reference from one resource to another. */
    display: t.readonly(FhirString),
    /** A reference from one resource to another. */
    extension: t.readonlyArray(FhirExtension),
    /** A reference from one resource to another. */
    id: t.readonly(FhirString),
    /** A reference from one resource to another. */
    identifier: t.readonly(FhirIdentifier),
    /** A reference from one resource to another. */
    reference: t.readonly(FhirString),
    /** A reference from one resource to another. */
    type: t.readonly(FhirUri),
  })
)

/** A reference from one resource to another. */
export interface FhirReference {
  /** A reference from one resource to another. */
  _display?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A reference from one resource to another. */
  _reference?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A reference from one resource to another. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A reference from one resource to another. */
  display?: Readonly<t.TypeOf<typeof FhirString>>
  /** A reference from one resource to another. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A reference from one resource to another. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A reference from one resource to another. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A reference from one resource to another. */
  reference?: Readonly<t.TypeOf<typeof FhirString>>
  /** A reference from one resource to another. */
  type?: Readonly<t.TypeOf<typeof FhirUri>>
}
/** A reference from one resource to another. */
export interface FhirReferenceOutput {
  /** A reference from one resource to another. */
  _display?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A reference from one resource to another. */
  _reference?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A reference from one resource to another. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A reference from one resource to another. */
  display?: Readonly<t.OutputOf<typeof FhirString>>
  /** A reference from one resource to another. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A reference from one resource to another. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A reference from one resource to another. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A reference from one resource to another. */
  reference?: Readonly<t.OutputOf<typeof FhirString>>
  /** A reference from one resource to another. */
  type?: Readonly<t.OutputOf<typeof FhirUri>>
}
