import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirResearchSubject } from '../src/generated/FhirResearchSubject'
import * as ResearchSubject from './fixtures/ResearchSubject/researchsubject-example.json'

describe('FhirResearchSubject', () => {
  it('should decode valid ResearchSubject resources', () => {
    assert.deepStrictEqual(FhirResearchSubject.decode(ResearchSubject), E.right(ResearchSubject))
  })
  it('should not decode invalid ResearchSubject resources', () => {
    assert.ok(E.isLeft(FhirResearchSubject.decode({})))
  })
})
