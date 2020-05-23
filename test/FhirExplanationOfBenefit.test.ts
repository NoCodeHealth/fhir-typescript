import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirExplanationOfBenefit } from '../src/generated/FhirExplanationOfBenefit'
import * as ExplanationOfBenefit from './fixtures/ExplanationOfBenefit/explanationofbenefit-example-2.json'

describe('FhirExplanationOfBenefit', () => {
  it('should decode valid ExplanationOfBenefit resources', () => {
    assert.deepStrictEqual(FhirExplanationOfBenefit.decode(ExplanationOfBenefit), E.right(ExplanationOfBenefit))
  })
  it('should not decode invalid ExplanationOfBenefit resources', () => {
    assert.ok(E.isLeft(FhirExplanationOfBenefit.decode({})))
  })
})
