import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMedicinalProductIngredient } from '../src/generated/FhirMedicinalProductIngredient'
import * as MedicinalProductIngredient from './fixtures/MedicinalProductIngredient/medicinalproductingredient-example.json'

describe('FhirMedicinalProductIngredient', () => {
  it('should decode valid MedicinalProductIngredient resources', () => {
    assert.deepStrictEqual(
      FhirMedicinalProductIngredient.decode(MedicinalProductIngredient),
      E.right(MedicinalProductIngredient)
    )
  })
  it('should not decode invalid MedicinalProductIngredient resources', () => {
    assert.ok(E.isLeft(FhirMedicinalProductIngredient.decode({})))
  })
})
