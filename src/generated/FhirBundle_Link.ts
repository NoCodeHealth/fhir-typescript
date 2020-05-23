import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A container for a collection of resources. */
export const FhirBundle_Link: t.Type<FhirBundle_Link, FhirBundle_LinkOutput> = t.recursion('FhirBundle_Link', () =>
  t.partial({
    /** A container for a collection of resources. */
    _relation: t.readonly(FhirElement),
    /** A container for a collection of resources. */
    _url: t.readonly(FhirElement),
    /** A container for a collection of resources. */
    extension: t.readonlyArray(FhirExtension),
    /** A container for a collection of resources. */
    id: t.readonly(FhirString),
    /** A container for a collection of resources. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A container for a collection of resources. */
    relation: t.readonly(FhirString),
    /** A container for a collection of resources. */
    url: t.readonly(FhirUri),
  })
)

/** A container for a collection of resources. */
export interface FhirBundle_Link {
  /** A container for a collection of resources. */
  _relation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A container for a collection of resources. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  relation?: Readonly<t.TypeOf<typeof FhirString>>
  /** A container for a collection of resources. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
}
/** A container for a collection of resources. */
export interface FhirBundle_LinkOutput {
  /** A container for a collection of resources. */
  _relation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A container for a collection of resources. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  relation?: Readonly<t.OutputOf<typeof FhirString>>
  /** A container for a collection of resources. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
}
