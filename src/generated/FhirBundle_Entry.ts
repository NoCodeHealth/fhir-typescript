import * as t from 'io-ts'
import { FhirBundle_Link } from './FhirBundle_Link'
import { FhirBundle_Request } from './FhirBundle_Request'
import { FhirBundle_Response } from './FhirBundle_Response'
import { FhirBundle_Search } from './FhirBundle_Search'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A container for a collection of resources. */
export const FhirBundle_Entry: t.Type<FhirBundle_Entry, FhirBundle_EntryOutput> = t.recursion('FhirBundle_Entry', () =>
  t.partial({
    /** A container for a collection of resources. */
    _fullUrl: t.readonly(FhirElement),
    /** A container for a collection of resources. */
    extension: t.readonlyArray(FhirExtension),
    /** A container for a collection of resources. */
    fullUrl: t.readonly(FhirUri),
    /** A container for a collection of resources. */
    id: t.readonly(FhirString),
    /** A container for a collection of resources. */
    link: t.readonlyArray(FhirBundle_Link),
    /** A container for a collection of resources. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A container for a collection of resources. */
    request: t.readonly(FhirBundle_Request),
    /** A container for a collection of resources. */
    resource: t.readonly(FhirResourceList),
    /** A container for a collection of resources. */
    response: t.readonly(FhirBundle_Response),
    /** A container for a collection of resources. */
    search: t.readonly(FhirBundle_Search),
  })
)

/** A container for a collection of resources. */
export interface FhirBundle_Entry {
  /** A container for a collection of resources. */
  _fullUrl?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  fullUrl?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A container for a collection of resources. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A container for a collection of resources. */
  link?: ReadonlyArray<t.TypeOf<typeof FhirBundle_Link>>
  /** A container for a collection of resources. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  request?: Readonly<t.TypeOf<typeof FhirBundle_Request>>
  /** A container for a collection of resources. */
  resource?: Readonly<t.TypeOf<typeof FhirResourceList>>
  /** A container for a collection of resources. */
  response?: Readonly<t.TypeOf<typeof FhirBundle_Response>>
  /** A container for a collection of resources. */
  search?: Readonly<t.TypeOf<typeof FhirBundle_Search>>
}
/** A container for a collection of resources. */
export interface FhirBundle_EntryOutput {
  /** A container for a collection of resources. */
  _fullUrl?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  fullUrl?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A container for a collection of resources. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A container for a collection of resources. */
  link?: ReadonlyArray<t.OutputOf<typeof FhirBundle_Link>>
  /** A container for a collection of resources. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  request?: Readonly<t.OutputOf<typeof FhirBundle_Request>>
  /** A container for a collection of resources. */
  resource?: Readonly<t.OutputOf<typeof FhirResourceList>>
  /** A container for a collection of resources. */
  response?: Readonly<t.OutputOf<typeof FhirBundle_Response>>
  /** A container for a collection of resources. */
  search?: Readonly<t.OutputOf<typeof FhirBundle_Search>>
}
