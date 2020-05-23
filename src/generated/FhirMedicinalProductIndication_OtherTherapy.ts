import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Indication for the Medicinal Product. */
export const FhirMedicinalProductIndication_OtherTherapy: t.Type<
  FhirMedicinalProductIndication_OtherTherapy,
  FhirMedicinalProductIndication_OtherTherapyOutput
> = t.recursion('FhirMedicinalProductIndication_OtherTherapy', () =>
  t.intersection([
    t.type({
      /** Indication for the Medicinal Product. */
      therapyRelationshipType: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** Indication for the Medicinal Product. */
      extension: t.readonlyArray(FhirExtension),
      /** Indication for the Medicinal Product. */
      id: t.readonly(FhirString),
      /** Indication for the Medicinal Product. */
      medicationCodeableConcept: t.readonly(FhirCodeableConcept),
      /** Indication for the Medicinal Product. */
      medicationReference: t.readonly(FhirReference),
      /** Indication for the Medicinal Product. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** Indication for the Medicinal Product. */
export interface FhirMedicinalProductIndication_OtherTherapy {
  /** Indication for the Medicinal Product. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Indication for the Medicinal Product. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Indication for the Medicinal Product. */
  medicationCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Indication for the Medicinal Product. */
  medicationReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Indication for the Medicinal Product. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Indication for the Medicinal Product. */
  therapyRelationshipType: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Indication for the Medicinal Product. */
export interface FhirMedicinalProductIndication_OtherTherapyOutput {
  /** Indication for the Medicinal Product. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Indication for the Medicinal Product. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Indication for the Medicinal Product. */
  medicationCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Indication for the Medicinal Product. */
  medicationReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Indication for the Medicinal Product. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Indication for the Medicinal Product. */
  therapyRelationshipType: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
