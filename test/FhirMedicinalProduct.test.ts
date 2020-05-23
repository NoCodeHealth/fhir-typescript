import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMedicinalProduct } from '../src/generated/FhirMedicinalProduct'
import * as MedicinalProduct from './fixtures/MedicinalProduct/medicinalproduct-example.json'

describe('FhirMedicinalProduct', () => {
  it('should decode valid MedicinalProduct resources', () => {
    assert.deepStrictEqual(FhirMedicinalProduct.decode(MedicinalProduct), E.right(MedicinalProduct))
  })
  it('should not decode invalid MedicinalProduct resources', () => {
    assert.ok(E.isLeft(FhirMedicinalProduct.decode({})))
  })
})
