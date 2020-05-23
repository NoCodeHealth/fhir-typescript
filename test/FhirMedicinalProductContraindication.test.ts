import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMedicinalProductContraindication } from '../src/generated/FhirMedicinalProductContraindication'
import * as MedicinalProductContraindication from './fixtures/MedicinalProductContraindication/medicinalproductcontraindication-example.json'

describe('FhirMedicinalProductContraindication', () => {
  it('should decode valid MedicinalProductContraindication resources', () => {
    assert.deepStrictEqual(
      FhirMedicinalProductContraindication.decode(MedicinalProductContraindication),
      E.right(MedicinalProductContraindication)
    )
  })
  it('should not decode invalid MedicinalProductContraindication resources', () => {
    assert.ok(E.isLeft(FhirMedicinalProductContraindication.decode({})))
  })
})
