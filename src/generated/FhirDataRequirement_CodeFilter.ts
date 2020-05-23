import * as t from 'io-ts'
import { FhirCanonical } from './FhirCanonical'
import { FhirCoding } from './FhirCoding'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
export const FhirDataRequirement_CodeFilter: t.Type<
  FhirDataRequirement_CodeFilter,
  FhirDataRequirement_CodeFilterOutput
> = t.recursion('FhirDataRequirement_CodeFilter', () =>
  t.partial({
    /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
    _path: t.readonly(FhirElement),
    /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
    _searchParam: t.readonly(FhirElement),
    /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
    code: t.readonlyArray(FhirCoding),
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
    valueSet: t.readonly(FhirCanonical),
  })
)

/** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
export interface FhirDataRequirement_CodeFilter {
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _path?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _searchParam?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  code?: ReadonlyArray<t.TypeOf<typeof FhirCoding>>
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
  valueSet?: Readonly<t.TypeOf<typeof FhirCanonical>>
}
/** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
export interface FhirDataRequirement_CodeFilterOutput {
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _path?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _searchParam?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  code?: ReadonlyArray<t.OutputOf<typeof FhirCoding>>
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
  valueSet?: Readonly<t.OutputOf<typeof FhirCanonical>>
}
