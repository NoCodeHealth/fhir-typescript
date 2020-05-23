import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export const FhirDeviceDefinition_UdiDeviceIdentifier: t.Type<
  FhirDeviceDefinition_UdiDeviceIdentifier,
  FhirDeviceDefinition_UdiDeviceIdentifierOutput
> = t.recursion('FhirDeviceDefinition_UdiDeviceIdentifier', () =>
  t.partial({
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    _deviceIdentifier: t.readonly(FhirElement),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    _issuer: t.readonly(FhirElement),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    _jurisdiction: t.readonly(FhirElement),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    deviceIdentifier: t.readonly(FhirString),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    extension: t.readonlyArray(FhirExtension),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    id: t.readonly(FhirString),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    issuer: t.readonly(FhirUri),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    jurisdiction: t.readonly(FhirUri),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    modifierExtension: t.readonlyArray(FhirExtension),
  })
)

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface FhirDeviceDefinition_UdiDeviceIdentifier {
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _deviceIdentifier?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _issuer?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _jurisdiction?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  deviceIdentifier?: Readonly<t.TypeOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  issuer?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  jurisdiction?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface FhirDeviceDefinition_UdiDeviceIdentifierOutput {
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _deviceIdentifier?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _issuer?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _jurisdiction?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  deviceIdentifier?: Readonly<t.OutputOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  issuer?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  jurisdiction?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
