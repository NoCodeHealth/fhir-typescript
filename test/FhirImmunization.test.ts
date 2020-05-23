import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirImmunization } from '../src/generated/FhirImmunization'
import * as Immunization from './fixtures/Immunization/immunization-example-historical.json'

describe('FhirImmunization', () => {
  it('should decode valid Immunization resources', () => {
    assert.deepStrictEqual(FhirImmunization.decode(Immunization), E.right(Immunization))
  })
  it('should not decode invalid Immunization resources', () => {
    assert.ok(E.isLeft(FhirImmunization.decode({})))
  })
})
