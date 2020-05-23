import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirSubstanceAmount } from './FhirSubstanceAmount'

/** Todo. */
export const FhirSubstancePolymer_DegreeOfPolymerisation: t.Type<
  FhirSubstancePolymer_DegreeOfPolymerisation,
  FhirSubstancePolymer_DegreeOfPolymerisationOutput
> = t.recursion('FhirSubstancePolymer_DegreeOfPolymerisation', () =>
  t.partial({
    /** Todo. */
    amount: t.readonly(FhirSubstanceAmount),
    /** Todo. */
    degree: t.readonly(FhirCodeableConcept),
    /** Todo. */
    extension: t.readonlyArray(FhirExtension),
    /** Todo. */
    id: t.readonly(FhirString),
    /** Todo. */
    modifierExtension: t.readonlyArray(FhirExtension),
  })
)

/** Todo. */
export interface FhirSubstancePolymer_DegreeOfPolymerisation {
  /** Todo. */
  amount?: Readonly<t.TypeOf<typeof FhirSubstanceAmount>>
  /** Todo. */
  degree?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Todo. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** Todo. */
export interface FhirSubstancePolymer_DegreeOfPolymerisationOutput {
  /** Todo. */
  amount?: Readonly<t.OutputOf<typeof FhirSubstanceAmount>>
  /** Todo. */
  degree?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Todo. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
