import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Todo. */
export const FhirSubstanceReferenceInformation_GeneElement: t.Type<
  FhirSubstanceReferenceInformation_GeneElement,
  FhirSubstanceReferenceInformation_GeneElementOutput
> = t.recursion('FhirSubstanceReferenceInformation_GeneElement', () =>
  t.partial({
    /** Todo. */
    element: t.readonly(FhirIdentifier),
    /** Todo. */
    extension: t.readonlyArray(FhirExtension),
    /** Todo. */
    id: t.readonly(FhirString),
    /** Todo. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Todo. */
    source: t.readonlyArray(FhirReference),
    /** Todo. */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** Todo. */
export interface FhirSubstanceReferenceInformation_GeneElement {
  /** Todo. */
  element?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** Todo. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  source?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Todo. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Todo. */
export interface FhirSubstanceReferenceInformation_GeneElementOutput {
  /** Todo. */
  element?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** Todo. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  source?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Todo. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
