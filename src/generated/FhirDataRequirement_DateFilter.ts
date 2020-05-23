import * as t from 'io-ts'
import { FhirDuration } from './FhirDuration'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirString } from './FhirString'

/** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
export const FhirDataRequirement_DateFilter: t.Type<
  FhirDataRequirement_DateFilter,
  FhirDataRequirement_DateFilterOutput
> = t.recursion('FhirDataRequirement_DateFilter', () =>
  t.partial({
    /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
    _path: t.readonly(FhirElement),
    /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
    _searchParam: t.readonly(FhirElement),
    /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
    _valueDateTime: t.readonly(FhirElement),
    /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
    extension: t.readonlyArray(FhirExtension),
    /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
    id: t.readonly(FhirString),
    /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
    path: t.readonly(FhirString),
    /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
    searchParam: t.readonly(FhirString),
    /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
    valueDateTime: t.readonly(t.string),
    /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
    valueDuration: t.readonly(FhirDuration),
    /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
    valuePeriod: t.readonly(FhirPeriod),
  })
)

/** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
export interface FhirDataRequirement_DateFilter {
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _path?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _searchParam?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _valueDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  path?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  searchParam?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  valueDateTime?: Readonly<string>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  valueDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  valuePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
}
/** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
export interface FhirDataRequirement_DateFilterOutput {
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _path?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _searchParam?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _valueDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  path?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  searchParam?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  valueDateTime?: Readonly<string>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  valueDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  valuePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
}
