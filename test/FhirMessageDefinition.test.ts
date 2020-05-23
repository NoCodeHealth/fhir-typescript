import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMessageDefinition } from '../src/generated/FhirMessageDefinition'
import * as MessageDefinition from './fixtures/MessageDefinition/messagedefinition-example.json'

describe('FhirMessageDefinition', () => {
  it('should decode valid MessageDefinition resources', () => {
    assert.deepStrictEqual(FhirMessageDefinition.decode(MessageDefinition), E.right(MessageDefinition))
  })
  it('should not decode invalid MessageDefinition resources', () => {
    assert.ok(E.isLeft(FhirMessageDefinition.decode({})))
  })
})
