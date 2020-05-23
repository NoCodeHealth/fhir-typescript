import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMedicinalProductPackaged } from '../src/generated/FhirMedicinalProductPackaged'
import * as MedicinalProductPackaged from './fixtures/MedicinalProductPackaged/medicinalproductpackaged-example.json'

describe('FhirMedicinalProductPackaged', () => {
  it('should decode valid MedicinalProductPackaged resources', () => {
    assert.deepStrictEqual(
      FhirMedicinalProductPackaged.decode(MedicinalProductPackaged),
      E.right(MedicinalProductPackaged)
    )
  })
  it('should not decode invalid MedicinalProductPackaged resources', () => {
    assert.ok(E.isLeft(FhirMedicinalProductPackaged.decode({})))
  })
})
