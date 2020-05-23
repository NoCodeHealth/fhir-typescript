import * as t from 'io-ts'
import { FhirAttachment } from './FhirAttachment'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
export const FhirBodyStructure: t.Type<FhirBodyStructure, FhirBodyStructureOutput> = t.recursion(
  'FhirBodyStructure',
  () =>
    t.intersection([
      t.type({
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        patient: t.readonly(FhirReference),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        resourceType: t.readonly(t.literal('BodyStructure')),
      }),
      t.partial({
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        _active: t.readonly(FhirElement),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        _description: t.readonly(FhirElement),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        _implicitRules: t.readonly(FhirElement),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        _language: t.readonly(FhirElement),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        active: t.readonly(FhirBoolean),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        contained: t.readonlyArray(FhirResourceList),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        description: t.readonly(FhirString),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        extension: t.readonlyArray(FhirExtension),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        id: t.readonly(FhirId),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        image: t.readonlyArray(FhirAttachment),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        implicitRules: t.readonly(FhirUri),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        language: t.readonly(FhirCode),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        location: t.readonly(FhirCodeableConcept),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        locationQualifier: t.readonlyArray(FhirCodeableConcept),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        meta: t.readonly(FhirMeta),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        morphology: t.readonly(FhirCodeableConcept),
        /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
export interface FhirBodyStructure {
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  _active?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  active?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  image?: ReadonlyArray<t.TypeOf<typeof FhirAttachment>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  location?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  locationQualifier?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  morphology?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  patient: Readonly<t.TypeOf<typeof FhirReference>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  resourceType: Readonly<'BodyStructure'>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
export interface FhirBodyStructureOutput {
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  _active?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  active?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  image?: ReadonlyArray<t.OutputOf<typeof FhirAttachment>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  location?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  locationQualifier?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  morphology?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  patient: Readonly<t.OutputOf<typeof FhirReference>>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  resourceType: Readonly<'BodyStructure'>
  /** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
