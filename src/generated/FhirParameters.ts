import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirId } from './FhirId'
import { FhirMeta } from './FhirMeta'
import { FhirParameters_Parameter } from './FhirParameters_Parameter'
import { FhirUri } from './FhirUri'

/** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
export const FhirParameters: t.Type<FhirParameters, FhirParametersOutput> = t.recursion('FhirParameters', () =>
  t.intersection([
    t.type({
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      resourceType: t.readonly(t.literal('Parameters')),
    }),
    t.partial({
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _implicitRules: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      _language: t.readonly(FhirElement),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      id: t.readonly(FhirId),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      implicitRules: t.readonly(FhirUri),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      language: t.readonly(FhirCode),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      meta: t.readonly(FhirMeta),
      /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
      parameter: t.readonlyArray(FhirParameters_Parameter),
    }),
  ])
)

/** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
export interface FhirParameters {
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  parameter?: ReadonlyArray<t.TypeOf<typeof FhirParameters_Parameter>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  resourceType: Readonly<'Parameters'>
}
/** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
export interface FhirParametersOutput {
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  parameter?: ReadonlyArray<t.OutputOf<typeof FhirParameters_Parameter>>
  /** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
  resourceType: Readonly<'Parameters'>
}
