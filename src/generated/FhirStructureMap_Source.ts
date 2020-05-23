import * as t from 'io-ts'
import { FhirAddress } from './FhirAddress'
import { FhirAge } from './FhirAge'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirAttachment } from './FhirAttachment'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCoding } from './FhirCoding'
import { FhirContactDetail } from './FhirContactDetail'
import { FhirContactPoint } from './FhirContactPoint'
import { FhirContributor } from './FhirContributor'
import { FhirCount } from './FhirCount'
import { FhirDataRequirement } from './FhirDataRequirement'
import { FhirDistance } from './FhirDistance'
import { FhirDosage } from './FhirDosage'
import { FhirDuration } from './FhirDuration'
import { FhirElement } from './FhirElement'
import { FhirExpression } from './FhirExpression'
import { FhirExtension } from './FhirExtension'
import { FhirHumanName } from './FhirHumanName'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirInteger } from './FhirInteger'
import { FhirMeta } from './FhirMeta'
import { FhirMoney } from './FhirMoney'
import { FhirParameterDefinition } from './FhirParameterDefinition'
import { FhirPeriod } from './FhirPeriod'
import { FhirQuantity } from './FhirQuantity'
import { FhirRange } from './FhirRange'
import { FhirRatio } from './FhirRatio'
import { FhirReference } from './FhirReference'
import { FhirRelatedArtifact } from './FhirRelatedArtifact'
import { FhirSampledData } from './FhirSampledData'
import { FhirSignature } from './FhirSignature'
import { FhirString } from './FhirString'
import { FhirTiming } from './FhirTiming'
import { FhirTriggerDefinition } from './FhirTriggerDefinition'
import { FhirUsageContext } from './FhirUsageContext'

