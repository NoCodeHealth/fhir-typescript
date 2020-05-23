import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirGraphDefinition } from '../src/generated/FhirGraphDefinition'
import * as GraphDefinition from './fixtures/GraphDefinition/graphdefinition-example.json'

describe('FhirGraphDefinition', () => {
  it('should decode valid GraphDefinition resources', () => {
    assert.deepStrictEqual(FhirGraphDefinition.decode(GraphDefinition), E.right(GraphDefinition))
  })
  it('should not decode invalid GraphDefinition resources', () => {
    assert.ok(E.isLeft(FhirGraphDefinition.decode({})))
  })
})
