import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A length - a value with a unit that is a physical distance. */
export const FhirDistance: t.Type<FhirDistance, FhirDistanceOutput> = t.recursion('FhirDistance', () =>
  t.partial({
    /** A length - a value with a unit that is a physical distance. */
    _code: t.readonly(FhirElement),
    /** A length - a value with a unit that is a physical distance. */
    _comparator: t.readonly(FhirElement),
    /** A length - a value with a unit that is a physical distance. */
    _system: t.readonly(FhirElement),
    /** A length - a value with a unit that is a physical distance. */
    _unit: t.readonly(FhirElement),
    /** A length - a value with a unit that is a physical distance. */
    _value: t.readonly(FhirElement),
    /** A length - a value with a unit that is a physical distance. */
    code: t.readonly(FhirCode),
    /** A length - a value with a unit that is a physical distance. */
    comparator: t.readonly(
      t.keyof({
        '<': null,
        '<=': null,
        '>=': null,
        '>': null,
      })
    ),
    /** A length - a value with a unit that is a physical distance. */
    extension: t.readonlyArray(FhirExtension),
    /** A length - a value with a unit that is a physical distance. */
    id: t.readonly(FhirString),
    /** A length - a value with a unit that is a physical distance. */
    system: t.readonly(FhirUri),
    /** A length - a value with a unit that is a physical distance. */
    unit: t.readonly(FhirString),
    /** A length - a value with a unit that is a physical distance. */
    value: t.readonly(FhirDecimal),
  })
)

/** A length - a value with a unit that is a physical distance. */
export interface FhirDistance {
  /** A length - a value with a unit that is a physical distance. */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A length - a value with a unit that is a physical distance. */
  _comparator?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A length - a value with a unit that is a physical distance. */
  _system?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A length - a value with a unit that is a physical distance. */
  _unit?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A length - a value with a unit that is a physical distance. */
  _value?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A length - a value with a unit that is a physical distance. */
  code?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A length - a value with a unit that is a physical distance. */
  comparator?: Readonly<'<' | '<=' | '>=' | '>'>
  /** A length - a value with a unit that is a physical distance. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A length - a value with a unit that is a physical distance. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A length - a value with a unit that is a physical distance. */
  system?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A length - a value with a unit that is a physical distance. */
  unit?: Readonly<t.TypeOf<typeof FhirString>>
  /** A length - a value with a unit that is a physical distance. */
  value?: Readonly<t.TypeOf<typeof FhirDecimal>>
}
/** A length - a value with a unit that is a physical distance. */
export interface FhirDistanceOutput {
  /** A length - a value with a unit that is a physical distance. */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A length - a value with a unit that is a physical distance. */
  _comparator?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A length - a value with a unit that is a physical distance. */
  _system?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A length - a value with a unit that is a physical distance. */
  _unit?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A length - a value with a unit that is a physical distance. */
  _value?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A length - a value with a unit that is a physical distance. */
  code?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A length - a value with a unit that is a physical distance. */
  comparator?: Readonly<'<' | '<=' | '>=' | '>'>
  /** A length - a value with a unit that is a physical distance. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A length - a value with a unit that is a physical distance. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A length - a value with a unit that is a physical distance. */
  system?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A length - a value with a unit that is a physical distance. */
  unit?: Readonly<t.OutputOf<typeof FhirString>>
  /** A length - a value with a unit that is a physical distance. */
  value?: Readonly<t.OutputOf<typeof FhirDecimal>>
}
