import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirOrganizationAffiliation } from '../src/generated/FhirOrganizationAffiliation'
import * as OrganizationAffiliation from './fixtures/OrganizationAffiliation/organizationaffiliation-example.json'

describe('FhirOrganizationAffiliation', () => {
  it('should decode valid OrganizationAffiliation resources', () => {
    assert.deepStrictEqual(
      FhirOrganizationAffiliation.decode(OrganizationAffiliation),
      E.right(OrganizationAffiliation)
    )
  })
  it('should not decode invalid OrganizationAffiliation resources', () => {
    assert.ok(E.isLeft(FhirOrganizationAffiliation.decode({})))
  })
})
