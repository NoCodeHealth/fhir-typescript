import * as t from 'io-ts'
import { FhirAdverseEvent_SuspectEntity } from './FhirAdverseEvent_SuspectEntity'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
export const FhirAdverseEvent: t.Type<FhirAdverseEvent, FhirAdverseEventOutput> = t.recursion('FhirAdverseEvent', () =>
  t.intersection([
    t.type({
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      resourceType: t.readonly(t.literal('AdverseEvent')),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      subject: t.readonly(FhirReference),
    }),
    t.partial({
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      _actuality: t.readonly(FhirElement),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      _date: t.readonly(FhirElement),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      _detected: t.readonly(FhirElement),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      _implicitRules: t.readonly(FhirElement),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      _language: t.readonly(FhirElement),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      _recordedDate: t.readonly(FhirElement),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      actuality: t.readonly(
        t.keyof({
          actual: null,
          potential: null,
        })
      ),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      category: t.readonlyArray(FhirCodeableConcept),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      contained: t.readonlyArray(FhirResourceList),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      contributor: t.readonlyArray(FhirReference),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      date: t.readonly(FhirDateTime),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      detected: t.readonly(FhirDateTime),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      encounter: t.readonly(FhirReference),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      event: t.readonly(FhirCodeableConcept),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      extension: t.readonlyArray(FhirExtension),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      id: t.readonly(FhirId),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      identifier: t.readonly(FhirIdentifier),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      implicitRules: t.readonly(FhirUri),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      language: t.readonly(FhirCode),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      location: t.readonly(FhirReference),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      meta: t.readonly(FhirMeta),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      outcome: t.readonly(FhirCodeableConcept),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      recordedDate: t.readonly(FhirDateTime),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      recorder: t.readonly(FhirReference),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      referenceDocument: t.readonlyArray(FhirReference),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      resultingCondition: t.readonlyArray(FhirReference),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      seriousness: t.readonly(FhirCodeableConcept),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      severity: t.readonly(FhirCodeableConcept),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      study: t.readonlyArray(FhirReference),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      subjectMedicalHistory: t.readonlyArray(FhirReference),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      suspectEntity: t.readonlyArray(FhirAdverseEvent_SuspectEntity),
      /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
export interface FhirAdverseEvent {
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  _actuality?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  _detected?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  _recordedDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  actuality?: Readonly<'actual' | 'potential'>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  category?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  contributor?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  detected?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  event?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  location?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  outcome?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  recordedDate?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  recorder?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  referenceDocument?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  resourceType: Readonly<'AdverseEvent'>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  resultingCondition?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  seriousness?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  severity?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  study?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  subject: Readonly<t.TypeOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  subjectMedicalHistory?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  suspectEntity?: ReadonlyArray<t.TypeOf<typeof FhirAdverseEvent_SuspectEntity>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
export interface FhirAdverseEventOutput {
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  _actuality?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  _detected?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  _recordedDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  actuality?: Readonly<'actual' | 'potential'>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  category?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  contributor?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  detected?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  event?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  location?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  outcome?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  recordedDate?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  recorder?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  referenceDocument?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  resourceType: Readonly<'AdverseEvent'>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  resultingCondition?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  seriousness?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  severity?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  study?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  subject: Readonly<t.OutputOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  subjectMedicalHistory?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  suspectEntity?: ReadonlyArray<t.OutputOf<typeof FhirAdverseEvent_SuspectEntity>>
  /** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
