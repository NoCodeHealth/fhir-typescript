import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirSubstancePolymer_StartingMaterial } from './FhirSubstancePolymer_StartingMaterial'

/** Todo. */
export const FhirSubstancePolymer_MonomerSet: t.Type<
  FhirSubstancePolymer_MonomerSet,
  FhirSubstancePolymer_MonomerSetOutput
> = t.recursion('FhirSubstancePolymer_MonomerSet', () =>
  t.partial({
    /** Todo. */
    extension: t.readonlyArray(FhirExtension),
    /** Todo. */
    id: t.readonly(FhirString),
    /** Todo. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Todo. */
    ratioType: t.readonly(FhirCodeableConcept),
    /** Todo. */
    startingMaterial: t.readonlyArray(FhirSubstancePolymer_StartingMaterial),
  })
)

/** Todo. */
export interface FhirSubstancePolymer_MonomerSet {
  /** Todo. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  ratioType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Todo. */
  startingMaterial?: ReadonlyArray<t.TypeOf<typeof FhirSubstancePolymer_StartingMaterial>>
}
/** Todo. */
export interface FhirSubstancePolymer_MonomerSetOutput {
  /** Todo. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  ratioType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Todo. */
  startingMaterial?: ReadonlyArray<t.OutputOf<typeof FhirSubstancePolymer_StartingMaterial>>
}
