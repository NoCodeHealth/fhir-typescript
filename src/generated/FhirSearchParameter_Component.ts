import * as t from 'io-ts'
import { FhirCanonical } from './FhirCanonical'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A search parameter that defines a named search item that can be used to search/filter on a resource. */
export const FhirSearchParameter_Component: t.Type<
  FhirSearchParameter_Component,
  FhirSearchParameter_ComponentOutput
> = t.recursion('FhirSearchParameter_Component', () =>
  t.intersection([
    t.type({
      /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
      definition: t.readonly(FhirCanonical),
    }),
    t.partial({
      /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
      _expression: t.readonly(FhirElement),
      /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
      expression: t.readonly(FhirString),
      /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
      extension: t.readonlyArray(FhirExtension),
      /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
      id: t.readonly(FhirString),
      /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** A search parameter that defines a named search item that can be used to search/filter on a resource. */
export interface FhirSearchParameter_Component {
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _expression?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  definition: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  expression?: Readonly<t.TypeOf<typeof FhirString>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** A search parameter that defines a named search item that can be used to search/filter on a resource. */
export interface FhirSearchParameter_ComponentOutput {
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _expression?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  definition: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  expression?: Readonly<t.OutputOf<typeof FhirString>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
