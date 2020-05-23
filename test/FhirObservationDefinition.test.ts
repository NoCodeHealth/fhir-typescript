import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirObservationDefinition } from '../src/generated/FhirObservationDefinition'
import * as ObservationDefinition from './fixtures/ObservationDefinition/observationdefinition-example.json'

describe('FhirObservationDefinition', () => {
  it('should decode valid ObservationDefinition resources', () => {
    assert.deepStrictEqual(FhirObservationDefinition.decode(ObservationDefinition), E.right(ObservationDefinition))
  })
  it('should not decode invalid ObservationDefinition resources', () => {
    assert.ok(E.isLeft(FhirObservationDefinition.decode({})))
  })
})
