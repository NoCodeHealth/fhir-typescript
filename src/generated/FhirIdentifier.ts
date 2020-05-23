import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
export const FhirIdentifier: t.Type<FhirIdentifier, FhirIdentifierOutput> = t.recursion('FhirIdentifier', () =>
  t.partial({
    /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
    _system: t.readonly(FhirElement),
    /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
    _use: t.readonly(FhirElement),
    /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
    _value: t.readonly(FhirElement),
    /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
    assigner: t.readonly(FhirReference),
    /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
    extension: t.readonlyArray(FhirExtension),
    /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
    id: t.readonly(FhirString),
    /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
    period: t.readonly(FhirPeriod),
    /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
    system: t.readonly(FhirUri),
    /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
    type: t.readonly(FhirCodeableConcept),
    /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
    use: t.readonly(
      t.keyof({
        usual: null,
        official: null,
        temp: null,
        secondary: null,
        old: null,
      })
    ),
    /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
    value: t.readonly(FhirString),
  })
)

/** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
export interface FhirIdentifier {
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  _system?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  _use?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  _value?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  assigner?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  system?: Readonly<t.TypeOf<typeof FhirUri>>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  use?: Readonly<'usual' | 'official' | 'temp' | 'secondary' | 'old'>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  value?: Readonly<t.TypeOf<typeof FhirString>>
}
/** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
export interface FhirIdentifierOutput {
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  _system?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  _use?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  _value?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  assigner?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  system?: Readonly<t.OutputOf<typeof FhirUri>>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  use?: Readonly<'usual' | 'official' | 'temp' | 'secondary' | 'old'>
  /** An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
  value?: Readonly<t.OutputOf<typeof FhirString>>
}
