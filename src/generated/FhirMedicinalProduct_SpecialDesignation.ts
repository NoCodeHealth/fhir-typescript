import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export const FhirMedicinalProduct_SpecialDesignation: t.Type<
  FhirMedicinalProduct_SpecialDesignation,
  FhirMedicinalProduct_SpecialDesignationOutput
> = t.recursion('FhirMedicinalProduct_SpecialDesignation', () =>
  t.partial({
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    _date: t.readonly(FhirElement),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    date: t.readonly(FhirDateTime),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    extension: t.readonlyArray(FhirExtension),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    id: t.readonly(FhirString),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    identifier: t.readonlyArray(FhirIdentifier),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    indicationCodeableConcept: t.readonly(FhirCodeableConcept),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    indicationReference: t.readonly(FhirReference),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    intendedUse: t.readonly(FhirCodeableConcept),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    species: t.readonly(FhirCodeableConcept),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    status: t.readonly(FhirCodeableConcept),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export interface FhirMedicinalProduct_SpecialDesignation {
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  indicationCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  indicationReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  intendedUse?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  species?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  status?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export interface FhirMedicinalProduct_SpecialDesignationOutput {
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  indicationCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  indicationReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  intendedUse?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  species?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  status?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
