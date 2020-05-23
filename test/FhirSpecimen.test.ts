import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirSpecimen } from '../src/generated/FhirSpecimen'
import * as Specimen from './fixtures/Specimen/specimen-example-isolate.json'

describe('FhirSpecimen', () => {
  it('should decode valid Specimen resources', () => {
    assert.deepStrictEqual(FhirSpecimen.decode(Specimen), E.right(Specimen))
  })
  it('should not decode invalid Specimen resources', () => {
    assert.ok(E.isLeft(FhirSpecimen.decode({})))
  })
})
