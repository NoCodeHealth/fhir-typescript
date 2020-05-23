import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirAuditEvent } from '../src/generated/FhirAuditEvent'
import * as AuditEvent from './fixtures/AuditEvent/audit-event-example-login.json'

describe('FhirAuditEvent', () => {
  it('should decode valid AuditEvent resources', () => {
    assert.deepStrictEqual(FhirAuditEvent.decode(AuditEvent), E.right(AuditEvent))
  })
  it('should not decode invalid AuditEvent resources', () => {
    assert.ok(E.isLeft(FhirAuditEvent.decode({})))
  })
})
