import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirInsurancePlan_Contact } from './FhirInsurancePlan_Contact'
import { FhirInsurancePlan_Coverage } from './FhirInsurancePlan_Coverage'
import { FhirInsurancePlan_Plan } from './FhirInsurancePlan_Plan'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Details of a Health Insurance product/plan provided by an organization. */
export const FhirInsurancePlan: t.Type<FhirInsurancePlan, FhirInsurancePlanOutput> = t.recursion(
  'FhirInsurancePlan',
  () =>
    t.intersection([
      t.type({
        /** Details of a Health Insurance product/plan provided by an organization. */
        resourceType: t.readonly(t.literal('InsurancePlan')),
      }),
      t.partial({
        /** Details of a Health Insurance product/plan provided by an organization. */
        _alias: t.readonlyArray(FhirElement),
        /** Details of a Health Insurance product/plan provided by an organization. */
        _implicitRules: t.readonly(FhirElement),
        /** Details of a Health Insurance product/plan provided by an organization. */
        _language: t.readonly(FhirElement),
        /** Details of a Health Insurance product/plan provided by an organization. */
        _name: t.readonly(FhirElement),
        /** Details of a Health Insurance product/plan provided by an organization. */
        _status: t.readonly(FhirElement),
        /** Details of a Health Insurance product/plan provided by an organization. */
        administeredBy: t.readonly(FhirReference),
        /** Details of a Health Insurance product/plan provided by an organization. */
        alias: t.readonlyArray(FhirString),
        /** Details of a Health Insurance product/plan provided by an organization. */
        contact: t.readonlyArray(FhirInsurancePlan_Contact),
        /** Details of a Health Insurance product/plan provided by an organization. */
        contained: t.readonlyArray(FhirResourceList),
        /** Details of a Health Insurance product/plan provided by an organization. */
        coverage: t.readonlyArray(FhirInsurancePlan_Coverage),
        /** Details of a Health Insurance product/plan provided by an organization. */
        coverageArea: t.readonlyArray(FhirReference),
        /** Details of a Health Insurance product/plan provided by an organization. */
        endpoint: t.readonlyArray(FhirReference),
        /** Details of a Health Insurance product/plan provided by an organization. */
        extension: t.readonlyArray(FhirExtension),
        /** Details of a Health Insurance product/plan provided by an organization. */
        id: t.readonly(FhirId),
        /** Details of a Health Insurance product/plan provided by an organization. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** Details of a Health Insurance product/plan provided by an organization. */
        implicitRules: t.readonly(FhirUri),
        /** Details of a Health Insurance product/plan provided by an organization. */
        language: t.readonly(FhirCode),
        /** Details of a Health Insurance product/plan provided by an organization. */
        meta: t.readonly(FhirMeta),
        /** Details of a Health Insurance product/plan provided by an organization. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Details of a Health Insurance product/plan provided by an organization. */
        name: t.readonly(FhirString),
        /** Details of a Health Insurance product/plan provided by an organization. */
        network: t.readonlyArray(FhirReference),
        /** Details of a Health Insurance product/plan provided by an organization. */
        ownedBy: t.readonly(FhirReference),
        /** Details of a Health Insurance product/plan provided by an organization. */
        period: t.readonly(FhirPeriod),
        /** Details of a Health Insurance product/plan provided by an organization. */
        plan: t.readonlyArray(FhirInsurancePlan_Plan),
        /** Details of a Health Insurance product/plan provided by an organization. */
        status: t.readonly(
          t.keyof({
            draft: null,
            active: null,
            retired: null,
            unknown: null,
          })
        ),
        /** Details of a Health Insurance product/plan provided by an organization. */
        text: t.readonly(FhirNarrative),
        /** Details of a Health Insurance product/plan provided by an organization. */
        type: t.readonlyArray(FhirCodeableConcept),
      }),
    ])
)

/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlan {
  /** Details of a Health Insurance product/plan provided by an organization. */
  _alias?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  administeredBy?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  alias?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirInsurancePlan_Contact>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  coverage?: ReadonlyArray<t.TypeOf<typeof FhirInsurancePlan_Coverage>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  coverageArea?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  endpoint?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  network?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  ownedBy?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  plan?: ReadonlyArray<t.TypeOf<typeof FhirInsurancePlan_Plan>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  resourceType: Readonly<'InsurancePlan'>
  /** Details of a Health Insurance product/plan provided by an organization. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** Details of a Health Insurance product/plan provided by an organization. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  type?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlanOutput {
  /** Details of a Health Insurance product/plan provided by an organization. */
  _alias?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  administeredBy?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  alias?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirInsurancePlan_Contact>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  coverage?: ReadonlyArray<t.OutputOf<typeof FhirInsurancePlan_Coverage>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  coverageArea?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  endpoint?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  network?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  ownedBy?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  plan?: ReadonlyArray<t.OutputOf<typeof FhirInsurancePlan_Plan>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  resourceType: Readonly<'InsurancePlan'>
  /** Details of a Health Insurance product/plan provided by an organization. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** Details of a Health Insurance product/plan provided by an organization. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  type?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
}
