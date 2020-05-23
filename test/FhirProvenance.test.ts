import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirProvenance } from '../src/generated/FhirProvenance'
import * as Provenance from './fixtures/Provenance/provenance-example-biocompute-object.json'

describe('FhirProvenance', () => {
  it('should decode valid Provenance resources', () => {
    assert.deepStrictEqual(FhirProvenance.decode(Provenance), E.right(Provenance))
  })
  it('should not decode invalid Provenance resources', () => {
    assert.ok(E.isLeft(FhirProvenance.decode({})))
  })
})
