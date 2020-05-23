import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
export const FhirInvoice_Participant: t.Type<FhirInvoice_Participant, FhirInvoice_ParticipantOutput> = t.recursion(
  'FhirInvoice_Participant',
  () =>
    t.intersection([
      t.type({
        /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
        actor: t.readonly(FhirReference),
      }),
      t.partial({
        /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
        extension: t.readonlyArray(FhirExtension),
        /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
        id: t.readonly(FhirString),
        /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
        role: t.readonly(FhirCodeableConcept),
      }),
    ])
)

/** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
export interface FhirInvoice_Participant {
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  actor: Readonly<t.TypeOf<typeof FhirReference>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  role?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
export interface FhirInvoice_ParticipantOutput {
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  actor: Readonly<t.OutputOf<typeof FhirReference>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  role?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
