import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirLibrary } from '../src/generated/FhirLibrary'
import * as Library from './fixtures/Library/library-cms146-example.json'

describe('FhirLibrary', () => {
  it('should decode valid Library resources', () => {
    assert.deepStrictEqual(FhirLibrary.decode(Library), E.right(Library))
  })
  it('should not decode invalid Library resources', () => {
    assert.ok(E.isLeft(FhirLibrary.decode({})))
  })
})
