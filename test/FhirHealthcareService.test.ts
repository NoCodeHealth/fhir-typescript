import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirHealthcareService } from '../src/generated/FhirHealthcareService'
import * as HealthcareService from './fixtures/HealthcareService/healthcareservice-example.json'

describe('FhirHealthcareService', () => {
  it('should decode valid HealthcareService resources', () => {
    assert.deepStrictEqual(FhirHealthcareService.decode(HealthcareService), E.right(HealthcareService))
  })
  it('should not decode invalid HealthcareService resources', () => {
    assert.ok(E.isLeft(FhirHealthcareService.decode({})))
  })
})
