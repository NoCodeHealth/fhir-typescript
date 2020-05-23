import * as t from 'io-ts'
import { FhirAdverseEvent_Causality } from './FhirAdverseEvent_Causality'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
export const FhirAdverseEvent_SuspectEntity: t.Type<
  FhirAdverseEvent_SuspectEntity,
  FhirAdverseEvent_SuspectEntityOutput
> = t.recursion('FhirAdverseEvent_SuspectEntity', () =>
  t.intersection([
    t.type({
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      instance: t.readonly(FhirReference),
    }),
    t.partial({
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      causality: t.readonlyArray(FhirAdverseEvent_Causality),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      extension: t.readonlyArray(FhirExtension),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      id: t.readonly(FhirString),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
export interface FhirAdverseEvent_SuspectEntity {
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  causality?: ReadonlyArray<t.TypeOf<typeof FhirAdverseEvent_Causality>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  instance: Readonly<t.TypeOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
export interface FhirAdverseEvent_SuspectEntityOutput {
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  causality?: ReadonlyArray<t.OutputOf<typeof FhirAdverseEvent_Causality>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  instance: Readonly<t.OutputOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
