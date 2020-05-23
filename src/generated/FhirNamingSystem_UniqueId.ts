import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirString } from './FhirString'

/** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
export const FhirNamingSystem_UniqueId: t.Type<
  FhirNamingSystem_UniqueId,
  FhirNamingSystem_UniqueIdOutput
> = t.recursion('FhirNamingSystem_UniqueId', () =>
  t.partial({
    /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
    _comment: t.readonly(FhirElement),
    /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
    _preferred: t.readonly(FhirElement),
    /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
    _type: t.readonly(FhirElement),
    /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
    _value: t.readonly(FhirElement),
    /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
    comment: t.readonly(FhirString),
    /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
    extension: t.readonlyArray(FhirExtension),
    /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
    id: t.readonly(FhirString),
    /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
    period: t.readonly(FhirPeriod),
    /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
    preferred: t.readonly(FhirBoolean),
    /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
    type: t.readonly(
      t.keyof({
        oid: null,
        uuid: null,
        uri: null,
        other: null,
      })
    ),
    /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
    value: t.readonly(FhirString),
  })
)

/** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
export interface FhirNamingSystem_UniqueId {
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _comment?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _preferred?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _value?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  comment?: Readonly<t.TypeOf<typeof FhirString>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  preferred?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  type?: Readonly<'oid' | 'uuid' | 'uri' | 'other'>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  value?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
export interface FhirNamingSystem_UniqueIdOutput {
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _comment?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _preferred?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  _value?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  comment?: Readonly<t.OutputOf<typeof FhirString>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  preferred?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  type?: Readonly<'oid' | 'uuid' | 'uri' | 'other'>
  /** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
  value?: Readonly<t.OutputOf<typeof FhirString>>
}
