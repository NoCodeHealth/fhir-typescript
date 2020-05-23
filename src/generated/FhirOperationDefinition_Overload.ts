import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export const FhirOperationDefinition_Overload: t.Type<
  FhirOperationDefinition_Overload,
  FhirOperationDefinition_OverloadOutput
> = t.recursion('FhirOperationDefinition_Overload', () =>
  t.partial({
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    _comment: t.readonly(FhirElement),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    _parameterName: t.readonlyArray(FhirElement),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    comment: t.readonly(FhirString),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    extension: t.readonlyArray(FhirExtension),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    id: t.readonly(FhirString),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    parameterName: t.readonlyArray(FhirString),
  })
)

/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export interface FhirOperationDefinition_Overload {
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _comment?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _parameterName?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  comment?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  parameterName?: ReadonlyArray<t.TypeOf<typeof FhirString>>
}
/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export interface FhirOperationDefinition_OverloadOutput {
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _comment?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _parameterName?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  comment?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  parameterName?: ReadonlyArray<t.OutputOf<typeof FhirString>>
}
