import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
export const FhirDetectedIssue_Evidence: t.Type<
  FhirDetectedIssue_Evidence,
  FhirDetectedIssue_EvidenceOutput
> = t.recursion('FhirDetectedIssue_Evidence', () =>
  t.partial({
    /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
    code: t.readonlyArray(FhirCodeableConcept),
    /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
    detail: t.readonlyArray(FhirReference),
    /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
    extension: t.readonlyArray(FhirExtension),
    /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
    id: t.readonly(FhirString),
    /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
    modifierExtension: t.readonlyArray(FhirExtension),
  })
)

/** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
export interface FhirDetectedIssue_Evidence {
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  code?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  detail?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
export interface FhirDetectedIssue_EvidenceOutput {
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  code?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  detail?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
