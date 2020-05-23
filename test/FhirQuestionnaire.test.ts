import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirQuestionnaire } from '../src/generated/FhirQuestionnaire'
import * as Questionnaire from './fixtures/Questionnaire/examplescenario-questionnaire.json'

describe('FhirQuestionnaire', () => {
  it('should decode valid Questionnaire resources', () => {
    assert.deepStrictEqual(FhirQuestionnaire.decode(Questionnaire), E.right(Questionnaire))
  })
  it('should not decode invalid Questionnaire resources', () => {
    assert.ok(E.isLeft(FhirQuestionnaire.decode({})))
  })
})
