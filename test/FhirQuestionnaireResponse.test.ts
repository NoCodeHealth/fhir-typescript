import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirQuestionnaireResponse } from '../src/generated/FhirQuestionnaireResponse'
import * as QuestionnaireResponse from './fixtures/QuestionnaireResponse/questionnaireresponse-example-bluebook.json'

describe('FhirQuestionnaireResponse', () => {
  it('should decode valid QuestionnaireResponse resources', () => {
    assert.deepStrictEqual(FhirQuestionnaireResponse.decode(QuestionnaireResponse), E.right(QuestionnaireResponse))
  })
  it('should not decode invalid QuestionnaireResponse resources', () => {
    assert.ok(E.isLeft(FhirQuestionnaireResponse.decode({})))
  })
})
