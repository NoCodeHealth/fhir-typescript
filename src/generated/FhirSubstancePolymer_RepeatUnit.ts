import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirSubstanceAmount } from './FhirSubstanceAmount'
import { FhirSubstancePolymer_DegreeOfPolymerisation } from './FhirSubstancePolymer_DegreeOfPolymerisation'
import { FhirSubstancePolymer_StructuralRepresentation } from './FhirSubstancePolymer_StructuralRepresentation'

/** Todo. */
export const FhirSubstancePolymer_RepeatUnit: t.Type<
  FhirSubstancePolymer_RepeatUnit,
  FhirSubstancePolymer_RepeatUnitOutput
> = t.recursion('FhirSubstancePolymer_RepeatUnit', () =>
  t.partial({
    /** Todo. */
    _repeatUnit: t.readonly(FhirElement),
    /** Todo. */
    amount: t.readonly(FhirSubstanceAmount),
    /** Todo. */
    degreeOfPolymerisation: t.readonlyArray(FhirSubstancePolymer_DegreeOfPolymerisation),
    /** Todo. */
    extension: t.readonlyArray(FhirExtension),
    /** Todo. */
    id: t.readonly(FhirString),
    /** Todo. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Todo. */
    orientationOfPolymerisation: t.readonly(FhirCodeableConcept),
    /** Todo. */
    repeatUnit: t.readonly(FhirString),
    /** Todo. */
    structuralRepresentation: t.readonlyArray(FhirSubstancePolymer_StructuralRepresentation),
  })
)

/** Todo. */
export interface FhirSubstancePolymer_RepeatUnit {
  /** Todo. */
  _repeatUnit?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Todo. */
  amount?: Readonly<t.TypeOf<typeof FhirSubstanceAmount>>
  /** Todo. */
  degreeOfPolymerisation?: ReadonlyArray<t.TypeOf<typeof FhirSubstancePolymer_DegreeOfPolymerisation>>
  /** Todo. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  orientationOfPolymerisation?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Todo. */
  repeatUnit?: Readonly<t.TypeOf<typeof FhirString>>
  /** Todo. */
  structuralRepresentation?: ReadonlyArray<t.TypeOf<typeof FhirSubstancePolymer_StructuralRepresentation>>
}
/** Todo. */
export interface FhirSubstancePolymer_RepeatUnitOutput {
  /** Todo. */
  _repeatUnit?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Todo. */
  amount?: Readonly<t.OutputOf<typeof FhirSubstanceAmount>>
  /** Todo. */
  degreeOfPolymerisation?: ReadonlyArray<t.OutputOf<typeof FhirSubstancePolymer_DegreeOfPolymerisation>>
  /** Todo. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  orientationOfPolymerisation?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Todo. */
  repeatUnit?: Readonly<t.OutputOf<typeof FhirString>>
  /** Todo. */
  structuralRepresentation?: ReadonlyArray<t.OutputOf<typeof FhirSubstancePolymer_StructuralRepresentation>>
}
