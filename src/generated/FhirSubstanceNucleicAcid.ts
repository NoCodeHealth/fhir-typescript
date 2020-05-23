import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirInteger } from './FhirInteger'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirSubstanceNucleicAcid_Subunit } from './FhirSubstanceNucleicAcid_Subunit'
import { FhirUri } from './FhirUri'

/** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
export const FhirSubstanceNucleicAcid: t.Type<FhirSubstanceNucleicAcid, FhirSubstanceNucleicAcidOutput> = t.recursion(
  'FhirSubstanceNucleicAcid',
  () =>
    t.intersection([
      t.type({
        /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
        resourceType: t.readonly(t.literal('SubstanceNucleicAcid')),
      }),
      t.partial({
        /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
        _areaOfHybridisation: t.readonly(FhirElement),
        /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
        _implicitRules: t.readonly(FhirElement),
        /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
        _language: t.readonly(FhirElement),
        /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
        _numberOfSubunits: t.readonly(FhirElement),
        /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
        areaOfHybridisation: t.readonly(FhirString),
        /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
        contained: t.readonlyArray(FhirResourceList),
        /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
        extension: t.readonlyArray(FhirExtension),
        /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
        id: t.readonly(FhirId),
        /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
        implicitRules: t.readonly(FhirUri),
        /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
        language: t.readonly(FhirCode),
        /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
        meta: t.readonly(FhirMeta),
        /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
        numberOfSubunits: t.readonly(FhirInteger),
        /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
        oligoNucleotideType: t.readonly(FhirCodeableConcept),
        /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
        sequenceType: t.readonly(FhirCodeableConcept),
        /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
        subunit: t.readonlyArray(FhirSubstanceNucleicAcid_Subunit),
        /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
export interface FhirSubstanceNucleicAcid {
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  _areaOfHybridisation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  _numberOfSubunits?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  areaOfHybridisation?: Readonly<t.TypeOf<typeof FhirString>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  numberOfSubunits?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  oligoNucleotideType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  resourceType: Readonly<'SubstanceNucleicAcid'>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  sequenceType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  subunit?: ReadonlyArray<t.TypeOf<typeof FhirSubstanceNucleicAcid_Subunit>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
export interface FhirSubstanceNucleicAcidOutput {
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  _areaOfHybridisation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  _numberOfSubunits?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  areaOfHybridisation?: Readonly<t.OutputOf<typeof FhirString>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  numberOfSubunits?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  oligoNucleotideType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  resourceType: Readonly<'SubstanceNucleicAcid'>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  sequenceType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  subunit?: ReadonlyArray<t.OutputOf<typeof FhirSubstanceNucleicAcid_Subunit>>
  /** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
