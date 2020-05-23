import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirFamilyMemberHistory } from '../src/generated/FhirFamilyMemberHistory'
import * as FamilyMemberHistory from './fixtures/FamilyMemberHistory/familymemberhistory-example-mother.json'

describe('FhirFamilyMemberHistory', () => {
  it('should decode valid FamilyMemberHistory resources', () => {
    assert.deepStrictEqual(FhirFamilyMemberHistory.decode(FamilyMemberHistory), E.right(FamilyMemberHistory))
  })
  it('should not decode invalid FamilyMemberHistory resources', () => {
    assert.ok(E.isLeft(FhirFamilyMemberHistory.decode({})))
  })
})
