import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirResearchElementDefinition } from '../src/generated/FhirResearchElementDefinition'
import * as ResearchElementDefinition from './fixtures/ResearchElementDefinition/researchelementdefinition-example.json'

describe('FhirResearchElementDefinition', () => {
  it('should decode valid ResearchElementDefinition resources', () => {
    assert.deepStrictEqual(
      FhirResearchElementDefinition.decode(ResearchElementDefinition),
      E.right(ResearchElementDefinition)
    )
  })
  it('should not decode invalid ResearchElementDefinition resources', () => {
    assert.ok(E.isLeft(FhirResearchElementDefinition.decode({})))
  })
})
