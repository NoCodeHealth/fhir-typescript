import * as t from 'io-ts'
import { FhirAttachment } from './FhirAttachment'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInteger } from './FhirInteger'
import { FhirString } from './FhirString'
import { FhirSubstanceNucleicAcid_Linkage } from './FhirSubstanceNucleicAcid_Linkage'
import { FhirSubstanceNucleicAcid_Sugar } from './FhirSubstanceNucleicAcid_Sugar'

/** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
export const FhirSubstanceNucleicAcid_Subunit: t.Type<
  FhirSubstanceNucleicAcid_Subunit,
  FhirSubstanceNucleicAcid_SubunitOutput
> = t.recursion('FhirSubstanceNucleicAcid_Subunit', () =>
  t.partial({
    /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
    _length: t.readonly(FhirElement),
    /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
    _sequence: t.readonly(FhirElement),
    /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
    _subunit: t.readonly(FhirElement),
    /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
    extension: t.readonlyArray(FhirExtension),
    /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
    fivePrime: t.readonly(FhirCodeableConcept),
    /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
    id: t.readonly(FhirString),
    /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
    length: t.readonly(FhirInteger),
    /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
    linkage: t.readonlyArray(FhirSubstanceNucleicAcid_Linkage),
    /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
    sequence: t.readonly(FhirString),
    /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
    sequenceAttachment: t.readonly(FhirAttachment),
    /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
    subunit: t.readonly(FhirInteger),
    /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
    sugar: t.readonlyArray(FhirSubstanceNucleicAcid_Sugar),
    /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
    threePrime: t.readonly(FhirCodeableConcept),
  })
)

/** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
export interface FhirSubstanceNucleicAcid_Subunit {
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  _length?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  _sequence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  _subunit?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  fivePrime?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  length?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  linkage?: ReadonlyArray<t.TypeOf<typeof FhirSubstanceNucleicAcid_Linkage>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  sequence?: Readonly<t.TypeOf<typeof FhirString>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  sequenceAttachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  subunit?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  sugar?: ReadonlyArray<t.TypeOf<typeof FhirSubstanceNucleicAcid_Sugar>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  threePrime?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
export interface FhirSubstanceNucleicAcid_SubunitOutput {
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  _length?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  _sequence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  _subunit?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  fivePrime?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  length?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  linkage?: ReadonlyArray<t.OutputOf<typeof FhirSubstanceNucleicAcid_Linkage>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  sequence?: Readonly<t.OutputOf<typeof FhirString>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  sequenceAttachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  subunit?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  sugar?: ReadonlyArray<t.OutputOf<typeof FhirSubstanceNucleicAcid_Sugar>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  threePrime?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
