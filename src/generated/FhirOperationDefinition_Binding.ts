import * as t from 'io-ts'
import { FhirCanonical } from './FhirCanonical'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export const FhirOperationDefinition_Binding: t.Type<
  FhirOperationDefinition_Binding,
  FhirOperationDefinition_BindingOutput
> = t.recursion('FhirOperationDefinition_Binding', () =>
  t.intersection([
    t.type({
      /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
      valueSet: t.readonly(FhirCanonical),
    }),
    t.partial({
      /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
      _strength: t.readonly(FhirElement),
      /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
      extension: t.readonlyArray(FhirExtension),
      /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
      id: t.readonly(FhirString),
      /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
      strength: t.readonly(
        t.keyof({
          required: null,
          extensible: null,
          preferred: null,
          example: null,
        })
      ),
    }),
  ])
)

/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export interface FhirOperationDefinition_Binding {
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _strength?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  strength?: Readonly<'required' | 'extensible' | 'preferred' | 'example'>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  valueSet: Readonly<t.TypeOf<typeof FhirCanonical>>
}
/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export interface FhirOperationDefinition_BindingOutput {
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _strength?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  strength?: Readonly<'required' | 'extensible' | 'preferred' | 'example'>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  valueSet: Readonly<t.OutputOf<typeof FhirCanonical>>
}
