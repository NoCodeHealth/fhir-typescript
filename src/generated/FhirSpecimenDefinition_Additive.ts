import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A kind of specimen with associated set of requirements. */
export const FhirSpecimenDefinition_Additive: t.Type<
  FhirSpecimenDefinition_Additive,
  FhirSpecimenDefinition_AdditiveOutput
> = t.recursion('FhirSpecimenDefinition_Additive', () =>
  t.partial({
    /** A kind of specimen with associated set of requirements. */
    additiveCodeableConcept: t.readonly(FhirCodeableConcept),
    /** A kind of specimen with associated set of requirements. */
    additiveReference: t.readonly(FhirReference),
    /** A kind of specimen with associated set of requirements. */
    extension: t.readonlyArray(FhirExtension),
    /** A kind of specimen with associated set of requirements. */
    id: t.readonly(FhirString),
    /** A kind of specimen with associated set of requirements. */
    modifierExtension: t.readonlyArray(FhirExtension),
  })
)

/** A kind of specimen with associated set of requirements. */
export interface FhirSpecimenDefinition_Additive {
  /** A kind of specimen with associated set of requirements. */
  additiveCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A kind of specimen with associated set of requirements. */
  additiveReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A kind of specimen with associated set of requirements. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A kind of specimen with associated set of requirements. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A kind of specimen with associated set of requirements. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** A kind of specimen with associated set of requirements. */
export interface FhirSpecimenDefinition_AdditiveOutput {
  /** A kind of specimen with associated set of requirements. */
  additiveCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A kind of specimen with associated set of requirements. */
  additiveReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A kind of specimen with associated set of requirements. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A kind of specimen with associated set of requirements. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A kind of specimen with associated set of requirements. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
