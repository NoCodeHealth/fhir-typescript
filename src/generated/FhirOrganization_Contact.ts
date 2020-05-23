import * as t from 'io-ts'
import { FhirAddress } from './FhirAddress'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactPoint } from './FhirContactPoint'
import { FhirExtension } from './FhirExtension'
import { FhirHumanName } from './FhirHumanName'
import { FhirString } from './FhirString'

/** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
export const FhirOrganization_Contact: t.Type<FhirOrganization_Contact, FhirOrganization_ContactOutput> = t.recursion(
  'FhirOrganization_Contact',
  () =>
    t.partial({
      /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
      address: t.readonly(FhirAddress),
      /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
      extension: t.readonlyArray(FhirExtension),
      /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
      id: t.readonly(FhirString),
      /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
      name: t.readonly(FhirHumanName),
      /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
      purpose: t.readonly(FhirCodeableConcept),
      /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
      telecom: t.readonlyArray(FhirContactPoint),
    })
)

/** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
export interface FhirOrganization_Contact {
  /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
  address?: Readonly<t.TypeOf<typeof FhirAddress>>
  /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
  name?: Readonly<t.TypeOf<typeof FhirHumanName>>
  /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
  purpose?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
  telecom?: ReadonlyArray<t.TypeOf<typeof FhirContactPoint>>
}
/** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
export interface FhirOrganization_ContactOutput {
  /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
  address?: Readonly<t.OutputOf<typeof FhirAddress>>
  /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
  name?: Readonly<t.OutputOf<typeof FhirHumanName>>
  /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
  purpose?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
  telecom?: ReadonlyArray<t.OutputOf<typeof FhirContactPoint>>
}
