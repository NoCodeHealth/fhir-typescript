import * as t from 'io-ts'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeasureReport_Group } from './FhirMeasureReport_Group'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export const FhirMeasureReport: t.Type<FhirMeasureReport, FhirMeasureReportOutput> = t.recursion(
  'FhirMeasureReport',
  () =>
    t.intersection([
      t.type({
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        measure: t.readonly(FhirCanonical),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        period: t.readonly(FhirPeriod),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        resourceType: t.readonly(t.literal('MeasureReport')),
      }),
      t.partial({
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        _date: t.readonly(FhirElement),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        _implicitRules: t.readonly(FhirElement),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        _language: t.readonly(FhirElement),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        _status: t.readonly(FhirElement),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        _type: t.readonly(FhirElement),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        contained: t.readonlyArray(FhirResourceList),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        date: t.readonly(FhirDateTime),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        evaluatedResource: t.readonlyArray(FhirReference),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        extension: t.readonlyArray(FhirExtension),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        group: t.readonlyArray(FhirMeasureReport_Group),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        id: t.readonly(FhirId),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        implicitRules: t.readonly(FhirUri),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        improvementNotation: t.readonly(FhirCodeableConcept),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        language: t.readonly(FhirCode),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        meta: t.readonly(FhirMeta),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        reporter: t.readonly(FhirReference),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        status: t.readonly(
          t.keyof({
            complete: null,
            pending: null,
            error: null,
          })
        ),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        subject: t.readonly(FhirReference),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        text: t.readonly(FhirNarrative),
        /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
        type: t.readonly(
          t.keyof({
            individual: null,
            'subject-list': null,
            summary: null,
            'data-collection': null,
          })
        ),
      }),
    ])
)

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface FhirMeasureReport {
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  evaluatedResource?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  group?: ReadonlyArray<t.TypeOf<typeof FhirMeasureReport_Group>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  improvementNotation?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  measure: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  period: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  reporter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  resourceType: Readonly<'MeasureReport'>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  status?: Readonly<'complete' | 'pending' | 'error'>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  subject?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  type?: Readonly<'individual' | 'subject-list' | 'summary' | 'data-collection'>
}
/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface FhirMeasureReportOutput {
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  evaluatedResource?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  group?: ReadonlyArray<t.OutputOf<typeof FhirMeasureReport_Group>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  improvementNotation?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  measure: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  period: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  reporter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  resourceType: Readonly<'MeasureReport'>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  status?: Readonly<'complete' | 'pending' | 'error'>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  subject?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  type?: Readonly<'individual' | 'subject-list' | 'summary' | 'data-collection'>
}
