import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** An amount of economic utility in some recognized currency. */
export const FhirMoney: t.Type<FhirMoney, FhirMoneyOutput> = t.recursion('FhirMoney', () =>
  t.partial({
    /** An amount of economic utility in some recognized currency. */
    _currency: t.readonly(FhirElement),
    /** An amount of economic utility in some recognized currency. */
    _value: t.readonly(FhirElement),
    /** An amount of economic utility in some recognized currency. */
    currency: t.readonly(FhirCode),
    /** An amount of economic utility in some recognized currency. */
    extension: t.readonlyArray(FhirExtension),
    /** An amount of economic utility in some recognized currency. */
    id: t.readonly(FhirString),
    /** An amount of economic utility in some recognized currency. */
    value: t.readonly(FhirDecimal),
  })
)

/** An amount of economic utility in some recognized currency. */
export interface FhirMoney {
  /** An amount of economic utility in some recognized currency. */
  _currency?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An amount of economic utility in some recognized currency. */
  _value?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An amount of economic utility in some recognized currency. */
  currency?: Readonly<t.TypeOf<typeof FhirCode>>
  /** An amount of economic utility in some recognized currency. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An amount of economic utility in some recognized currency. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** An amount of economic utility in some recognized currency. */
  value?: Readonly<t.TypeOf<typeof FhirDecimal>>
}
/** An amount of economic utility in some recognized currency. */
export interface FhirMoneyOutput {
  /** An amount of economic utility in some recognized currency. */
  _currency?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An amount of economic utility in some recognized currency. */
  _value?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An amount of economic utility in some recognized currency. */
  currency?: Readonly<t.OutputOf<typeof FhirCode>>
  /** An amount of economic utility in some recognized currency. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An amount of economic utility in some recognized currency. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** An amount of economic utility in some recognized currency. */
  value?: Readonly<t.OutputOf<typeof FhirDecimal>>
}
