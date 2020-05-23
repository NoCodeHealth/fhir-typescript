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

/** A task to be performed. */
export const FhirTask_Output: t.Type<FhirTask_Output, FhirTask_OutputOutput> = t.recursion('FhirTask_Output', () =>
  t.intersection([
    t.type({
      /** A task to be performed. */
      type: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** A task to be performed. */
      _valueBase64Binary: t.readonly(FhirElement),
      /** A task to be performed. */
      _valueBoolean: t.readonly(FhirElement),
      /** A task to be performed. */
      _valueCanonical: t.readonly(FhirElement),
      /** A task to be performed. */
      _valueCode: t.readonly(FhirElement),
      /** A task to be performed. */
      _valueDate: t.readonly(FhirElement),
      /** A task to be performed. */
      _valueDateTime: t.readonly(FhirElement),
      /** A task to be performed. */
      _valueDecimal: t.readonly(FhirElement),
      /** A task to be performed. */
      _valueId: t.readonly(FhirElement),
      /** A task to be performed. */
      _valueInstant: t.readonly(FhirElement),
      /** A task to be performed. */
      _valueInteger: t.readonly(FhirElement),
      /** A task to be performed. */
      _valueMarkdown: t.readonly(FhirElement),
      /** A task to be performed. */
      _valueOid: t.readonly(FhirElement),
      /** A task to be performed. */
      _valuePositiveInt: t.readonly(FhirElement),
      /** A task to be performed. */
      _valueString: t.readonly(FhirElement),
      /** A task to be performed. */
      _valueTime: t.readonly(FhirElement),
      /** A task to be performed. */
      _valueUnsignedInt: t.readonly(FhirElement),
      /** A task to be performed. */
      _valueUri: t.readonly(FhirElement),
      /** A task to be performed. */
      _valueUrl: t.readonly(FhirElement),
      /** A task to be performed. */
      _valueUuid: t.readonly(FhirElement),
      /** A task to be performed. */
      extension: t.readonlyArray(FhirExtension),
      /** A task to be performed. */
      id: t.readonly(FhirString),
      /** A task to be performed. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A task to be performed. */
      valueAddress: t.readonly(FhirAddress),
      /** A task to be performed. */
      valueAge: t.readonly(FhirAge),
      /** A task to be performed. */
      valueAnnotation: t.readonly(FhirAnnotation),
      /** A task to be performed. */
      valueAttachment: t.readonly(FhirAttachment),
      /** A task to be performed. */
      valueBase64Binary: t.readonly(t.string),
      /** A task to be performed. */
      valueBoolean: t.readonly(t.boolean),
      /** A task to be performed. */
      valueCanonical: t.readonly(t.string),
      /** A task to be performed. */
      valueCode: t.readonly(t.string),
      /** A task to be performed. */
      valueCodeableConcept: t.readonly(FhirCodeableConcept),
      /** A task to be performed. */
      valueCoding: t.readonly(FhirCoding),
      /** A task to be performed. */
      valueContactDetail: t.readonly(FhirContactDetail),
      /** A task to be performed. */
      valueContactPoint: t.readonly(FhirContactPoint),
      /** A task to be performed. */
      valueContributor: t.readonly(FhirContributor),
      /** A task to be performed. */
      valueCount: t.readonly(FhirCount),
      /** A task to be performed. */
      valueDataRequirement: t.readonly(FhirDataRequirement),
      /** A task to be performed. */
      valueDate: t.readonly(t.string),
      /** A task to be performed. */
      valueDateTime: t.readonly(t.string),
      /** A task to be performed. */
      valueDecimal: t.readonly(t.number),
      /** A task to be performed. */
      valueDistance: t.readonly(FhirDistance),
      /** A task to be performed. */
      valueDosage: t.readonly(FhirDosage),
      /** A task to be performed. */
      valueDuration: t.readonly(FhirDuration),
      /** A task to be performed. */
      valueExpression: t.readonly(FhirExpression),
      /** A task to be performed. */
      valueHumanName: t.readonly(FhirHumanName),
      /** A task to be performed. */
      valueId: t.readonly(t.string),
      /** A task to be performed. */
      valueIdentifier: t.readonly(FhirIdentifier),
      /** A task to be performed. */
      valueInstant: t.readonly(t.string),
      /** A task to be performed. */
      valueInteger: t.readonly(t.number),
      /** A task to be performed. */
      valueMarkdown: t.readonly(t.string),
      /** A task to be performed. */
      valueMeta: t.readonly(FhirMeta),
      /** A task to be performed. */
      valueMoney: t.readonly(FhirMoney),
      /** A task to be performed. */
      valueOid: t.readonly(t.string),
      /** A task to be performed. */
      valueParameterDefinition: t.readonly(FhirParameterDefinition),
      /** A task to be performed. */
      valuePeriod: t.readonly(FhirPeriod),
      /** A task to be performed. */
      valuePositiveInt: t.readonly(t.number),
      /** A task to be performed. */
      valueQuantity: t.readonly(FhirQuantity),
      /** A task to be performed. */
      valueRange: t.readonly(FhirRange),
      /** A task to be performed. */
      valueRatio: t.readonly(FhirRatio),
      /** A task to be performed. */
      valueReference: t.readonly(FhirReference),
      /** A task to be performed. */
      valueRelatedArtifact: t.readonly(FhirRelatedArtifact),
      /** A task to be performed. */
      valueSampledData: t.readonly(FhirSampledData),
      /** A task to be performed. */
      valueSignature: t.readonly(FhirSignature),
      /** A task to be performed. */
      valueString: t.readonly(t.string),
      /** A task to be performed. */
      valueTime: t.readonly(t.string),
      /** A task to be performed. */
      valueTiming: t.readonly(FhirTiming),
      /** A task to be performed. */
      valueTriggerDefinition: t.readonly(FhirTriggerDefinition),
      /** A task to be performed. */
      valueUnsignedInt: t.readonly(t.number),
      /** A task to be performed. */
      valueUri: t.readonly(t.string),
      /** A task to be performed. */
      valueUrl: t.readonly(t.string),
      /** A task to be performed. */
      valueUsageContext: t.readonly(FhirUsageContext),
      /** A task to be performed. */
      valueUuid: t.readonly(t.string),
    }),
  ])
)

