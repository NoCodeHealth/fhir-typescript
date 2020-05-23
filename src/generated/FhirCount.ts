import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
export const FhirCount: t.Type<FhirCount, FhirCountOutput> = t.recursion('FhirCount', () =>
  t.partial({
    /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
    _code: t.readonly(FhirElement),
    /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
    _comparator: t.readonly(FhirElement),
    /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
    _system: t.readonly(FhirElement),
    /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
    _unit: t.readonly(FhirElement),
    /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
    _value: t.readonly(FhirElement),
    /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
    code: t.readonly(FhirCode),
    /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
    comparator: t.readonly(
      t.keyof({
        '<': null,
        '<=': null,
        '>=': null,
        '>': null,
      })
    ),
    /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
    extension: t.readonlyArray(FhirExtension),
    /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
    id: t.readonly(FhirString),
    /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
    system: t.readonly(FhirUri),
    /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
    unit: t.readonly(FhirString),
    /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
    value: t.readonly(FhirDecimal),
  })
)

/** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
export interface FhirCount {
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  _comparator?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  _system?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  _unit?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  _value?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  code?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  comparator?: Readonly<'<' | '<=' | '>=' | '>'>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  system?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  unit?: Readonly<t.TypeOf<typeof FhirString>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  value?: Readonly<t.TypeOf<typeof FhirDecimal>>
}
/** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
export interface FhirCountOutput {
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  _comparator?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  _system?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  _unit?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  _value?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  code?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  comparator?: Readonly<'<' | '<=' | '>=' | '>'>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  system?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  unit?: Readonly<t.OutputOf<typeof FhirString>>
  /** A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
  value?: Readonly<t.OutputOf<typeof FhirDecimal>>
}
