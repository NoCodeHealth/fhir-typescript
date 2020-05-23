import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirInteger } from './FhirInteger'
import { FhirMeta } from './FhirMeta'
import { FhirMolecularSequence_Quality } from './FhirMolecularSequence_Quality'
import { FhirMolecularSequence_ReferenceSeq } from './FhirMolecularSequence_ReferenceSeq'
import { FhirMolecularSequence_Repository } from './FhirMolecularSequence_Repository'
import { FhirMolecularSequence_StructureVariant } from './FhirMolecularSequence_StructureVariant'
import { FhirMolecularSequence_Variant } from './FhirMolecularSequence_Variant'
import { FhirNarrative } from './FhirNarrative'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Raw data describing a biological sequence. */
export const FhirMolecularSequence: t.Type<FhirMolecularSequence, FhirMolecularSequenceOutput> = t.recursion(
  'FhirMolecularSequence',
  () =>
    t.intersection([
      t.type({
        /** Raw data describing a biological sequence. */
        resourceType: t.readonly(t.literal('MolecularSequence')),
      }),
      t.partial({
        /** Raw data describing a biological sequence. */
        _coordinateSystem: t.readonly(FhirElement),
        /** Raw data describing a biological sequence. */
        _implicitRules: t.readonly(FhirElement),
        /** Raw data describing a biological sequence. */
        _language: t.readonly(FhirElement),
        /** Raw data describing a biological sequence. */
        _observedSeq: t.readonly(FhirElement),
        /** Raw data describing a biological sequence. */
        _readCoverage: t.readonly(FhirElement),
        /** Raw data describing a biological sequence. */
        _type: t.readonly(FhirElement),
        /** Raw data describing a biological sequence. */
        contained: t.readonlyArray(FhirResourceList),
        /** Raw data describing a biological sequence. */
        coordinateSystem: t.readonly(FhirInteger),
        /** Raw data describing a biological sequence. */
        device: t.readonly(FhirReference),
        /** Raw data describing a biological sequence. */
        extension: t.readonlyArray(FhirExtension),
        /** Raw data describing a biological sequence. */
        id: t.readonly(FhirId),
        /** Raw data describing a biological sequence. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** Raw data describing a biological sequence. */
        implicitRules: t.readonly(FhirUri),
        /** Raw data describing a biological sequence. */
        language: t.readonly(FhirCode),
        /** Raw data describing a biological sequence. */
        meta: t.readonly(FhirMeta),
        /** Raw data describing a biological sequence. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Raw data describing a biological sequence. */
        observedSeq: t.readonly(FhirString),
        /** Raw data describing a biological sequence. */
        patient: t.readonly(FhirReference),
        /** Raw data describing a biological sequence. */
        performer: t.readonly(FhirReference),
        /** Raw data describing a biological sequence. */
        pointer: t.readonlyArray(FhirReference),
        /** Raw data describing a biological sequence. */
        quality: t.readonlyArray(FhirMolecularSequence_Quality),
        /** Raw data describing a biological sequence. */
        quantity: t.readonly(FhirQuantity),
        /** Raw data describing a biological sequence. */
        readCoverage: t.readonly(FhirInteger),
        /** Raw data describing a biological sequence. */
        referenceSeq: t.readonly(FhirMolecularSequence_ReferenceSeq),
        /** Raw data describing a biological sequence. */
        repository: t.readonlyArray(FhirMolecularSequence_Repository),
        /** Raw data describing a biological sequence. */
        specimen: t.readonly(FhirReference),
        /** Raw data describing a biological sequence. */
        structureVariant: t.readonlyArray(FhirMolecularSequence_StructureVariant),
        /** Raw data describing a biological sequence. */
        text: t.readonly(FhirNarrative),
        /** Raw data describing a biological sequence. */
        type: t.readonly(
          t.keyof({
            aa: null,
            dna: null,
            rna: null,
          })
        ),
        /** Raw data describing a biological sequence. */
        variant: t.readonlyArray(FhirMolecularSequence_Variant),
      }),
    ])
)

/** Raw data describing a biological sequence. */
export interface FhirMolecularSequence {
  /** Raw data describing a biological sequence. */
  _coordinateSystem?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _observedSeq?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _readCoverage?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Raw data describing a biological sequence. */
  coordinateSystem?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  device?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Raw data describing a biological sequence. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Raw data describing a biological sequence. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Raw data describing a biological sequence. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Raw data describing a biological sequence. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Raw data describing a biological sequence. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Raw data describing a biological sequence. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  observedSeq?: Readonly<t.TypeOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  patient?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Raw data describing a biological sequence. */
  performer?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Raw data describing a biological sequence. */
  pointer?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Raw data describing a biological sequence. */
  quality?: ReadonlyArray<t.TypeOf<typeof FhirMolecularSequence_Quality>>
  /** Raw data describing a biological sequence. */
  quantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Raw data describing a biological sequence. */
  readCoverage?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  referenceSeq?: Readonly<t.TypeOf<typeof FhirMolecularSequence_ReferenceSeq>>
  /** Raw data describing a biological sequence. */
  repository?: ReadonlyArray<t.TypeOf<typeof FhirMolecularSequence_Repository>>
  /** Raw data describing a biological sequence. */
  resourceType: Readonly<'MolecularSequence'>
  /** Raw data describing a biological sequence. */
  specimen?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Raw data describing a biological sequence. */
  structureVariant?: ReadonlyArray<t.TypeOf<typeof FhirMolecularSequence_StructureVariant>>
  /** Raw data describing a biological sequence. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Raw data describing a biological sequence. */
  type?: Readonly<'aa' | 'dna' | 'rna'>
  /** Raw data describing a biological sequence. */
  variant?: ReadonlyArray<t.TypeOf<typeof FhirMolecularSequence_Variant>>
}
/** Raw data describing a biological sequence. */
export interface FhirMolecularSequenceOutput {
  /** Raw data describing a biological sequence. */
  _coordinateSystem?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _observedSeq?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _readCoverage?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Raw data describing a biological sequence. */
  coordinateSystem?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  device?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Raw data describing a biological sequence. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Raw data describing a biological sequence. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Raw data describing a biological sequence. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Raw data describing a biological sequence. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Raw data describing a biological sequence. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Raw data describing a biological sequence. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  observedSeq?: Readonly<t.OutputOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  patient?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Raw data describing a biological sequence. */
  performer?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Raw data describing a biological sequence. */
  pointer?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Raw data describing a biological sequence. */
  quality?: ReadonlyArray<t.OutputOf<typeof FhirMolecularSequence_Quality>>
  /** Raw data describing a biological sequence. */
  quantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Raw data describing a biological sequence. */
  readCoverage?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  referenceSeq?: Readonly<t.OutputOf<typeof FhirMolecularSequence_ReferenceSeq>>
  /** Raw data describing a biological sequence. */
  repository?: ReadonlyArray<t.OutputOf<typeof FhirMolecularSequence_Repository>>
  /** Raw data describing a biological sequence. */
  resourceType: Readonly<'MolecularSequence'>
  /** Raw data describing a biological sequence. */
  specimen?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Raw data describing a biological sequence. */
  structureVariant?: ReadonlyArray<t.OutputOf<typeof FhirMolecularSequence_StructureVariant>>
  /** Raw data describing a biological sequence. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Raw data describing a biological sequence. */
  type?: Readonly<'aa' | 'dna' | 'rna'>
  /** Raw data describing a biological sequence. */
  variant?: ReadonlyArray<t.OutputOf<typeof FhirMolecularSequence_Variant>>
}
