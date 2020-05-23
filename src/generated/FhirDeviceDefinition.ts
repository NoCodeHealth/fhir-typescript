import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactPoint } from './FhirContactPoint'
import { FhirDeviceDefinition_Capability } from './FhirDeviceDefinition_Capability'
import { FhirDeviceDefinition_DeviceName } from './FhirDeviceDefinition_DeviceName'
import { FhirDeviceDefinition_Material } from './FhirDeviceDefinition_Material'
import { FhirDeviceDefinition_Property } from './FhirDeviceDefinition_Property'
import { FhirDeviceDefinition_Specialization } from './FhirDeviceDefinition_Specialization'
import { FhirDeviceDefinition_UdiDeviceIdentifier } from './FhirDeviceDefinition_UdiDeviceIdentifier'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirProdCharacteristic } from './FhirProdCharacteristic'
import { FhirProductShelfLife } from './FhirProductShelfLife'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export const FhirDeviceDefinition: t.Type<FhirDeviceDefinition, FhirDeviceDefinitionOutput> = t.recursion(
  'FhirDeviceDefinition',
  () =>
    t.intersection([
      t.type({
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        resourceType: t.readonly(t.literal('DeviceDefinition')),
      }),
      t.partial({
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        _implicitRules: t.readonly(FhirElement),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        _language: t.readonly(FhirElement),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        _manufacturerString: t.readonly(FhirElement),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        _modelNumber: t.readonly(FhirElement),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        _onlineInformation: t.readonly(FhirElement),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        _url: t.readonly(FhirElement),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        _version: t.readonlyArray(FhirElement),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        capability: t.readonlyArray(FhirDeviceDefinition_Capability),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        contact: t.readonlyArray(FhirContactPoint),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        contained: t.readonlyArray(FhirResourceList),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        deviceName: t.readonlyArray(FhirDeviceDefinition_DeviceName),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        extension: t.readonlyArray(FhirExtension),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        id: t.readonly(FhirId),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        implicitRules: t.readonly(FhirUri),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        language: t.readonly(FhirCode),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        languageCode: t.readonlyArray(FhirCodeableConcept),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        manufacturerReference: t.readonly(FhirReference),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        manufacturerString: t.readonly(t.string),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        material: t.readonlyArray(FhirDeviceDefinition_Material),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        meta: t.readonly(FhirMeta),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        modelNumber: t.readonly(FhirString),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        note: t.readonlyArray(FhirAnnotation),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        onlineInformation: t.readonly(FhirUri),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        owner: t.readonly(FhirReference),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        parentDevice: t.readonly(FhirReference),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        physicalCharacteristics: t.readonly(FhirProdCharacteristic),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        property: t.readonlyArray(FhirDeviceDefinition_Property),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        quantity: t.readonly(FhirQuantity),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        safety: t.readonlyArray(FhirCodeableConcept),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        shelfLifeStorage: t.readonlyArray(FhirProductShelfLife),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        specialization: t.readonlyArray(FhirDeviceDefinition_Specialization),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        text: t.readonly(FhirNarrative),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        type: t.readonly(FhirCodeableConcept),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        udiDeviceIdentifier: t.readonlyArray(FhirDeviceDefinition_UdiDeviceIdentifier),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        url: t.readonly(FhirUri),
        /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
        version: t.readonlyArray(FhirString),
      }),
    ])
)

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface FhirDeviceDefinition {
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _manufacturerString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _modelNumber?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _onlineInformation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _version?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  capability?: ReadonlyArray<t.TypeOf<typeof FhirDeviceDefinition_Capability>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactPoint>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  deviceName?: ReadonlyArray<t.TypeOf<typeof FhirDeviceDefinition_DeviceName>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  languageCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  manufacturerReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  manufacturerString?: Readonly<string>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  material?: ReadonlyArray<t.TypeOf<typeof FhirDeviceDefinition_Material>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  modelNumber?: Readonly<t.TypeOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  onlineInformation?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  owner?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  parentDevice?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  physicalCharacteristics?: Readonly<t.TypeOf<typeof FhirProdCharacteristic>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  property?: ReadonlyArray<t.TypeOf<typeof FhirDeviceDefinition_Property>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  quantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  resourceType: Readonly<'DeviceDefinition'>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  safety?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  shelfLifeStorage?: ReadonlyArray<t.TypeOf<typeof FhirProductShelfLife>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  specialization?: ReadonlyArray<t.TypeOf<typeof FhirDeviceDefinition_Specialization>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  udiDeviceIdentifier?: ReadonlyArray<t.TypeOf<typeof FhirDeviceDefinition_UdiDeviceIdentifier>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  version?: ReadonlyArray<t.TypeOf<typeof FhirString>>
}
/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface FhirDeviceDefinitionOutput {
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _manufacturerString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _modelNumber?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _onlineInformation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _version?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  capability?: ReadonlyArray<t.OutputOf<typeof FhirDeviceDefinition_Capability>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactPoint>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  deviceName?: ReadonlyArray<t.OutputOf<typeof FhirDeviceDefinition_DeviceName>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  languageCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  manufacturerReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  manufacturerString?: Readonly<string>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  material?: ReadonlyArray<t.OutputOf<typeof FhirDeviceDefinition_Material>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  modelNumber?: Readonly<t.OutputOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  onlineInformation?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  owner?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  parentDevice?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  physicalCharacteristics?: Readonly<t.OutputOf<typeof FhirProdCharacteristic>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  property?: ReadonlyArray<t.OutputOf<typeof FhirDeviceDefinition_Property>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  quantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  resourceType: Readonly<'DeviceDefinition'>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  safety?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  shelfLifeStorage?: ReadonlyArray<t.OutputOf<typeof FhirProductShelfLife>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  specialization?: ReadonlyArray<t.OutputOf<typeof FhirDeviceDefinition_Specialization>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  udiDeviceIdentifier?: ReadonlyArray<t.OutputOf<typeof FhirDeviceDefinition_UdiDeviceIdentifier>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  version?: ReadonlyArray<t.OutputOf<typeof FhirString>>
}
