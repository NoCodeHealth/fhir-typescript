import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInteger } from './FhirInteger'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Raw data describing a biological sequence. */
export const FhirMolecularSequence_ReferenceSeq: t.Type<
  FhirMolecularSequence_ReferenceSeq,
  FhirMolecularSequence_ReferenceSeqOutput
> = t.recursion('FhirMolecularSequence_ReferenceSeq', () =>
  t.partial({
    /** Raw data describing a biological sequence. */
    _genomeBuild: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _orientation: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _referenceSeqString: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _strand: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _windowEnd: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _windowStart: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    chromosome: t.readonly(FhirCodeableConcept),
    /** Raw data describing a biological sequence. */
    extension: t.readonlyArray(FhirExtension),
    /** Raw data describing a biological sequence. */
    genomeBuild: t.readonly(FhirString),
    /** Raw data describing a biological sequence. */
    id: t.readonly(FhirString),
    /** Raw data describing a biological sequence. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Raw data describing a biological sequence. */
    orientation: t.readonly(
      t.keyof({
        sense: null,
        antisense: null,
      })
    ),
    /** Raw data describing a biological sequence. */
    referenceSeqId: t.readonly(FhirCodeableConcept),
    /** Raw data describing a biological sequence. */
    referenceSeqPointer: t.readonly(FhirReference),
    /** Raw data describing a biological sequence. */
    referenceSeqString: t.readonly(FhirString),
    /** Raw data describing a biological sequence. */
    strand: t.readonly(
      t.keyof({
        watson: null,
        crick: null,
      })
    ),
    /** Raw data describing a biological sequence. */
    windowEnd: t.readonly(FhirInteger),
    /** Raw data describing a biological sequence. */
    windowStart: t.readonly(FhirInteger),
  })
)

/** Raw data describing a biological sequence. */
export interface FhirMolecularSequence_ReferenceSeq {
  /** Raw data describing a biological sequence. */
  _genomeBuild?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _orientation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _referenceSeqString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _strand?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _windowEnd?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _windowStart?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  chromosome?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Raw data describing a biological sequence. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  genomeBuild?: Readonly<t.TypeOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  orientation?: Readonly<'sense' | 'antisense'>
  /** Raw data describing a biological sequence. */
  referenceSeqId?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Raw data describing a biological sequence. */
  referenceSeqPointer?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Raw data describing a biological sequence. */
  referenceSeqString?: Readonly<t.TypeOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  strand?: Readonly<'watson' | 'crick'>
  /** Raw data describing a biological sequence. */
  windowEnd?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  windowStart?: Readonly<t.TypeOf<typeof FhirInteger>>
}
/** Raw data describing a biological sequence. */
export interface FhirMolecularSequence_ReferenceSeqOutput {
  /** Raw data describing a biological sequence. */
  _genomeBuild?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _orientation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _referenceSeqString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _strand?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _windowEnd?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _windowStart?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  chromosome?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Raw data describing a biological sequence. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  genomeBuild?: Readonly<t.OutputOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  orientation?: Readonly<'sense' | 'antisense'>
  /** Raw data describing a biological sequence. */
  referenceSeqId?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Raw data describing a biological sequence. */
  referenceSeqPointer?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Raw data describing a biological sequence. */
  referenceSeqString?: Readonly<t.OutputOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  strand?: Readonly<'watson' | 'crick'>
  /** Raw data describing a biological sequence. */
  windowEnd?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  windowStart?: Readonly<t.OutputOf<typeof FhirInteger>>
}
