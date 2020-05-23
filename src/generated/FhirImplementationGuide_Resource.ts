import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export const FhirImplementationGuide_Resource: t.Type<
  FhirImplementationGuide_Resource,
  FhirImplementationGuide_ResourceOutput
> = t.recursion('FhirImplementationGuide_Resource', () =>
  t.intersection([
    t.type({
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      reference: t.readonly(FhirReference),
    }),
    t.partial({
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      _description: t.readonly(FhirElement),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      _exampleBoolean: t.readonly(FhirElement),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      _exampleCanonical: t.readonly(FhirElement),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      _fhirVersion: t.readonlyArray(FhirElement),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      _groupingId: t.readonly(FhirElement),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      _name: t.readonly(FhirElement),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      description: t.readonly(FhirString),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      exampleBoolean: t.readonly(t.boolean),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      exampleCanonical: t.readonly(t.string),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      extension: t.readonlyArray(FhirExtension),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      fhirVersion: t.readonlyArray(
        t.keyof({
          '0.01': null,
          '0.05': null,
          '0.06': null,
          '0.11': null,
          '0.0.80': null,
          '0.0.81': null,
          '0.0.82': null,
          '0.4.0': null,
          '0.5.0': null,
          '1.0.0': null,
          '1.0.1': null,
          '1.0.2': null,
          '1.1.0': null,
          '1.4.0': null,
          '1.6.0': null,
          '1.8.0': null,
          '3.0.0': null,
          '3.0.1': null,
          '3.3.0': null,
          '3.5.0': null,
          '4.0.0': null,
          '4.0.1': null,
        })
      ),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      groupingId: t.readonly(FhirId),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      id: t.readonly(FhirString),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
      name: t.readonly(FhirString),
    }),
  ])
)

/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export interface FhirImplementationGuide_Resource {
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _exampleBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _exampleCanonical?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _fhirVersion?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _groupingId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  exampleBoolean?: Readonly<boolean>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  exampleCanonical?: Readonly<string>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  fhirVersion?: ReadonlyArray<
    | '0.01'
    | '0.05'
    | '0.06'
    | '0.11'
    | '0.0.80'
    | '0.0.81'
    | '0.0.82'
    | '0.4.0'
    | '0.5.0'
    | '1.0.0'
    | '1.0.1'
    | '1.0.2'
    | '1.1.0'
    | '1.4.0'
    | '1.6.0'
    | '1.8.0'
    | '3.0.0'
    | '3.0.1'
    | '3.3.0'
    | '3.5.0'
    | '4.0.0'
    | '4.0.1'
  >
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  groupingId?: Readonly<t.TypeOf<typeof FhirId>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  reference: Readonly<t.TypeOf<typeof FhirReference>>
}
/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export interface FhirImplementationGuide_ResourceOutput {
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _exampleBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _exampleCanonical?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _fhirVersion?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _groupingId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  exampleBoolean?: Readonly<boolean>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  exampleCanonical?: Readonly<string>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  fhirVersion?: ReadonlyArray<
    | '0.01'
    | '0.05'
    | '0.06'
    | '0.11'
    | '0.0.80'
    | '0.0.81'
    | '0.0.82'
    | '0.4.0'
    | '0.5.0'
    | '1.0.0'
    | '1.0.1'
    | '1.0.2'
    | '1.1.0'
    | '1.4.0'
    | '1.6.0'
    | '1.8.0'
    | '3.0.0'
    | '3.0.1'
    | '3.3.0'
    | '3.5.0'
    | '4.0.0'
    | '4.0.1'
  >
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  groupingId?: Readonly<t.OutputOf<typeof FhirId>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  reference: Readonly<t.OutputOf<typeof FhirReference>>
}
