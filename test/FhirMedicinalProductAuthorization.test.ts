import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMedicinalProductAuthorization } from '../src/generated/FhirMedicinalProductAuthorization'
import * as MedicinalProductAuthorization from './fixtures/MedicinalProductAuthorization/medicinalproductauthorization-example.json'

describe('FhirMedicinalProductAuthorization', () => {
  it('should decode valid MedicinalProductAuthorization resources', () => {
    assert.deepStrictEqual(
      FhirMedicinalProductAuthorization.decode(MedicinalProductAuthorization),
      E.right(MedicinalProductAuthorization)
    )
  })
  it('should not decode invalid MedicinalProductAuthorization resources', () => {
    assert.ok(E.isLeft(FhirMedicinalProductAuthorization.decode({})))
  })
})