/** A Map of relationships between 2 structures that can be used to transform data. */
export const FhirStructureMap_Source: t.Type<FhirStructureMap_Source, FhirStructureMap_SourceOutput> = t.recursion(
  'FhirStructureMap_Source',
  () =>
    t.partial({
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _check: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _condition: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _context: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValueBase64Binary: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValueBoolean: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValueCanonical: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValueCode: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValueDate: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValueDateTime: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValueDecimal: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValueId: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValueInstant: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValueInteger: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValueMarkdown: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValueOid: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValuePositiveInt: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValueString: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValueTime: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValueUnsignedInt: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValueUri: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValueUrl: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _defaultValueUuid: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _element: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _listMode: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _logMessage: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _max: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _min: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _type: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _variable: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      check: t.readonly(FhirString),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      condition: t.readonly(FhirString),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      context: t.readonly(FhirId),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueAddress: t.readonly(FhirAddress),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueAge: t.readonly(FhirAge),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueAnnotation: t.readonly(FhirAnnotation),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueAttachment: t.readonly(FhirAttachment),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueBase64Binary: t.readonly(t.string),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueBoolean: t.readonly(t.boolean),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueCanonical: t.readonly(t.string),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueCode: t.readonly(t.string),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueCodeableConcept: t.readonly(FhirCodeableConcept),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueCoding: t.readonly(FhirCoding),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueContactDetail: t.readonly(FhirContactDetail),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueContactPoint: t.readonly(FhirContactPoint),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueContributor: t.readonly(FhirContributor),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueCount: t.readonly(FhirCount),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueDataRequirement: t.readonly(FhirDataRequirement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueDate: t.readonly(t.string),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueDateTime: t.readonly(t.string),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueDecimal: t.readonly(t.number),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueDistance: t.readonly(FhirDistance),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueDosage: t.readonly(FhirDosage),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueDuration: t.readonly(FhirDuration),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueExpression: t.readonly(FhirExpression),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueHumanName: t.readonly(FhirHumanName),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueId: t.readonly(t.string),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueIdentifier: t.readonly(FhirIdentifier),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueInstant: t.readonly(t.string),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueInteger: t.readonly(t.number),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueMarkdown: t.readonly(t.string),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueMeta: t.readonly(FhirMeta),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueMoney: t.readonly(FhirMoney),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueOid: t.readonly(t.string),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueParameterDefinition: t.readonly(FhirParameterDefinition),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValuePeriod: t.readonly(FhirPeriod),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValuePositiveInt: t.readonly(t.number),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueQuantity: t.readonly(FhirQuantity),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueRange: t.readonly(FhirRange),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueRatio: t.readonly(FhirRatio),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueReference: t.readonly(FhirReference),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueRelatedArtifact: t.readonly(FhirRelatedArtifact),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueSampledData: t.readonly(FhirSampledData),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueSignature: t.readonly(FhirSignature),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueString: t.readonly(t.string),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueTime: t.readonly(t.string),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueTiming: t.readonly(FhirTiming),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueTriggerDefinition: t.readonly(FhirTriggerDefinition),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueUnsignedInt: t.readonly(t.number),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueUri: t.readonly(t.string),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueUrl: t.readonly(t.string),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueUsageContext: t.readonly(FhirUsageContext),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      defaultValueUuid: t.readonly(t.string),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      element: t.readonly(FhirString),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      extension: t.readonlyArray(FhirExtension),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      id: t.readonly(FhirString),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      listMode: t.readonly(
        t.keyof({
          first: null,
          not_first: null,
          last: null,
          not_last: null,
          only_one: null,
        })
      ),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      logMessage: t.readonly(FhirString),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      max: t.readonly(FhirString),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      min: t.readonly(FhirInteger),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      type: t.readonly(FhirString),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      variable: t.readonly(FhirId),
    })
)

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface FhirStructureMap_Source {
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _check?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _condition?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _context?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueBase64Binary?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueCanonical?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueCode?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueDecimal?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueInstant?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueInteger?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueMarkdown?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueOid?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValuePositiveInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueUnsignedInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueUri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueUrl?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueUuid?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _element?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _listMode?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _logMessage?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _max?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _min?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _variable?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  check?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  condition?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  context?: Readonly<t.TypeOf<typeof FhirId>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueAddress?: Readonly<t.TypeOf<typeof FhirAddress>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueAge?: Readonly<t.TypeOf<typeof FhirAge>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueAnnotation?: Readonly<t.TypeOf<typeof FhirAnnotation>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueAttachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueBase64Binary?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueBoolean?: Readonly<boolean>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueCanonical?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueCode?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueCoding?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueContactDetail?: Readonly<t.TypeOf<typeof FhirContactDetail>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueContactPoint?: Readonly<t.TypeOf<typeof FhirContactPoint>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueContributor?: Readonly<t.TypeOf<typeof FhirContributor>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueCount?: Readonly<t.TypeOf<typeof FhirCount>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueDataRequirement?: Readonly<t.TypeOf<typeof FhirDataRequirement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueDate?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueDateTime?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueDecimal?: Readonly<number>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueDistance?: Readonly<t.TypeOf<typeof FhirDistance>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueDosage?: Readonly<t.TypeOf<typeof FhirDosage>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueExpression?: Readonly<t.TypeOf<typeof FhirExpression>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueHumanName?: Readonly<t.TypeOf<typeof FhirHumanName>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueId?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueIdentifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueInstant?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueInteger?: Readonly<number>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueMarkdown?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueMeta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueMoney?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueOid?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueParameterDefinition?: Readonly<t.TypeOf<typeof FhirParameterDefinition>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValuePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValuePositiveInt?: Readonly<number>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueRatio?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueRelatedArtifact?: Readonly<t.TypeOf<typeof FhirRelatedArtifact>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueSampledData?: Readonly<t.TypeOf<typeof FhirSampledData>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueSignature?: Readonly<t.TypeOf<typeof FhirSignature>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueString?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueTime?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueTriggerDefinition?: Readonly<t.TypeOf<typeof FhirTriggerDefinition>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueUnsignedInt?: Readonly<number>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueUri?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueUrl?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueUsageContext?: Readonly<t.TypeOf<typeof FhirUsageContext>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueUuid?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  element?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  listMode?: Readonly<'first' | 'not_first' | 'last' | 'not_last' | 'only_one'>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  logMessage?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  max?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  min?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  type?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  variable?: Readonly<t.TypeOf<typeof FhirId>>
}
/** A Map of relationships between 2 structures that can be used to transform data. */
export interface FhirStructureMap_SourceOutput {
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _check?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _condition?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _context?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueBase64Binary?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueCanonical?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueCode?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueDecimal?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueInstant?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueInteger?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueMarkdown?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueOid?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValuePositiveInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueUnsignedInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueUri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueUrl?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _defaultValueUuid?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _element?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _listMode?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _logMessage?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _max?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _min?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _variable?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  check?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  condition?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  context?: Readonly<t.OutputOf<typeof FhirId>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueAddress?: Readonly<t.OutputOf<typeof FhirAddress>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueAge?: Readonly<t.OutputOf<typeof FhirAge>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueAnnotation?: Readonly<t.OutputOf<typeof FhirAnnotation>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueAttachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueBase64Binary?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueBoolean?: Readonly<boolean>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueCanonical?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueCode?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueCoding?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueContactDetail?: Readonly<t.OutputOf<typeof FhirContactDetail>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueContactPoint?: Readonly<t.OutputOf<typeof FhirContactPoint>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueContributor?: Readonly<t.OutputOf<typeof FhirContributor>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueCount?: Readonly<t.OutputOf<typeof FhirCount>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueDataRequirement?: Readonly<t.OutputOf<typeof FhirDataRequirement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueDate?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueDateTime?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueDecimal?: Readonly<number>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueDistance?: Readonly<t.OutputOf<typeof FhirDistance>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueDosage?: Readonly<t.OutputOf<typeof FhirDosage>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueExpression?: Readonly<t.OutputOf<typeof FhirExpression>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueHumanName?: Readonly<t.OutputOf<typeof FhirHumanName>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueId?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueIdentifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueInstant?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueInteger?: Readonly<number>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueMarkdown?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueMeta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueMoney?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueOid?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueParameterDefinition?: Readonly<t.OutputOf<typeof FhirParameterDefinition>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValuePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValuePositiveInt?: Readonly<number>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueRatio?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueRelatedArtifact?: Readonly<t.OutputOf<typeof FhirRelatedArtifact>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueSampledData?: Readonly<t.OutputOf<typeof FhirSampledData>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueSignature?: Readonly<t.OutputOf<typeof FhirSignature>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueString?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueTime?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueTriggerDefinition?: Readonly<t.OutputOf<typeof FhirTriggerDefinition>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueUnsignedInt?: Readonly<number>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueUri?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueUrl?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueUsageContext?: Readonly<t.OutputOf<typeof FhirUsageContext>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  defaultValueUuid?: Readonly<string>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  element?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  listMode?: Readonly<'first' | 'not_first' | 'last' | 'not_last' | 'only_one'>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  logMessage?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  max?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  min?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  type?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  variable?: Readonly<t.OutputOf<typeof FhirId>>
}
