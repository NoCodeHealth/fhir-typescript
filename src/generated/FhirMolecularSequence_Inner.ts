import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInteger } from './FhirInteger'
import { FhirString } from './FhirString'

/** Raw data describing a biological sequence. */
export const FhirMolecularSequence_Inner: t.Type<
  FhirMolecularSequence_Inner,
  FhirMolecularSequence_InnerOutput
> = t.recursion('FhirMolecularSequence_Inner', () =>
  t.partial({
    /** Raw data describing a biological sequence. */
    _end: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _start: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    end: t.readonly(FhirInteger),
    /** Raw data describing a biological sequence. */
    extension: t.readonlyArray(FhirExtension),
    /** Raw data describing a biological sequence. */
    id: t.readonly(FhirString),
    /** Raw data describing a biological sequence. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Raw data describing a biological sequence. */
    start: t.readonly(FhirInteger),
  })
)

/** Raw data describing a biological sequence. */
export interface FhirMolecularSequence_Inner {
  /** Raw data describing a biological sequence. */
  _end?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _start?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  end?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  start?: Readonly<t.TypeOf<typeof FhirInteger>>
}
/** Raw data describing a biological sequence. */
export interface FhirMolecularSequence_InnerOutput {
  /** Raw data describing a biological sequence. */
  _end?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _start?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  end?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  start?: Readonly<t.OutputOf<typeof FhirInteger>>
}
