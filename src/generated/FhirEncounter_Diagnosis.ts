import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
export const FhirEncounter_Diagnosis: t.Type<FhirEncounter_Diagnosis, FhirEncounter_DiagnosisOutput> = t.recursion(
  'FhirEncounter_Diagnosis',
  () =>
    t.intersection([
      t.type({
        /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
        condition: t.readonly(FhirReference),
      }),
      t.partial({
        /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
        _rank: t.readonly(FhirElement),
        /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
        extension: t.readonlyArray(FhirExtension),
        /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
        id: t.readonly(FhirString),
        /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
        rank: t.readonly(FhirPositiveInt),
        /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
        use: t.readonly(FhirCodeableConcept),
      }),
    ])
)

/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
export interface FhirEncounter_Diagnosis {
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  _rank?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  condition: Readonly<t.TypeOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  rank?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  use?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
export interface FhirEncounter_DiagnosisOutput {
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  _rank?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  condition: Readonly<t.OutputOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  rank?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  use?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
