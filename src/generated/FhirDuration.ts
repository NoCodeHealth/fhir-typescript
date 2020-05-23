import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A length of time. */
export const FhirDuration: t.Type<FhirDuration, FhirDurationOutput> = t.recursion('FhirDuration', () =>
  t.partial({
    /** A length of time. */
    _code: t.readonly(FhirElement),
    /** A length of time. */
    _comparator: t.readonly(FhirElement),
    /** A length of time. */
    _system: t.readonly(FhirElement),
    /** A length of time. */
    _unit: t.readonly(FhirElement),
    /** A length of time. */
    _value: t.readonly(FhirElement),
    /** A length of time. */
    code: t.readonly(FhirCode),
    /** A length of time. */
    comparator: t.readonly(
      t.keyof({
        '<': null,
        '<=': null,
        '>=': null,
        '>': null,
      })
    ),
    /** A length of time. */
    extension: t.readonlyArray(FhirExtension),
    /** A length of time. */
    id: t.readonly(FhirString),
    /** A length of time. */
    system: t.readonly(FhirUri),
    /** A length of time. */
    unit: t.readonly(FhirString),
    /** A length of time. */
    value: t.readonly(FhirDecimal),
  })
)

/** A length of time. */
export interface FhirDuration {
  /** A length of time. */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A length of time. */
  _comparator?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A length of time. */
  _system?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A length of time. */
  _unit?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A length of time. */
  _value?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A length of time. */
  code?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A length of time. */
  comparator?: Readonly<'<' | '<=' | '>=' | '>'>
  /** A length of time. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A length of time. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A length of time. */
  system?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A length of time. */
  unit?: Readonly<t.TypeOf<typeof FhirString>>
  /** A length of time. */
  value?: Readonly<t.TypeOf<typeof FhirDecimal>>
}
/** A length of time. */
export interface FhirDurationOutput {
  /** A length of time. */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A length of time. */
  _comparator?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A length of time. */
  _system?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A length of time. */
  _unit?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A length of time. */
  _value?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A length of time. */
  code?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A length of time. */
  comparator?: Readonly<'<' | '<=' | '>=' | '>'>
  /** A length of time. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A length of time. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A length of time. */
  system?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A length of time. */
  unit?: Readonly<t.OutputOf<typeof FhirString>>
  /** A length of time. */
  value?: Readonly<t.OutputOf<typeof FhirDecimal>>
}
