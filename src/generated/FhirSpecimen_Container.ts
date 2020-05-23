import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A sample to be used for analysis. */
export const FhirSpecimen_Container: t.Type<FhirSpecimen_Container, FhirSpecimen_ContainerOutput> = t.recursion(
  'FhirSpecimen_Container',
  () =>
    t.partial({
      /** A sample to be used for analysis. */
      _description: t.readonly(FhirElement),
      /** A sample to be used for analysis. */
      additiveCodeableConcept: t.readonly(FhirCodeableConcept),
      /** A sample to be used for analysis. */
      additiveReference: t.readonly(FhirReference),
      /** A sample to be used for analysis. */
      capacity: t.readonly(FhirQuantity),
      /** A sample to be used for analysis. */
      description: t.readonly(FhirString),
      /** A sample to be used for analysis. */
      extension: t.readonlyArray(FhirExtension),
      /** A sample to be used for analysis. */
      id: t.readonly(FhirString),
      /** A sample to be used for analysis. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A sample to be used for analysis. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A sample to be used for analysis. */
      specimenQuantity: t.readonly(FhirQuantity),
      /** A sample to be used for analysis. */
      type: t.readonly(FhirCodeableConcept),
    })
)

/** A sample to be used for analysis. */
export interface FhirSpecimen_Container {
  /** A sample to be used for analysis. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A sample to be used for analysis. */
  additiveCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A sample to be used for analysis. */
  additiveReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A sample to be used for analysis. */
  capacity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A sample to be used for analysis. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A sample to be used for analysis. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A sample to be used for analysis. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A sample to be used for analysis. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A sample to be used for analysis. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A sample to be used for analysis. */
  specimenQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A sample to be used for analysis. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** A sample to be used for analysis. */
export interface FhirSpecimen_ContainerOutput {
  /** A sample to be used for analysis. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A sample to be used for analysis. */
  additiveCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A sample to be used for analysis. */
  additiveReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A sample to be used for analysis. */
  capacity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A sample to be used for analysis. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A sample to be used for analysis. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A sample to be used for analysis. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A sample to be used for analysis. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A sample to be used for analysis. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A sample to be used for analysis. */
  specimenQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A sample to be used for analysis. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
