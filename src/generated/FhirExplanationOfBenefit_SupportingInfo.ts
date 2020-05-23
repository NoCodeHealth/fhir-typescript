import * as t from 'io-ts'
import { FhirAttachment } from './FhirAttachment'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCoding } from './FhirCoding'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export const FhirExplanationOfBenefit_SupportingInfo: t.Type<
  FhirExplanationOfBenefit_SupportingInfo,
  FhirExplanationOfBenefit_SupportingInfoOutput
> = t.recursion('FhirExplanationOfBenefit_SupportingInfo', () =>
  t.intersection([
    t.type({
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      category: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      _sequence: t.readonly(FhirElement),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      _timingDate: t.readonly(FhirElement),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      _valueBoolean: t.readonly(FhirElement),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      _valueString: t.readonly(FhirElement),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      code: t.readonly(FhirCodeableConcept),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      extension: t.readonlyArray(FhirExtension),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      id: t.readonly(FhirString),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      reason: t.readonly(FhirCoding),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      sequence: t.readonly(FhirPositiveInt),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      timingDate: t.readonly(t.string),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      timingPeriod: t.readonly(FhirPeriod),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      valueAttachment: t.readonly(FhirAttachment),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      valueBoolean: t.readonly(t.boolean),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      valueQuantity: t.readonly(FhirQuantity),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      valueReference: t.readonly(FhirReference),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      valueString: t.readonly(t.string),
    }),
  ])
)

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface FhirExplanationOfBenefit_SupportingInfo {
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _sequence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _timingDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _valueBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _valueString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  category: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  reason?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  sequence?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  timingDate?: Readonly<string>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  timingPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  valueAttachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  valueBoolean?: Readonly<boolean>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  valueQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  valueReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  valueString?: Readonly<string>
}
/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface FhirExplanationOfBenefit_SupportingInfoOutput {
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _sequence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _timingDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _valueBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _valueString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  category: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  reason?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  sequence?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  timingDate?: Readonly<string>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  timingPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  valueAttachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  valueBoolean?: Readonly<boolean>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  valueQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  valueReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  valueString?: Readonly<string>
}
