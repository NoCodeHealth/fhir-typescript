import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export const FhirOperationDefinition_ReferencedFrom: t.Type<
  FhirOperationDefinition_ReferencedFrom,
  FhirOperationDefinition_ReferencedFromOutput
> = t.recursion('FhirOperationDefinition_ReferencedFrom', () =>
  t.partial({
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    _source: t.readonly(FhirElement),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    _sourceId: t.readonly(FhirElement),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    extension: t.readonlyArray(FhirExtension),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    id: t.readonly(FhirString),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    source: t.readonly(FhirString),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    sourceId: t.readonly(FhirString),
  })
)

/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export interface FhirOperationDefinition_ReferencedFrom {
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _source?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _sourceId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  source?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  sourceId?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export interface FhirOperationDefinition_ReferencedFromOutput {
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _source?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _sourceId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  source?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  sourceId?: Readonly<t.OutputOf<typeof FhirString>>
}
