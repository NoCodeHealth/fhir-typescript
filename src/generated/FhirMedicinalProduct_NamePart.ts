import * as t from 'io-ts'
import { FhirCoding } from './FhirCoding'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export const FhirMedicinalProduct_NamePart: t.Type<
  FhirMedicinalProduct_NamePart,
  FhirMedicinalProduct_NamePartOutput
> = t.recursion('FhirMedicinalProduct_NamePart', () =>
  t.intersection([
    t.type({
      /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
      type: t.readonly(FhirCoding),
    }),
    t.partial({
      /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
      _part: t.readonly(FhirElement),
      /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
      extension: t.readonlyArray(FhirExtension),
      /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
      id: t.readonly(FhirString),
      /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
      part: t.readonly(FhirString),
    }),
  ])
)

/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export interface FhirMedicinalProduct_NamePart {
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  _part?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  part?: Readonly<t.TypeOf<typeof FhirString>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  type: Readonly<t.TypeOf<typeof FhirCoding>>
}
/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export interface FhirMedicinalProduct_NamePartOutput {
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  _part?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  part?: Readonly<t.OutputOf<typeof FhirString>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  type: Readonly<t.OutputOf<typeof FhirCoding>>
}
