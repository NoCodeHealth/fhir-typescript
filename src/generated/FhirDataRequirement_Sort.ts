import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
export const FhirDataRequirement_Sort: t.Type<FhirDataRequirement_Sort, FhirDataRequirement_SortOutput> = t.recursion(
  'FhirDataRequirement_Sort',
  () =>
    t.partial({
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      _direction: t.readonly(FhirElement),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      _path: t.readonly(FhirElement),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      direction: t.readonly(
        t.keyof({
          ascending: null,
          descending: null,
        })
      ),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      extension: t.readonlyArray(FhirExtension),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      id: t.readonly(FhirString),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      path: t.readonly(FhirString),
    })
)

/** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
export interface FhirDataRequirement_Sort {
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _direction?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _path?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  direction?: Readonly<'ascending' | 'descending'>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  path?: Readonly<t.TypeOf<typeof FhirString>>
}
/** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
export interface FhirDataRequirement_SortOutput {
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _direction?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _path?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  direction?: Readonly<'ascending' | 'descending'>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  path?: Readonly<t.OutputOf<typeof FhirString>>
}
