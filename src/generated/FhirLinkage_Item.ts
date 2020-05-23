import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
export const FhirLinkage_Item: t.Type<FhirLinkage_Item, FhirLinkage_ItemOutput> = t.recursion('FhirLinkage_Item', () =>
  t.intersection([
    t.type({
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      resource: t.readonly(FhirReference),
    }),
    t.partial({
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      _type: t.readonly(FhirElement),
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      extension: t.readonlyArray(FhirExtension),
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      id: t.readonly(FhirString),
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      type: t.readonly(
        t.keyof({
          source: null,
          alternate: null,
          historical: null,
        })
      ),
    }),
  ])
)

/** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
export interface FhirLinkage_Item {
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  resource: Readonly<t.TypeOf<typeof FhirReference>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  type?: Readonly<'source' | 'alternate' | 'historical'>
}
/** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
export interface FhirLinkage_ItemOutput {
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  resource: Readonly<t.OutputOf<typeof FhirReference>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  type?: Readonly<'source' | 'alternate' | 'historical'>
}
