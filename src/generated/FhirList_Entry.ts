import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A list is a curated collection of resources. */
export const FhirList_Entry: t.Type<FhirList_Entry, FhirList_EntryOutput> = t.recursion('FhirList_Entry', () =>
  t.intersection([
    t.type({
      /** A list is a curated collection of resources. */
      item: t.readonly(FhirReference),
    }),
    t.partial({
      /** A list is a curated collection of resources. */
      _date: t.readonly(FhirElement),
      /** A list is a curated collection of resources. */
      _deleted: t.readonly(FhirElement),
      /** A list is a curated collection of resources. */
      date: t.readonly(FhirDateTime),
      /** A list is a curated collection of resources. */
      deleted: t.readonly(FhirBoolean),
      /** A list is a curated collection of resources. */
      extension: t.readonlyArray(FhirExtension),
      /** A list is a curated collection of resources. */
      flag: t.readonly(FhirCodeableConcept),
      /** A list is a curated collection of resources. */
      id: t.readonly(FhirString),
      /** A list is a curated collection of resources. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** A list is a curated collection of resources. */
export interface FhirList_Entry {
  /** A list is a curated collection of resources. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A list is a curated collection of resources. */
  _deleted?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A list is a curated collection of resources. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A list is a curated collection of resources. */
  deleted?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A list is a curated collection of resources. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A list is a curated collection of resources. */
  flag?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A list is a curated collection of resources. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A list is a curated collection of resources. */
  item: Readonly<t.TypeOf<typeof FhirReference>>
  /** A list is a curated collection of resources. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** A list is a curated collection of resources. */
export interface FhirList_EntryOutput {
  /** A list is a curated collection of resources. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A list is a curated collection of resources. */
  _deleted?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A list is a curated collection of resources. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A list is a curated collection of resources. */
  deleted?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A list is a curated collection of resources. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A list is a curated collection of resources. */
  flag?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A list is a curated collection of resources. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A list is a curated collection of resources. */
  item: Readonly<t.OutputOf<typeof FhirReference>>
  /** A list is a curated collection of resources. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
