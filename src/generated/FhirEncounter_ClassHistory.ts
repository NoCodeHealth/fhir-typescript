import * as t from 'io-ts'
import { FhirCoding } from './FhirCoding'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirString } from './FhirString'

/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
export const FhirEncounter_ClassHistory: t.Type<
  FhirEncounter_ClassHistory,
  FhirEncounter_ClassHistoryOutput
> = t.recursion('FhirEncounter_ClassHistory', () =>
  t.intersection([
    t.type({
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      class: t.readonly(FhirCoding),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      period: t.readonly(FhirPeriod),
    }),
    t.partial({
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      extension: t.readonlyArray(FhirExtension),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      id: t.readonly(FhirString),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
export interface FhirEncounter_ClassHistory {
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  class: Readonly<t.TypeOf<typeof FhirCoding>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  period: Readonly<t.TypeOf<typeof FhirPeriod>>
}
/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
export interface FhirEncounter_ClassHistoryOutput {
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  class: Readonly<t.OutputOf<typeof FhirCoding>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  period: Readonly<t.OutputOf<typeof FhirPeriod>>
}
