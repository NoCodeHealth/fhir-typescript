import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirSubstanceSpecification } from '../src/generated/FhirSubstanceSpecification'
import * as SubstanceSpecification from './fixtures/SubstanceSpecification/substancenucleicacid-example.json'

describe('FhirSubstanceSpecification', () => {
  it('should decode valid SubstanceSpecification resources', () => {
    assert.deepStrictEqual(FhirSubstanceSpecification.decode(SubstanceSpecification), E.right(SubstanceSpecification))
  })
  it('should not decode invalid SubstanceSpecification resources', () => {
    assert.ok(E.isLeft(FhirSubstanceSpecification.decode({})))
  })
})
