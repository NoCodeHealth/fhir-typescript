import * as t from 'io-ts'
import { FhirContactDetail } from './FhirContactDetail'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
export const FhirContributor: t.Type<FhirContributor, FhirContributorOutput> = t.recursion('FhirContributor', () =>
  t.partial({
    /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
    _name: t.readonly(FhirElement),
    /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
    _type: t.readonly(FhirElement),
    /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
    contact: t.readonlyArray(FhirContactDetail),
    /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
    extension: t.readonlyArray(FhirExtension),
    /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
    id: t.readonly(FhirString),
    /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
    name: t.readonly(FhirString),
    /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
    type: t.readonly(
      t.keyof({
        author: null,
        editor: null,
        reviewer: null,
        endorser: null,
      })
    ),
  })
)

/** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
export interface FhirContributor {
  /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
  type?: Readonly<'author' | 'editor' | 'reviewer' | 'endorser'>
}
/** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
export interface FhirContributorOutput {
  /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
  type?: Readonly<'author' | 'editor' | 'reviewer' | 'endorser'>
}
