import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCoding } from './FhirCoding'
import { FhirContactDetail } from './FhirContactDetail'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirStructureDefinition_Context } from './FhirStructureDefinition_Context'
import { FhirStructureDefinition_Differential } from './FhirStructureDefinition_Differential'
import { FhirStructureDefinition_Mapping } from './FhirStructureDefinition_Mapping'
import { FhirStructureDefinition_Snapshot } from './FhirStructureDefinition_Snapshot'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
export const FhirStructureDefinition: t.Type<FhirStructureDefinition, FhirStructureDefinitionOutput> = t.recursion(
  'FhirStructureDefinition',
  () =>
    t.intersection([
      t.type({
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        resourceType: t.readonly(t.literal('StructureDefinition')),
      }),
      t.partial({
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _abstract: t.readonly(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _contextInvariant: t.readonlyArray(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _copyright: t.readonly(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _date: t.readonly(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _derivation: t.readonly(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _description: t.readonly(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _experimental: t.readonly(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _fhirVersion: t.readonly(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _implicitRules: t.readonly(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _kind: t.readonly(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _language: t.readonly(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _name: t.readonly(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _publisher: t.readonly(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _purpose: t.readonly(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _status: t.readonly(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _title: t.readonly(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _type: t.readonly(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _url: t.readonly(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        _version: t.readonly(FhirElement),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        abstract: t.readonly(FhirBoolean),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        baseDefinition: t.readonly(FhirCanonical),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        contact: t.readonlyArray(FhirContactDetail),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        contained: t.readonlyArray(FhirResourceList),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        context: t.readonlyArray(FhirStructureDefinition_Context),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        contextInvariant: t.readonlyArray(FhirString),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        copyright: t.readonly(FhirMarkdown),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        date: t.readonly(FhirDateTime),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        derivation: t.readonly(
          t.keyof({
            specialization: null,
            constraint: null,
          })
        ),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        description: t.readonly(FhirMarkdown),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        differential: t.readonly(FhirStructureDefinition_Differential),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        experimental: t.readonly(FhirBoolean),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        extension: t.readonlyArray(FhirExtension),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        fhirVersion: t.readonly(
          t.keyof({
            '0.01': null,
            '0.05': null,
            '0.06': null,
            '0.11': null,
            '0.0.80': null,
            '0.0.81': null,
            '0.0.82': null,
            '0.4.0': null,
            '0.5.0': null,
            '1.0.0': null,
            '1.0.1': null,
            '1.0.2': null,
            '1.1.0': null,
            '1.4.0': null,
            '1.6.0': null,
            '1.8.0': null,
            '3.0.0': null,
            '3.0.1': null,
            '3.3.0': null,
            '3.5.0': null,
            '4.0.0': null,
            '4.0.1': null,
          })
        ),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        id: t.readonly(FhirId),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        implicitRules: t.readonly(FhirUri),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        jurisdiction: t.readonlyArray(FhirCodeableConcept),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        keyword: t.readonlyArray(FhirCoding),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        kind: t.readonly(
          t.keyof({
            'primitive-type': null,
            'complex-type': null,
            resource: null,
            logical: null,
          })
        ),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        language: t.readonly(FhirCode),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        mapping: t.readonlyArray(FhirStructureDefinition_Mapping),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        meta: t.readonly(FhirMeta),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        name: t.readonly(FhirString),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        publisher: t.readonly(FhirString),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        purpose: t.readonly(FhirMarkdown),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        snapshot: t.readonly(FhirStructureDefinition_Snapshot),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        status: t.readonly(
          t.keyof({
            draft: null,
            active: null,
            retired: null,
            unknown: null,
          })
        ),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        text: t.readonly(FhirNarrative),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        title: t.readonly(FhirString),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        type: t.readonly(FhirUri),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        url: t.readonly(FhirUri),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        useContext: t.readonlyArray(FhirUsageContext),
        /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
        version: t.readonly(FhirString),
      }),
    ])
)

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
export interface FhirStructureDefinition {
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _abstract?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _contextInvariant?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _copyright?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _derivation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _experimental?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _fhirVersion?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _kind?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _purpose?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  abstract?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  baseDefinition?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  context?: ReadonlyArray<t.TypeOf<typeof FhirStructureDefinition_Context>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  contextInvariant?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  copyright?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  derivation?: Readonly<'specialization' | 'constraint'>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  differential?: Readonly<t.TypeOf<typeof FhirStructureDefinition_Differential>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  experimental?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  fhirVersion?: Readonly<
    | '0.01'
    | '0.05'
    | '0.06'
    | '0.11'
    | '0.0.80'
    | '0.0.81'
    | '0.0.82'
    | '0.4.0'
    | '0.5.0'
    | '1.0.0'
    | '1.0.1'
    | '1.0.2'
    | '1.1.0'
    | '1.4.0'
    | '1.6.0'
    | '1.8.0'
    | '3.0.0'
    | '3.0.1'
    | '3.3.0'
    | '3.5.0'
    | '4.0.0'
    | '4.0.1'
  >
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  keyword?: ReadonlyArray<t.TypeOf<typeof FhirCoding>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  kind?: Readonly<'primitive-type' | 'complex-type' | 'resource' | 'logical'>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  mapping?: ReadonlyArray<t.TypeOf<typeof FhirStructureDefinition_Mapping>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  purpose?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  resourceType: Readonly<'StructureDefinition'>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  snapshot?: Readonly<t.TypeOf<typeof FhirStructureDefinition_Snapshot>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  type?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
export interface FhirStructureDefinitionOutput {
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _abstract?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _contextInvariant?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _copyright?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _derivation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _experimental?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _fhirVersion?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _kind?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _purpose?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  abstract?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  baseDefinition?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  context?: ReadonlyArray<t.OutputOf<typeof FhirStructureDefinition_Context>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  contextInvariant?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  copyright?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  derivation?: Readonly<'specialization' | 'constraint'>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  differential?: Readonly<t.OutputOf<typeof FhirStructureDefinition_Differential>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  experimental?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  fhirVersion?: Readonly<
    | '0.01'
    | '0.05'
    | '0.06'
    | '0.11'
    | '0.0.80'
    | '0.0.81'
    | '0.0.82'
    | '0.4.0'
    | '0.5.0'
    | '1.0.0'
    | '1.0.1'
    | '1.0.2'
    | '1.1.0'
    | '1.4.0'
    | '1.6.0'
    | '1.8.0'
    | '3.0.0'
    | '3.0.1'
    | '3.3.0'
    | '3.5.0'
    | '4.0.0'
    | '4.0.1'
  >
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  keyword?: ReadonlyArray<t.OutputOf<typeof FhirCoding>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  kind?: Readonly<'primitive-type' | 'complex-type' | 'resource' | 'logical'>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  mapping?: ReadonlyArray<t.OutputOf<typeof FhirStructureDefinition_Mapping>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  purpose?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  resourceType: Readonly<'StructureDefinition'>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  snapshot?: Readonly<t.OutputOf<typeof FhirStructureDefinition_Snapshot>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  type?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
