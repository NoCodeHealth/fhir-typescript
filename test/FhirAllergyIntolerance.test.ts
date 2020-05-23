import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirAllergyIntolerance } from '../src/generated/FhirAllergyIntolerance'
import * as AllergyIntolerance from './fixtures/AllergyIntolerance/allergyintolerance-example.json'

describe('FhirAllergyIntolerance', () => {
  it('should decode valid AllergyIntolerance resources', () => {
    assert.deepStrictEqual(FhirAllergyIntolerance.decode(AllergyIntolerance), E.right(AllergyIntolerance))
  })
  it('should not decode invalid AllergyIntolerance resources', () => {
    assert.ok(E.isLeft(FhirAllergyIntolerance.decode({})))
  })
})
