import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirSubstanceAmount } from './FhirSubstanceAmount'

/** Todo. */
export const FhirSubstancePolymer_StartingMaterial: t.Type<
  FhirSubstancePolymer_StartingMaterial,
  FhirSubstancePolymer_StartingMaterialOutput
> = t.recursion('FhirSubstancePolymer_StartingMaterial', () =>
  t.partial({
    /** Todo. */
    _isDefining: t.readonly(FhirElement),
    /** Todo. */
    amount: t.readonly(FhirSubstanceAmount),
    /** Todo. */
    extension: t.readonlyArray(FhirExtension),
    /** Todo. */
    id: t.readonly(FhirString),
    /** Todo. */
    isDefining: t.readonly(FhirBoolean),
    /** Todo. */
    material: t.readonly(FhirCodeableConcept),
    /** Todo. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Todo. */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** Todo. */
export interface FhirSubstancePolymer_StartingMaterial {
  /** Todo. */
  _isDefining?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Todo. */
  amount?: Readonly<t.TypeOf<typeof FhirSubstanceAmount>>
  /** Todo. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Todo. */
  isDefining?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Todo. */
  material?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Todo. */
export interface FhirSubstancePolymer_StartingMaterialOutput {
  /** Todo. */
  _isDefining?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Todo. */
  amount?: Readonly<t.OutputOf<typeof FhirSubstanceAmount>>
  /** Todo. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Todo. */
  isDefining?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Todo. */
  material?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
