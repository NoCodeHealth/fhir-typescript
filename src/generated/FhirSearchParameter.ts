import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactDetail } from './FhirContactDetail'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirResourceList } from './FhirResourceList'
import { FhirSearchParameter_Component } from './FhirSearchParameter_Component'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** A search parameter that defines a named search item that can be used to search/filter on a resource. */
export const FhirSearchParameter: t.Type<FhirSearchParameter, FhirSearchParameterOutput> = t.recursion(
  'FhirSearchParameter',
  () =>
    t.intersection([
      t.type({
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        resourceType: t.readonly(t.literal('SearchParameter')),
      }),
      t.partial({
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _base: t.readonlyArray(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _chain: t.readonlyArray(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _code: t.readonly(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _comparator: t.readonlyArray(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _date: t.readonly(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _description: t.readonly(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _experimental: t.readonly(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _expression: t.readonly(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _implicitRules: t.readonly(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _language: t.readonly(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _modifier: t.readonlyArray(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _multipleAnd: t.readonly(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _multipleOr: t.readonly(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _name: t.readonly(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _publisher: t.readonly(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _purpose: t.readonly(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _status: t.readonly(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _target: t.readonlyArray(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _type: t.readonly(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _url: t.readonly(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _version: t.readonly(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _xpath: t.readonly(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        _xpathUsage: t.readonly(FhirElement),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        base: t.readonlyArray(FhirCode),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        chain: t.readonlyArray(FhirString),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        code: t.readonly(FhirCode),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        comparator: t.readonlyArray(
          t.keyof({
            eq: null,
            ne: null,
            gt: null,
            lt: null,
            ge: null,
            le: null,
            sa: null,
            eb: null,
            ap: null,
          })
        ),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        component: t.readonlyArray(FhirSearchParameter_Component),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        contact: t.readonlyArray(FhirContactDetail),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        contained: t.readonlyArray(FhirResourceList),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        date: t.readonly(FhirDateTime),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        derivedFrom: t.readonly(FhirCanonical),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        description: t.readonly(FhirMarkdown),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        experimental: t.readonly(FhirBoolean),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        expression: t.readonly(FhirString),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        extension: t.readonlyArray(FhirExtension),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        id: t.readonly(FhirId),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        implicitRules: t.readonly(FhirUri),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        jurisdiction: t.readonlyArray(FhirCodeableConcept),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        language: t.readonly(FhirCode),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        meta: t.readonly(FhirMeta),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        modifier: t.readonlyArray(
          t.keyof({
            missing: null,
            exact: null,
            contains: null,
            not: null,
            text: null,
            in: null,
            'not-in': null,
            below: null,
            above: null,
            type: null,
            identifier: null,
            ofType: null,
          })
        ),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        multipleAnd: t.readonly(FhirBoolean),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        multipleOr: t.readonly(FhirBoolean),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        name: t.readonly(FhirString),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        publisher: t.readonly(FhirString),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        purpose: t.readonly(FhirMarkdown),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        status: t.readonly(
          t.keyof({
            draft: null,
            active: null,
            retired: null,
            unknown: null,
          })
        ),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        target: t.readonlyArray(FhirCode),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        text: t.readonly(FhirNarrative),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        type: t.readonly(
          t.keyof({
            number: null,
            date: null,
            string: null,
            token: null,
            reference: null,
            composite: null,
            quantity: null,
            uri: null,
            special: null,
          })
        ),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        url: t.readonly(FhirUri),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        useContext: t.readonlyArray(FhirUsageContext),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        version: t.readonly(FhirString),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        xpath: t.readonly(FhirString),
        /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
        xpathUsage: t.readonly(
          t.keyof({
            normal: null,
            phonetic: null,
            nearby: null,
            distance: null,
            other: null,
          })
        ),
      }),
    ])
)

/** A search parameter that defines a named search item that can be used to search/filter on a resource. */
export interface FhirSearchParameter {
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _base?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _chain?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _comparator?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _experimental?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _expression?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _modifier?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _multipleAnd?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _multipleOr?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _purpose?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _target?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _xpath?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _xpathUsage?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  base?: ReadonlyArray<t.TypeOf<typeof FhirCode>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  chain?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  code?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  comparator?: ReadonlyArray<'eq' | 'ne' | 'gt' | 'lt' | 'ge' | 'le' | 'sa' | 'eb' | 'ap'>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  component?: ReadonlyArray<t.TypeOf<typeof FhirSearchParameter_Component>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  derivedFrom?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  experimental?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  expression?: Readonly<t.TypeOf<typeof FhirString>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  modifier?: ReadonlyArray<
    | 'missing'
    | 'exact'
    | 'contains'
    | 'not'
    | 'text'
    | 'in'
    | 'not-in'
    | 'below'
    | 'above'
    | 'type'
    | 'identifier'
    | 'ofType'
  >
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  multipleAnd?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  multipleOr?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  purpose?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  resourceType: Readonly<'SearchParameter'>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  target?: ReadonlyArray<t.TypeOf<typeof FhirCode>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  type?: Readonly<'number' | 'date' | 'string' | 'token' | 'reference' | 'composite' | 'quantity' | 'uri' | 'special'>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  xpath?: Readonly<t.TypeOf<typeof FhirString>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  xpathUsage?: Readonly<'normal' | 'phonetic' | 'nearby' | 'distance' | 'other'>
}
/** A search parameter that defines a named search item that can be used to search/filter on a resource. */
export interface FhirSearchParameterOutput {
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _base?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _chain?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _comparator?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _experimental?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _expression?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _modifier?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _multipleAnd?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _multipleOr?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _purpose?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _target?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _xpath?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  _xpathUsage?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  base?: ReadonlyArray<t.OutputOf<typeof FhirCode>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  chain?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  code?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  comparator?: ReadonlyArray<'eq' | 'ne' | 'gt' | 'lt' | 'ge' | 'le' | 'sa' | 'eb' | 'ap'>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  component?: ReadonlyArray<t.OutputOf<typeof FhirSearchParameter_Component>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  derivedFrom?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  experimental?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  expression?: Readonly<t.OutputOf<typeof FhirString>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  modifier?: ReadonlyArray<
    | 'missing'
    | 'exact'
    | 'contains'
    | 'not'
    | 'text'
    | 'in'
    | 'not-in'
    | 'below'
    | 'above'
    | 'type'
    | 'identifier'
    | 'ofType'
  >
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  multipleAnd?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  multipleOr?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  purpose?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  resourceType: Readonly<'SearchParameter'>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  target?: ReadonlyArray<t.OutputOf<typeof FhirCode>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  type?: Readonly<'number' | 'date' | 'string' | 'token' | 'reference' | 'composite' | 'quantity' | 'uri' | 'special'>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  xpath?: Readonly<t.OutputOf<typeof FhirString>>
  /** A search parameter that defines a named search item that can be used to search/filter on a resource. */
  xpathUsage?: Readonly<'normal' | 'phonetic' | 'nearby' | 'distance' | 'other'>
}
