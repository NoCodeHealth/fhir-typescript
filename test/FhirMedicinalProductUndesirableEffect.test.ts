import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMedicinalProductUndesirableEffect } from '../src/generated/FhirMedicinalProductUndesirableEffect'
import * as MedicinalProductUndesirableEffect from './fixtures/MedicinalProductUndesirableEffect/medicinalproductundesirableeffect-example.json'

describe('FhirMedicinalProductUndesirableEffect', () => {
  it('should decode valid MedicinalProductUndesirableEffect resources', () => {
    assert.deepStrictEqual(
      FhirMedicinalProductUndesirableEffect.decode(MedicinalProductUndesirableEffect),
      E.right(MedicinalProductUndesirableEffect)
    )
  })
  it('should not decode invalid MedicinalProductUndesirableEffect resources', () => {
    assert.ok(E.isLeft(FhirMedicinalProductUndesirableEffect.decode({})))
  })
})
