import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
export const FhirAccount_Coverage: t.Type<FhirAccount_Coverage, FhirAccount_CoverageOutput> = t.recursion(
  'FhirAccount_Coverage',
  () =>
    t.intersection([
      t.type({
        /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
        coverage: t.readonly(FhirReference),
      }),
      t.partial({
        /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
        _priority: t.readonly(FhirElement),
        /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
        extension: t.readonlyArray(FhirExtension),
        /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
        id: t.readonly(FhirString),
        /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
        priority: t.readonly(FhirPositiveInt),
      }),
    ])
)

/** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
export interface FhirAccount_Coverage {
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  _priority?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  coverage: Readonly<t.TypeOf<typeof FhirReference>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  priority?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
}
/** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
export interface FhirAccount_CoverageOutput {
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  _priority?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  coverage: Readonly<t.OutputOf<typeof FhirReference>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  priority?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
}
