import * as t from 'io-ts-codegen';
import * as A from 'fp-ts/lib/Array';
import * as O from 'fp-ts/lib/Option';
import * as EQ from 'fp-ts/lib/Eq';

import { Declaration } from './declarations';

interface DeclarationFile {
  filename: string;
  content: string;
}

const M = A.getMonoid<string>();

const printTypes = (type: O.Option<t.TypeDeclaration | t.CustomTypeDeclaration>): string[] => {
  return O.isSome(type) ? [t.printStatic(type.value), t.printRuntime(type.value)] : [];
};

export const makeFiles = ({
  declarations,
  types,
}: {
  declarations: Declaration[];
  types: (t.TypeDeclaration | t.CustomTypeDeclaration)[];
}): DeclarationFile[] =>
  A.array.map(declarations, (d) => {
    const type = A.findFirstMap((a: t.TypeDeclaration | t.CustomTypeDeclaration) =>
      a.name === d.model.name ? O.some(a) : O.none,
    )(types);

    return {
      filename: d.model.name,
      content: M.concat(
        [`import * as t from 'io-ts';\n\n`],
        M.concat(
          A.array.map(A.uniq(EQ.eqString)(d.references), (ref) => `import { ${ref} } from './${ref}';`),
          printTypes(type),
        ),
      )
        .join('\n')
        // There are several enum keys that start with a number. Unfortunately, there is not a good
        // way to handle this at the moment, so we have to replace them after the document has been
        // generated.
        // @see Issue - https://github.com/gcanti/io-ts/issues/309
        .replace(/\b(0|4|8|12):\s*null,{0,1}/g, `'$1': null,`)
        .replace(/(0BSD):/, `'$1':`),
    };
  });
