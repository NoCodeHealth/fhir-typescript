import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirCatalogEntry } from '../src/generated/FhirCatalogEntry'
import * as CatalogEntry from './fixtures/CatalogEntry/catalogentry-example.json'

describe('FhirCatalogEntry', () => {
  it('should decode valid CatalogEntry resources', () => {
    assert.deepStrictEqual(FhirCatalogEntry.decode(CatalogEntry), E.right(CatalogEntry))
  })
  it('should not decode invalid CatalogEntry resources', () => {
    assert.ok(E.isLeft(FhirCatalogEntry.decode({})))
  })
})
