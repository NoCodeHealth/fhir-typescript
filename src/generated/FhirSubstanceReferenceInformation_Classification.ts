import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Todo. */
export const FhirSubstanceReferenceInformation_Classification: t.Type<
  FhirSubstanceReferenceInformation_Classification,
  FhirSubstanceReferenceInformation_ClassificationOutput
> = t.recursion('FhirSubstanceReferenceInformation_Classification', () =>
  t.partial({
    /** Todo. */
    classification: t.readonly(FhirCodeableConcept),
    /** Todo. */
    domain: t.readonly(FhirCodeableConcept),
    /** Todo. */
    extension: t.readonlyArray(FhirExtension),
    /** Todo. */
    id: t.readonly(FhirString),
    /** Todo. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Todo. */
    source: t.readonlyArray(FhirReference),
    /** Todo. */
    subtype: t.readonlyArray(FhirCodeableConcept),
  })
)

/** Todo. */
export interface FhirSubstanceReferenceInformation_Classification {
  /** Todo. */
  classification?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Todo. */
  domain?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Todo. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  source?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Todo. */
  subtype?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Todo. */
export interface FhirSubstanceReferenceInformation_ClassificationOutput {
  /** Todo. */
  classification?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Todo. */
  domain?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Todo. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  source?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Todo. */
  subtype?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
}
