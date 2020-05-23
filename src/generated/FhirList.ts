import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirList_Entry } from './FhirList_Entry'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A list is a curated collection of resources. */
export const FhirList: t.Type<FhirList, FhirListOutput> = t.recursion('FhirList', () =>
  t.intersection([
    t.type({
      /** A list is a curated collection of resources. */
      resourceType: t.readonly(t.literal('List')),
    }),
    t.partial({
      /** A list is a curated collection of resources. */
      _date: t.readonly(FhirElement),
      /** A list is a curated collection of resources. */
      _implicitRules: t.readonly(FhirElement),
      /** A list is a curated collection of resources. */
      _language: t.readonly(FhirElement),
      /** A list is a curated collection of resources. */
      _mode: t.readonly(FhirElement),
      /** A list is a curated collection of resources. */
      _status: t.readonly(FhirElement),
      /** A list is a curated collection of resources. */
      _title: t.readonly(FhirElement),
      /** A list is a curated collection of resources. */
      code: t.readonly(FhirCodeableConcept),
      /** A list is a curated collection of resources. */
      contained: t.readonlyArray(FhirResourceList),
      /** A list is a curated collection of resources. */
      date: t.readonly(FhirDateTime),
      /** A list is a curated collection of resources. */
      emptyReason: t.readonly(FhirCodeableConcept),
      /** A list is a curated collection of resources. */
      encounter: t.readonly(FhirReference),
      /** A list is a curated collection of resources. */
      entry: t.readonlyArray(FhirList_Entry),
      /** A list is a curated collection of resources. */
      extension: t.readonlyArray(FhirExtension),
      /** A list is a curated collection of resources. */
      id: t.readonly(FhirId),
      /** A list is a curated collection of resources. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A list is a curated collection of resources. */
      implicitRules: t.readonly(FhirUri),
      /** A list is a curated collection of resources. */
      language: t.readonly(FhirCode),
      /** A list is a curated collection of resources. */
      meta: t.readonly(FhirMeta),
      /** A list is a curated collection of resources. */
      mode: t.readonly(
        t.keyof({
          working: null,
          snapshot: null,
          changes: null,
        })
      ),
      /** A list is a curated collection of resources. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A list is a curated collection of resources. */
      note: t.readonlyArray(FhirAnnotation),
      /** A list is a curated collection of resources. */
      orderedBy: t.readonly(FhirCodeableConcept),
      /** A list is a curated collection of resources. */
      source: t.readonly(FhirReference),
      /** A list is a curated collection of resources. */
      status: t.readonly(
        t.keyof({
          current: null,
          retired: null,
          'entered-in-error': null,
        })
      ),
      /** A list is a curated collection of resources. */
      subject: t.readonly(FhirReference),
      /** A list is a curated collection of resources. */
      text: t.readonly(FhirNarrative),
      /** A list is a curated collection of resources. */
      title: t.readonly(FhirString),
    }),
  ])
)

/** A list is a curated collection of resources. */
export interface FhirList {
  /** A list is a curated collection of resources. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A list is a curated collection of resources. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A list is a curated collection of resources. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A list is a curated collection of resources. */
  _mode?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A list is a curated collection of resources. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A list is a curated collection of resources. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A list is a curated collection of resources. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A list is a curated collection of resources. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A list is a curated collection of resources. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A list is a curated collection of resources. */
  emptyReason?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A list is a curated collection of resources. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A list is a curated collection of resources. */
  entry?: ReadonlyArray<t.TypeOf<typeof FhirList_Entry>>
  /** A list is a curated collection of resources. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A list is a curated collection of resources. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A list is a curated collection of resources. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A list is a curated collection of resources. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A list is a curated collection of resources. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A list is a curated collection of resources. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A list is a curated collection of resources. */
  mode?: Readonly<'working' | 'snapshot' | 'changes'>
  /** A list is a curated collection of resources. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A list is a curated collection of resources. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** A list is a curated collection of resources. */
  orderedBy?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A list is a curated collection of resources. */
  resourceType: Readonly<'List'>
  /** A list is a curated collection of resources. */
  source?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A list is a curated collection of resources. */
  status?: Readonly<'current' | 'retired' | 'entered-in-error'>
  /** A list is a curated collection of resources. */
  subject?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A list is a curated collection of resources. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A list is a curated collection of resources. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A list is a curated collection of resources. */
export interface FhirListOutput {
  /** A list is a curated collection of resources. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A list is a curated collection of resources. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A list is a curated collection of resources. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A list is a curated collection of resources. */
  _mode?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A list is a curated collection of resources. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A list is a curated collection of resources. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A list is a curated collection of resources. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A list is a curated collection of resources. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A list is a curated collection of resources. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A list is a curated collection of resources. */
  emptyReason?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A list is a curated collection of resources. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A list is a curated collection of resources. */
  entry?: ReadonlyArray<t.OutputOf<typeof FhirList_Entry>>
  /** A list is a curated collection of resources. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A list is a curated collection of resources. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A list is a curated collection of resources. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A list is a curated collection of resources. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A list is a curated collection of resources. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A list is a curated collection of resources. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A list is a curated collection of resources. */
  mode?: Readonly<'working' | 'snapshot' | 'changes'>
  /** A list is a curated collection of resources. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A list is a curated collection of resources. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** A list is a curated collection of resources. */
  orderedBy?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A list is a curated collection of resources. */
  resourceType: Readonly<'List'>
  /** A list is a curated collection of resources. */
  source?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A list is a curated collection of resources. */
  status?: Readonly<'current' | 'retired' | 'entered-in-error'>
  /** A list is a curated collection of resources. */
  subject?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A list is a curated collection of resources. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A list is a curated collection of resources. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
}
