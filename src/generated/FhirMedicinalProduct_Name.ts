import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMedicinalProduct_CountryLanguage } from './FhirMedicinalProduct_CountryLanguage'
import { FhirMedicinalProduct_NamePart } from './FhirMedicinalProduct_NamePart'
import { FhirString } from './FhirString'

/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export const FhirMedicinalProduct_Name: t.Type<
  FhirMedicinalProduct_Name,
  FhirMedicinalProduct_NameOutput
> = t.recursion('FhirMedicinalProduct_Name', () =>
  t.partial({
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    _productName: t.readonly(FhirElement),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    countryLanguage: t.readonlyArray(FhirMedicinalProduct_CountryLanguage),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    extension: t.readonlyArray(FhirExtension),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    id: t.readonly(FhirString),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    namePart: t.readonlyArray(FhirMedicinalProduct_NamePart),
    /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
    productName: t.readonly(FhirString),
  })
)

/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export interface FhirMedicinalProduct_Name {
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  _productName?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  countryLanguage?: ReadonlyArray<t.TypeOf<typeof FhirMedicinalProduct_CountryLanguage>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  namePart?: ReadonlyArray<t.TypeOf<typeof FhirMedicinalProduct_NamePart>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  productName?: Readonly<t.TypeOf<typeof FhirString>>
}
/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export interface FhirMedicinalProduct_NameOutput {
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  _productName?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  countryLanguage?: ReadonlyArray<t.OutputOf<typeof FhirMedicinalProduct_CountryLanguage>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  namePart?: ReadonlyArray<t.OutputOf<typeof FhirMedicinalProduct_NamePart>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  productName?: Readonly<t.OutputOf<typeof FhirString>>
}
