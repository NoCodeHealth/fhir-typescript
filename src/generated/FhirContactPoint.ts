import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirString } from './FhirString'

/** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
export const FhirContactPoint: t.Type<FhirContactPoint, FhirContactPointOutput> = t.recursion('FhirContactPoint', () =>
  t.partial({
    /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
    _rank: t.readonly(FhirElement),
    /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
    _system: t.readonly(FhirElement),
    /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
    _use: t.readonly(FhirElement),
    /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
    _value: t.readonly(FhirElement),
    /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
    extension: t.readonlyArray(FhirExtension),
    /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
    id: t.readonly(FhirString),
    /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
    period: t.readonly(FhirPeriod),
    /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
    rank: t.readonly(FhirPositiveInt),
    /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
    system: t.readonly(
      t.keyof({
        phone: null,
        fax: null,
        email: null,
        pager: null,
        url: null,
        sms: null,
        other: null,
      })
    ),
    /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
    use: t.readonly(
      t.keyof({
        home: null,
        work: null,
        temp: null,
        old: null,
        mobile: null,
      })
    ),
    /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
    value: t.readonly(FhirString),
  })
)

/** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
export interface FhirContactPoint {
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  _rank?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  _system?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  _use?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  _value?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  rank?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  system?: Readonly<'phone' | 'fax' | 'email' | 'pager' | 'url' | 'sms' | 'other'>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  use?: Readonly<'home' | 'work' | 'temp' | 'old' | 'mobile'>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  value?: Readonly<t.TypeOf<typeof FhirString>>
}
/** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
export interface FhirContactPointOutput {
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  _rank?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  _system?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  _use?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  _value?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  rank?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  system?: Readonly<'phone' | 'fax' | 'email' | 'pager' | 'url' | 'sms' | 'other'>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  use?: Readonly<'home' | 'work' | 'temp' | 'old' | 'mobile'>
  /** Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
  value?: Readonly<t.OutputOf<typeof FhirString>>
}
