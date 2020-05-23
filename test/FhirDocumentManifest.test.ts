import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirDocumentManifest } from '../src/generated/FhirDocumentManifest'
import * as DocumentManifest from './fixtures/DocumentManifest/documentmanifest-example.json'

describe('FhirDocumentManifest', () => {
  it('should decode valid DocumentManifest resources', () => {
    assert.deepStrictEqual(FhirDocumentManifest.decode(DocumentManifest), E.right(DocumentManifest))
  })
  it('should not decode invalid DocumentManifest resources', () => {
    assert.ok(E.isLeft(FhirDocumentManifest.decode({})))
  })
})
