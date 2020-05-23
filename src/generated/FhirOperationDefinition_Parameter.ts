import * as t from 'io-ts'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInteger } from './FhirInteger'
import { FhirOperationDefinition_Binding } from './FhirOperationDefinition_Binding'
import { FhirOperationDefinition_ReferencedFrom } from './FhirOperationDefinition_ReferencedFrom'
import { FhirString } from './FhirString'

/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export const FhirOperationDefinition_Parameter: t.Type<
  FhirOperationDefinition_Parameter,
  FhirOperationDefinition_ParameterOutput
> = t.recursion('FhirOperationDefinition_Parameter', () =>
  t.partial({
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    _documentation: t.readonly(FhirElement),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    _max: t.readonly(FhirElement),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    _min: t.readonly(FhirElement),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    _name: t.readonly(FhirElement),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    _searchType: t.readonly(FhirElement),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    _type: t.readonly(FhirElement),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    _use: t.readonly(FhirElement),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    binding: t.readonly(FhirOperationDefinition_Binding),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    documentation: t.readonly(FhirString),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    extension: t.readonlyArray(FhirExtension),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    id: t.readonly(FhirString),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    max: t.readonly(FhirString),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    min: t.readonly(FhirInteger),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    name: t.readonly(FhirCode),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    part: t.readonlyArray(FhirOperationDefinition_Parameter),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    referencedFrom: t.readonlyArray(FhirOperationDefinition_ReferencedFrom),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    searchType: t.readonly(
      t.keyof({
        number: null,
        date: null,
        string: null,
        token: null,
        reference: null,
        composite: null,
        quantity: null,
        uri: null,
        special: null,
      })
    ),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    targetProfile: t.readonlyArray(FhirCanonical),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    type: t.readonly(FhirCode),
    /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
    use: t.readonly(
      t.keyof({
        in: null,
        out: null,
      })
    ),
  })
)

/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export interface FhirOperationDefinition_Parameter {
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _documentation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _max?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _min?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _searchType?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _use?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  binding?: Readonly<t.TypeOf<typeof FhirOperationDefinition_Binding>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  documentation?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  max?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  min?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  name?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  part?: ReadonlyArray<FhirOperationDefinition_Parameter>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  referencedFrom?: ReadonlyArray<t.TypeOf<typeof FhirOperationDefinition_ReferencedFrom>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  searchType?: Readonly<
    'number' | 'date' | 'string' | 'token' | 'reference' | 'composite' | 'quantity' | 'uri' | 'special'
  >
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  targetProfile?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  type?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  use?: Readonly<'in' | 'out'>
}
/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export interface FhirOperationDefinition_ParameterOutput {
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _documentation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _max?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _min?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _searchType?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  _use?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  binding?: Readonly<t.OutputOf<typeof FhirOperationDefinition_Binding>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  documentation?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  max?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  min?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  name?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  part?: ReadonlyArray<FhirOperationDefinition_ParameterOutput>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  referencedFrom?: ReadonlyArray<t.OutputOf<typeof FhirOperationDefinition_ReferencedFrom>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  searchType?: Readonly<
    'number' | 'date' | 'string' | 'token' | 'reference' | 'composite' | 'quantity' | 'uri' | 'special'
  >
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  targetProfile?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  type?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
  use?: Readonly<'in' | 'out'>
}
