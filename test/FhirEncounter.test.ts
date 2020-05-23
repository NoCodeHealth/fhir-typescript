import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirEncounter } from '../src/generated/FhirEncounter'
import * as Encounter from './fixtures/Encounter/encounter-example-emerg.json'

describe('FhirEncounter', () => {
  it('should decode valid Encounter resources', () => {
    assert.deepStrictEqual(FhirEncounter.decode(Encounter), E.right(Encounter))
  })
  it('should not decode invalid Encounter resources', () => {
    assert.ok(E.isLeft(FhirEncounter.decode({})))
  })
})
