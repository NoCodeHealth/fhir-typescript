import * as t from 'io-ts'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A time period defined by a start and end date and optionally time. */
export const FhirPeriod: t.Type<FhirPeriod, FhirPeriodOutput> = t.recursion('FhirPeriod', () =>
  t.partial({
    /** A time period defined by a start and end date and optionally time. */
    _end: t.readonly(FhirElement),
    /** A time period defined by a start and end date and optionally time. */
    _start: t.readonly(FhirElement),
    /** A time period defined by a start and end date and optionally time. */
    end: t.readonly(FhirDateTime),
    /** A time period defined by a start and end date and optionally time. */
    extension: t.readonlyArray(FhirExtension),
    /** A time period defined by a start and end date and optionally time. */
    id: t.readonly(FhirString),
    /** A time period defined by a start and end date and optionally time. */
    start: t.readonly(FhirDateTime),
  })
)

/** A time period defined by a start and end date and optionally time. */
export interface FhirPeriod {
  /** A time period defined by a start and end date and optionally time. */
  _end?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A time period defined by a start and end date and optionally time. */
  _start?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A time period defined by a start and end date and optionally time. */
  end?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A time period defined by a start and end date and optionally time. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A time period defined by a start and end date and optionally time. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A time period defined by a start and end date and optionally time. */
  start?: Readonly<t.TypeOf<typeof FhirDateTime>>
}
/** A time period defined by a start and end date and optionally time. */
export interface FhirPeriodOutput {
  /** A time period defined by a start and end date and optionally time. */
  _end?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A time period defined by a start and end date and optionally time. */
  _start?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A time period defined by a start and end date and optionally time. */
  end?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A time period defined by a start and end date and optionally time. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A time period defined by a start and end date and optionally time. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A time period defined by a start and end date and optionally time. */
  start?: Readonly<t.OutputOf<typeof FhirDateTime>>
}
