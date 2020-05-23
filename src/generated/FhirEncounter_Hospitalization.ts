import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
export const FhirEncounter_Hospitalization: t.Type<
  FhirEncounter_Hospitalization,
  FhirEncounter_HospitalizationOutput
> = t.recursion('FhirEncounter_Hospitalization', () =>
  t.partial({
    /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
    admitSource: t.readonly(FhirCodeableConcept),
    /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
    destination: t.readonly(FhirReference),
    /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
    dietPreference: t.readonlyArray(FhirCodeableConcept),
    /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
    dischargeDisposition: t.readonly(FhirCodeableConcept),
    /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
    extension: t.readonlyArray(FhirExtension),
    /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
    id: t.readonly(FhirString),
    /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
    origin: t.readonly(FhirReference),
    /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
    preAdmissionIdentifier: t.readonly(FhirIdentifier),
    /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
    reAdmission: t.readonly(FhirCodeableConcept),
    /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
    specialArrangement: t.readonlyArray(FhirCodeableConcept),
    /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
    specialCourtesy: t.readonlyArray(FhirCodeableConcept),
  })
)

/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
export interface FhirEncounter_Hospitalization {
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  admitSource?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  destination?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  dietPreference?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  dischargeDisposition?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  origin?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  preAdmissionIdentifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  reAdmission?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  specialArrangement?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  specialCourtesy?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
}
/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
export interface FhirEncounter_HospitalizationOutput {
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  admitSource?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  destination?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  dietPreference?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  dischargeDisposition?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  origin?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  preAdmissionIdentifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  reAdmission?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  specialArrangement?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  specialCourtesy?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
}
