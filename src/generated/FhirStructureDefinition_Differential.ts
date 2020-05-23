import * as t from 'io-ts'
import { FhirElementDefinition } from './FhirElementDefinition'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
export const FhirStructureDefinition_Differential: t.Type<
  FhirStructureDefinition_Differential,
  FhirStructureDefinition_DifferentialOutput
> = t.recursion('FhirStructureDefinition_Differential', () =>
  t.intersection([
    t.type({
      /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
      element: t.readonlyArray(FhirElementDefinition),
    }),
    t.partial({
      /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
      extension: t.readonlyArray(FhirExtension),
      /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
      id: t.readonly(FhirString),
      /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
export interface FhirStructureDefinition_Differential {
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  element: ReadonlyArray<t.TypeOf<typeof FhirElementDefinition>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
export interface FhirStructureDefinition_DifferentialOutput {
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  element: ReadonlyArray<t.OutputOf<typeof FhirElementDefinition>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
