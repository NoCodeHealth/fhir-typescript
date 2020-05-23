import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirResearchDefinition } from '../src/generated/FhirResearchDefinition'
import * as ResearchDefinition from './fixtures/ResearchDefinition/researchdefinition-example.json'

describe('FhirResearchDefinition', () => {
  it('should decode valid ResearchDefinition resources', () => {
    assert.deepStrictEqual(FhirResearchDefinition.decode(ResearchDefinition), E.right(ResearchDefinition))
  })
  it('should not decode invalid ResearchDefinition resources', () => {
    assert.ok(E.isLeft(FhirResearchDefinition.decode({})))
  })
})
