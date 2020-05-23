import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirPeriod } from './FhirPeriod'
import { FhirString } from './FhirString'

/** The regulatory authorization of a medicinal product. */
export const FhirMedicinalProductAuthorization_Procedure: t.Type<
  FhirMedicinalProductAuthorization_Procedure,
  FhirMedicinalProductAuthorization_ProcedureOutput
> = t.recursion('FhirMedicinalProductAuthorization_Procedure', () =>
  t.intersection([
    t.type({
      /** The regulatory authorization of a medicinal product. */
      type: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** The regulatory authorization of a medicinal product. */
      _dateDateTime: t.readonly(FhirElement),
      /** The regulatory authorization of a medicinal product. */
      application: t.readonlyArray(FhirMedicinalProductAuthorization_Procedure),
      /** The regulatory authorization of a medicinal product. */
      dateDateTime: t.readonly(t.string),
      /** The regulatory authorization of a medicinal product. */
      datePeriod: t.readonly(FhirPeriod),
      /** The regulatory authorization of a medicinal product. */
      extension: t.readonlyArray(FhirExtension),
      /** The regulatory authorization of a medicinal product. */
      id: t.readonly(FhirString),
      /** The regulatory authorization of a medicinal product. */
      identifier: t.readonly(FhirIdentifier),
      /** The regulatory authorization of a medicinal product. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** The regulatory authorization of a medicinal product. */
export interface FhirMedicinalProductAuthorization_Procedure {
  /** The regulatory authorization of a medicinal product. */
  _dateDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The regulatory authorization of a medicinal product. */
  application?: ReadonlyArray<FhirMedicinalProductAuthorization_Procedure>
  /** The regulatory authorization of a medicinal product. */
  dateDateTime?: Readonly<string>
  /** The regulatory authorization of a medicinal product. */
  datePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** The regulatory authorization of a medicinal product. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The regulatory authorization of a medicinal product. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The regulatory authorization of a medicinal product. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** The regulatory authorization of a medicinal product. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The regulatory authorization of a medicinal product. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The regulatory authorization of a medicinal product. */
export interface FhirMedicinalProductAuthorization_ProcedureOutput {
  /** The regulatory authorization of a medicinal product. */
  _dateDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The regulatory authorization of a medicinal product. */
  application?: ReadonlyArray<FhirMedicinalProductAuthorization_ProcedureOutput>
  /** The regulatory authorization of a medicinal product. */
  dateDateTime?: Readonly<string>
  /** The regulatory authorization of a medicinal product. */
  datePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** The regulatory authorization of a medicinal product. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The regulatory authorization of a medicinal product. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The regulatory authorization of a medicinal product. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** The regulatory authorization of a medicinal product. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The regulatory authorization of a medicinal product. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
