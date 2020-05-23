import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirAttachment } from './FhirAttachment'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirInstant } from './FhirInstant'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
export const FhirMedia: t.Type<FhirMedia, FhirMediaOutput> = t.recursion('FhirMedia', () =>
  t.intersection([
    t.type({
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      content: t.readonly(FhirAttachment),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      resourceType: t.readonly(t.literal('Media')),
    }),
    t.partial({
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      _createdDateTime: t.readonly(FhirElement),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      _deviceName: t.readonly(FhirElement),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      _duration: t.readonly(FhirElement),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      _frames: t.readonly(FhirElement),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      _height: t.readonly(FhirElement),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      _implicitRules: t.readonly(FhirElement),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      _issued: t.readonly(FhirElement),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      _language: t.readonly(FhirElement),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      _status: t.readonly(FhirElement),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      _width: t.readonly(FhirElement),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      basedOn: t.readonlyArray(FhirReference),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      bodySite: t.readonly(FhirCodeableConcept),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      contained: t.readonlyArray(FhirResourceList),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      createdDateTime: t.readonly(t.string),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      createdPeriod: t.readonly(FhirPeriod),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      device: t.readonly(FhirReference),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      deviceName: t.readonly(FhirString),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      duration: t.readonly(FhirDecimal),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      encounter: t.readonly(FhirReference),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      extension: t.readonlyArray(FhirExtension),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      frames: t.readonly(FhirPositiveInt),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      height: t.readonly(FhirPositiveInt),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      id: t.readonly(FhirId),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      implicitRules: t.readonly(FhirUri),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      issued: t.readonly(FhirInstant),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      language: t.readonly(FhirCode),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      meta: t.readonly(FhirMeta),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      modality: t.readonly(FhirCodeableConcept),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      note: t.readonlyArray(FhirAnnotation),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      operator: t.readonly(FhirReference),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      partOf: t.readonlyArray(FhirReference),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      reasonCode: t.readonlyArray(FhirCodeableConcept),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      status: t.readonly(FhirCode),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      subject: t.readonly(FhirReference),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      text: t.readonly(FhirNarrative),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      type: t.readonly(FhirCodeableConcept),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      view: t.readonly(FhirCodeableConcept),
      /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
      width: t.readonly(FhirPositiveInt),
    }),
  ])
)

/** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
export interface FhirMedia {
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _createdDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _deviceName?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _duration?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _frames?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _height?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _issued?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _width?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  basedOn?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  bodySite?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  content: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  createdDateTime?: Readonly<string>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  createdPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  device?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  deviceName?: Readonly<t.TypeOf<typeof FhirString>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  duration?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  frames?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  height?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  issued?: Readonly<t.TypeOf<typeof FhirInstant>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  modality?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  operator?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  partOf?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  reasonCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  resourceType: Readonly<'Media'>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  subject?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  view?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  width?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
}
/** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
export interface FhirMediaOutput {
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _createdDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _deviceName?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _duration?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _frames?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _height?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _issued?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  _width?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  basedOn?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  bodySite?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  content: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  createdDateTime?: Readonly<string>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  createdPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  device?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  deviceName?: Readonly<t.OutputOf<typeof FhirString>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  duration?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  frames?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  height?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  issued?: Readonly<t.OutputOf<typeof FhirInstant>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  modality?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  operator?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  partOf?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  reasonCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  resourceType: Readonly<'Media'>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  subject?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  view?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
  width?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
}
