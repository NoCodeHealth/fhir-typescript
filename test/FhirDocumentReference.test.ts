import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirDocumentReference } from '../src/generated/FhirDocumentReference'
import * as DocumentReference from './fixtures/DocumentReference/documentreference-example.json'

describe('FhirDocumentReference', () => {
  it('should decode valid DocumentReference resources', () => {
    assert.deepStrictEqual(FhirDocumentReference.decode(DocumentReference), E.right(DocumentReference))
  })
  it('should not decode invalid DocumentReference resources', () => {
    assert.ok(E.isLeft(FhirDocumentReference.decode({})))
  })
})
