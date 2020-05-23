import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirComposition } from '../src/generated/FhirComposition'
import * as Composition from './fixtures/Composition/composition-example-mixed.json'

describe('FhirComposition', () => {
  it('should decode valid Composition resources', () => {
    assert.deepStrictEqual(FhirComposition.decode(Composition), E.right(Composition))
  })
  it('should not decode invalid Composition resources', () => {
    assert.ok(E.isLeft(FhirComposition.decode({})))
  })
})
