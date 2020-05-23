import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirObservationDefinition_QualifiedInterval } from './FhirObservationDefinition_QualifiedInterval'
import { FhirObservationDefinition_QuantitativeDetails } from './FhirObservationDefinition_QuantitativeDetails'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
export const FhirObservationDefinition: t.Type<
  FhirObservationDefinition,
  FhirObservationDefinitionOutput
> = t.recursion('FhirObservationDefinition', () =>
  t.intersection([
    t.type({
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      code: t.readonly(FhirCodeableConcept),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      resourceType: t.readonly(t.literal('ObservationDefinition')),
    }),
    t.partial({
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      _implicitRules: t.readonly(FhirElement),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      _language: t.readonly(FhirElement),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      _multipleResultsAllowed: t.readonly(FhirElement),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      _permittedDataType: t.readonlyArray(FhirElement),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      _preferredReportName: t.readonly(FhirElement),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      abnormalCodedValueSet: t.readonly(FhirReference),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      category: t.readonlyArray(FhirCodeableConcept),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      contained: t.readonlyArray(FhirResourceList),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      criticalCodedValueSet: t.readonly(FhirReference),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      extension: t.readonlyArray(FhirExtension),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      id: t.readonly(FhirId),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      implicitRules: t.readonly(FhirUri),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      language: t.readonly(FhirCode),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      meta: t.readonly(FhirMeta),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      method: t.readonly(FhirCodeableConcept),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      multipleResultsAllowed: t.readonly(FhirBoolean),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      normalCodedValueSet: t.readonly(FhirReference),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      permittedDataType: t.readonlyArray(
        t.keyof({
          Quantity: null,
          CodeableConcept: null,
          string: null,
          boolean: null,
          integer: null,
          Range: null,
          Ratio: null,
          SampledData: null,
          time: null,
          dateTime: null,
          Period: null,
        })
      ),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      preferredReportName: t.readonly(FhirString),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      qualifiedInterval: t.readonlyArray(FhirObservationDefinition_QualifiedInterval),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      quantitativeDetails: t.readonly(FhirObservationDefinition_QuantitativeDetails),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      text: t.readonly(FhirNarrative),
      /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
      validCodedValueSet: t.readonly(FhirReference),
    }),
  ])
)

/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
export interface FhirObservationDefinition {
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _multipleResultsAllowed?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _permittedDataType?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _preferredReportName?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  abnormalCodedValueSet?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  category?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  code: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  criticalCodedValueSet?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  method?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  multipleResultsAllowed?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  normalCodedValueSet?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  permittedDataType?: ReadonlyArray<
    | 'Quantity'
    | 'CodeableConcept'
    | 'string'
    | 'boolean'
    | 'integer'
    | 'Range'
    | 'Ratio'
    | 'SampledData'
    | 'time'
    | 'dateTime'
    | 'Period'
  >
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  preferredReportName?: Readonly<t.TypeOf<typeof FhirString>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  qualifiedInterval?: ReadonlyArray<t.TypeOf<typeof FhirObservationDefinition_QualifiedInterval>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  quantitativeDetails?: Readonly<t.TypeOf<typeof FhirObservationDefinition_QuantitativeDetails>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  resourceType: Readonly<'ObservationDefinition'>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  validCodedValueSet?: Readonly<t.TypeOf<typeof FhirReference>>
}
/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
export interface FhirObservationDefinitionOutput {
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _multipleResultsAllowed?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _permittedDataType?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _preferredReportName?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  abnormalCodedValueSet?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  category?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  code: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  criticalCodedValueSet?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  method?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  multipleResultsAllowed?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  normalCodedValueSet?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  permittedDataType?: ReadonlyArray<
    | 'Quantity'
    | 'CodeableConcept'
    | 'string'
    | 'boolean'
    | 'integer'
    | 'Range'
    | 'Ratio'
    | 'SampledData'
    | 'time'
    | 'dateTime'
    | 'Period'
  >
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  preferredReportName?: Readonly<t.OutputOf<typeof FhirString>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  qualifiedInterval?: ReadonlyArray<t.OutputOf<typeof FhirObservationDefinition_QualifiedInterval>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  quantitativeDetails?: Readonly<t.OutputOf<typeof FhirObservationDefinition_QuantitativeDetails>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  resourceType: Readonly<'ObservationDefinition'>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  validCodedValueSet?: Readonly<t.OutputOf<typeof FhirReference>>
}
