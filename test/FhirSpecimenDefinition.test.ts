import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirSpecimenDefinition } from '../src/generated/FhirSpecimenDefinition'
import * as SpecimenDefinition from './fixtures/SpecimenDefinition/specimendefinition-example-serum-plasma.json'

describe('FhirSpecimenDefinition', () => {
  it('should decode valid SpecimenDefinition resources', () => {
    assert.deepStrictEqual(FhirSpecimenDefinition.decode(SpecimenDefinition), E.right(SpecimenDefinition))
  })
  it('should not decode invalid SpecimenDefinition resources', () => {
    assert.ok(E.isLeft(FhirSpecimenDefinition.decode({})))
  })
})
