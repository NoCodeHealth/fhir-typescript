import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirQuantity } from './FhirQuantity'
import { FhirRange } from './FhirRange'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Todo. */
export const FhirSubstanceReferenceInformation_Target: t.Type<
  FhirSubstanceReferenceInformation_Target,
  FhirSubstanceReferenceInformation_TargetOutput
> = t.recursion('FhirSubstanceReferenceInformation_Target', () =>
  t.partial({
    /** Todo. */
    _amountString: t.readonly(FhirElement),
    /** Todo. */
    amountQuantity: t.readonly(FhirQuantity),
    /** Todo. */
    amountRange: t.readonly(FhirRange),
    /** Todo. */
    amountString: t.readonly(t.string),
    /** Todo. */
    amountType: t.readonly(FhirCodeableConcept),
    /** Todo. */
    extension: t.readonlyArray(FhirExtension),
    /** Todo. */
    id: t.readonly(FhirString),
    /** Todo. */
    interaction: t.readonly(FhirCodeableConcept),
    /** Todo. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Todo. */
    organism: t.readonly(FhirCodeableConcept),
    /** Todo. */
    organismType: t.readonly(FhirCodeableConcept),
    /** Todo. */
    source: t.readonlyArray(FhirReference),
    /** Todo. */
    target: t.readonly(FhirIdentifier),
    /** Todo. */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** Todo. */
export interface FhirSubstanceReferenceInformation_Target {
  /** Todo. */
  _amountString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Todo. */
  amountQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Todo. */
  amountRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** Todo. */
  amountString?: Readonly<string>
  /** Todo. */
  amountType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Todo. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Todo. */
  interaction?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  organism?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Todo. */
  organismType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Todo. */
  source?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Todo. */
  target?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** Todo. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Todo. */
export interface FhirSubstanceReferenceInformation_TargetOutput {
  /** Todo. */
  _amountString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Todo. */
  amountQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Todo. */
  amountRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** Todo. */
  amountString?: Readonly<string>
  /** Todo. */
  amountType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Todo. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Todo. */
  interaction?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  organism?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Todo. */
  organismType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Todo. */
  source?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Todo. */
  target?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** Todo. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
