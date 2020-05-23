import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirClaim } from '../src/generated/FhirClaim'
import * as Claim from './fixtures/Claim/claim-example-cms1500-medical.json'

describe('FhirClaim', () => {
  it('should decode valid Claim resources', () => {
    assert.deepStrictEqual(FhirClaim.decode(Claim), E.right(Claim))
  })
  it('should not decode invalid Claim resources', () => {
    assert.ok(E.isLeft(FhirClaim.decode({})))
  })
})
