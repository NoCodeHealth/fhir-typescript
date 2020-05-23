import * as t from 'io-ts'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Base definition for all elements in a resource. */
export const FhirElement: t.Type<FhirElement, FhirElementOutput> = t.recursion('FhirElement', () =>
  t.partial({
    /** Base definition for all elements in a resource. */
    extension: t.readonlyArray(FhirExtension),
    /** Base definition for all elements in a resource. */
    id: t.readonly(FhirString),
  })
)

/** Base definition for all elements in a resource. */
export interface FhirElement {
  /** Base definition for all elements in a resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Base definition for all elements in a resource. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
}
/** Base definition for all elements in a resource. */
export interface FhirElementOutput {
  /** Base definition for all elements in a resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Base definition for all elements in a resource. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
}
