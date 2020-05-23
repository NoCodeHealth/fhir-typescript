import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInteger } from './FhirInteger'
import { FhirMolecularSequence_Inner } from './FhirMolecularSequence_Inner'
import { FhirMolecularSequence_Outer } from './FhirMolecularSequence_Outer'
import { FhirString } from './FhirString'

/** Raw data describing a biological sequence. */
export const FhirMolecularSequence_StructureVariant: t.Type<
  FhirMolecularSequence_StructureVariant,
  FhirMolecularSequence_StructureVariantOutput
> = t.recursion('FhirMolecularSequence_StructureVariant', () =>
  t.partial({
    /** Raw data describing a biological sequence. */
    _exact: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _length: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    exact: t.readonly(FhirBoolean),
    /** Raw data describing a biological sequence. */
    extension: t.readonlyArray(FhirExtension),
    /** Raw data describing a biological sequence. */
    id: t.readonly(FhirString),
    /** Raw data describing a biological sequence. */
    inner: t.readonly(FhirMolecularSequence_Inner),
    /** Raw data describing a biological sequence. */
    length: t.readonly(FhirInteger),
    /** Raw data describing a biological sequence. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Raw data describing a biological sequence. */
    outer: t.readonly(FhirMolecularSequence_Outer),
    /** Raw data describing a biological sequence. */
    variantType: t.readonly(FhirCodeableConcept),
  })
)

/** Raw data describing a biological sequence. */
export interface FhirMolecularSequence_StructureVariant {
  /** Raw data describing a biological sequence. */
  _exact?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _length?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  exact?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Raw data describing a biological sequence. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  inner?: Readonly<t.TypeOf<typeof FhirMolecularSequence_Inner>>
  /** Raw data describing a biological sequence. */
  length?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  outer?: Readonly<t.TypeOf<typeof FhirMolecularSequence_Outer>>
  /** Raw data describing a biological sequence. */
  variantType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Raw data describing a biological sequence. */
export interface FhirMolecularSequence_StructureVariantOutput {
  /** Raw data describing a biological sequence. */
  _exact?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _length?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  exact?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Raw data describing a biological sequence. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  inner?: Readonly<t.OutputOf<typeof FhirMolecularSequence_Inner>>
  /** Raw data describing a biological sequence. */
  length?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** Raw data describing a biological sequence. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  outer?: Readonly<t.OutputOf<typeof FhirMolecularSequence_Outer>>
  /** Raw data describing a biological sequence. */
  variantType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
