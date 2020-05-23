import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
export const FhirPatient_Link: t.Type<FhirPatient_Link, FhirPatient_LinkOutput> = t.recursion('FhirPatient_Link', () =>
  t.intersection([
    t.type({
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      other: t.readonly(FhirReference),
    }),
    t.partial({
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      _type: t.readonly(FhirElement),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      extension: t.readonlyArray(FhirExtension),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      id: t.readonly(FhirString),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
      type: t.readonly(
        t.keyof({
          'replaced-by': null,
          replaces: null,
          refer: null,
          seealso: null,
        })
      ),
    }),
  ])
)

/** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
export interface FhirPatient_Link {
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  other: Readonly<t.TypeOf<typeof FhirReference>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  type?: Readonly<'replaced-by' | 'replaces' | 'refer' | 'seealso'>
}
/** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
export interface FhirPatient_LinkOutput {
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  other: Readonly<t.OutputOf<typeof FhirReference>>
  /** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
  type?: Readonly<'replaced-by' | 'replaces' | 'refer' | 'seealso'>
}
