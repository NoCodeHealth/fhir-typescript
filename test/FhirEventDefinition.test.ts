import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirEventDefinition } from '../src/generated/FhirEventDefinition'
import * as EventDefinition from './fixtures/EventDefinition/eventdefinition-example.json'

describe('FhirEventDefinition', () => {
  it('should decode valid EventDefinition resources', () => {
    assert.deepStrictEqual(FhirEventDefinition.decode(EventDefinition), E.right(EventDefinition))
  })
  it('should not decode invalid EventDefinition resources', () => {
    assert.ok(E.isLeft(FhirEventDefinition.decode({})))
  })
})
