import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirTask } from '../src/generated/FhirTask'
import * as Task from './fixtures/Task/task-example-fm-cancel.json'

describe('FhirTask', () => {
  it('should decode valid Task resources', () => {
    assert.deepStrictEqual(FhirTask.decode(Task), E.right(Task))
  })
  it('should not decode invalid Task resources', () => {
    assert.ok(E.isLeft(FhirTask.decode({})))
  })
})
