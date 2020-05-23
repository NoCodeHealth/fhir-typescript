import * as t from 'io-ts'
import { FhirAddress } from './FhirAddress'
import { FhirAge } from './FhirAge'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirAttachment } from './FhirAttachment'
import { FhirBoolean } from './FhirBoolean'
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
import { FhirElementDefinition_Base } from './FhirElementDefinition_Base'
import { FhirElementDefinition_Binding } from './FhirElementDefinition_Binding'
import { FhirElementDefinition_Constraint } from './FhirElementDefinition_Constraint'
import { FhirElementDefinition_Example } from './FhirElementDefinition_Example'
import { FhirElementDefinition_Mapping } from './FhirElementDefinition_Mapping'
import { FhirElementDefinition_Slicing } from './FhirElementDefinition_Slicing'
import { FhirElementDefinition_Type } from './FhirElementDefinition_Type'
import { FhirExpression } from './FhirExpression'
import { FhirExtension } from './FhirExtension'
import { FhirHumanName } from './FhirHumanName'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirInteger } from './FhirInteger'
import { FhirMarkdown } from './FhirMarkdown'
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
import { FhirUnsignedInt } from './FhirUnsignedInt'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** Captures constraints on each element within the resource, profile, or extension. */
export const FhirElementDefinition: t.Type<FhirElementDefinition, FhirElementDefinitionOutput> = t.recursion(
  'FhirElementDefinition',
  () =>
    t.partial({
      /** Captures constraints on each element within the resource, profile, or extension. */
      _alias: t.readonlyArray(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _comment: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _condition: t.readonlyArray(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _contentReference: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValueBase64Binary: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValueBoolean: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValueCanonical: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValueCode: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValueDate: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValueDateTime: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValueDecimal: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValueId: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValueInstant: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValueInteger: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValueMarkdown: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValueOid: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValuePositiveInt: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValueString: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValueTime: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValueUnsignedInt: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValueUri: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValueUrl: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _defaultValueUuid: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _definition: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedBase64Binary: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedBoolean: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedCanonical: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedCode: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedDate: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedDateTime: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedDecimal: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedId: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedInstant: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedInteger: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedMarkdown: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedOid: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedPositiveInt: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedString: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedTime: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedUnsignedInt: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedUri: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedUrl: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _fixedUuid: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _isModifier: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _isModifierReason: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _isSummary: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _label: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _max: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _maxLength: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _maxValueDate: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _maxValueDateTime: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _maxValueDecimal: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _maxValueInstant: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _maxValueInteger: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _maxValuePositiveInt: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _maxValueTime: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _maxValueUnsignedInt: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _meaningWhenMissing: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _min: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _minValueDate: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _minValueDateTime: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _minValueDecimal: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _minValueInstant: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _minValueInteger: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _minValuePositiveInt: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _minValueTime: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _minValueUnsignedInt: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _mustSupport: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _orderMeaning: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _path: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternBase64Binary: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternBoolean: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternCanonical: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternCode: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternDate: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternDateTime: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternDecimal: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternId: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternInstant: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternInteger: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternMarkdown: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternOid: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternPositiveInt: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternString: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternTime: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternUnsignedInt: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternUri: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternUrl: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _patternUuid: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _representation: t.readonlyArray(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _requirements: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _short: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _sliceIsConstraining: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      _sliceName: t.readonly(FhirElement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      alias: t.readonlyArray(FhirString),
      /** Captures constraints on each element within the resource, profile, or extension. */
      base: t.readonly(FhirElementDefinition_Base),
      /** Captures constraints on each element within the resource, profile, or extension. */
      binding: t.readonly(FhirElementDefinition_Binding),
      /** Captures constraints on each element within the resource, profile, or extension. */
      code: t.readonlyArray(FhirCoding),
      /** Captures constraints on each element within the resource, profile, or extension. */
      comment: t.readonly(FhirMarkdown),
      /** Captures constraints on each element within the resource, profile, or extension. */
      condition: t.readonlyArray(FhirId),
      /** Captures constraints on each element within the resource, profile, or extension. */
      constraint: t.readonlyArray(FhirElementDefinition_Constraint),
      /** Captures constraints on each element within the resource, profile, or extension. */
      contentReference: t.readonly(FhirUri),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueAddress: t.readonly(FhirAddress),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueAge: t.readonly(FhirAge),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueAnnotation: t.readonly(FhirAnnotation),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueAttachment: t.readonly(FhirAttachment),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueBase64Binary: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueBoolean: t.readonly(t.boolean),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueCanonical: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueCode: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueCodeableConcept: t.readonly(FhirCodeableConcept),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueCoding: t.readonly(FhirCoding),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueContactDetail: t.readonly(FhirContactDetail),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueContactPoint: t.readonly(FhirContactPoint),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueContributor: t.readonly(FhirContributor),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueCount: t.readonly(FhirCount),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueDataRequirement: t.readonly(FhirDataRequirement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueDate: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueDateTime: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueDecimal: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueDistance: t.readonly(FhirDistance),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueDosage: t.readonly(FhirDosage),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueDuration: t.readonly(FhirDuration),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueExpression: t.readonly(FhirExpression),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueHumanName: t.readonly(FhirHumanName),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueId: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueIdentifier: t.readonly(FhirIdentifier),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueInstant: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueInteger: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueMarkdown: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueMeta: t.readonly(FhirMeta),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueMoney: t.readonly(FhirMoney),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueOid: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueParameterDefinition: t.readonly(FhirParameterDefinition),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValuePeriod: t.readonly(FhirPeriod),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValuePositiveInt: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueQuantity: t.readonly(FhirQuantity),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueRange: t.readonly(FhirRange),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueRatio: t.readonly(FhirRatio),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueReference: t.readonly(FhirReference),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueRelatedArtifact: t.readonly(FhirRelatedArtifact),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueSampledData: t.readonly(FhirSampledData),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueSignature: t.readonly(FhirSignature),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueString: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueTime: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueTiming: t.readonly(FhirTiming),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueTriggerDefinition: t.readonly(FhirTriggerDefinition),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueUnsignedInt: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueUri: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueUrl: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueUsageContext: t.readonly(FhirUsageContext),
      /** Captures constraints on each element within the resource, profile, or extension. */
      defaultValueUuid: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      definition: t.readonly(FhirMarkdown),
      /** Captures constraints on each element within the resource, profile, or extension. */
      example: t.readonlyArray(FhirElementDefinition_Example),
      /** Captures constraints on each element within the resource, profile, or extension. */
      extension: t.readonlyArray(FhirExtension),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedAddress: t.readonly(FhirAddress),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedAge: t.readonly(FhirAge),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedAnnotation: t.readonly(FhirAnnotation),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedAttachment: t.readonly(FhirAttachment),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedBase64Binary: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedBoolean: t.readonly(t.boolean),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedCanonical: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedCode: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedCodeableConcept: t.readonly(FhirCodeableConcept),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedCoding: t.readonly(FhirCoding),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedContactDetail: t.readonly(FhirContactDetail),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedContactPoint: t.readonly(FhirContactPoint),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedContributor: t.readonly(FhirContributor),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedCount: t.readonly(FhirCount),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedDataRequirement: t.readonly(FhirDataRequirement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedDate: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedDateTime: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedDecimal: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedDistance: t.readonly(FhirDistance),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedDosage: t.readonly(FhirDosage),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedDuration: t.readonly(FhirDuration),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedExpression: t.readonly(FhirExpression),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedHumanName: t.readonly(FhirHumanName),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedId: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedIdentifier: t.readonly(FhirIdentifier),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedInstant: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedInteger: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedMarkdown: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedMeta: t.readonly(FhirMeta),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedMoney: t.readonly(FhirMoney),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedOid: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedParameterDefinition: t.readonly(FhirParameterDefinition),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedPeriod: t.readonly(FhirPeriod),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedPositiveInt: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedQuantity: t.readonly(FhirQuantity),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedRange: t.readonly(FhirRange),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedRatio: t.readonly(FhirRatio),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedReference: t.readonly(FhirReference),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedRelatedArtifact: t.readonly(FhirRelatedArtifact),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedSampledData: t.readonly(FhirSampledData),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedSignature: t.readonly(FhirSignature),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedString: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedTime: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedTiming: t.readonly(FhirTiming),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedTriggerDefinition: t.readonly(FhirTriggerDefinition),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedUnsignedInt: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedUri: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedUrl: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedUsageContext: t.readonly(FhirUsageContext),
      /** Captures constraints on each element within the resource, profile, or extension. */
      fixedUuid: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      id: t.readonly(FhirString),
      /** Captures constraints on each element within the resource, profile, or extension. */
      isModifier: t.readonly(FhirBoolean),
      /** Captures constraints on each element within the resource, profile, or extension. */
      isModifierReason: t.readonly(FhirString),
      /** Captures constraints on each element within the resource, profile, or extension. */
      isSummary: t.readonly(FhirBoolean),
      /** Captures constraints on each element within the resource, profile, or extension. */
      label: t.readonly(FhirString),
      /** Captures constraints on each element within the resource, profile, or extension. */
      mapping: t.readonlyArray(FhirElementDefinition_Mapping),
      /** Captures constraints on each element within the resource, profile, or extension. */
      max: t.readonly(FhirString),
      /** Captures constraints on each element within the resource, profile, or extension. */
      maxLength: t.readonly(FhirInteger),
      /** Captures constraints on each element within the resource, profile, or extension. */
      maxValueDate: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      maxValueDateTime: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      maxValueDecimal: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      maxValueInstant: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      maxValueInteger: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      maxValuePositiveInt: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      maxValueQuantity: t.readonly(FhirQuantity),
      /** Captures constraints on each element within the resource, profile, or extension. */
      maxValueTime: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      maxValueUnsignedInt: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      meaningWhenMissing: t.readonly(FhirMarkdown),
      /** Captures constraints on each element within the resource, profile, or extension. */
      min: t.readonly(FhirUnsignedInt),
      /** Captures constraints on each element within the resource, profile, or extension. */
      minValueDate: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      minValueDateTime: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      minValueDecimal: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      minValueInstant: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      minValueInteger: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      minValuePositiveInt: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      minValueQuantity: t.readonly(FhirQuantity),
      /** Captures constraints on each element within the resource, profile, or extension. */
      minValueTime: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      minValueUnsignedInt: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Captures constraints on each element within the resource, profile, or extension. */
      mustSupport: t.readonly(FhirBoolean),
      /** Captures constraints on each element within the resource, profile, or extension. */
      orderMeaning: t.readonly(FhirString),
      /** Captures constraints on each element within the resource, profile, or extension. */
      path: t.readonly(FhirString),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternAddress: t.readonly(FhirAddress),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternAge: t.readonly(FhirAge),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternAnnotation: t.readonly(FhirAnnotation),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternAttachment: t.readonly(FhirAttachment),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternBase64Binary: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternBoolean: t.readonly(t.boolean),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternCanonical: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternCode: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternCodeableConcept: t.readonly(FhirCodeableConcept),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternCoding: t.readonly(FhirCoding),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternContactDetail: t.readonly(FhirContactDetail),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternContactPoint: t.readonly(FhirContactPoint),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternContributor: t.readonly(FhirContributor),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternCount: t.readonly(FhirCount),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternDataRequirement: t.readonly(FhirDataRequirement),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternDate: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternDateTime: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternDecimal: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternDistance: t.readonly(FhirDistance),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternDosage: t.readonly(FhirDosage),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternDuration: t.readonly(FhirDuration),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternExpression: t.readonly(FhirExpression),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternHumanName: t.readonly(FhirHumanName),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternId: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternIdentifier: t.readonly(FhirIdentifier),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternInstant: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternInteger: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternMarkdown: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternMeta: t.readonly(FhirMeta),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternMoney: t.readonly(FhirMoney),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternOid: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternParameterDefinition: t.readonly(FhirParameterDefinition),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternPeriod: t.readonly(FhirPeriod),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternPositiveInt: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternQuantity: t.readonly(FhirQuantity),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternRange: t.readonly(FhirRange),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternRatio: t.readonly(FhirRatio),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternReference: t.readonly(FhirReference),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternRelatedArtifact: t.readonly(FhirRelatedArtifact),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternSampledData: t.readonly(FhirSampledData),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternSignature: t.readonly(FhirSignature),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternString: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternTime: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternTiming: t.readonly(FhirTiming),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternTriggerDefinition: t.readonly(FhirTriggerDefinition),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternUnsignedInt: t.readonly(t.number),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternUri: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternUrl: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternUsageContext: t.readonly(FhirUsageContext),
      /** Captures constraints on each element within the resource, profile, or extension. */
      patternUuid: t.readonly(t.string),
      /** Captures constraints on each element within the resource, profile, or extension. */
      representation: t.readonlyArray(
        t.keyof({
          xmlAttr: null,
          xmlText: null,
          typeAttr: null,
          cdaText: null,
          xhtml: null,
        })
      ),
      /** Captures constraints on each element within the resource, profile, or extension. */
      requirements: t.readonly(FhirMarkdown),
      /** Captures constraints on each element within the resource, profile, or extension. */
      short: t.readonly(FhirString),
      /** Captures constraints on each element within the resource, profile, or extension. */
      sliceIsConstraining: t.readonly(FhirBoolean),
      /** Captures constraints on each element within the resource, profile, or extension. */
      sliceName: t.readonly(FhirString),
      /** Captures constraints on each element within the resource, profile, or extension. */
      slicing: t.readonly(FhirElementDefinition_Slicing),
      /** Captures constraints on each element within the resource, profile, or extension. */
      type: t.readonlyArray(FhirElementDefinition_Type),
    })
)

/** Captures constraints on each element within the resource, profile, or extension. */
export interface FhirElementDefinition {
  /** Captures constraints on each element within the resource, profile, or extension. */
  _alias?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _comment?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _condition?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _contentReference?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueBase64Binary?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueCanonical?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueCode?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueDecimal?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueInstant?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueInteger?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueMarkdown?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueOid?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValuePositiveInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueUnsignedInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueUri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueUrl?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueUuid?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _definition?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedBase64Binary?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedCanonical?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedCode?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedDecimal?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedInstant?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedInteger?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedMarkdown?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedOid?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedPositiveInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedUnsignedInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedUri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedUrl?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedUuid?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _isModifier?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _isModifierReason?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _isSummary?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _label?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _max?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _maxLength?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _maxValueDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _maxValueDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _maxValueDecimal?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _maxValueInstant?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _maxValueInteger?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _maxValuePositiveInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _maxValueTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _maxValueUnsignedInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _meaningWhenMissing?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _min?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _minValueDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _minValueDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _minValueDecimal?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _minValueInstant?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _minValueInteger?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _minValuePositiveInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _minValueTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _minValueUnsignedInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _mustSupport?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _orderMeaning?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _path?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternBase64Binary?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternCanonical?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternCode?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternDecimal?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternInstant?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternInteger?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternMarkdown?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternOid?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternPositiveInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternUnsignedInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternUri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternUrl?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternUuid?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _representation?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _requirements?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _short?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _sliceIsConstraining?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _sliceName?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  alias?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  base?: Readonly<t.TypeOf<typeof FhirElementDefinition_Base>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  binding?: Readonly<t.TypeOf<typeof FhirElementDefinition_Binding>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  code?: ReadonlyArray<t.TypeOf<typeof FhirCoding>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  comment?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  condition?: ReadonlyArray<t.TypeOf<typeof FhirId>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  constraint?: ReadonlyArray<t.TypeOf<typeof FhirElementDefinition_Constraint>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  contentReference?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueAddress?: Readonly<t.TypeOf<typeof FhirAddress>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueAge?: Readonly<t.TypeOf<typeof FhirAge>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueAnnotation?: Readonly<t.TypeOf<typeof FhirAnnotation>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueAttachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueBase64Binary?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueBoolean?: Readonly<boolean>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueCanonical?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueCode?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueCoding?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueContactDetail?: Readonly<t.TypeOf<typeof FhirContactDetail>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueContactPoint?: Readonly<t.TypeOf<typeof FhirContactPoint>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueContributor?: Readonly<t.TypeOf<typeof FhirContributor>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueCount?: Readonly<t.TypeOf<typeof FhirCount>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueDataRequirement?: Readonly<t.TypeOf<typeof FhirDataRequirement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueDate?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueDateTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueDecimal?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueDistance?: Readonly<t.TypeOf<typeof FhirDistance>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueDosage?: Readonly<t.TypeOf<typeof FhirDosage>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueExpression?: Readonly<t.TypeOf<typeof FhirExpression>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueHumanName?: Readonly<t.TypeOf<typeof FhirHumanName>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueId?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueIdentifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueInstant?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueInteger?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueMarkdown?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueMeta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueMoney?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueOid?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueParameterDefinition?: Readonly<t.TypeOf<typeof FhirParameterDefinition>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValuePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValuePositiveInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueRatio?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueRelatedArtifact?: Readonly<t.TypeOf<typeof FhirRelatedArtifact>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueSampledData?: Readonly<t.TypeOf<typeof FhirSampledData>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueSignature?: Readonly<t.TypeOf<typeof FhirSignature>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueString?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueTriggerDefinition?: Readonly<t.TypeOf<typeof FhirTriggerDefinition>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueUnsignedInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueUri?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueUrl?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueUsageContext?: Readonly<t.TypeOf<typeof FhirUsageContext>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueUuid?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  definition?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  example?: ReadonlyArray<t.TypeOf<typeof FhirElementDefinition_Example>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedAddress?: Readonly<t.TypeOf<typeof FhirAddress>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedAge?: Readonly<t.TypeOf<typeof FhirAge>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedAnnotation?: Readonly<t.TypeOf<typeof FhirAnnotation>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedAttachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedBase64Binary?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedBoolean?: Readonly<boolean>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedCanonical?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedCode?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedCoding?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedContactDetail?: Readonly<t.TypeOf<typeof FhirContactDetail>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedContactPoint?: Readonly<t.TypeOf<typeof FhirContactPoint>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedContributor?: Readonly<t.TypeOf<typeof FhirContributor>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedCount?: Readonly<t.TypeOf<typeof FhirCount>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedDataRequirement?: Readonly<t.TypeOf<typeof FhirDataRequirement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedDate?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedDateTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedDecimal?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedDistance?: Readonly<t.TypeOf<typeof FhirDistance>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedDosage?: Readonly<t.TypeOf<typeof FhirDosage>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedExpression?: Readonly<t.TypeOf<typeof FhirExpression>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedHumanName?: Readonly<t.TypeOf<typeof FhirHumanName>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedId?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedIdentifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedInstant?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedInteger?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedMarkdown?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedMeta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedMoney?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedOid?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedParameterDefinition?: Readonly<t.TypeOf<typeof FhirParameterDefinition>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedPositiveInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedRatio?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedRelatedArtifact?: Readonly<t.TypeOf<typeof FhirRelatedArtifact>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedSampledData?: Readonly<t.TypeOf<typeof FhirSampledData>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedSignature?: Readonly<t.TypeOf<typeof FhirSignature>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedString?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedTriggerDefinition?: Readonly<t.TypeOf<typeof FhirTriggerDefinition>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedUnsignedInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedUri?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedUrl?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedUsageContext?: Readonly<t.TypeOf<typeof FhirUsageContext>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedUuid?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  isModifier?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  isModifierReason?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  isSummary?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  label?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  mapping?: ReadonlyArray<t.TypeOf<typeof FhirElementDefinition_Mapping>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  max?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxLength?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxValueDate?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxValueDateTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxValueDecimal?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxValueInstant?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxValueInteger?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxValuePositiveInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxValueQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxValueTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxValueUnsignedInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  meaningWhenMissing?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  min?: Readonly<t.TypeOf<typeof FhirUnsignedInt>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  minValueDate?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  minValueDateTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  minValueDecimal?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  minValueInstant?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  minValueInteger?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  minValuePositiveInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  minValueQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  minValueTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  minValueUnsignedInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  mustSupport?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  orderMeaning?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  path?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternAddress?: Readonly<t.TypeOf<typeof FhirAddress>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternAge?: Readonly<t.TypeOf<typeof FhirAge>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternAnnotation?: Readonly<t.TypeOf<typeof FhirAnnotation>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternAttachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternBase64Binary?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternBoolean?: Readonly<boolean>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternCanonical?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternCode?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternCoding?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternContactDetail?: Readonly<t.TypeOf<typeof FhirContactDetail>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternContactPoint?: Readonly<t.TypeOf<typeof FhirContactPoint>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternContributor?: Readonly<t.TypeOf<typeof FhirContributor>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternCount?: Readonly<t.TypeOf<typeof FhirCount>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternDataRequirement?: Readonly<t.TypeOf<typeof FhirDataRequirement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternDate?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternDateTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternDecimal?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternDistance?: Readonly<t.TypeOf<typeof FhirDistance>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternDosage?: Readonly<t.TypeOf<typeof FhirDosage>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternExpression?: Readonly<t.TypeOf<typeof FhirExpression>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternHumanName?: Readonly<t.TypeOf<typeof FhirHumanName>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternId?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternIdentifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternInstant?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternInteger?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternMarkdown?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternMeta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternMoney?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternOid?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternParameterDefinition?: Readonly<t.TypeOf<typeof FhirParameterDefinition>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternPositiveInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternRatio?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternRelatedArtifact?: Readonly<t.TypeOf<typeof FhirRelatedArtifact>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternSampledData?: Readonly<t.TypeOf<typeof FhirSampledData>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternSignature?: Readonly<t.TypeOf<typeof FhirSignature>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternString?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternTriggerDefinition?: Readonly<t.TypeOf<typeof FhirTriggerDefinition>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternUnsignedInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternUri?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternUrl?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternUsageContext?: Readonly<t.TypeOf<typeof FhirUsageContext>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternUuid?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  representation?: ReadonlyArray<'xmlAttr' | 'xmlText' | 'typeAttr' | 'cdaText' | 'xhtml'>
  /** Captures constraints on each element within the resource, profile, or extension. */
  requirements?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  short?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  sliceIsConstraining?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  sliceName?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  slicing?: Readonly<t.TypeOf<typeof FhirElementDefinition_Slicing>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  type?: ReadonlyArray<t.TypeOf<typeof FhirElementDefinition_Type>>
}
/** Captures constraints on each element within the resource, profile, or extension. */
export interface FhirElementDefinitionOutput {
  /** Captures constraints on each element within the resource, profile, or extension. */
  _alias?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _comment?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _condition?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _contentReference?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueBase64Binary?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueCanonical?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueCode?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueDecimal?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueInstant?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueInteger?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueMarkdown?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueOid?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValuePositiveInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueUnsignedInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueUri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueUrl?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _defaultValueUuid?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _definition?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedBase64Binary?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedCanonical?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedCode?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedDecimal?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedInstant?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedInteger?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedMarkdown?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedOid?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedPositiveInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedUnsignedInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedUri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedUrl?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _fixedUuid?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _isModifier?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _isModifierReason?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _isSummary?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _label?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _max?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _maxLength?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _maxValueDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _maxValueDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _maxValueDecimal?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _maxValueInstant?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _maxValueInteger?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _maxValuePositiveInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _maxValueTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _maxValueUnsignedInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _meaningWhenMissing?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _min?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _minValueDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _minValueDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _minValueDecimal?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _minValueInstant?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _minValueInteger?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _minValuePositiveInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _minValueTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _minValueUnsignedInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _mustSupport?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _orderMeaning?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _path?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternBase64Binary?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternCanonical?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternCode?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternDecimal?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternInstant?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternInteger?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternMarkdown?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternOid?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternPositiveInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternUnsignedInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternUri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternUrl?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _patternUuid?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _representation?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _requirements?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _short?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _sliceIsConstraining?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _sliceName?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  alias?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  base?: Readonly<t.OutputOf<typeof FhirElementDefinition_Base>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  binding?: Readonly<t.OutputOf<typeof FhirElementDefinition_Binding>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  code?: ReadonlyArray<t.OutputOf<typeof FhirCoding>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  comment?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  condition?: ReadonlyArray<t.OutputOf<typeof FhirId>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  constraint?: ReadonlyArray<t.OutputOf<typeof FhirElementDefinition_Constraint>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  contentReference?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueAddress?: Readonly<t.OutputOf<typeof FhirAddress>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueAge?: Readonly<t.OutputOf<typeof FhirAge>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueAnnotation?: Readonly<t.OutputOf<typeof FhirAnnotation>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueAttachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueBase64Binary?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueBoolean?: Readonly<boolean>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueCanonical?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueCode?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueCoding?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueContactDetail?: Readonly<t.OutputOf<typeof FhirContactDetail>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueContactPoint?: Readonly<t.OutputOf<typeof FhirContactPoint>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueContributor?: Readonly<t.OutputOf<typeof FhirContributor>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueCount?: Readonly<t.OutputOf<typeof FhirCount>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueDataRequirement?: Readonly<t.OutputOf<typeof FhirDataRequirement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueDate?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueDateTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueDecimal?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueDistance?: Readonly<t.OutputOf<typeof FhirDistance>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueDosage?: Readonly<t.OutputOf<typeof FhirDosage>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueExpression?: Readonly<t.OutputOf<typeof FhirExpression>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueHumanName?: Readonly<t.OutputOf<typeof FhirHumanName>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueId?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueIdentifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueInstant?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueInteger?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueMarkdown?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueMeta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueMoney?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueOid?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueParameterDefinition?: Readonly<t.OutputOf<typeof FhirParameterDefinition>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValuePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValuePositiveInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueRatio?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueRelatedArtifact?: Readonly<t.OutputOf<typeof FhirRelatedArtifact>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueSampledData?: Readonly<t.OutputOf<typeof FhirSampledData>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueSignature?: Readonly<t.OutputOf<typeof FhirSignature>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueString?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueTriggerDefinition?: Readonly<t.OutputOf<typeof FhirTriggerDefinition>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueUnsignedInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueUri?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueUrl?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueUsageContext?: Readonly<t.OutputOf<typeof FhirUsageContext>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  defaultValueUuid?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  definition?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  example?: ReadonlyArray<t.OutputOf<typeof FhirElementDefinition_Example>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedAddress?: Readonly<t.OutputOf<typeof FhirAddress>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedAge?: Readonly<t.OutputOf<typeof FhirAge>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedAnnotation?: Readonly<t.OutputOf<typeof FhirAnnotation>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedAttachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedBase64Binary?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedBoolean?: Readonly<boolean>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedCanonical?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedCode?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedCoding?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedContactDetail?: Readonly<t.OutputOf<typeof FhirContactDetail>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedContactPoint?: Readonly<t.OutputOf<typeof FhirContactPoint>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedContributor?: Readonly<t.OutputOf<typeof FhirContributor>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedCount?: Readonly<t.OutputOf<typeof FhirCount>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedDataRequirement?: Readonly<t.OutputOf<typeof FhirDataRequirement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedDate?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedDateTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedDecimal?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedDistance?: Readonly<t.OutputOf<typeof FhirDistance>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedDosage?: Readonly<t.OutputOf<typeof FhirDosage>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedExpression?: Readonly<t.OutputOf<typeof FhirExpression>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedHumanName?: Readonly<t.OutputOf<typeof FhirHumanName>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedId?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedIdentifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedInstant?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedInteger?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedMarkdown?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedMeta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedMoney?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedOid?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedParameterDefinition?: Readonly<t.OutputOf<typeof FhirParameterDefinition>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedPositiveInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedRatio?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedRelatedArtifact?: Readonly<t.OutputOf<typeof FhirRelatedArtifact>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedSampledData?: Readonly<t.OutputOf<typeof FhirSampledData>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedSignature?: Readonly<t.OutputOf<typeof FhirSignature>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedString?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedTriggerDefinition?: Readonly<t.OutputOf<typeof FhirTriggerDefinition>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedUnsignedInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedUri?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedUrl?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedUsageContext?: Readonly<t.OutputOf<typeof FhirUsageContext>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  fixedUuid?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  isModifier?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  isModifierReason?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  isSummary?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  label?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  mapping?: ReadonlyArray<t.OutputOf<typeof FhirElementDefinition_Mapping>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  max?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxLength?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxValueDate?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxValueDateTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxValueDecimal?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxValueInstant?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxValueInteger?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxValuePositiveInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxValueQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxValueTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  maxValueUnsignedInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  meaningWhenMissing?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  min?: Readonly<t.OutputOf<typeof FhirUnsignedInt>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  minValueDate?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  minValueDateTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  minValueDecimal?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  minValueInstant?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  minValueInteger?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  minValuePositiveInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  minValueQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  minValueTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  minValueUnsignedInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  mustSupport?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  orderMeaning?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  path?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternAddress?: Readonly<t.OutputOf<typeof FhirAddress>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternAge?: Readonly<t.OutputOf<typeof FhirAge>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternAnnotation?: Readonly<t.OutputOf<typeof FhirAnnotation>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternAttachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternBase64Binary?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternBoolean?: Readonly<boolean>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternCanonical?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternCode?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternCoding?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternContactDetail?: Readonly<t.OutputOf<typeof FhirContactDetail>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternContactPoint?: Readonly<t.OutputOf<typeof FhirContactPoint>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternContributor?: Readonly<t.OutputOf<typeof FhirContributor>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternCount?: Readonly<t.OutputOf<typeof FhirCount>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternDataRequirement?: Readonly<t.OutputOf<typeof FhirDataRequirement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternDate?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternDateTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternDecimal?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternDistance?: Readonly<t.OutputOf<typeof FhirDistance>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternDosage?: Readonly<t.OutputOf<typeof FhirDosage>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternExpression?: Readonly<t.OutputOf<typeof FhirExpression>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternHumanName?: Readonly<t.OutputOf<typeof FhirHumanName>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternId?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternIdentifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternInstant?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternInteger?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternMarkdown?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternMeta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternMoney?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternOid?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternParameterDefinition?: Readonly<t.OutputOf<typeof FhirParameterDefinition>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternPositiveInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternRatio?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternRelatedArtifact?: Readonly<t.OutputOf<typeof FhirRelatedArtifact>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternSampledData?: Readonly<t.OutputOf<typeof FhirSampledData>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternSignature?: Readonly<t.OutputOf<typeof FhirSignature>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternString?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternTime?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternTriggerDefinition?: Readonly<t.OutputOf<typeof FhirTriggerDefinition>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternUnsignedInt?: Readonly<number>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternUri?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternUrl?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternUsageContext?: Readonly<t.OutputOf<typeof FhirUsageContext>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  patternUuid?: Readonly<string>
  /** Captures constraints on each element within the resource, profile, or extension. */
  representation?: ReadonlyArray<'xmlAttr' | 'xmlText' | 'typeAttr' | 'cdaText' | 'xhtml'>
  /** Captures constraints on each element within the resource, profile, or extension. */
  requirements?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  short?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  sliceIsConstraining?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  sliceName?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  slicing?: Readonly<t.OutputOf<typeof FhirElementDefinition_Slicing>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  type?: ReadonlyArray<t.OutputOf<typeof FhirElementDefinition_Type>>
}
