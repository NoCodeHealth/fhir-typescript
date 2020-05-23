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
import { FhirResourceList } from './FhirResourceList'
import { FhirSampledData } from './FhirSampledData'
import { FhirSignature } from './FhirSignature'
import { FhirString } from './FhirString'
import { FhirTiming } from './FhirTiming'
import { FhirTriggerDefinition } from './FhirTriggerDefinition'
import { FhirUsageContext } from './FhirUsageContext'

/** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
export const FhirParameters_Parameter: t.Type<FhirParameters_Parameter, FhirParameters_ParameterOutput> = t.recursion(
  'FhirParameters_Parameter',
  () =>
    t.partial({
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _name: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valueBase64Binary: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valueBoolean: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valueCanonical: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valueCode: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valueDate: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valueDateTime: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valueDecimal: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valueId: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valueInstant: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valueInteger: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valueMarkdown: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valueOid: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valuePositiveInt: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valueString: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valueTime: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valueUnsignedInt: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valueUri: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valueUrl: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _valueUuid: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      extension: t.readonlyArray(FhirExtension),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      id: t.readonly(FhirString),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      name: t.readonly(FhirString),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      part: t.readonlyArray(FhirParameters_Parameter),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      resource: t.readonly(FhirResourceList),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueAddress: t.readonly(FhirAddress),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueAge: t.readonly(FhirAge),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueAnnotation: t.readonly(FhirAnnotation),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueAttachment: t.readonly(FhirAttachment),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueBase64Binary: t.readonly(t.string),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueBoolean: t.readonly(t.boolean),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueCanonical: t.readonly(t.string),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueCode: t.readonly(t.string),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueCodeableConcept: t.readonly(FhirCodeableConcept),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueCoding: t.readonly(FhirCoding),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueContactDetail: t.readonly(FhirContactDetail),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueContactPoint: t.readonly(FhirContactPoint),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueContributor: t.readonly(FhirContributor),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueCount: t.readonly(FhirCount),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueDataRequirement: t.readonly(FhirDataRequirement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueDate: t.readonly(t.string),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueDateTime: t.readonly(t.string),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueDecimal: t.readonly(t.number),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueDistance: t.readonly(FhirDistance),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueDosage: t.readonly(FhirDosage),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueDuration: t.readonly(FhirDuration),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueExpression: t.readonly(FhirExpression),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueHumanName: t.readonly(FhirHumanName),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueId: t.readonly(t.string),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueIdentifier: t.readonly(FhirIdentifier),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueInstant: t.readonly(t.string),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueInteger: t.readonly(t.number),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueMarkdown: t.readonly(t.string),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueMeta: t.readonly(FhirMeta),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueMoney: t.readonly(FhirMoney),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueOid: t.readonly(t.string),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueParameterDefinition: t.readonly(FhirParameterDefinition),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valuePeriod: t.readonly(FhirPeriod),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valuePositiveInt: t.readonly(t.number),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueQuantity: t.readonly(FhirQuantity),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueRange: t.readonly(FhirRange),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueRatio: t.readonly(FhirRatio),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueReference: t.readonly(FhirReference),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueRelatedArtifact: t.readonly(FhirRelatedArtifact),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueSampledData: t.readonly(FhirSampledData),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueSignature: t.readonly(FhirSignature),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueString: t.readonly(t.string),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueTime: t.readonly(t.string),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueTiming: t.readonly(FhirTiming),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueTriggerDefinition: t.readonly(FhirTriggerDefinition),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueUnsignedInt: t.readonly(t.number),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueUri: t.readonly(t.string),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueUrl: t.readonly(t.string),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueUsageContext: t.readonly(FhirUsageContext),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      valueUuid: t.readonly(t.string),
    })
)

/** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
export interface FhirParameters_Parameter {
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueBase64Binary?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueCanonical?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueCode?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueDecimal?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueInstant?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueInteger?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueMarkdown?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueOid?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valuePositiveInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueUnsignedInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueUri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueUrl?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueUuid?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  part?: ReadonlyArray<FhirParameters_Parameter>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  resource?: Readonly<t.TypeOf<typeof FhirResourceList>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueAddress?: Readonly<t.TypeOf<typeof FhirAddress>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueAge?: Readonly<t.TypeOf<typeof FhirAge>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueAnnotation?: Readonly<t.TypeOf<typeof FhirAnnotation>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueAttachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueBase64Binary?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueBoolean?: Readonly<boolean>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueCanonical?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueCode?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueCoding?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueContactDetail?: Readonly<t.TypeOf<typeof FhirContactDetail>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueContactPoint?: Readonly<t.TypeOf<typeof FhirContactPoint>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueContributor?: Readonly<t.TypeOf<typeof FhirContributor>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueCount?: Readonly<t.TypeOf<typeof FhirCount>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueDataRequirement?: Readonly<t.TypeOf<typeof FhirDataRequirement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueDate?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueDateTime?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueDecimal?: Readonly<number>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueDistance?: Readonly<t.TypeOf<typeof FhirDistance>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueDosage?: Readonly<t.TypeOf<typeof FhirDosage>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueExpression?: Readonly<t.TypeOf<typeof FhirExpression>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueHumanName?: Readonly<t.TypeOf<typeof FhirHumanName>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueId?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueIdentifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueInstant?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueInteger?: Readonly<number>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueMarkdown?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueMeta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueMoney?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueOid?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueParameterDefinition?: Readonly<t.TypeOf<typeof FhirParameterDefinition>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valuePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valuePositiveInt?: Readonly<number>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueRatio?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueRelatedArtifact?: Readonly<t.TypeOf<typeof FhirRelatedArtifact>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueSampledData?: Readonly<t.TypeOf<typeof FhirSampledData>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueSignature?: Readonly<t.TypeOf<typeof FhirSignature>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueString?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueTime?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueTriggerDefinition?: Readonly<t.TypeOf<typeof FhirTriggerDefinition>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueUnsignedInt?: Readonly<number>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueUri?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueUrl?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueUsageContext?: Readonly<t.TypeOf<typeof FhirUsageContext>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueUuid?: Readonly<string>
}
/** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
export interface FhirParameters_ParameterOutput {
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueBase64Binary?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueCanonical?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueCode?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueDecimal?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueInstant?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueInteger?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueMarkdown?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueOid?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valuePositiveInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueUnsignedInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueUri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueUrl?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _valueUuid?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  part?: ReadonlyArray<FhirParameters_ParameterOutput>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  resource?: Readonly<t.OutputOf<typeof FhirResourceList>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueAddress?: Readonly<t.OutputOf<typeof FhirAddress>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueAge?: Readonly<t.OutputOf<typeof FhirAge>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueAnnotation?: Readonly<t.OutputOf<typeof FhirAnnotation>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueAttachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueBase64Binary?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueBoolean?: Readonly<boolean>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueCanonical?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueCode?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueCoding?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueContactDetail?: Readonly<t.OutputOf<typeof FhirContactDetail>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueContactPoint?: Readonly<t.OutputOf<typeof FhirContactPoint>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueContributor?: Readonly<t.OutputOf<typeof FhirContributor>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueCount?: Readonly<t.OutputOf<typeof FhirCount>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueDataRequirement?: Readonly<t.OutputOf<typeof FhirDataRequirement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueDate?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueDateTime?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueDecimal?: Readonly<number>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueDistance?: Readonly<t.OutputOf<typeof FhirDistance>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueDosage?: Readonly<t.OutputOf<typeof FhirDosage>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueExpression?: Readonly<t.OutputOf<typeof FhirExpression>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueHumanName?: Readonly<t.OutputOf<typeof FhirHumanName>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueId?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueIdentifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueInstant?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueInteger?: Readonly<number>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueMarkdown?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueMeta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueMoney?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueOid?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueParameterDefinition?: Readonly<t.OutputOf<typeof FhirParameterDefinition>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valuePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valuePositiveInt?: Readonly<number>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueRatio?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueRelatedArtifact?: Readonly<t.OutputOf<typeof FhirRelatedArtifact>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueSampledData?: Readonly<t.OutputOf<typeof FhirSampledData>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueSignature?: Readonly<t.OutputOf<typeof FhirSignature>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueString?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueTime?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueTriggerDefinition?: Readonly<t.OutputOf<typeof FhirTriggerDefinition>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueUnsignedInt?: Readonly<number>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueUri?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueUrl?: Readonly<string>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueUsageContext?: Readonly<t.OutputOf<typeof FhirUsageContext>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  valueUuid?: Readonly<string>
}
