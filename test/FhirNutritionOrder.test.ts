import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirNutritionOrder } from '../src/generated/FhirNutritionOrder'
import * as NutritionOrder from './fixtures/NutritionOrder/nutritionorder-example-cardiacdiet.json'

describe('FhirNutritionOrder', () => {
  it('should decode valid NutritionOrder resources', () => {
    assert.deepStrictEqual(FhirNutritionOrder.decode(NutritionOrder), E.right(NutritionOrder))
  })
  it('should not decode invalid NutritionOrder resources', () => {
    assert.ok(E.isLeft(FhirNutritionOrder.decode({})))
  })
})
