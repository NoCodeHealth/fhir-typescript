import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
export const FhirStructureDefinition_Mapping: t.Type<
  FhirStructureDefinition_Mapping,
  FhirStructureDefinition_MappingOutput
> = t.recursion('FhirStructureDefinition_Mapping', () =>
  t.partial({
    /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
    _comment: t.readonly(FhirElement),
    /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
    _identity: t.readonly(FhirElement),
    /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
    _name: t.readonly(FhirElement),
    /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
    _uri: t.readonly(FhirElement),
    /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
    comment: t.readonly(FhirString),
    /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
    extension: t.readonlyArray(FhirExtension),
    /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
    id: t.readonly(FhirString),
    /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
    identity: t.readonly(FhirId),
    /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
    name: t.readonly(FhirString),
    /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
    uri: t.readonly(FhirUri),
  })
)

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
export interface FhirStructureDefinition_Mapping {
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _comment?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _identity?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _uri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  comment?: Readonly<t.TypeOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  identity?: Readonly<t.TypeOf<typeof FhirId>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  uri?: Readonly<t.TypeOf<typeof FhirUri>>
}
/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
export interface FhirStructureDefinition_MappingOutput {
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _comment?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _identity?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _uri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  comment?: Readonly<t.OutputOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  identity?: Readonly<t.OutputOf<typeof FhirId>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  uri?: Readonly<t.OutputOf<typeof FhirUri>>
}
