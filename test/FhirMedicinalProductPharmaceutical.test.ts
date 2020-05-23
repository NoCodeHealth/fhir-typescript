import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMedicinalProductPharmaceutical } from '../src/generated/FhirMedicinalProductPharmaceutical'
import * as MedicinalProductPharmaceutical from './fixtures/MedicinalProductPharmaceutical/medicinalproductpharmaceutical-example.json'

describe('FhirMedicinalProductPharmaceutical', () => {
  it('should decode valid MedicinalProductPharmaceutical resources', () => {
    assert.deepStrictEqual(
      FhirMedicinalProductPharmaceutical.decode(MedicinalProductPharmaceutical),
      E.right(MedicinalProductPharmaceutical)
    )
  })
  it('should not decode invalid MedicinalProductPharmaceutical resources', () => {
    assert.ok(E.isLeft(FhirMedicinalProductPharmaceutical.decode({})))
  })
})
