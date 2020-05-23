import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export const FhirMedicinalProduct_CountryLanguage: t.Type<
  FhirMedicinalProduct_CountryLanguage,
  FhirMedicinalProduct_CountryLanguageOutput
> = t.recursion('FhirMedicinalProduct_CountryLanguage', () =>
  t.intersection([
    t.type({
      /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
      country: t.readonly(FhirCodeableConcept),
      /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
      language: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
      extension: t.readonlyArray(FhirExtension),
      /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
      id: t.readonly(FhirString),
      /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
      jurisdiction: t.readonly(FhirCodeableConcept),
      /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export interface FhirMedicinalProduct_CountryLanguage {
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  country: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  jurisdiction?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  language: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export interface FhirMedicinalProduct_CountryLanguageOutput {
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  country: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  jurisdiction?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  language: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
