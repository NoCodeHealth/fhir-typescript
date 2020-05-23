import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMedicinalProductIndication } from '../src/generated/FhirMedicinalProductIndication'
import * as MedicinalProductIndication from './fixtures/MedicinalProductIndication/medicinalproductindication-example.json'

describe('FhirMedicinalProductIndication', () => {
  it('should decode valid MedicinalProductIndication resources', () => {
    assert.deepStrictEqual(
      FhirMedicinalProductIndication.decode(MedicinalProductIndication),
      E.right(MedicinalProductIndication)
    )
  })
  it('should not decode invalid MedicinalProductIndication resources', () => {
    assert.ok(E.isLeft(FhirMedicinalProductIndication.decode({})))
  })
})
