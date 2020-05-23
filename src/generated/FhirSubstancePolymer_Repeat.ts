import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInteger } from './FhirInteger'
import { FhirString } from './FhirString'
import { FhirSubstancePolymer_RepeatUnit } from './FhirSubstancePolymer_RepeatUnit'

/** Todo. */
export const FhirSubstancePolymer_Repeat: t.Type<
  FhirSubstancePolymer_Repeat,
  FhirSubstancePolymer_RepeatOutput
> = t.recursion('FhirSubstancePolymer_Repeat', () =>
  t.partial({
    /** Todo. */
    _averageMolecularFormula: t.readonly(FhirElement),
    /** Todo. */
    _numberOfUnits: t.readonly(FhirElement),
    /** Todo. */
    averageMolecularFormula: t.readonly(FhirString),
    /** Todo. */
    extension: t.readonlyArray(FhirExtension),
    /** Todo. */
    id: t.readonly(FhirString),
    /** Todo. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Todo. */
    numberOfUnits: t.readonly(FhirInteger),
    /** Todo. */
    repeatUnit: t.readonlyArray(FhirSubstancePolymer_RepeatUnit),
    /** Todo. */
    repeatUnitAmountType: t.readonly(FhirCodeableConcept),
  })
)

/** Todo. */
export interface FhirSubstancePolymer_Repeat {
  /** Todo. */
  _averageMolecularFormula?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Todo. */
  _numberOfUnits?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Todo. */
  averageMolecularFormula?: Readonly<t.TypeOf<typeof FhirString>>
  /** Todo. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  numberOfUnits?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** Todo. */
  repeatUnit?: ReadonlyArray<t.TypeOf<typeof FhirSubstancePolymer_RepeatUnit>>
  /** Todo. */
  repeatUnitAmountType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Todo. */
export interface FhirSubstancePolymer_RepeatOutput {
  /** Todo. */
  _averageMolecularFormula?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Todo. */
  _numberOfUnits?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Todo. */
  averageMolecularFormula?: Readonly<t.OutputOf<typeof FhirString>>
  /** Todo. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  numberOfUnits?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** Todo. */
  repeatUnit?: ReadonlyArray<t.OutputOf<typeof FhirSubstancePolymer_RepeatUnit>>
  /** Todo. */
  repeatUnitAmountType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
