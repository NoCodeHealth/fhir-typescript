import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirOperationOutcome } from '../src/generated/FhirOperationOutcome'
import * as OperationOutcome from './fixtures/OperationOutcome/operationoutcome-example-allok.json'

describe('FhirOperationOutcome', () => {
  it('should decode valid OperationOutcome resources', () => {
    assert.deepStrictEqual(FhirOperationOutcome.decode(OperationOutcome), E.right(OperationOutcome))
  })
  it('should not decode invalid OperationOutcome resources', () => {
    assert.ok(E.isLeft(FhirOperationOutcome.decode({})))
  })
})