/** A task to be performed. */
export interface FhirTask_Output {
  /** A task to be performed. */
  _valueBase64Binary?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueCanonical?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueCode?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueDecimal?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueInstant?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueInteger?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueMarkdown?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueOid?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _valuePositiveInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueUnsignedInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueUri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueUrl?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueUuid?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A task to be performed. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A task to be performed. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A task to be performed. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A task to be performed. */
  valueAddress?: Readonly<t.TypeOf<typeof FhirAddress>>
  /** A task to be performed. */
  valueAge?: Readonly<t.TypeOf<typeof FhirAge>>
  /** A task to be performed. */
  valueAnnotation?: Readonly<t.TypeOf<typeof FhirAnnotation>>
  /** A task to be performed. */
  valueAttachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** A task to be performed. */
  valueBase64Binary?: Readonly<string>
  /** A task to be performed. */
  valueBoolean?: Readonly<boolean>
  /** A task to be performed. */
  valueCanonical?: Readonly<string>
  /** A task to be performed. */
  valueCode?: Readonly<string>
  /** A task to be performed. */
  valueCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A task to be performed. */
  valueCoding?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** A task to be performed. */
  valueContactDetail?: Readonly<t.TypeOf<typeof FhirContactDetail>>
  /** A task to be performed. */
  valueContactPoint?: Readonly<t.TypeOf<typeof FhirContactPoint>>
  /** A task to be performed. */
  valueContributor?: Readonly<t.TypeOf<typeof FhirContributor>>
  /** A task to be performed. */
  valueCount?: Readonly<t.TypeOf<typeof FhirCount>>
  /** A task to be performed. */
  valueDataRequirement?: Readonly<t.TypeOf<typeof FhirDataRequirement>>
  /** A task to be performed. */
  valueDate?: Readonly<string>
  /** A task to be performed. */
  valueDateTime?: Readonly<string>
  /** A task to be performed. */
  valueDecimal?: Readonly<number>
  /** A task to be performed. */
  valueDistance?: Readonly<t.TypeOf<typeof FhirDistance>>
  /** A task to be performed. */
  valueDosage?: Readonly<t.TypeOf<typeof FhirDosage>>
  /** A task to be performed. */
  valueDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** A task to be performed. */
  valueExpression?: Readonly<t.TypeOf<typeof FhirExpression>>
  /** A task to be performed. */
  valueHumanName?: Readonly<t.TypeOf<typeof FhirHumanName>>
  /** A task to be performed. */
  valueId?: Readonly<string>
  /** A task to be performed. */
  valueIdentifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A task to be performed. */
  valueInstant?: Readonly<string>
  /** A task to be performed. */
  valueInteger?: Readonly<number>
  /** A task to be performed. */
  valueMarkdown?: Readonly<string>
  /** A task to be performed. */
  valueMeta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A task to be performed. */
  valueMoney?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** A task to be performed. */
  valueOid?: Readonly<string>
  /** A task to be performed. */
  valueParameterDefinition?: Readonly<t.TypeOf<typeof FhirParameterDefinition>>
  /** A task to be performed. */
  valuePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A task to be performed. */
  valuePositiveInt?: Readonly<number>
  /** A task to be performed. */
  valueQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A task to be performed. */
  valueRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** A task to be performed. */
  valueRatio?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** A task to be performed. */
  valueReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A task to be performed. */
  valueRelatedArtifact?: Readonly<t.TypeOf<typeof FhirRelatedArtifact>>
  /** A task to be performed. */
  valueSampledData?: Readonly<t.TypeOf<typeof FhirSampledData>>
  /** A task to be performed. */
  valueSignature?: Readonly<t.TypeOf<typeof FhirSignature>>
  /** A task to be performed. */
  valueString?: Readonly<string>
  /** A task to be performed. */
  valueTime?: Readonly<string>
  /** A task to be performed. */
  valueTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** A task to be performed. */
  valueTriggerDefinition?: Readonly<t.TypeOf<typeof FhirTriggerDefinition>>
  /** A task to be performed. */
  valueUnsignedInt?: Readonly<number>
  /** A task to be performed. */
  valueUri?: Readonly<string>
  /** A task to be performed. */
  valueUrl?: Readonly<string>
  /** A task to be performed. */
  valueUsageContext?: Readonly<t.TypeOf<typeof FhirUsageContext>>
  /** A task to be performed. */
  valueUuid?: Readonly<string>
}
/** A task to be performed. */
export interface FhirTask_OutputOutput {
  /** A task to be performed. */
  _valueBase64Binary?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueCanonical?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueCode?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueDecimal?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueInstant?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueInteger?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueMarkdown?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueOid?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _valuePositiveInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueUnsignedInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueUri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueUrl?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _valueUuid?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A task to be performed. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A task to be performed. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A task to be performed. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A task to be performed. */
  valueAddress?: Readonly<t.OutputOf<typeof FhirAddress>>
  /** A task to be performed. */
  valueAge?: Readonly<t.OutputOf<typeof FhirAge>>
  /** A task to be performed. */
  valueAnnotation?: Readonly<t.OutputOf<typeof FhirAnnotation>>
  /** A task to be performed. */
  valueAttachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** A task to be performed. */
  valueBase64Binary?: Readonly<string>
  /** A task to be performed. */
  valueBoolean?: Readonly<boolean>
  /** A task to be performed. */
  valueCanonical?: Readonly<string>
  /** A task to be performed. */
  valueCode?: Readonly<string>
  /** A task to be performed. */
  valueCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A task to be performed. */
  valueCoding?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** A task to be performed. */
  valueContactDetail?: Readonly<t.OutputOf<typeof FhirContactDetail>>
  /** A task to be performed. */
  valueContactPoint?: Readonly<t.OutputOf<typeof FhirContactPoint>>
  /** A task to be performed. */
  valueContributor?: Readonly<t.OutputOf<typeof FhirContributor>>
  /** A task to be performed. */
  valueCount?: Readonly<t.OutputOf<typeof FhirCount>>
  /** A task to be performed. */
  valueDataRequirement?: Readonly<t.OutputOf<typeof FhirDataRequirement>>
  /** A task to be performed. */
  valueDate?: Readonly<string>
  /** A task to be performed. */
  valueDateTime?: Readonly<string>
  /** A task to be performed. */
  valueDecimal?: Readonly<number>
  /** A task to be performed. */
  valueDistance?: Readonly<t.OutputOf<typeof FhirDistance>>
  /** A task to be performed. */
  valueDosage?: Readonly<t.OutputOf<typeof FhirDosage>>
  /** A task to be performed. */
  valueDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** A task to be performed. */
  valueExpression?: Readonly<t.OutputOf<typeof FhirExpression>>
  /** A task to be performed. */
  valueHumanName?: Readonly<t.OutputOf<typeof FhirHumanName>>
  /** A task to be performed. */
  valueId?: Readonly<string>
  /** A task to be performed. */
  valueIdentifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A task to be performed. */
  valueInstant?: Readonly<string>
  /** A task to be performed. */
  valueInteger?: Readonly<number>
  /** A task to be performed. */
  valueMarkdown?: Readonly<string>
  /** A task to be performed. */
  valueMeta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A task to be performed. */
  valueMoney?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** A task to be performed. */
  valueOid?: Readonly<string>
  /** A task to be performed. */
  valueParameterDefinition?: Readonly<t.OutputOf<typeof FhirParameterDefinition>>
  /** A task to be performed. */
  valuePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A task to be performed. */
  valuePositiveInt?: Readonly<number>
  /** A task to be performed. */
  valueQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A task to be performed. */
  valueRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** A task to be performed. */
  valueRatio?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** A task to be performed. */
  valueReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A task to be performed. */
  valueRelatedArtifact?: Readonly<t.OutputOf<typeof FhirRelatedArtifact>>
  /** A task to be performed. */
  valueSampledData?: Readonly<t.OutputOf<typeof FhirSampledData>>
  /** A task to be performed. */
  valueSignature?: Readonly<t.OutputOf<typeof FhirSignature>>
  /** A task to be performed. */
  valueString?: Readonly<string>
  /** A task to be performed. */
  valueTime?: Readonly<string>
  /** A task to be performed. */
  valueTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** A task to be performed. */
  valueTriggerDefinition?: Readonly<t.OutputOf<typeof FhirTriggerDefinition>>
  /** A task to be performed. */
  valueUnsignedInt?: Readonly<number>
  /** A task to be performed. */
  valueUri?: Readonly<string>
  /** A task to be performed. */
  valueUrl?: Readonly<string>
  /** A task to be performed. */
  valueUsageContext?: Readonly<t.OutputOf<typeof FhirUsageContext>>
  /** A task to be performed. */
  valueUuid?: Readonly<string>
}
