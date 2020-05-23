import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirParameters } from '../src/generated/FhirParameters'
import * as Parameters from './fixtures/Parameters/parameters-example.json'

describe('FhirParameters', () => {
  it('should decode valid Parameters resources', () => {
    assert.deepStrictEqual(FhirParameters.decode(Parameters), E.right(Parameters))
  })
  it('should not decode invalid Parameters resources', () => {
    assert.ok(E.isLeft(FhirParameters.decode({})))
  })
})
