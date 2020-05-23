import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
export const FhirAccount_Guarantor: t.Type<FhirAccount_Guarantor, FhirAccount_GuarantorOutput> = t.recursion(
  'FhirAccount_Guarantor',
  () =>
    t.intersection([
      t.type({
        /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
        party: t.readonly(FhirReference),
      }),
      t.partial({
        /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
        _onHold: t.readonly(FhirElement),
        /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
        extension: t.readonlyArray(FhirExtension),
        /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
        id: t.readonly(FhirString),
        /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
        onHold: t.readonly(FhirBoolean),
        /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
        period: t.readonly(FhirPeriod),
      }),
    ])
)

/** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
export interface FhirAccount_Guarantor {
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  _onHold?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  onHold?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  party: Readonly<t.TypeOf<typeof FhirReference>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
}
/** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
export interface FhirAccount_GuarantorOutput {
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  _onHold?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  onHold?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  party: Readonly<t.OutputOf<typeof FhirReference>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
}
