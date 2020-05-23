import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
export const FhirStructureDefinition_Context: t.Type<
  FhirStructureDefinition_Context,
  FhirStructureDefinition_ContextOutput
> = t.recursion('FhirStructureDefinition_Context', () =>
  t.partial({
    /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
    _expression: t.readonly(FhirElement),
    /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
    _type: t.readonly(FhirElement),
    /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
    expression: t.readonly(FhirString),
    /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
    extension: t.readonlyArray(FhirExtension),
    /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
    id: t.readonly(FhirString),
    /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
    type: t.readonly(
      t.keyof({
        fhirpath: null,
        element: null,
        extension: null,
      })
    ),
  })
)

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
export interface FhirStructureDefinition_Context {
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _expression?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  expression?: Readonly<t.TypeOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  type?: Readonly<'fhirpath' | 'element' | 'extension'>
}
/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
export interface FhirStructureDefinition_ContextOutput {
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _expression?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  expression?: Readonly<t.OutputOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  type?: Readonly<'fhirpath' | 'element' | 'extension'>
}
