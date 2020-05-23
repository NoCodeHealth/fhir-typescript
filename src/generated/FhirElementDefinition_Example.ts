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
import { FhirIdentifier } from './FhirIdentifier'
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

/** Captures constraints on each element within the resource, profile, or extension. */
export const FhirElementDefinition_Example: t.Type<
  FhirElementDefinition_Example,
  FhirElementDefinition_ExampleOutput
> = t.recursion('FhirElementDefinition_Example', () =>
  t.partial({
    /** Captures constraints on each element within the resource, profile, or extension. */
    _label: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valueBase64Binary: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valueBoolean: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valueCanonical: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valueCode: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valueDate: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valueDateTime: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valueDecimal: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valueId: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valueInstant: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valueInteger: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valueMarkdown: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valueOid: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valuePositiveInt: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valueString: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valueTime: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valueUnsignedInt: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valueUri: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valueUrl: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _valueUuid: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    extension: t.readonlyArray(FhirExtension),
    /** Captures constraints on each element within the resource, profile, or extension. */
    id: t.readonly(FhirString),
    /** Captures constraints on each element within the resource, profile, or extension. */
    label: t.readonly(FhirString),
    /** Captures constraints on each element within the resource, profile, or extension. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueAddress: t.readonly(FhirAddress),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueAge: t.readonly(FhirAge),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueAnnotation: t.readonly(FhirAnnotation),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueAttachment: t.readonly(FhirAttachment),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueBase64Binary: t.readonly(t.string),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueBoolean: t.readonly(t.boolean),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueCanonical: t.readonly(t.string),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueCode: t.readonly(t.string),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueCodeableConcept: t.readonly(FhirCodeableConcept),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueCoding: t.readonly(FhirCoding),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueContactDetail: t.readonly(FhirContactDetail),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueContactPoint: t.readonly(FhirContactPoint),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueContributor: t.readonly(FhirContributor),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueCount: t.readonly(FhirCount),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueDataRequirement: t.readonly(FhirDataRequirement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueDate: t.readonly(t.string),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueDateTime: t.readonly(t.string),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueDecimal: t.readonly(t.number),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueDistance: t.readonly(FhirDistance),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueDosage: t.readonly(FhirDosage),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueDuration: t.readonly(FhirDuration),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueExpression: t.readonly(FhirExpression),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueHumanName: t.readonly(FhirHumanName),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueId: t.readonly(t.string),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueIdentifier: t.readonly(FhirIdentifier),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueInstant: t.readonly(t.string),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueInteger: t.readonly(t.number),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueMarkdown: t.readonly(t.string),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueMeta: t.readonly(FhirMeta),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueMoney: t.readonly(FhirMoney),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueOid: t.readonly(t.string),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueParameterDefinition: t.readonly(FhirParameterDefinition),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valuePeriod: t.readonly(FhirPeriod),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valuePositiveInt: t.readonly(t.number),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueQuantity: t.readonly(FhirQuantity),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueRange: t.readonly(FhirRange),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueRatio: t.readonly(FhirRatio),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueReference: t.readonly(FhirReference),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueRelatedArtifact: t.readonly(FhirRelatedArtifact),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueSampledData: t.readonly(FhirSampledData),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueSignature: t.readonly(FhirSignature),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueString: t.readonly(t.string),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueTime: t.readonly(t.string),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueTiming: t.readonly(FhirTiming),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueTriggerDefinition: t.readonly(FhirTriggerDefinition),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueUnsignedInt: t.readonly(t.number),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueUri: t.readonly(t.string),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueUrl: t.readonly(t.string),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueUsageContext: t.readonly(FhirUsageContext),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueUuid: t.readonly(t.string),
  })
)

/** Captures constraints on each element within the resource, profile, or extension. */
export interface FhirElementDefinition_Example {
  /** Captures constraints on each element within the resource, profile, or extension. */
  _label?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueBase64Binary?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueCanonical?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueCode?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueDecimal?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueInstant?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueInteger?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueMarkdown?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueOid?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valuePositiveInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueUnsignedInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueUri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueUrl?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueUuid?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  label?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueAddress?: Readonly<t.TypeOf<typeof FhirAddress>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueAge?: Readonly<t.TypeOf<typeof FhirAge>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueAnnotation?: Readonly<t.TypeOf<typeof FhirAnnotation>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueAttachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueBase64Binary?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueBoolean?: Readonly<boolean>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueCanonical?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueCode?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueCoding?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueContactDetail?: Readonly<t.TypeOf<typeof FhirContactDetail>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueContactPoint?: Readonly<t.TypeOf<typeof FhirContactPoint>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueContributor?: Readonly<t.TypeOf<typeof FhirContributor>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueCount?: Readonly<t.TypeOf<typeof FhirCount>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueDataRequirement?: Readonly<t.TypeOf<typeof FhirDataRequirement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueDate?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueDateTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueDecimal?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueDistance?: Readonly<t.TypeOf<typeof FhirDistance>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueDosage?: Readonly<t.TypeOf<typeof FhirDosage>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueExpression?: Readonly<t.TypeOf<typeof FhirExpression>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueHumanName?: Readonly<t.TypeOf<typeof FhirHumanName>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueId?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueIdentifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueInstant?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueInteger?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueMarkdown?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueMeta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueMoney?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueOid?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueParameterDefinition?: Readonly<t.TypeOf<typeof FhirParameterDefinition>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valuePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valuePositiveInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueRatio?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueRelatedArtifact?: Readonly<t.TypeOf<typeof FhirRelatedArtifact>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueSampledData?: Readonly<t.TypeOf<typeof FhirSampledData>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueSignature?: Readonly<t.TypeOf<typeof FhirSignature>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueString?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueTriggerDefinition?: Readonly<t.TypeOf<typeof FhirTriggerDefinition>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueUnsignedInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueUri?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueUrl?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueUsageContext?: Readonly<t.TypeOf<typeof FhirUsageContext>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueUuid?: Readonly<string>
}
/** Captures constraints on each element within the resource, profile, or extension. */
export interface FhirElementDefinition_ExampleOutput {
  /** Captures constraints on each element within the resource, profile, or extension. */
  _label?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueBase64Binary?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueCanonical?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueCode?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueDecimal?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueInstant?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueInteger?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueMarkdown?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueOid?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valuePositiveInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueUnsignedInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueUri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueUrl?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _valueUuid?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  label?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueAddress?: Readonly<t.OutputOf<typeof FhirAddress>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueAge?: Readonly<t.OutputOf<typeof FhirAge>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueAnnotation?: Readonly<t.OutputOf<typeof FhirAnnotation>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueAttachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueBase64Binary?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueBoolean?: Readonly<boolean>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueCanonical?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueCode?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueCoding?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueContactDetail?: Readonly<t.OutputOf<typeof FhirContactDetail>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueContactPoint?: Readonly<t.OutputOf<typeof FhirContactPoint>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueContributor?: Readonly<t.OutputOf<typeof FhirContributor>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueCount?: Readonly<t.OutputOf<typeof FhirCount>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueDataRequirement?: Readonly<t.OutputOf<typeof FhirDataRequirement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueDate?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueDateTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueDecimal?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueDistance?: Readonly<t.OutputOf<typeof FhirDistance>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueDosage?: Readonly<t.OutputOf<typeof FhirDosage>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueExpression?: Readonly<t.OutputOf<typeof FhirExpression>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueHumanName?: Readonly<t.OutputOf<typeof FhirHumanName>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueId?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueIdentifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueInstant?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueInteger?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueMarkdown?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueMeta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueMoney?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueOid?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueParameterDefinition?: Readonly<t.OutputOf<typeof FhirParameterDefinition>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valuePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valuePositiveInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueRatio?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueRelatedArtifact?: Readonly<t.OutputOf<typeof FhirRelatedArtifact>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueSampledData?: Readonly<t.OutputOf<typeof FhirSampledData>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueSignature?: Readonly<t.OutputOf<typeof FhirSignature>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueString?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueTriggerDefinition?: Readonly<t.OutputOf<typeof FhirTriggerDefinition>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueUnsignedInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueUri?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueUrl?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueUsageContext?: Readonly<t.OutputOf<typeof FhirUsageContext>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueUuid?: Readonly<string>
}
