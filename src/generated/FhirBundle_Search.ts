import * as t from 'io-ts'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A container for a collection of resources. */
export const FhirBundle_Search: t.Type<FhirBundle_Search, FhirBundle_SearchOutput> = t.recursion(
  'FhirBundle_Search',
  () =>
    t.partial({
      /** A container for a collection of resources. */
      _mode: t.readonly(FhirElement),
      /** A container for a collection of resources. */
      _score: t.readonly(FhirElement),
      /** A container for a collection of resources. */
      extension: t.readonlyArray(FhirExtension),
      /** A container for a collection of resources. */
      id: t.readonly(FhirString),
      /** A container for a collection of resources. */
      mode: t.readonly(
        t.keyof({
          match: null,
          include: null,
          outcome: null,
        })
      ),
      /** A container for a collection of resources. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A container for a collection of resources. */
      score: t.readonly(FhirDecimal),
    })
)

/** A container for a collection of resources. */
export interface FhirBundle_Search {
  /** A container for a collection of resources. */
  _mode?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _score?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A container for a collection of resources. */
  mode?: Readonly<'match' | 'include' | 'outcome'>
  /** A container for a collection of resources. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  score?: Readonly<t.TypeOf<typeof FhirDecimal>>
}
/** A container for a collection of resources. */
export interface FhirBundle_SearchOutput {
  /** A container for a collection of resources. */
  _mode?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _score?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A container for a collection of resources. */
  mode?: Readonly<'match' | 'include' | 'outcome'>
  /** A container for a collection of resources. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  score?: Readonly<t.OutputOf<typeof FhirDecimal>>
}
