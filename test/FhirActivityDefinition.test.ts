import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirActivityDefinition } from '../src/generated/FhirActivityDefinition'
import * as ActivityDefinition from './fixtures/ActivityDefinition/activitydefinition-example.json'

describe('FhirActivityDefinition', () => {
  it('should decode valid ActivityDefinition resources', () => {
    assert.deepStrictEqual(FhirActivityDefinition.decode(ActivityDefinition), E.right(ActivityDefinition))
  })
  it('should not decode invalid ActivityDefinition resources', () => {
    assert.ok(E.isLeft(FhirActivityDefinition.decode({})))
  })
})
