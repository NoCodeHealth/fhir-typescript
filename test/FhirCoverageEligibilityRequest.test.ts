import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirCoverageEligibilityRequest } from '../src/generated/FhirCoverageEligibilityRequest'
import * as CoverageEligibilityRequest from './fixtures/CoverageEligibilityRequest/coverageeligibilityrequest-example-2.json'

describe('FhirCoverageEligibilityRequest', () => {
  it('should decode valid CoverageEligibilityRequest resources', () => {
    assert.deepStrictEqual(
      FhirCoverageEligibilityRequest.decode(CoverageEligibilityRequest),
      E.right(CoverageEligibilityRequest)
    )
  })
  it('should not decode invalid CoverageEligibilityRequest resources', () => {
    assert.ok(E.isLeft(FhirCoverageEligibilityRequest.decode({})))
  })
})
