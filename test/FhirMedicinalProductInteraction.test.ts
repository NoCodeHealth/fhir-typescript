import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMedicinalProductInteraction } from '../src/generated/FhirMedicinalProductInteraction'
import * as MedicinalProductInteraction from './fixtures/MedicinalProductInteraction/medicinalproductinteraction-example.json'

describe('FhirMedicinalProductInteraction', () => {
  it('should decode valid MedicinalProductInteraction resources', () => {
    assert.deepStrictEqual(
      FhirMedicinalProductInteraction.decode(MedicinalProductInteraction),
      E.right(MedicinalProductInteraction)
    )
  })
  it('should not decode invalid MedicinalProductInteraction resources', () => {
    assert.ok(E.isLeft(FhirMedicinalProductInteraction.decode({})))
  })
})
