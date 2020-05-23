import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirEvidence } from '../src/generated/FhirEvidence'
import * as Evidence from './fixtures/Evidence/evidence-example.json'

describe('FhirEvidence', () => {
  it('should decode valid Evidence resources', () => {
    assert.deepStrictEqual(FhirEvidence.decode(Evidence), E.right(Evidence))
  })
  it('should not decode invalid Evidence resources', () => {
    assert.ok(E.isLeft(FhirEvidence.decode({})))
  })
})
