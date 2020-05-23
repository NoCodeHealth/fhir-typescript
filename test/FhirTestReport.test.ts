import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirTestReport } from '../src/generated/FhirTestReport'
import * as TestReport from './fixtures/TestReport/testreport-example.json'

describe('FhirTestReport', () => {
  it('should decode valid TestReport resources', () => {
    assert.deepStrictEqual(FhirTestReport.decode(TestReport), E.right(TestReport))
  })
  it('should not decode invalid TestReport resources', () => {
    assert.ok(E.isLeft(FhirTestReport.decode({})))
  })
})
