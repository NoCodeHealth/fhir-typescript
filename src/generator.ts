import * as A from 'fp-ts/lib/Array';
import * as D from 'fp-ts/lib/Date';
import * as E from 'fp-ts/lib/Either';
import * as IO from 'fp-ts/lib/IO';
import * as IOE from 'fp-ts/lib/IOEither';
import { flow } from 'fp-ts/lib/function';
import { pipe } from 'fp-ts/lib/pipeable';

import { drawTree } from 'fp-ts/lib/Tree';
import { error, info } from './logging';
import { FhirSchema } from './schema';
import { jsonParse, readFileSync, resolvePath, writeFileSync } from './utilities/io';

import { makeDeclarationFiles, DeclarationFile } from './combinators';
import { makeModels } from './models';

const readInput: (input: string) => IOE.IOEither<IO.IO<void>, string> = flow(
  readFileSync,
  IOE.mapLeft((e) => pipe(D.create, IO.chain(error(`Unable to read file.\n\t${e.message}`)))),
);

const parseInput: (input: string) => IOE.IOEither<IO.IO<void>, unknown> = flow(
  jsonParse,
  E.mapLeft((e) => pipe(D.create, IO.chain(error(`Unable to parse JSON.\n\t${e.message}`)))),
  IOE.fromEither,
);

const decodeInput: (u: unknown) => IOE.IOEither<IO.IO<void>, FhirSchema> = flow(
  FhirSchema.decode,
  E.mapLeft((errors) => pipe(D.create, IO.chain(error(`Unable to decode FHIR Json Schema.\n${errors.map(drawTree)}`)))),
  IOE.fromEither,
);

const generateFiles: (schema: FhirSchema) => DeclarationFile[] = flow(makeModels, makeDeclarationFiles);

const writeOutput: (output: string) => (content: string) => IOE.IOEither<IO.IO<void>, void> = (output) =>
  flow(
    writeFileSync(resolvePath(output)),
    IOE.mapLeft((e) => pipe(D.create, IO.chain(error(`Unable to write types to output file.\n\t${e.message}`)))),
  );

const main = ({ input, output }: { input: string; output: string }) =>
  pipe(
    resolvePath(input),
    readInput,
    IOE.chain(parseInput),
    IOE.chain(decodeInput),
    IOE.map(generateFiles),
    IOE.chain((files) =>
      A.array.sequence(IOE.ioEither)(
        A.array.map(files, (file) => writeOutput(`${output}/${file.filename}.ts`)(file.content)),
      ),
    ),
    IOE.fold(
      (e) => e,
      () => pipe(D.create, IO.chain(info(`Successfully generated types for the FHIR JSON Schema to "${output}"`))),
    ),
  );

main({
  input: 'src/fhir.schema.json',
  output: 'generated',
})();
