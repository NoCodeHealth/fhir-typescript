import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirCompartmentDefinition } from '../src/generated/FhirCompartmentDefinition'
import * as CompartmentDefinition from './fixtures/CompartmentDefinition/compartmentdefinition-example.json'

describe('FhirCompartmentDefinition', () => {
  it('should decode valid CompartmentDefinition resources', () => {
    assert.deepStrictEqual(FhirCompartmentDefinition.decode(CompartmentDefinition), E.right(CompartmentDefinition))
  })
  it('should not decode invalid CompartmentDefinition resources', () => {
    assert.ok(E.isLeft(FhirCompartmentDefinition.decode({})))
  })
})
