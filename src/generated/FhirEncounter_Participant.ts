import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
export const FhirEncounter_Participant: t.Type<
  FhirEncounter_Participant,
  FhirEncounter_ParticipantOutput
> = t.recursion('FhirEncounter_Participant', () =>
  t.partial({
    /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
    extension: t.readonlyArray(FhirExtension),
    /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
    id: t.readonly(FhirString),
    /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
    individual: t.readonly(FhirReference),
    /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
    period: t.readonly(FhirPeriod),
    /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
    type: t.readonlyArray(FhirCodeableConcept),
  })
)

/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
export interface FhirEncounter_Participant {
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  individual?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  type?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
}
/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
export interface FhirEncounter_ParticipantOutput {
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  individual?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  type?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
}
