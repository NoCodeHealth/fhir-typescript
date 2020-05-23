import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirSubscription } from '../src/generated/FhirSubscription'
import * as Subscription from './fixtures/Subscription/subscription-example-error.json'

describe('FhirSubscription', () => {
  it('should decode valid Subscription resources', () => {
    assert.deepStrictEqual(FhirSubscription.decode(Subscription), E.right(Subscription))
  })
  it('should not decode invalid Subscription resources', () => {
    assert.ok(E.isLeft(FhirSubscription.decode({})))
  })
})
