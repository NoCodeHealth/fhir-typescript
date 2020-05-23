import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Todo. */
export const FhirSubstanceReferenceInformation_Gene: t.Type<
  FhirSubstanceReferenceInformation_Gene,
  FhirSubstanceReferenceInformation_GeneOutput
> = t.recursion('FhirSubstanceReferenceInformation_Gene', () =>
  t.partial({
    /** Todo. */
    extension: t.readonlyArray(FhirExtension),
    /** Todo. */
    gene: t.readonly(FhirCodeableConcept),
    /** Todo. */
    geneSequenceOrigin: t.readonly(FhirCodeableConcept),
    /** Todo. */
    id: t.readonly(FhirString),
    /** Todo. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Todo. */
    source: t.readonlyArray(FhirReference),
  })
)

/** Todo. */
export interface FhirSubstanceReferenceInformation_Gene {
  /** Todo. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  gene?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Todo. */
  geneSequenceOrigin?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Todo. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  source?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
}
/** Todo. */
export interface FhirSubstanceReferenceInformation_GeneOutput {
  /** Todo. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  gene?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Todo. */
  geneSequenceOrigin?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Todo. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  source?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
}
