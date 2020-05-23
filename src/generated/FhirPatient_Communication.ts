import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
export const FhirPatient_Communication: t.Type<
  FhirPatient_Communication,
  FhirPatient_CommunicationOutput
> = t.recursion('FhirPatient_Communication', () =>
  t.intersection([
    t.type({
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      language: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      _preferred: t.readonly(FhirElement),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      extension: t.readonlyArray(FhirExtension),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      id: t.readonly(FhirString),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      preferred: t.readonly(FhirBoolean),
    }),
  ])
)

/** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
export interface FhirPatient_Communication {
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _preferred?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  language: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  preferred?: Readonly<t.TypeOf<typeof FhirBoolean>>
}
/** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
export interface FhirPatient_CommunicationOutput {
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _preferred?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  language: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  preferred?: Readonly<t.OutputOf<typeof FhirBoolean>>
}
