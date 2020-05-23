import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirClaimResponse } from '../src/generated/FhirClaimResponse'
import * as ClaimResponse from './fixtures/ClaimResponse/claimresponse-example-2.json'

describe('FhirClaimResponse', () => {
  it('should decode valid ClaimResponse resources', () => {
    assert.deepStrictEqual(FhirClaimResponse.decode(ClaimResponse), E.right(ClaimResponse))
  })
  it('should not decode invalid ClaimResponse resources', () => {
    assert.ok(E.isLeft(FhirClaimResponse.decode({})))
  })
})
