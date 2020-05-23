import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInteger } from './FhirInteger'
import { FhirMolecularSequence_Roc } from './FhirMolecularSequence_Roc'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** Raw data describing a biological sequence. */
export const FhirMolecularSequence_Quality: t.Type<
  FhirMolecularSequence_Quality,
  FhirMolecularSequence_QualityOutput
> = t.recursion('FhirMolecularSequence_Quality', () =>
  t.partial({
    /** Raw data describing a biological sequence. */
    _end: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _fScore: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _gtFP: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _precision: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _queryFP: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _queryTP: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _recall: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _start: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _truthFN: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _truthTP: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _type: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    end: t.readonly(FhirInteger),
    /** Raw data describing a biological sequence. */
    extension: t.readonlyArray(FhirExtension),
    /** Raw data describing a biological sequence. */
    fScore: t.readonly(FhirDecimal),
    /** Raw data describing a biological sequence. */
    gtFP: t.readonly(FhirDecimal),
    /** Raw data describing a biological sequence. */
    id: t.readonly(FhirString),
    /** Raw data describing a biological sequence. */
    method: t.readonly(FhirCodeableConcept),
    /** Raw data describing a biological sequence. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Raw data describing a biological sequence. */
    precision: t.readonly(FhirDecimal),
    /** Raw data describing a biological sequence. */
    queryFP: t.readonly(FhirDecimal),
    /** Raw data describing a biological sequence. */
    queryTP: t.readonly(FhirDecimal),
    /** Raw data describing a biological sequence. */
    recall: t.readonly(FhirDecimal),
    /** Raw data describing a biological sequence. */
    roc: t.readonly(FhirMolecularSequence_Roc),
    /** Raw data describing a biological sequence. */
    score: t.readonly(FhirQuantity),
    /** Raw data describing a biological sequence. */
    standardSequence: t.readonly(FhirCodeableConcept),
    /** Raw data describing a biological sequence. */
    start: t.readonly(FhirInteger),
    /** Raw data describing a biological sequence. */
    truthFN: t.readonly(FhirDecimal),
    /** Raw data describing a biological sequence. */
    truthTP: t.readonly(FhirDecimal),
    /** Raw data describing a biological sequence. */
    type: t.readonly(
      t.keyof({
        indel: null,
        snp: null,
        unknown: null,
      })
    ),
  })
)

/** Raw data describing a biological sequence. */
export interface FhirMolecularSequence_Quality {
  /** Raw data describing a biological sequence. */
  _end?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _fScore?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _gtFP?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _precision?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _queryFP?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _queryTP?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _recall?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _start?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _truthFN?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _truthTP?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  end?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  fScore?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  gtFP?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  method?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Raw data describing a biological sequence. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  precision?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  queryFP?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  queryTP?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  recall?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  roc?: Readonly<t.TypeOf<typeof FhirMolecularSequence_Roc>>
  /** Raw data describing a biological sequence. */
  score?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Raw data describing a biological sequence. */
  standardSequence?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Raw data describing a biological sequence. */
  start?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  truthFN?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  truthTP?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  type?: Readonly<'indel' | 'snp' | 'unknown'>
}
/** Raw data describing a biological sequence. */
export interface FhirMolecularSequence_QualityOutput {
  /** Raw data describing a biological sequence. */
  _end?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _fScore?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _gtFP?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _precision?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _queryFP?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _queryTP?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _recall?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _start?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _truthFN?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _truthTP?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  end?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  fScore?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  gtFP?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  method?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Raw data describing a biological sequence. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  precision?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  queryFP?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  queryTP?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  recall?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  roc?: Readonly<t.OutputOf<typeof FhirMolecularSequence_Roc>>
  /** Raw data describing a biological sequence. */
  score?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Raw data describing a biological sequence. */
  standardSequence?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Raw data describing a biological sequence. */
  start?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  truthFN?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  truthTP?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** Raw data describing a biological sequence. */
  type?: Readonly<'indel' | 'snp' | 'unknown'>
}
