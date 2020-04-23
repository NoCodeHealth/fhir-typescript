import * as t from 'io-ts-codegen';

import { ResourceListModel } from '../models';
import { prefixFhir } from '../utilities/naming';

export const toResourceListType = (m: ResourceListModel): t.TypeDeclaration => {
  const name = prefixFhir(m.name);
  return t.typeDeclaration(
    name,
    t.unionCombinator(
      m.resources.map((r) => t.identifier(prefixFhir(r))),
      name,
    ),
    true,
  );
};
