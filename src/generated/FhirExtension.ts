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
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** Optional Extension Element - found in all resources. */
export const FhirExtension: t.Type<FhirExtension, FhirExtensionOutput> = t.recursion('FhirExtension', () =>
  t.partial({
    /** Optional Extension Element - found in all resources. */
    _url: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valueBase64Binary: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valueBoolean: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valueCanonical: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valueCode: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valueDate: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valueDateTime: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valueDecimal: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valueId: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valueInstant: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valueInteger: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valueMarkdown: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valueOid: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valuePositiveInt: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valueString: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valueTime: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valueUnsignedInt: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valueUri: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valueUrl: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    _valueUuid: t.readonly(FhirElement),
    /** Optional Extension Element - found in all resources. */
    extension: t.readonlyArray(FhirExtension),
    /** Optional Extension Element - found in all resources. */
    id: t.readonly(FhirString),
    /** Optional Extension Element - found in all resources. */
    url: t.readonly(FhirUri),
    /** Optional Extension Element - found in all resources. */
    valueAddress: t.readonly(FhirAddress),
    /** Optional Extension Element - found in all resources. */
    valueAge: t.readonly(FhirAge),
    /** Optional Extension Element - found in all resources. */
    valueAnnotation: t.readonly(FhirAnnotation),
    /** Optional Extension Element - found in all resources. */
    valueAttachment: t.readonly(FhirAttachment),
    /** Optional Extension Element - found in all resources. */
    valueBase64Binary: t.readonly(t.string),
    /** Optional Extension Element - found in all resources. */
    valueBoolean: t.readonly(t.boolean),
    /** Optional Extension Element - found in all resources. */
    valueCanonical: t.readonly(t.string),
    /** Optional Extension Element - found in all resources. */
    valueCode: t.readonly(t.string),
    /** Optional Extension Element - found in all resources. */
    valueCodeableConcept: t.readonly(FhirCodeableConcept),
    /** Optional Extension Element - found in all resources. */
    valueCoding: t.readonly(FhirCoding),
    /** Optional Extension Element - found in all resources. */
    valueContactDetail: t.readonly(FhirContactDetail),
    /** Optional Extension Element - found in all resources. */
    valueContactPoint: t.readonly(FhirContactPoint),
    /** Optional Extension Element - found in all resources. */
    valueContributor: t.readonly(FhirContributor),
    /** Optional Extension Element - found in all resources. */
    valueCount: t.readonly(FhirCount),
    /** Optional Extension Element - found in all resources. */
    valueDataRequirement: t.readonly(FhirDataRequirement),
    /** Optional Extension Element - found in all resources. */
    valueDate: t.readonly(t.string),
    /** Optional Extension Element - found in all resources. */
    valueDateTime: t.readonly(t.string),
    /** Optional Extension Element - found in all resources. */
    valueDecimal: t.readonly(t.number),
    /** Optional Extension Element - found in all resources. */
    valueDistance: t.readonly(FhirDistance),
    /** Optional Extension Element - found in all resources. */
    valueDosage: t.readonly(FhirDosage),
    /** Optional Extension Element - found in all resources. */
    valueDuration: t.readonly(FhirDuration),
    /** Optional Extension Element - found in all resources. */
    valueExpression: t.readonly(FhirExpression),
    /** Optional Extension Element - found in all resources. */
    valueHumanName: t.readonly(FhirHumanName),
    /** Optional Extension Element - found in all resources. */
    valueId: t.readonly(t.string),
    /** Optional Extension Element - found in all resources. */
    valueIdentifier: t.readonly(FhirIdentifier),
    /** Optional Extension Element - found in all resources. */
    valueInstant: t.readonly(t.string),
    /** Optional Extension Element - found in all resources. */
    valueInteger: t.readonly(t.number),
    /** Optional Extension Element - found in all resources. */
    valueMarkdown: t.readonly(t.string),
    /** Optional Extension Element - found in all resources. */
    valueMeta: t.readonly(FhirMeta),
    /** Optional Extension Element - found in all resources. */
    valueMoney: t.readonly(FhirMoney),
    /** Optional Extension Element - found in all resources. */
    valueOid: t.readonly(t.string),
    /** Optional Extension Element - found in all resources. */
    valueParameterDefinition: t.readonly(FhirParameterDefinition),
    /** Optional Extension Element - found in all resources. */
    valuePeriod: t.readonly(FhirPeriod),
    /** Optional Extension Element - found in all resources. */
    valuePositiveInt: t.readonly(t.number),
    /** Optional Extension Element - found in all resources. */
    valueQuantity: t.readonly(FhirQuantity),
    /** Optional Extension Element - found in all resources. */
    valueRange: t.readonly(FhirRange),
    /** Optional Extension Element - found in all resources. */
    valueRatio: t.readonly(FhirRatio),
    /** Optional Extension Element - found in all resources. */
    valueReference: t.readonly(FhirReference),
    /** Optional Extension Element - found in all resources. */
    valueRelatedArtifact: t.readonly(FhirRelatedArtifact),
    /** Optional Extension Element - found in all resources. */
    valueSampledData: t.readonly(FhirSampledData),
    /** Optional Extension Element - found in all resources. */
    valueSignature: t.readonly(FhirSignature),
    /** Optional Extension Element - found in all resources. */
    valueString: t.readonly(t.string),
    /** Optional Extension Element - found in all resources. */
    valueTime: t.readonly(t.string),
    /** Optional Extension Element - found in all resources. */
    valueTiming: t.readonly(FhirTiming),
    /** Optional Extension Element - found in all resources. */
    valueTriggerDefinition: t.readonly(FhirTriggerDefinition),
    /** Optional Extension Element - found in all resources. */
    valueUnsignedInt: t.readonly(t.number),
    /** Optional Extension Element - found in all resources. */
    valueUri: t.readonly(t.string),
    /** Optional Extension Element - found in all resources. */
    valueUrl: t.readonly(t.string),
    /** Optional Extension Element - found in all resources. */
    valueUsageContext: t.readonly(FhirUsageContext),
    /** Optional Extension Element - found in all resources. */
    valueUuid: t.readonly(t.string),
  })
)

