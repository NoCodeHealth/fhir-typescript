import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A reference to a code defined by a terminology system. */
export const FhirCoding: t.Type<FhirCoding, FhirCodingOutput> = t.recursion('FhirCoding', () =>
  t.partial({
    /** A reference to a code defined by a terminology system. */
    _code: t.readonly(FhirElement),
    /** A reference to a code defined by a terminology system. */
    _display: t.readonly(FhirElement),
    /** A reference to a code defined by a terminology system. */
    _system: t.readonly(FhirElement),
    /** A reference to a code defined by a terminology system. */
    _userSelected: t.readonly(FhirElement),
    /** A reference to a code defined by a terminology system. */
    _version: t.readonly(FhirElement),
    /** A reference to a code defined by a terminology system. */
    code: t.readonly(FhirCode),
    /** A reference to a code defined by a terminology system. */
    display: t.readonly(FhirString),
    /** A reference to a code defined by a terminology system. */
    extension: t.readonlyArray(FhirExtension),
    /** A reference to a code defined by a terminology system. */
    id: t.readonly(FhirString),
    /** A reference to a code defined by a terminology system. */
    system: t.readonly(FhirUri),
    /** A reference to a code defined by a terminology system. */
    userSelected: t.readonly(FhirBoolean),
    /** A reference to a code defined by a terminology system. */
    version: t.readonly(FhirString),
  })
)

/** A reference to a code defined by a terminology system. */
export interface FhirCoding {
  /** A reference to a code defined by a terminology system. */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A reference to a code defined by a terminology system. */
  _display?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A reference to a code defined by a terminology system. */
  _system?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A reference to a code defined by a terminology system. */
  _userSelected?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A reference to a code defined by a terminology system. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A reference to a code defined by a terminology system. */
  code?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A reference to a code defined by a terminology system. */
  display?: Readonly<t.TypeOf<typeof FhirString>>
  /** A reference to a code defined by a terminology system. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A reference to a code defined by a terminology system. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A reference to a code defined by a terminology system. */
  system?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A reference to a code defined by a terminology system. */
  userSelected?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A reference to a code defined by a terminology system. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A reference to a code defined by a terminology system. */
export interface FhirCodingOutput {
  /** A reference to a code defined by a terminology system. */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A reference to a code defined by a terminology system. */
  _display?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A reference to a code defined by a terminology system. */
  _system?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A reference to a code defined by a terminology system. */
  _userSelected?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A reference to a code defined by a terminology system. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A reference to a code defined by a terminology system. */
  code?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A reference to a code defined by a terminology system. */
  display?: Readonly<t.OutputOf<typeof FhirString>>
  /** A reference to a code defined by a terminology system. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A reference to a code defined by a terminology system. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A reference to a code defined by a terminology system. */
  system?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A reference to a code defined by a terminology system. */
  userSelected?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A reference to a code defined by a terminology system. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
