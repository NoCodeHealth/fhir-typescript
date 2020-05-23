import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirCoverageEligibilityResponse } from '../src/generated/FhirCoverageEligibilityResponse'
import * as CoverageEligibilityResponse from './fixtures/CoverageEligibilityResponse/coverageeligibilityresponse-example-benefits-2.json'

describe('FhirCoverageEligibilityResponse', () => {
  it('should decode valid CoverageEligibilityResponse resources', () => {
    assert.deepStrictEqual(
      FhirCoverageEligibilityResponse.decode(CoverageEligibilityResponse),
      E.right(CoverageEligibilityResponse)
    )
  })
  it('should not decode invalid CoverageEligibilityResponse resources', () => {
    assert.ok(E.isLeft(FhirCoverageEligibilityResponse.decode({})))
  })
})
