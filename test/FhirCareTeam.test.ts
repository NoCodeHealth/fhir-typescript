import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirCareTeam } from '../src/generated/FhirCareTeam'
import * as CareTeam from './fixtures/CareTeam/careteam-example.json'

describe('FhirCareTeam', () => {
  it('should decode valid CareTeam resources', () => {
    assert.deepStrictEqual(FhirCareTeam.decode(CareTeam), E.right(CareTeam))
  })
  it('should not decode invalid CareTeam resources', () => {
    assert.ok(E.isLeft(FhirCareTeam.decode({})))
  })
})
