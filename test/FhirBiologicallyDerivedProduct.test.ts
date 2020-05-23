import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirBiologicallyDerivedProduct } from '../src/generated/FhirBiologicallyDerivedProduct'
import * as BiologicallyDerivedProduct from './fixtures/BiologicallyDerivedProduct/biologicallyderivedproduct-example.json'

describe('FhirBiologicallyDerivedProduct', () => {
  it('should decode valid BiologicallyDerivedProduct resources', () => {
    assert.deepStrictEqual(
      FhirBiologicallyDerivedProduct.decode(BiologicallyDerivedProduct),
      E.right(BiologicallyDerivedProduct)
    )
  })
  it('should not decode invalid BiologicallyDerivedProduct resources', () => {
    assert.ok(E.isLeft(FhirBiologicallyDerivedProduct.decode({})))
  })
})
