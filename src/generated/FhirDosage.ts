import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDosage_DoseAndRate } from './FhirDosage_DoseAndRate'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInteger } from './FhirInteger'
import { FhirQuantity } from './FhirQuantity'
import { FhirRatio } from './FhirRatio'
import { FhirString } from './FhirString'
import { FhirTiming } from './FhirTiming'

/** Indicates how the medication is/was taken or should be taken by the patient. */
export const FhirDosage: t.Type<FhirDosage, FhirDosageOutput> = t.recursion('FhirDosage', () =>
  t.partial({
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    _asNeededBoolean: t.readonly(FhirElement),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    _patientInstruction: t.readonly(FhirElement),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    _sequence: t.readonly(FhirElement),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    _text: t.readonly(FhirElement),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    additionalInstruction: t.readonlyArray(FhirCodeableConcept),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    asNeededBoolean: t.readonly(t.boolean),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    asNeededCodeableConcept: t.readonly(FhirCodeableConcept),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    doseAndRate: t.readonlyArray(FhirDosage_DoseAndRate),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    extension: t.readonlyArray(FhirExtension),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    id: t.readonly(FhirString),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    maxDosePerAdministration: t.readonly(FhirQuantity),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    maxDosePerLifetime: t.readonly(FhirQuantity),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    maxDosePerPeriod: t.readonly(FhirRatio),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    method: t.readonly(FhirCodeableConcept),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    patientInstruction: t.readonly(FhirString),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    route: t.readonly(FhirCodeableConcept),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    sequence: t.readonly(FhirInteger),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    site: t.readonly(FhirCodeableConcept),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    text: t.readonly(FhirString),
    /** Indicates how the medication is/was taken or should be taken by the patient. */
    timing: t.readonly(FhirTiming),
  })
)

/** Indicates how the medication is/was taken or should be taken by the patient. */
export interface FhirDosage {
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  _asNeededBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  _patientInstruction?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  _sequence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  _text?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  additionalInstruction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  asNeededBoolean?: Readonly<boolean>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  asNeededCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  doseAndRate?: ReadonlyArray<t.TypeOf<typeof FhirDosage_DoseAndRate>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  maxDosePerAdministration?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  maxDosePerLifetime?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  maxDosePerPeriod?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  method?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  patientInstruction?: Readonly<t.TypeOf<typeof FhirString>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  route?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  sequence?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  site?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  text?: Readonly<t.TypeOf<typeof FhirString>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  timing?: Readonly<t.TypeOf<typeof FhirTiming>>
}
/** Indicates how the medication is/was taken or should be taken by the patient. */
export interface FhirDosageOutput {
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  _asNeededBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  _patientInstruction?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  _sequence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  _text?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  additionalInstruction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  asNeededBoolean?: Readonly<boolean>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  asNeededCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  doseAndRate?: ReadonlyArray<t.OutputOf<typeof FhirDosage_DoseAndRate>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  maxDosePerAdministration?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  maxDosePerLifetime?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  maxDosePerPeriod?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  method?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  patientInstruction?: Readonly<t.OutputOf<typeof FhirString>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  route?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  sequence?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  site?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  text?: Readonly<t.OutputOf<typeof FhirString>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  timing?: Readonly<t.OutputOf<typeof FhirTiming>>
}
