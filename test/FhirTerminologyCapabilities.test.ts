import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirTerminologyCapabilities } from '../src/generated/FhirTerminologyCapabilities'
import * as TerminologyCapabilities from './fixtures/TerminologyCapabilities/terminologycapabilities-example.json'

describe('FhirTerminologyCapabilities', () => {
  it('should decode valid TerminologyCapabilities resources', () => {
    assert.deepStrictEqual(
      FhirTerminologyCapabilities.decode(TerminologyCapabilities),
      E.right(TerminologyCapabilities)
    )
  })
  it('should not decode invalid TerminologyCapabilities resources', () => {
    assert.ok(E.isLeft(FhirTerminologyCapabilities.decode({})))
  })
})
