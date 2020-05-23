import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
export const FhirMedicinalProductContraindication_OtherTherapy: t.Type<
  FhirMedicinalProductContraindication_OtherTherapy,
  FhirMedicinalProductContraindication_OtherTherapyOutput
> = t.recursion('FhirMedicinalProductContraindication_OtherTherapy', () =>
  t.intersection([
    t.type({
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      therapyRelationshipType: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      extension: t.readonlyArray(FhirExtension),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      id: t.readonly(FhirString),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      medicationCodeableConcept: t.readonly(FhirCodeableConcept),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      medicationReference: t.readonly(FhirReference),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
export interface FhirMedicinalProductContraindication_OtherTherapy {
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  medicationCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  medicationReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  therapyRelationshipType: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
export interface FhirMedicinalProductContraindication_OtherTherapyOutput {
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  medicationCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  medicationReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  therapyRelationshipType: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
