import * as t from 'io-ts'
import { FhirBase64Binary } from './FhirBase64Binary'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export const FhirDevice_UdiCarrier: t.Type<FhirDevice_UdiCarrier, FhirDevice_UdiCarrierOutput> = t.recursion(
  'FhirDevice_UdiCarrier',
  () =>
    t.partial({
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      _carrierAIDC: t.readonly(FhirElement),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      _carrierHRF: t.readonly(FhirElement),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      _deviceIdentifier: t.readonly(FhirElement),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      _entryType: t.readonly(FhirElement),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      _issuer: t.readonly(FhirElement),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      _jurisdiction: t.readonly(FhirElement),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      carrierAIDC: t.readonly(FhirBase64Binary),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      carrierHRF: t.readonly(FhirString),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      deviceIdentifier: t.readonly(FhirString),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      entryType: t.readonly(
        t.keyof({
          barcode: null,
          rfid: null,
          manual: null,
          card: null,
          'self-reported': null,
          unknown: null,
        })
      ),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      extension: t.readonlyArray(FhirExtension),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      id: t.readonly(FhirString),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      issuer: t.readonly(FhirUri),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      jurisdiction: t.readonly(FhirUri),
      /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
      modifierExtension: t.readonlyArray(FhirExtension),
    })
)

/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export interface FhirDevice_UdiCarrier {
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _carrierAIDC?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _carrierHRF?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _deviceIdentifier?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _entryType?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _issuer?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _jurisdiction?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  carrierAIDC?: Readonly<t.TypeOf<typeof FhirBase64Binary>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  carrierHRF?: Readonly<t.TypeOf<typeof FhirString>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  deviceIdentifier?: Readonly<t.TypeOf<typeof FhirString>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  entryType?: Readonly<'barcode' | 'rfid' | 'manual' | 'card' | 'self-reported' | 'unknown'>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  issuer?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  jurisdiction?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export interface FhirDevice_UdiCarrierOutput {
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _carrierAIDC?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _carrierHRF?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _deviceIdentifier?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _entryType?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _issuer?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  _jurisdiction?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  carrierAIDC?: Readonly<t.OutputOf<typeof FhirBase64Binary>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  carrierHRF?: Readonly<t.OutputOf<typeof FhirString>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  deviceIdentifier?: Readonly<t.OutputOf<typeof FhirString>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  entryType?: Readonly<'barcode' | 'rfid' | 'manual' | 'card' | 'self-reported' | 'unknown'>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  issuer?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  jurisdiction?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
