import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirConceptMap } from '../src/generated/FhirConceptMap'
import * as ConceptMap from './fixtures/ConceptMap/conceptmap-example-2.json'

describe('FhirConceptMap', () => {
  it('should decode valid ConceptMap resources', () => {
    assert.deepStrictEqual(FhirConceptMap.decode(ConceptMap), E.right(ConceptMap))
  })
  it('should not decode invalid ConceptMap resources', () => {
    assert.ok(E.isLeft(FhirConceptMap.decode({})))
  })
})
