import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMedicinalProductManufactured } from '../src/generated/FhirMedicinalProductManufactured'
import * as MedicinalProductManufactured from './fixtures/MedicinalProductManufactured/medicinalproductmanufactured-example.json'

describe('FhirMedicinalProductManufactured', () => {
  it('should decode valid MedicinalProductManufactured resources', () => {
    assert.deepStrictEqual(
      FhirMedicinalProductManufactured.decode(MedicinalProductManufactured),
      E.right(MedicinalProductManufactured)
    )
  })
  it('should not decode invalid MedicinalProductManufactured resources', () => {
    assert.ok(E.isLeft(FhirMedicinalProductManufactured.decode({})))
  })
})
