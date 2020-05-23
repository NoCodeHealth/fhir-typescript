import * as t from 'io-ts'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** An authorization for the provision of glasses and/or contact lenses to a patient. */
export const FhirVisionPrescription_Prism: t.Type<
  FhirVisionPrescription_Prism,
  FhirVisionPrescription_PrismOutput
> = t.recursion('FhirVisionPrescription_Prism', () =>
  t.partial({
    /** An authorization for the provision of glasses and/or contact lenses to a patient. */
    _amount: t.readonly(FhirElement),
    /** An authorization for the provision of glasses and/or contact lenses to a patient. */
    _base: t.readonly(FhirElement),
    /** An authorization for the provision of glasses and/or contact lenses to a patient. */
    amount: t.readonly(FhirDecimal),
    /** An authorization for the provision of glasses and/or contact lenses to a patient. */
    base: t.readonly(
      t.keyof({
        up: null,
        down: null,
        in: null,
        out: null,
      })
    ),
    /** An authorization for the provision of glasses and/or contact lenses to a patient. */
    extension: t.readonlyArray(FhirExtension),
    /** An authorization for the provision of glasses and/or contact lenses to a patient. */
    id: t.readonly(FhirString),
    /** An authorization for the provision of glasses and/or contact lenses to a patient. */
    modifierExtension: t.readonlyArray(FhirExtension),
  })
)

/** An authorization for the provision of glasses and/or contact lenses to a patient. */
export interface FhirVisionPrescription_Prism {
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _amount?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _base?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  amount?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  base?: Readonly<'up' | 'down' | 'in' | 'out'>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** An authorization for the provision of glasses and/or contact lenses to a patient. */
export interface FhirVisionPrescription_PrismOutput {
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _amount?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _base?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  amount?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  base?: Readonly<'up' | 'down' | 'in' | 'out'>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
