import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Demographics and administrative information about a person independent of a specific health-related context. */
export const FhirPerson_Link: t.Type<FhirPerson_Link, FhirPerson_LinkOutput> = t.recursion('FhirPerson_Link', () =>
  t.intersection([
    t.type({
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      target: t.readonly(FhirReference),
    }),
    t.partial({
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      _assurance: t.readonly(FhirElement),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      assurance: t.readonly(
        t.keyof({
          level1: null,
          level2: null,
          level3: null,
          level4: null,
        })
      ),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      extension: t.readonlyArray(FhirExtension),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      id: t.readonly(FhirString),
      /** Demographics and administrative information about a person independent of a specific health-related context. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** Demographics and administrative information about a person independent of a specific health-related context. */
export interface FhirPerson_Link {
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  _assurance?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  assurance?: Readonly<'level1' | 'level2' | 'level3' | 'level4'>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  target: Readonly<t.TypeOf<typeof FhirReference>>
}
/** Demographics and administrative information about a person independent of a specific health-related context. */
export interface FhirPerson_LinkOutput {
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  _assurance?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  assurance?: Readonly<'level1' | 'level2' | 'level3' | 'level4'>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Demographics and administrative information about a person independent of a specific health-related context. */
  target: Readonly<t.OutputOf<typeof FhirReference>>
}
