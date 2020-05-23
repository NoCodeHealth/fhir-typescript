import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirBodyStructure } from '../src/generated/FhirBodyStructure'
import * as BodyStructure from './fixtures/BodyStructure/bodystructure-example-fetus.json'

describe('FhirBodyStructure', () => {
  it('should decode valid BodyStructure resources', () => {
    assert.deepStrictEqual(FhirBodyStructure.decode(BodyStructure), E.right(BodyStructure))
  })
  it('should not decode invalid BodyStructure resources', () => {
    assert.ok(E.isLeft(FhirBodyStructure.decode({})))
  })
})
