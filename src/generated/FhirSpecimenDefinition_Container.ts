import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirSpecimenDefinition_Additive } from './FhirSpecimenDefinition_Additive'
import { FhirString } from './FhirString'

/** A kind of specimen with associated set of requirements. */
export const FhirSpecimenDefinition_Container: t.Type<
  FhirSpecimenDefinition_Container,
  FhirSpecimenDefinition_ContainerOutput
> = t.recursion('FhirSpecimenDefinition_Container', () =>
  t.partial({
    /** A kind of specimen with associated set of requirements. */
    _description: t.readonly(FhirElement),
    /** A kind of specimen with associated set of requirements. */
    _minimumVolumeString: t.readonly(FhirElement),
    /** A kind of specimen with associated set of requirements. */
    _preparation: t.readonly(FhirElement),
    /** A kind of specimen with associated set of requirements. */
    additive: t.readonlyArray(FhirSpecimenDefinition_Additive),
    /** A kind of specimen with associated set of requirements. */
    cap: t.readonly(FhirCodeableConcept),
    /** A kind of specimen with associated set of requirements. */
    capacity: t.readonly(FhirQuantity),
    /** A kind of specimen with associated set of requirements. */
    description: t.readonly(FhirString),
    /** A kind of specimen with associated set of requirements. */
    extension: t.readonlyArray(FhirExtension),
    /** A kind of specimen with associated set of requirements. */
    id: t.readonly(FhirString),
    /** A kind of specimen with associated set of requirements. */
    material: t.readonly(FhirCodeableConcept),
    /** A kind of specimen with associated set of requirements. */
    minimumVolumeQuantity: t.readonly(FhirQuantity),
    /** A kind of specimen with associated set of requirements. */
    minimumVolumeString: t.readonly(t.string),
    /** A kind of specimen with associated set of requirements. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A kind of specimen with associated set of requirements. */
    preparation: t.readonly(FhirString),
    /** A kind of specimen with associated set of requirements. */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** A kind of specimen with associated set of requirements. */
export interface FhirSpecimenDefinition_Container {
  /** A kind of specimen with associated set of requirements. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  _minimumVolumeString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  _preparation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  additive?: ReadonlyArray<t.TypeOf<typeof FhirSpecimenDefinition_Additive>>
  /** A kind of specimen with associated set of requirements. */
  cap?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A kind of specimen with associated set of requirements. */
  capacity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A kind of specimen with associated set of requirements. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A kind of specimen with associated set of requirements. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A kind of specimen with associated set of requirements. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A kind of specimen with associated set of requirements. */
  material?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A kind of specimen with associated set of requirements. */
  minimumVolumeQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A kind of specimen with associated set of requirements. */
  minimumVolumeString?: Readonly<string>
  /** A kind of specimen with associated set of requirements. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A kind of specimen with associated set of requirements. */
  preparation?: Readonly<t.TypeOf<typeof FhirString>>
  /** A kind of specimen with associated set of requirements. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** A kind of specimen with associated set of requirements. */
export interface FhirSpecimenDefinition_ContainerOutput {
  /** A kind of specimen with associated set of requirements. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  _minimumVolumeString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  _preparation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  additive?: ReadonlyArray<t.OutputOf<typeof FhirSpecimenDefinition_Additive>>
  /** A kind of specimen with associated set of requirements. */
  cap?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A kind of specimen with associated set of requirements. */
  capacity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A kind of specimen with associated set of requirements. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A kind of specimen with associated set of requirements. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A kind of specimen with associated set of requirements. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A kind of specimen with associated set of requirements. */
  material?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A kind of specimen with associated set of requirements. */
  minimumVolumeQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A kind of specimen with associated set of requirements. */
  minimumVolumeString?: Readonly<string>
  /** A kind of specimen with associated set of requirements. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A kind of specimen with associated set of requirements. */
  preparation?: Readonly<t.OutputOf<typeof FhirString>>
  /** A kind of specimen with associated set of requirements. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
