import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export const FhirImmunization_ProtocolApplied: t.Type<
  FhirImmunization_ProtocolApplied,
  FhirImmunization_ProtocolAppliedOutput
> = t.recursion('FhirImmunization_ProtocolApplied', () =>
  t.partial({
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    _doseNumberPositiveInt: t.readonly(FhirElement),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    _doseNumberString: t.readonly(FhirElement),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    _series: t.readonly(FhirElement),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    _seriesDosesPositiveInt: t.readonly(FhirElement),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    _seriesDosesString: t.readonly(FhirElement),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    authority: t.readonly(FhirReference),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    doseNumberPositiveInt: t.readonly(t.number),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    doseNumberString: t.readonly(t.string),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    extension: t.readonlyArray(FhirExtension),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    id: t.readonly(FhirString),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    series: t.readonly(FhirString),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    seriesDosesPositiveInt: t.readonly(t.number),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    seriesDosesString: t.readonly(t.string),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    targetDisease: t.readonlyArray(FhirCodeableConcept),
  })
)

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export interface FhirImmunization_ProtocolApplied {
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _doseNumberPositiveInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _doseNumberString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _series?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _seriesDosesPositiveInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _seriesDosesString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  authority?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  doseNumberPositiveInt?: Readonly<number>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  doseNumberString?: Readonly<string>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  series?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  seriesDosesPositiveInt?: Readonly<number>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  seriesDosesString?: Readonly<string>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  targetDisease?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export interface FhirImmunization_ProtocolAppliedOutput {
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _doseNumberPositiveInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _doseNumberString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _series?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _seriesDosesPositiveInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _seriesDosesString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  authority?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  doseNumberPositiveInt?: Readonly<number>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  doseNumberString?: Readonly<string>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  series?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  seriesDosesPositiveInt?: Readonly<number>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  seriesDosesString?: Readonly<string>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  targetDisease?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
}
