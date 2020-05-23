import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirInsurancePlan } from '../src/generated/FhirInsurancePlan'
import * as InsurancePlan from './fixtures/InsurancePlan/insuranceplan-example.json'

describe('FhirInsurancePlan', () => {
  it('should decode valid InsurancePlan resources', () => {
    assert.deepStrictEqual(FhirInsurancePlan.decode(InsurancePlan), E.right(InsurancePlan))
  })
  it('should not decode invalid InsurancePlan resources', () => {
    assert.ok(E.isLeft(FhirInsurancePlan.decode({})))
  })
})
