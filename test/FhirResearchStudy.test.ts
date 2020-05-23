import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirResearchStudy } from '../src/generated/FhirResearchStudy'
import * as ResearchStudy from './fixtures/ResearchStudy/researchstudy-example.json'

describe('FhirResearchStudy', () => {
  it('should decode valid ResearchStudy resources', () => {
    assert.deepStrictEqual(FhirResearchStudy.decode(ResearchStudy), E.right(ResearchStudy))
  })
  it('should not decode invalid ResearchStudy resources', () => {
    assert.ok(E.isLeft(FhirResearchStudy.decode({})))
  })
})
