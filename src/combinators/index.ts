import * as t from 'io-ts-codegen';
import * as A from 'fp-ts/lib/Array';
import * as EQ from 'fp-ts/lib/Eq';
import { flow } from 'fp-ts/lib/function';

import { makeDeclarations, FhirComplexModel, FhirPrimitiveModel, FhirResourceListModel } from '../models';
import { toComplexType } from './complex';
import { toPrimitiveType } from './primitive';
import { toResourceListType } from './resourceList';

export * from './complex';
export * from './primitive';
export * from './resourceList';

export const makeTypes = (model: FhirComplexModel | FhirPrimitiveModel | FhirResourceListModel): t.Node => {
  switch (model._tag) {
    default:
    case 'complex':
      return toComplexType(model);
    case 'primitive':
      return toPrimitiveType(model);
    case 'resource-list':
      return toResourceListType(model);
  }
};

export interface DeclarationFile {
  filename: string;
  content: string;
}

const M = A.getMonoid<string>();

export const makeDeclarationFiles: (
  models: (FhirComplexModel | FhirPrimitiveModel | FhirResourceListModel)[],
) => DeclarationFile[] = flow(
  makeDeclarations,
  A.map((d) => ({
    filename: d.model.name,
    content: M.concat(
      [`import * as t from 'io-ts';\n\n`],
      M.concat(
        A.array.map(A.uniq(EQ.eqString)(d.references), (ref) => `import { ${ref} } from './${ref}';`),
        [(t.printStatic(makeTypes(d.model)), t.printRuntime(makeTypes(d.model))), '\n'],
      ),
    )
      .join('\n')
      // There are several enum keys that start with a number. Unfortunately, there is not a good
      // way to handle this at the moment, so we have to replace them after the document has been
      // generated.
      // @see Issue - https://github.com/gcanti/io-ts/issues/309
      .replace(/\b(0|4|8|12):\s*null,{0,1}/g, `'$1': null,`)
      .replace(/(0BSD):/, `'$1':`),
  })),
);
