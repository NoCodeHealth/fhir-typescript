import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirImmunizationEvaluation } from '../src/generated/FhirImmunizationEvaluation'
import * as ImmunizationEvaluation from './fixtures/ImmunizationEvaluation/immunizationevaluation-example-notvalid.json'

describe('FhirImmunizationEvaluation', () => {
  it('should decode valid ImmunizationEvaluation resources', () => {
    assert.deepStrictEqual(FhirImmunizationEvaluation.decode(ImmunizationEvaluation), E.right(ImmunizationEvaluation))
  })
  it('should not decode invalid ImmunizationEvaluation resources', () => {
    assert.ok(E.isLeft(FhirImmunizationEvaluation.decode({})))
  })
})
