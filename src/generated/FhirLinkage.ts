import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirLinkage_Item } from './FhirLinkage_Item'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
export const FhirLinkage: t.Type<FhirLinkage, FhirLinkageOutput> = t.recursion('FhirLinkage', () =>
  t.intersection([
    t.type({
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      item: t.readonlyArray(FhirLinkage_Item),
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      resourceType: t.readonly(t.literal('Linkage')),
    }),
    t.partial({
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      _active: t.readonly(FhirElement),
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      _implicitRules: t.readonly(FhirElement),
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      _language: t.readonly(FhirElement),
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      active: t.readonly(FhirBoolean),
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      author: t.readonly(FhirReference),
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      contained: t.readonlyArray(FhirResourceList),
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      extension: t.readonlyArray(FhirExtension),
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      id: t.readonly(FhirId),
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      implicitRules: t.readonly(FhirUri),
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      language: t.readonly(FhirCode),
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      meta: t.readonly(FhirMeta),
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
export interface FhirLinkage {
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  _active?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  active?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  author?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  item: ReadonlyArray<t.TypeOf<typeof FhirLinkage_Item>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  resourceType: Readonly<'Linkage'>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
export interface FhirLinkageOutput {
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  _active?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  active?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  author?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  item: ReadonlyArray<t.OutputOf<typeof FhirLinkage_Item>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  resourceType: Readonly<'Linkage'>
  /** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
