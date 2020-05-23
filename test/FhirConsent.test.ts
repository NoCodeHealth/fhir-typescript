import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirConsent } from '../src/generated/FhirConsent'
import * as Consent from './fixtures/Consent/consent-example-Emergency.json'

describe('FhirConsent', () => {
  it('should decode valid Consent resources', () => {
    assert.deepStrictEqual(FhirConsent.decode(Consent), E.right(Consent))
  })
  it('should not decode invalid Consent resources', () => {
    assert.ok(E.isLeft(FhirConsent.decode({})))
  })
})
