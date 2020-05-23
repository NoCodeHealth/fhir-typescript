import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirGroup_Characteristic } from './FhirGroup_Characteristic'
import { FhirGroup_Member } from './FhirGroup_Member'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUnsignedInt } from './FhirUnsignedInt'
import { FhirUri } from './FhirUri'

/** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
export const FhirGroup: t.Type<FhirGroup, FhirGroupOutput> = t.recursion('FhirGroup', () =>
  t.intersection([
    t.type({
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      resourceType: t.readonly(t.literal('Group')),
    }),
    t.partial({
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      _active: t.readonly(FhirElement),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      _actual: t.readonly(FhirElement),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      _implicitRules: t.readonly(FhirElement),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      _language: t.readonly(FhirElement),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      _name: t.readonly(FhirElement),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      _quantity: t.readonly(FhirElement),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      _type: t.readonly(FhirElement),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      active: t.readonly(FhirBoolean),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      actual: t.readonly(FhirBoolean),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      characteristic: t.readonlyArray(FhirGroup_Characteristic),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      code: t.readonly(FhirCodeableConcept),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      contained: t.readonlyArray(FhirResourceList),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      extension: t.readonlyArray(FhirExtension),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      id: t.readonly(FhirId),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      implicitRules: t.readonly(FhirUri),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      language: t.readonly(FhirCode),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      managingEntity: t.readonly(FhirReference),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      member: t.readonlyArray(FhirGroup_Member),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      meta: t.readonly(FhirMeta),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      name: t.readonly(FhirString),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      quantity: t.readonly(FhirUnsignedInt),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      text: t.readonly(FhirNarrative),
      /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
      type: t.readonly(
        t.keyof({
          person: null,
          animal: null,
          practitioner: null,
          device: null,
          medication: null,
          substance: null,
        })
      ),
    }),
  ])
)

/** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
export interface FhirGroup {
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  _active?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  _actual?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  _quantity?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  active?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  actual?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  characteristic?: ReadonlyArray<t.TypeOf<typeof FhirGroup_Characteristic>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  managingEntity?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  member?: ReadonlyArray<t.TypeOf<typeof FhirGroup_Member>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  quantity?: Readonly<t.TypeOf<typeof FhirUnsignedInt>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  resourceType: Readonly<'Group'>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  type?: Readonly<'person' | 'animal' | 'practitioner' | 'device' | 'medication' | 'substance'>
}
/** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
export interface FhirGroupOutput {
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  _active?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  _actual?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  _quantity?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  active?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  actual?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  characteristic?: ReadonlyArray<t.OutputOf<typeof FhirGroup_Characteristic>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  managingEntity?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  member?: ReadonlyArray<t.OutputOf<typeof FhirGroup_Member>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  quantity?: Readonly<t.OutputOf<typeof FhirUnsignedInt>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  resourceType: Readonly<'Group'>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
  type?: Readonly<'person' | 'animal' | 'practitioner' | 'device' | 'medication' | 'substance'>
}
