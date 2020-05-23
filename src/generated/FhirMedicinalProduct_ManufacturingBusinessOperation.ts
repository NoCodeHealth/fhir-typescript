import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export const FhirMedicinalProduct_ManufacturingBusinessOperation: t.Type<
  FhirMedicinalProduct_ManufacturingBusinessOperation,
  FhirMedicinalProduct_ManufacturingBusinessOperationOutput
> = t.recursion('FhirMedicinalProduct_ManufacturingBusinessOperation', () =>
  t.partial({
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    _effectiveDate: t.readonly(FhirElement),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    authorisationReferenceNumber: t.readonly(FhirIdentifier),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    confidentialityIndicator: t.readonly(FhirCodeableConcept),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    effectiveDate: t.readonly(FhirDateTime),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    extension: t.readonlyArray(FhirExtension),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    id: t.readonly(FhirString),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    manufacturer: t.readonlyArray(FhirReference),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    operationType: t.readonly(FhirCodeableConcept),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    regulator: t.readonly(FhirReference),
  })
)

/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export interface FhirMedicinalProduct_ManufacturingBusinessOperation {
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  _effectiveDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  authorisationReferenceNumber?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  confidentialityIndicator?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  effectiveDate?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  manufacturer?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  operationType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  regulator?: Readonly<t.TypeOf<typeof FhirReference>>
}
/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export interface FhirMedicinalProduct_ManufacturingBusinessOperationOutput {
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  _effectiveDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  authorisationReferenceNumber?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  confidentialityIndicator?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  effectiveDate?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  manufacturer?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  operationType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  regulator?: Readonly<t.OutputOf<typeof FhirReference>>
}
