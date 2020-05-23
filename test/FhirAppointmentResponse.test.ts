import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirAppointmentResponse } from '../src/generated/FhirAppointmentResponse'
import * as AppointmentResponse from './fixtures/AppointmentResponse/appointmentresponse-example-req.json'

describe('FhirAppointmentResponse', () => {
  it('should decode valid AppointmentResponse resources', () => {
    assert.deepStrictEqual(FhirAppointmentResponse.decode(AppointmentResponse), E.right(AppointmentResponse))
  })
  it('should not decode invalid AppointmentResponse resources', () => {
    assert.ok(E.isLeft(FhirAppointmentResponse.decode({})))
  })
})
