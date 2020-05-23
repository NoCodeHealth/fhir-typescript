import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirVerificationResult } from '../src/generated/FhirVerificationResult'
import * as VerificationResult from './fixtures/VerificationResult/verificationresult-example.json'

describe('FhirVerificationResult', () => {
  it('should decode valid VerificationResult resources', () => {
    assert.deepStrictEqual(FhirVerificationResult.decode(VerificationResult), E.right(VerificationResult))
  })
  it('should not decode invalid VerificationResult resources', () => {
    assert.ok(E.isLeft(FhirVerificationResult.decode({})))
  })
})
