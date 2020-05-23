import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirCarePlan } from '../src/generated/FhirCarePlan'
import * as CarePlan from './fixtures/CarePlan/careplan-example-GPVisit.json'

describe('FhirCarePlan', () => {
  it('should decode valid CarePlan resources', () => {
    assert.deepStrictEqual(FhirCarePlan.decode(CarePlan), E.right(CarePlan))
  })
  it('should not decode invalid CarePlan resources', () => {
    assert.ok(E.isLeft(FhirCarePlan.decode({})))
  })
})
