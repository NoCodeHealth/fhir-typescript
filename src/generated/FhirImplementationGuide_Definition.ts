import * as t from 'io-ts'
import { FhirExtension } from './FhirExtension'
import { FhirImplementationGuide_Grouping } from './FhirImplementationGuide_Grouping'
import { FhirImplementationGuide_Page } from './FhirImplementationGuide_Page'
import { FhirImplementationGuide_Parameter } from './FhirImplementationGuide_Parameter'
import { FhirImplementationGuide_Resource } from './FhirImplementationGuide_Resource'
import { FhirImplementationGuide_Template } from './FhirImplementationGuide_Template'
import { FhirString } from './FhirString'

/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export const FhirImplementationGuide_Definition: t.Type<
  FhirImplementationGuide_Definition,
  FhirImplementationGuide_DefinitionOutput
> = t.recursion('FhirImplementationGuide_Definition', () =>
  t.intersection([
    t.type({
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      resource: t.readonlyArray(FhirImplementationGuide_Resource),
    }),
    t.partial({
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      extension: t.readonlyArray(FhirExtension),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      grouping: t.readonlyArray(FhirImplementationGuide_Grouping),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      id: t.readonly(FhirString),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      page: t.readonly(FhirImplementationGuide_Page),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      parameter: t.readonlyArray(FhirImplementationGuide_Parameter),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      template: t.readonlyArray(FhirImplementationGuide_Template),
    }),
  ])
)

/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export interface FhirImplementationGuide_Definition {
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  grouping?: ReadonlyArray<t.TypeOf<typeof FhirImplementationGuide_Grouping>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  page?: Readonly<t.TypeOf<typeof FhirImplementationGuide_Page>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  parameter?: ReadonlyArray<t.TypeOf<typeof FhirImplementationGuide_Parameter>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  resource: ReadonlyArray<t.TypeOf<typeof FhirImplementationGuide_Resource>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  template?: ReadonlyArray<t.TypeOf<typeof FhirImplementationGuide_Template>>
}
/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export interface FhirImplementationGuide_DefinitionOutput {
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  grouping?: ReadonlyArray<t.OutputOf<typeof FhirImplementationGuide_Grouping>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  page?: Readonly<t.OutputOf<typeof FhirImplementationGuide_Page>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  parameter?: ReadonlyArray<t.OutputOf<typeof FhirImplementationGuide_Parameter>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  resource: ReadonlyArray<t.OutputOf<typeof FhirImplementationGuide_Resource>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  template?: ReadonlyArray<t.OutputOf<typeof FhirImplementationGuide_Template>>
}
