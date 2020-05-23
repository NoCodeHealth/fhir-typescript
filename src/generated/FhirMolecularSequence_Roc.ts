import * as t from 'io-ts'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInteger } from './FhirInteger'
import { FhirString } from './FhirString'

/** Raw data describing a biological sequence. */
export const FhirMolecularSequence_Roc: t.Type<
  FhirMolecularSequence_Roc,
  FhirMolecularSequence_RocOutput
> = t.recursion('FhirMolecularSequence_Roc', () =>
  t.partial({
    /** Raw data describing a biological sequence. */
    _fMeasure: t.readonlyArray(FhirElement),
    /** Raw data describing a biological sequence. */
    _numFN: t.readonlyArray(FhirElement),
    /** Raw data describing a biological sequence. */
    _numFP: t.readonlyArray(FhirElement),
    /** Raw data describing a biological sequence. */
    _numTP: t.readonlyArray(FhirElement),
    /** Raw data describing a biological sequence. */
    _precision: t.readonlyArray(FhirElement),
    /** Raw data describing a biological sequence. */
    _score: t.readonlyArray(FhirElement),
    /** Raw data describing a biological sequence. */
    _sensitivity: t.readonlyArray(FhirElement),
    /** Raw data describing a biological sequence. */
    extension: t.readonlyArray(FhirExtension),
    /** Raw data describing a biological sequence. */
    fMeasure: t.readonlyArray(FhirDecimal),
    /** Raw data describing a biological sequence. */
    id: t.readonly(FhirString),
    /** Raw data describing a biological sequence. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Raw data describing a biological sequence. */
    numFN: t.readonlyArray(FhirInteger),
    /** Raw data describing a biological sequence. */
    numFP: t.readonlyArray(FhirInteger),
    /** Raw data describing a biological sequence. */
    numTP: t.readonlyArray(FhirInteger),
    /** Raw data describing a biological sequence. */
    precision: t.readonlyArray(FhirDecimal),
    /** Raw data describing a biological sequence. */
    score: t.readonlyArray(FhirInteger),
    /** Raw data describing a biological sequence. */
    sensitivity: t.readonlyArray(FhirDecimal),
  })
)

/** Raw data describing a biological sequence. */
export interface FhirMolecularSequence_Roc {
  /** Raw data describing a biological sequence. */
  _fMeasure?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _numFN?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _numFP?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _numTP?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _precision?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _score?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _sensitivity?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  fMeasure?: ReadonlyArray<t.TypeOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  numFN?: ReadonlyArray<t.TypeOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  numFP?: ReadonlyArray<t.TypeOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  numTP?: ReadonlyArray<t.TypeOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  precision?: ReadonlyArray<t.TypeOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  score?: ReadonlyArray<t.TypeOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  sensitivity?: ReadonlyArray<t.TypeOf<typeof FhirDecimal>>
}
/** Raw data describing a biological sequence. */
export interface FhirMolecularSequence_RocOutput {
  /** Raw data describing a biological sequence. */
  _fMeasure?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _numFN?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _numFP?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _numTP?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _precision?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _score?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _sensitivity?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  fMeasure?: ReadonlyArray<t.OutputOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  numFN?: ReadonlyArray<t.OutputOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  numFP?: ReadonlyArray<t.OutputOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  numTP?: ReadonlyArray<t.OutputOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  precision?: ReadonlyArray<t.OutputOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  score?: ReadonlyArray<t.OutputOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  sensitivity?: ReadonlyArray<t.OutputOf<typeof FhirDecimal>>
}
