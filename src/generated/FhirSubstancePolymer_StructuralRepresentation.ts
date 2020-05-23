import * as t from 'io-ts'
import { FhirAttachment } from './FhirAttachment'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Todo. */
export const FhirSubstancePolymer_StructuralRepresentation: t.Type<
  FhirSubstancePolymer_StructuralRepresentation,
  FhirSubstancePolymer_StructuralRepresentationOutput
> = t.recursion('FhirSubstancePolymer_StructuralRepresentation', () =>
  t.partial({
    /** Todo. */
    _representation: t.readonly(FhirElement),
    /** Todo. */
    attachment: t.readonly(FhirAttachment),
    /** Todo. */
    extension: t.readonlyArray(FhirExtension),
    /** Todo. */
    id: t.readonly(FhirString),
    /** Todo. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Todo. */
    representation: t.readonly(FhirString),
    /** Todo. */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** Todo. */
export interface FhirSubstancePolymer_StructuralRepresentation {
  /** Todo. */
  _representation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Todo. */
  attachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** Todo. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  representation?: Readonly<t.TypeOf<typeof FhirString>>
  /** Todo. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Todo. */
export interface FhirSubstancePolymer_StructuralRepresentationOutput {
  /** Todo. */
  _representation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Todo. */
  attachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** Todo. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  representation?: Readonly<t.OutputOf<typeof FhirString>>
  /** Todo. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