/** Optional Extension Element - found in all resources. */
export interface FhirExtension {
  /** Optional Extension Element - found in all resources. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueBase64Binary?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueCanonical?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueCode?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueDecimal?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueInstant?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueInteger?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueMarkdown?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueOid?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valuePositiveInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueUnsignedInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueUri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueUrl?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueUuid?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  extension?: ReadonlyArray<FhirExtension>
  /** Optional Extension Element - found in all resources. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Optional Extension Element - found in all resources. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Optional Extension Element - found in all resources. */
  valueAddress?: Readonly<t.TypeOf<typeof FhirAddress>>
  /** Optional Extension Element - found in all resources. */
  valueAge?: Readonly<t.TypeOf<typeof FhirAge>>
  /** Optional Extension Element - found in all resources. */
  valueAnnotation?: Readonly<t.TypeOf<typeof FhirAnnotation>>
  /** Optional Extension Element - found in all resources. */
  valueAttachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** Optional Extension Element - found in all resources. */
  valueBase64Binary?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueBoolean?: Readonly<boolean>
  /** Optional Extension Element - found in all resources. */
  valueCanonical?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueCode?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Optional Extension Element - found in all resources. */
  valueCoding?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** Optional Extension Element - found in all resources. */
  valueContactDetail?: Readonly<t.TypeOf<typeof FhirContactDetail>>
  /** Optional Extension Element - found in all resources. */
  valueContactPoint?: Readonly<t.TypeOf<typeof FhirContactPoint>>
  /** Optional Extension Element - found in all resources. */
  valueContributor?: Readonly<t.TypeOf<typeof FhirContributor>>
  /** Optional Extension Element - found in all resources. */
  valueCount?: Readonly<t.TypeOf<typeof FhirCount>>
  /** Optional Extension Element - found in all resources. */
  valueDataRequirement?: Readonly<t.TypeOf<typeof FhirDataRequirement>>
  /** Optional Extension Element - found in all resources. */
  valueDate?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueDateTime?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueDecimal?: Readonly<number>
  /** Optional Extension Element - found in all resources. */
  valueDistance?: Readonly<t.TypeOf<typeof FhirDistance>>
  /** Optional Extension Element - found in all resources. */
  valueDosage?: Readonly<t.TypeOf<typeof FhirDosage>>
  /** Optional Extension Element - found in all resources. */
  valueDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** Optional Extension Element - found in all resources. */
  valueExpression?: Readonly<t.TypeOf<typeof FhirExpression>>
  /** Optional Extension Element - found in all resources. */
  valueHumanName?: Readonly<t.TypeOf<typeof FhirHumanName>>
  /** Optional Extension Element - found in all resources. */
  valueId?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueIdentifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** Optional Extension Element - found in all resources. */
  valueInstant?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueInteger?: Readonly<number>
  /** Optional Extension Element - found in all resources. */
  valueMarkdown?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueMeta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Optional Extension Element - found in all resources. */
  valueMoney?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** Optional Extension Element - found in all resources. */
  valueOid?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueParameterDefinition?: Readonly<t.TypeOf<typeof FhirParameterDefinition>>
  /** Optional Extension Element - found in all resources. */
  valuePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Optional Extension Element - found in all resources. */
  valuePositiveInt?: Readonly<number>
  /** Optional Extension Element - found in all resources. */
  valueQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Optional Extension Element - found in all resources. */
  valueRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** Optional Extension Element - found in all resources. */
  valueRatio?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** Optional Extension Element - found in all resources. */
  valueReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Optional Extension Element - found in all resources. */
  valueRelatedArtifact?: Readonly<t.TypeOf<typeof FhirRelatedArtifact>>
  /** Optional Extension Element - found in all resources. */
  valueSampledData?: Readonly<t.TypeOf<typeof FhirSampledData>>
  /** Optional Extension Element - found in all resources. */
  valueSignature?: Readonly<t.TypeOf<typeof FhirSignature>>
  /** Optional Extension Element - found in all resources. */
  valueString?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueTime?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** Optional Extension Element - found in all resources. */
  valueTriggerDefinition?: Readonly<t.TypeOf<typeof FhirTriggerDefinition>>
  /** Optional Extension Element - found in all resources. */
  valueUnsignedInt?: Readonly<number>
  /** Optional Extension Element - found in all resources. */
  valueUri?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueUrl?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueUsageContext?: Readonly<t.TypeOf<typeof FhirUsageContext>>
  /** Optional Extension Element - found in all resources. */
  valueUuid?: Readonly<string>
}
/** Optional Extension Element - found in all resources. */
export interface FhirExtensionOutput {
  /** Optional Extension Element - found in all resources. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueBase64Binary?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueCanonical?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueCode?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueDecimal?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueInstant?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueInteger?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueMarkdown?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueOid?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valuePositiveInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueUnsignedInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueUri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueUrl?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  _valueUuid?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Optional Extension Element - found in all resources. */
  extension?: ReadonlyArray<FhirExtensionOutput>
  /** Optional Extension Element - found in all resources. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Optional Extension Element - found in all resources. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Optional Extension Element - found in all resources. */
  valueAddress?: Readonly<t.OutputOf<typeof FhirAddress>>
  /** Optional Extension Element - found in all resources. */
  valueAge?: Readonly<t.OutputOf<typeof FhirAge>>
  /** Optional Extension Element - found in all resources. */
  valueAnnotation?: Readonly<t.OutputOf<typeof FhirAnnotation>>
  /** Optional Extension Element - found in all resources. */
  valueAttachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** Optional Extension Element - found in all resources. */
  valueBase64Binary?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueBoolean?: Readonly<boolean>
  /** Optional Extension Element - found in all resources. */
  valueCanonical?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueCode?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Optional Extension Element - found in all resources. */
  valueCoding?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** Optional Extension Element - found in all resources. */
  valueContactDetail?: Readonly<t.OutputOf<typeof FhirContactDetail>>
  /** Optional Extension Element - found in all resources. */
  valueContactPoint?: Readonly<t.OutputOf<typeof FhirContactPoint>>
  /** Optional Extension Element - found in all resources. */
  valueContributor?: Readonly<t.OutputOf<typeof FhirContributor>>
  /** Optional Extension Element - found in all resources. */
  valueCount?: Readonly<t.OutputOf<typeof FhirCount>>
  /** Optional Extension Element - found in all resources. */
  valueDataRequirement?: Readonly<t.OutputOf<typeof FhirDataRequirement>>
  /** Optional Extension Element - found in all resources. */
  valueDate?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueDateTime?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueDecimal?: Readonly<number>
  /** Optional Extension Element - found in all resources. */
  valueDistance?: Readonly<t.OutputOf<typeof FhirDistance>>
  /** Optional Extension Element - found in all resources. */
  valueDosage?: Readonly<t.OutputOf<typeof FhirDosage>>
  /** Optional Extension Element - found in all resources. */
  valueDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** Optional Extension Element - found in all resources. */
  valueExpression?: Readonly<t.OutputOf<typeof FhirExpression>>
  /** Optional Extension Element - found in all resources. */
  valueHumanName?: Readonly<t.OutputOf<typeof FhirHumanName>>
  /** Optional Extension Element - found in all resources. */
  valueId?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueIdentifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** Optional Extension Element - found in all resources. */
  valueInstant?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueInteger?: Readonly<number>
  /** Optional Extension Element - found in all resources. */
  valueMarkdown?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueMeta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Optional Extension Element - found in all resources. */
  valueMoney?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** Optional Extension Element - found in all resources. */
  valueOid?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueParameterDefinition?: Readonly<t.OutputOf<typeof FhirParameterDefinition>>
  /** Optional Extension Element - found in all resources. */
  valuePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Optional Extension Element - found in all resources. */
  valuePositiveInt?: Readonly<number>
  /** Optional Extension Element - found in all resources. */
  valueQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Optional Extension Element - found in all resources. */
  valueRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** Optional Extension Element - found in all resources. */
  valueRatio?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** Optional Extension Element - found in all resources. */
  valueReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Optional Extension Element - found in all resources. */
  valueRelatedArtifact?: Readonly<t.OutputOf<typeof FhirRelatedArtifact>>
  /** Optional Extension Element - found in all resources. */
  valueSampledData?: Readonly<t.OutputOf<typeof FhirSampledData>>
  /** Optional Extension Element - found in all resources. */
  valueSignature?: Readonly<t.OutputOf<typeof FhirSignature>>
  /** Optional Extension Element - found in all resources. */
  valueString?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueTime?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** Optional Extension Element - found in all resources. */
  valueTriggerDefinition?: Readonly<t.OutputOf<typeof FhirTriggerDefinition>>
  /** Optional Extension Element - found in all resources. */
  valueUnsignedInt?: Readonly<number>
  /** Optional Extension Element - found in all resources. */
  valueUri?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueUrl?: Readonly<string>
  /** Optional Extension Element - found in all resources. */
  valueUsageContext?: Readonly<t.OutputOf<typeof FhirUsageContext>>
  /** Optional Extension Element - found in all resources. */
  valueUuid?: Readonly<string>
}
