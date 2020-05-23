import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirRelatedPerson } from '../src/generated/FhirRelatedPerson'
import * as RelatedPerson from './fixtures/RelatedPerson/relatedperson-example-f001-sarah.json'

describe('FhirRelatedPerson', () => {
  it('should decode valid RelatedPerson resources', () => {
    assert.deepStrictEqual(FhirRelatedPerson.decode(RelatedPerson), E.right(RelatedPerson))
  })
  it('should not decode invalid RelatedPerson resources', () => {
    assert.ok(E.isLeft(FhirRelatedPerson.decode({})))
  })
})
