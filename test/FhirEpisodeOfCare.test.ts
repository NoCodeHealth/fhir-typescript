import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirEpisodeOfCare } from '../src/generated/FhirEpisodeOfCare'
import * as EpisodeOfCare from './fixtures/EpisodeOfCare/episodeofcare-example.json'

describe('FhirEpisodeOfCare', () => {
  it('should decode valid EpisodeOfCare resources', () => {
    assert.deepStrictEqual(FhirEpisodeOfCare.decode(EpisodeOfCare), E.right(EpisodeOfCare))
  })
  it('should not decode invalid EpisodeOfCare resources', () => {
    assert.ok(E.isLeft(FhirEpisodeOfCare.decode({})))
  })
})
