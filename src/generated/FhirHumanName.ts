import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirString } from './FhirString'

/** A human's name with the ability to identify parts and usage. */
export const FhirHumanName: t.Type<FhirHumanName, FhirHumanNameOutput> = t.recursion('FhirHumanName', () =>
  t.partial({
    /** A human's name with the ability to identify parts and usage. */
    _family: t.readonly(FhirElement),
    /** A human's name with the ability to identify parts and usage. */
    _given: t.readonlyArray(FhirElement),
    /** A human's name with the ability to identify parts and usage. */
    _prefix: t.readonlyArray(FhirElement),
    /** A human's name with the ability to identify parts and usage. */
    _suffix: t.readonlyArray(FhirElement),
    /** A human's name with the ability to identify parts and usage. */
    _text: t.readonly(FhirElement),
    /** A human's name with the ability to identify parts and usage. */
    _use: t.readonly(FhirElement),
    /** A human's name with the ability to identify parts and usage. */
    extension: t.readonlyArray(FhirExtension),
    /** A human's name with the ability to identify parts and usage. */
    family: t.readonly(FhirString),
    /** A human's name with the ability to identify parts and usage. */
    given: t.readonlyArray(FhirString),
    /** A human's name with the ability to identify parts and usage. */
    id: t.readonly(FhirString),
    /** A human's name with the ability to identify parts and usage. */
    period: t.readonly(FhirPeriod),
    /** A human's name with the ability to identify parts and usage. */
    prefix: t.readonlyArray(FhirString),
    /** A human's name with the ability to identify parts and usage. */
    suffix: t.readonlyArray(FhirString),
    /** A human's name with the ability to identify parts and usage. */
    text: t.readonly(FhirString),
    /** A human's name with the ability to identify parts and usage. */
    use: t.readonly(
      t.keyof({
        usual: null,
        official: null,
        temp: null,
        nickname: null,
        anonymous: null,
        old: null,
        maiden: null,
      })
    ),
  })
)

/** A human's name with the ability to identify parts and usage. */
export interface FhirHumanName {
  /** A human's name with the ability to identify parts and usage. */
  _family?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A human's name with the ability to identify parts and usage. */
  _given?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A human's name with the ability to identify parts and usage. */
  _prefix?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A human's name with the ability to identify parts and usage. */
  _suffix?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A human's name with the ability to identify parts and usage. */
  _text?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A human's name with the ability to identify parts and usage. */
  _use?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A human's name with the ability to identify parts and usage. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A human's name with the ability to identify parts and usage. */
  family?: Readonly<t.TypeOf<typeof FhirString>>
  /** A human's name with the ability to identify parts and usage. */
  given?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** A human's name with the ability to identify parts and usage. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A human's name with the ability to identify parts and usage. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A human's name with the ability to identify parts and usage. */
  prefix?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** A human's name with the ability to identify parts and usage. */
  suffix?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** A human's name with the ability to identify parts and usage. */
  text?: Readonly<t.TypeOf<typeof FhirString>>
  /** A human's name with the ability to identify parts and usage. */
  use?: Readonly<'usual' | 'official' | 'temp' | 'nickname' | 'anonymous' | 'old' | 'maiden'>
}
/** A human's name with the ability to identify parts and usage. */
export interface FhirHumanNameOutput {
  /** A human's name with the ability to identify parts and usage. */
  _family?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A human's name with the ability to identify parts and usage. */
  _given?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A human's name with the ability to identify parts and usage. */
  _prefix?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A human's name with the ability to identify parts and usage. */
  _suffix?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A human's name with the ability to identify parts and usage. */
  _text?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A human's name with the ability to identify parts and usage. */
  _use?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A human's name with the ability to identify parts and usage. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A human's name with the ability to identify parts and usage. */
  family?: Readonly<t.OutputOf<typeof FhirString>>
  /** A human's name with the ability to identify parts and usage. */
  given?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** A human's name with the ability to identify parts and usage. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A human's name with the ability to identify parts and usage. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A human's name with the ability to identify parts and usage. */
  prefix?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** A human's name with the ability to identify parts and usage. */
  suffix?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** A human's name with the ability to identify parts and usage. */
  text?: Readonly<t.OutputOf<typeof FhirString>>
  /** A human's name with the ability to identify parts and usage. */
  use?: Readonly<'usual' | 'official' | 'temp' | 'nickname' | 'anonymous' | 'old' | 'maiden'>
}
