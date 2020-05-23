import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
export const FhirDetectedIssue_Mitigation: t.Type<
  FhirDetectedIssue_Mitigation,
  FhirDetectedIssue_MitigationOutput
> = t.recursion('FhirDetectedIssue_Mitigation', () =>
  t.intersection([
    t.type({
      /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
      action: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
      _date: t.readonly(FhirElement),
      /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
      author: t.readonly(FhirReference),
      /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
      date: t.readonly(FhirDateTime),
      /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
      extension: t.readonlyArray(FhirExtension),
      /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
      id: t.readonly(FhirString),
      /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
export interface FhirDetectedIssue_Mitigation {
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  action: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  author?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
export interface FhirDetectedIssue_MitigationOutput {
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  action: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  author?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
