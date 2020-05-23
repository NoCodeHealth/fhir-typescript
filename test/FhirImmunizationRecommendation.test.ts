import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirImmunizationRecommendation } from '../src/generated/FhirImmunizationRecommendation'
import * as ImmunizationRecommendation from './fixtures/ImmunizationRecommendation/immunizationrecommendation-example-target-disease.json'

describe('FhirImmunizationRecommendation', () => {
  it('should decode valid ImmunizationRecommendation resources', () => {
    assert.deepStrictEqual(
      FhirImmunizationRecommendation.decode(ImmunizationRecommendation),
      E.right(ImmunizationRecommendation)
    )
  })
  it('should not decode invalid ImmunizationRecommendation resources', () => {
    assert.ok(E.isLeft(FhirImmunizationRecommendation.decode({})))
  })
})
