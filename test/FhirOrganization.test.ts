import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirOrganization } from '../src/generated/FhirOrganization'
import * as Organization from './fixtures/Organization/organization-example-f001-burgers.json'

describe('FhirOrganization', () => {
  it('should decode valid Organization resources', () => {
    assert.deepStrictEqual(FhirOrganization.decode(Organization), E.right(Organization))
  })
  it('should not decode invalid Organization resources', () => {
    assert.ok(E.isLeft(FhirOrganization.decode({})))
  })
})
