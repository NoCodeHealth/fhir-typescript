import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Describes validation requirements, source(s), status and dates for one or more elements. */
export const FhirVerificationResult_PrimarySource: t.Type<
  FhirVerificationResult_PrimarySource,
  FhirVerificationResult_PrimarySourceOutput
> = t.recursion('FhirVerificationResult_PrimarySource', () =>
  t.partial({
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    _validationDate: t.readonly(FhirElement),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    canPushUpdates: t.readonly(FhirCodeableConcept),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    communicationMethod: t.readonlyArray(FhirCodeableConcept),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    extension: t.readonlyArray(FhirExtension),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    id: t.readonly(FhirString),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    pushTypeAvailable: t.readonlyArray(FhirCodeableConcept),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    type: t.readonlyArray(FhirCodeableConcept),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    validationDate: t.readonly(FhirDateTime),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    validationStatus: t.readonly(FhirCodeableConcept),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    who: t.readonly(FhirReference),
  })
)

/** Describes validation requirements, source(s), status and dates for one or more elements. */
export interface FhirVerificationResult_PrimarySource {
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _validationDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  canPushUpdates?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  communicationMethod?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  pushTypeAvailable?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  type?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  validationDate?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  validationStatus?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  who?: Readonly<t.TypeOf<typeof FhirReference>>
}
/** Describes validation requirements, source(s), status and dates for one or more elements. */
export interface FhirVerificationResult_PrimarySourceOutput {
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _validationDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  canPushUpdates?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  communicationMethod?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  pushTypeAvailable?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  type?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  validationDate?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  validationStatus?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  who?: Readonly<t.OutputOf<typeof FhirReference>>
}
