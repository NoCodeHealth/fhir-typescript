import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirList } from '../src/generated/FhirList'
import * as List from './fixtures/List/list-example-allergies.json'

describe('FhirList', () => {
  it('should decode valid List resources', () => {
    assert.deepStrictEqual(FhirList.decode(List), E.right(List))
  })
  it('should not decode invalid List resources', () => {
    assert.ok(E.isLeft(FhirList.decode({})))
  })
})
