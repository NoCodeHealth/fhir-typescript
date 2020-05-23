import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirStructureDefinition } from '../src/generated/FhirStructureDefinition'
import * as StructureDefinition from './fixtures/StructureDefinition/examplescenario.profile.json'

describe('FhirStructureDefinition', () => {
  it('should decode valid StructureDefinition resources', () => {
    assert.deepStrictEqual(FhirStructureDefinition.decode(StructureDefinition), E.right(StructureDefinition))
  })
  it('should not decode invalid StructureDefinition resources', () => {
    assert.ok(E.isLeft(FhirStructureDefinition.decode({})))
  })
})
