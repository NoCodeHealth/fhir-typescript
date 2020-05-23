import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirRiskAssessment } from '../src/generated/FhirRiskAssessment'
import * as RiskAssessment from './fixtures/RiskAssessment/riskassessment-example-breastcancer.json'

describe('FhirRiskAssessment', () => {
  it('should decode valid RiskAssessment resources', () => {
    assert.deepStrictEqual(FhirRiskAssessment.decode(RiskAssessment), E.right(RiskAssessment))
  })
  it('should not decode invalid RiskAssessment resources', () => {
    assert.ok(E.isLeft(FhirRiskAssessment.decode({})))
  })
})
