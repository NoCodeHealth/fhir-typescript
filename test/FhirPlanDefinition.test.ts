import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirPlanDefinition } from '../src/generated/FhirPlanDefinition'
import * as PlanDefinition from './fixtures/PlanDefinition/plandefinition-example-cardiology-os.json'

describe('FhirPlanDefinition', () => {
  it('should decode valid PlanDefinition resources', () => {
    assert.deepStrictEqual(FhirPlanDefinition.decode(PlanDefinition), E.right(PlanDefinition))
  })
  it('should not decode invalid PlanDefinition resources', () => {
    assert.ok(E.isLeft(FhirPlanDefinition.decode({})))
  })
})
