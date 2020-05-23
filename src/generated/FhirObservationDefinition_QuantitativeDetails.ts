import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInteger } from './FhirInteger'
import { FhirString } from './FhirString'

/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
export const FhirObservationDefinition_QuantitativeDetails: t.Type<
  FhirObservationDefinition_QuantitativeDetails,
  FhirObservationDefinition_QuantitativeDetailsOutput
> = t.recursion('FhirObservationDefinition_QuantitativeDetails', () =>
  t.partial({
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    _conversionFactor: t.readonly(FhirElement),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    _decimalPrecision: t.readonly(FhirElement),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    conversionFactor: t.readonly(FhirDecimal),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    customaryUnit: t.readonly(FhirCodeableConcept),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    decimalPrecision: t.readonly(FhirInteger),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    extension: t.readonlyArray(FhirExtension),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    id: t.readonly(FhirString),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    unit: t.readonly(FhirCodeableConcept),
  })
)

/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
export interface FhirObservationDefinition_QuantitativeDetails {
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _conversionFactor?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _decimalPrecision?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  conversionFactor?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  customaryUnit?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  decimalPrecision?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  unit?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
export interface FhirObservationDefinition_QuantitativeDetailsOutput {
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _conversionFactor?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _decimalPrecision?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  conversionFactor?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  customaryUnit?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  decimalPrecision?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  unit?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
