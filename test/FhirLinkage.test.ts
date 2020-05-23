import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirLinkage } from '../src/generated/FhirLinkage'
import * as Linkage from './fixtures/Linkage/linkage-example.json'

describe('FhirLinkage', () => {
  it('should decode valid Linkage resources', () => {
    assert.deepStrictEqual(FhirLinkage.decode(Linkage), E.right(Linkage))
  })
  it('should not decode invalid Linkage resources', () => {
    assert.ok(E.isLeft(FhirLinkage.decode({})))
  })
})
