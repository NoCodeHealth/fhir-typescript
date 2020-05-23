import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirImplementationGuide } from '../src/generated/FhirImplementationGuide'
import * as ImplementationGuide from './fixtures/ImplementationGuide/implementationguide-example.json'

describe('FhirImplementationGuide', () => {
  it('should decode valid ImplementationGuide resources', () => {
    assert.deepStrictEqual(FhirImplementationGuide.decode(ImplementationGuide), E.right(ImplementationGuide))
  })
  it('should not decode invalid ImplementationGuide resources', () => {
    assert.ok(E.isLeft(FhirImplementationGuide.decode({})))
  })
})
