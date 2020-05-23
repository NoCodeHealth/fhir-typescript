import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirPractitionerRole } from '../src/generated/FhirPractitionerRole'
import * as PractitionerRole from './fixtures/PractitionerRole/practitionerrole-example.json'

describe('FhirPractitionerRole', () => {
  it('should decode valid PractitionerRole resources', () => {
    assert.deepStrictEqual(FhirPractitionerRole.decode(PractitionerRole), E.right(PractitionerRole))
  })
  it('should not decode invalid PractitionerRole resources', () => {
    assert.ok(E.isLeft(FhirPractitionerRole.decode({})))
  })
})
