import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirOperationDefinition } from '../src/generated/FhirOperationDefinition'
import * as OperationDefinition from './fixtures/OperationDefinition/operationdefinition-example.json'

describe('FhirOperationDefinition', () => {
  it('should decode valid OperationDefinition resources', () => {
    assert.deepStrictEqual(FhirOperationDefinition.decode(OperationDefinition), E.right(OperationDefinition))
  })
  it('should not decode invalid OperationDefinition resources', () => {
    assert.ok(E.isLeft(FhirOperationDefinition.decode({})))
  })
})
