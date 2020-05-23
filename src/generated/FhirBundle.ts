import * as t from 'io-ts'
import { FhirBundle_Entry } from './FhirBundle_Entry'
import { FhirBundle_Link } from './FhirBundle_Link'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirInstant } from './FhirInstant'
import { FhirMeta } from './FhirMeta'
import { FhirSignature } from './FhirSignature'
import { FhirUnsignedInt } from './FhirUnsignedInt'
import { FhirUri } from './FhirUri'

/** A container for a collection of resources. */
export const FhirBundle: t.Type<FhirBundle, FhirBundleOutput> = t.recursion('FhirBundle', () =>
  t.intersection([
    t.type({
      /** A container for a collection of resources. */
      resourceType: t.readonly(t.literal('Bundle')),
    }),
    t.partial({
      /** A container for a collection of resources. */
      _implicitRules: t.readonly(FhirElement),
      /** A container for a collection of resources. */
      _language: t.readonly(FhirElement),
      /** A container for a collection of resources. */
      _timestamp: t.readonly(FhirElement),
      /** A container for a collection of resources. */
      _total: t.readonly(FhirElement),
      /** A container for a collection of resources. */
      _type: t.readonly(FhirElement),
      /** A container for a collection of resources. */
      entry: t.readonlyArray(FhirBundle_Entry),
      /** A container for a collection of resources. */
      id: t.readonly(FhirId),
      /** A container for a collection of resources. */
      identifier: t.readonly(FhirIdentifier),
      /** A container for a collection of resources. */
      implicitRules: t.readonly(FhirUri),
      /** A container for a collection of resources. */
      language: t.readonly(FhirCode),
      /** A container for a collection of resources. */
      link: t.readonlyArray(FhirBundle_Link),
      /** A container for a collection of resources. */
      meta: t.readonly(FhirMeta),
      /** A container for a collection of resources. */
      signature: t.readonly(FhirSignature),
      /** A container for a collection of resources. */
      timestamp: t.readonly(FhirInstant),
      /** A container for a collection of resources. */
      total: t.readonly(FhirUnsignedInt),
      /** A container for a collection of resources. */
      type: t.readonly(
        t.keyof({
          document: null,
          message: null,
          transaction: null,
          'transaction-response': null,
          batch: null,
          'batch-response': null,
          history: null,
          searchset: null,
          collection: null,
        })
      ),
    }),
  ])
)

/** A container for a collection of resources. */
export interface FhirBundle {
  /** A container for a collection of resources. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _timestamp?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _total?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  entry?: ReadonlyArray<t.TypeOf<typeof FhirBundle_Entry>>
  /** A container for a collection of resources. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A container for a collection of resources. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A container for a collection of resources. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A container for a collection of resources. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A container for a collection of resources. */
  link?: ReadonlyArray<t.TypeOf<typeof FhirBundle_Link>>
  /** A container for a collection of resources. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A container for a collection of resources. */
  resourceType: Readonly<'Bundle'>
  /** A container for a collection of resources. */
  signature?: Readonly<t.TypeOf<typeof FhirSignature>>
  /** A container for a collection of resources. */
  timestamp?: Readonly<t.TypeOf<typeof FhirInstant>>
  /** A container for a collection of resources. */
  total?: Readonly<t.TypeOf<typeof FhirUnsignedInt>>
  /** A container for a collection of resources. */
  type?: Readonly<
    | 'document'
    | 'message'
    | 'transaction'
    | 'transaction-response'
    | 'batch'
    | 'batch-response'
    | 'history'
    | 'searchset'
    | 'collection'
  >
}
/** A container for a collection of resources. */
export interface FhirBundleOutput {
  /** A container for a collection of resources. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _timestamp?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _total?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  entry?: ReadonlyArray<t.OutputOf<typeof FhirBundle_Entry>>
  /** A container for a collection of resources. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A container for a collection of resources. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A container for a collection of resources. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A container for a collection of resources. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A container for a collection of resources. */
  link?: ReadonlyArray<t.OutputOf<typeof FhirBundle_Link>>
  /** A container for a collection of resources. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A container for a collection of resources. */
  resourceType: Readonly<'Bundle'>
  /** A container for a collection of resources. */
  signature?: Readonly<t.OutputOf<typeof FhirSignature>>
  /** A container for a collection of resources. */
  timestamp?: Readonly<t.OutputOf<typeof FhirInstant>>
  /** A container for a collection of resources. */
  total?: Readonly<t.OutputOf<typeof FhirUnsignedInt>>
  /** A container for a collection of resources. */
  type?: Readonly<
    | 'document'
    | 'message'
    | 'transaction'
    | 'transaction-response'
    | 'batch'
    | 'batch-response'
    | 'history'
    | 'searchset'
    | 'collection'
  >
}
