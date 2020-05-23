import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirSubstance } from '../src/generated/FhirSubstance'
import * as Substance from './fixtures/Substance/substance-example-amoxicillin-clavulanate.json'

describe('FhirSubstance', () => {
  it('should decode valid Substance resources', () => {
    assert.deepStrictEqual(FhirSubstance.decode(Substance), E.right(Substance))
  })
  it('should not decode invalid Substance resources', () => {
    assert.ok(E.isLeft(FhirSubstance.decode({})))
  })
})
