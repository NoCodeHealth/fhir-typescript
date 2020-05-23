import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactDetail } from './FhirContactDetail'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirGraphDefinition_Link } from './FhirGraphDefinition_Link'
import { FhirId } from './FhirId'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
export const FhirGraphDefinition: t.Type<FhirGraphDefinition, FhirGraphDefinitionOutput> = t.recursion(
  'FhirGraphDefinition',
  () =>
    t.intersection([
      t.type({
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        resourceType: t.readonly(t.literal('GraphDefinition')),
      }),
      t.partial({
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        _date: t.readonly(FhirElement),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        _description: t.readonly(FhirElement),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        _experimental: t.readonly(FhirElement),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        _implicitRules: t.readonly(FhirElement),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        _language: t.readonly(FhirElement),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        _name: t.readonly(FhirElement),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        _publisher: t.readonly(FhirElement),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        _purpose: t.readonly(FhirElement),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        _start: t.readonly(FhirElement),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        _status: t.readonly(FhirElement),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        _url: t.readonly(FhirElement),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        _version: t.readonly(FhirElement),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        contact: t.readonlyArray(FhirContactDetail),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        contained: t.readonlyArray(FhirResourceList),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        date: t.readonly(FhirDateTime),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        description: t.readonly(FhirMarkdown),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        experimental: t.readonly(FhirBoolean),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        extension: t.readonlyArray(FhirExtension),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        id: t.readonly(FhirId),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        implicitRules: t.readonly(FhirUri),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        jurisdiction: t.readonlyArray(FhirCodeableConcept),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        language: t.readonly(FhirCode),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        link: t.readonlyArray(FhirGraphDefinition_Link),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        meta: t.readonly(FhirMeta),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        name: t.readonly(FhirString),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        profile: t.readonly(FhirCanonical),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        publisher: t.readonly(FhirString),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        purpose: t.readonly(FhirMarkdown),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        start: t.readonly(FhirCode),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        status: t.readonly(
          t.keyof({
            draft: null,
            active: null,
            retired: null,
            unknown: null,
          })
        ),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        text: t.readonly(FhirNarrative),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        url: t.readonly(FhirUri),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        useContext: t.readonlyArray(FhirUsageContext),
        /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
        version: t.readonly(FhirString),
      }),
    ])
)

/** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
export interface FhirGraphDefinition {
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _experimental?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _purpose?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _start?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  experimental?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  link?: ReadonlyArray<t.TypeOf<typeof FhirGraphDefinition_Link>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  profile?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  purpose?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  resourceType: Readonly<'GraphDefinition'>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  start?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
export interface FhirGraphDefinitionOutput {
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _experimental?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _purpose?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _start?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  experimental?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  link?: ReadonlyArray<t.OutputOf<typeof FhirGraphDefinition_Link>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  profile?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  purpose?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  resourceType: Readonly<'GraphDefinition'>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  start?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
