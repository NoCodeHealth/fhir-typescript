import * as t from 'io-ts-codegen';

import { FhirResourceListModel } from '../models';
import { prefixFhir } from '../utilities/naming';

export const toResourceListType = (m: FhirResourceListModel): t.TypeDeclaration =>
  t.typeDeclaration(
    m.name,
    t.unionCombinator(
      m.resources.map((r) => t.identifier(prefixFhir(r))),
      m.name,
    ),
    true,
  );
