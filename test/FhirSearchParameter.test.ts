import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirSearchParameter } from '../src/generated/FhirSearchParameter'
import * as SearchParameter from './fixtures/SearchParameter/searchparameter-example-extension.json'

describe('FhirSearchParameter', () => {
  it('should decode valid SearchParameter resources', () => {
    assert.deepStrictEqual(FhirSearchParameter.decode(SearchParameter), E.right(SearchParameter))
  })
  it('should not decode invalid SearchParameter resources', () => {
    assert.ok(E.isLeft(FhirSearchParameter.decode({})))
  })
})
