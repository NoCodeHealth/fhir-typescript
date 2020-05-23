import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInteger } from './FhirInteger'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Raw data describing a biological sequence. */
export const FhirMolecularSequence_Variant: t.Type<
  FhirMolecularSequence_Variant,
  FhirMolecularSequence_VariantOutput
> = t.recursion('FhirMolecularSequence_Variant', () =>
  t.partial({
    /** Raw data describing a biological sequence. */
    _cigar: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _end: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _observedAllele: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _referenceAllele: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _start: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    cigar: t.readonly(FhirString),
    /** Raw data describing a biological sequence. */
    end: t.readonly(FhirInteger),
    /** Raw data describing a biological sequence. */
    extension: t.readonlyArray(FhirExtension),
    /** Raw data describing a biological sequence. */
    id: t.readonly(FhirString),
    /** Raw data describing a biological sequence. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Raw data describing a biological sequence. */
    observedAllele: t.readonly(FhirString),
    /** Raw data describing a biological sequence. */
    referenceAllele: t.readonly(FhirString),
    /** Raw data describing a biological sequence. */
    start: t.readonly(FhirInteger),
    /** Raw data describing a biological sequence. */
    variantPointer: t.readonly(FhirReference),
  })
)

/** Raw data describing a biological sequence. */
export interface FhirMolecularSequence_Variant {
  /** Raw data describing a biological sequence. */
  _cigar?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _end?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _observedAllele?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _referenceAllele?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _start?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  cigar?: Readonly<t.TypeOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  end?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  observedAllele?: Readonly<t.TypeOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  referenceAllele?: Readonly<t.TypeOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  start?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  variantPointer?: Readonly<t.TypeOf<typeof FhirReference>>
}
/** Raw data describing a biological sequence. */
export interface FhirMolecularSequence_VariantOutput {
  /** Raw data describing a biological sequence. */
  _cigar?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _end?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _observedAllele?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _referenceAllele?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _start?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  cigar?: Readonly<t.OutputOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  end?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  observedAllele?: Readonly<t.OutputOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  referenceAllele?: Readonly<t.OutputOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  start?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  variantPointer?: Readonly<t.OutputOf<typeof FhirReference>>
}
