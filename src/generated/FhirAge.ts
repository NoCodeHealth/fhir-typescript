import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A duration of time during which an organism (or a process) has existed. */
export const FhirAge: t.Type<FhirAge, FhirAgeOutput> = t.recursion('FhirAge', () =>
  t.partial({
    /** A duration of time during which an organism (or a process) has existed. */
    _code: t.readonly(FhirElement),
    /** A duration of time during which an organism (or a process) has existed. */
    _comparator: t.readonly(FhirElement),
    /** A duration of time during which an organism (or a process) has existed. */
    _system: t.readonly(FhirElement),
    /** A duration of time during which an organism (or a process) has existed. */
    _unit: t.readonly(FhirElement),
    /** A duration of time during which an organism (or a process) has existed. */
    _value: t.readonly(FhirElement),
    /** A duration of time during which an organism (or a process) has existed. */
    code: t.readonly(FhirCode),
    /** A duration of time during which an organism (or a process) has existed. */
    comparator: t.readonly(
      t.keyof({
        '<': null,
        '<=': null,
        '>=': null,
        '>': null,
      })
    ),
    /** A duration of time during which an organism (or a process) has existed. */
    extension: t.readonlyArray(FhirExtension),
    /** A duration of time during which an organism (or a process) has existed. */
    id: t.readonly(FhirString),
    /** A duration of time during which an organism (or a process) has existed. */
    system: t.readonly(FhirUri),
    /** A duration of time during which an organism (or a process) has existed. */
    unit: t.readonly(FhirString),
    /** A duration of time during which an organism (or a process) has existed. */
    value: t.readonly(FhirDecimal),
  })
)

/** A duration of time during which an organism (or a process) has existed. */
export interface FhirAge {
  /** A duration of time during which an organism (or a process) has existed. */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A duration of time during which an organism (or a process) has existed. */
  _comparator?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A duration of time during which an organism (or a process) has existed. */
  _system?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A duration of time during which an organism (or a process) has existed. */
  _unit?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A duration of time during which an organism (or a process) has existed. */
  _value?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A duration of time during which an organism (or a process) has existed. */
  code?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A duration of time during which an organism (or a process) has existed. */
  comparator?: Readonly<'<' | '<=' | '>=' | '>'>
  /** A duration of time during which an organism (or a process) has existed. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A duration of time during which an organism (or a process) has existed. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A duration of time during which an organism (or a process) has existed. */
  system?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A duration of time during which an organism (or a process) has existed. */
  unit?: Readonly<t.TypeOf<typeof FhirString>>
  /** A duration of time during which an organism (or a process) has existed. */
  value?: Readonly<t.TypeOf<typeof FhirDecimal>>
}
/** A duration of time during which an organism (or a process) has existed. */
export interface FhirAgeOutput {
  /** A duration of time during which an organism (or a process) has existed. */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A duration of time during which an organism (or a process) has existed. */
  _comparator?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A duration of time during which an organism (or a process) has existed. */
  _system?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A duration of time during which an organism (or a process) has existed. */
  _unit?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A duration of time during which an organism (or a process) has existed. */
  _value?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A duration of time during which an organism (or a process) has existed. */
  code?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A duration of time during which an organism (or a process) has existed. */
  comparator?: Readonly<'<' | '<=' | '>=' | '>'>
  /** A duration of time during which an organism (or a process) has existed. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A duration of time during which an organism (or a process) has existed. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A duration of time during which an organism (or a process) has existed. */
  system?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A duration of time during which an organism (or a process) has existed. */
  unit?: Readonly<t.OutputOf<typeof FhirString>>
  /** A duration of time during which an organism (or a process) has existed. */
  value?: Readonly<t.OutputOf<typeof FhirDecimal>>
}
