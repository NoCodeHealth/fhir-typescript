import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirAppointment } from '../src/generated/FhirAppointment'
import * as Appointment from './fixtures/Appointment/appointment-example-request.json'

describe('FhirAppointment', () => {
  it('should decode valid Appointment resources', () => {
    assert.deepStrictEqual(FhirAppointment.decode(Appointment), E.right(Appointment))
  })
  it('should not decode invalid Appointment resources', () => {
    assert.ok(E.isLeft(FhirAppointment.decode({})))
  })
})
