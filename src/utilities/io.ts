import * as fs from 'fs';
import * as path from 'path';
import * as E from 'fp-ts/lib/Either';
import * as IOE from 'fp-ts/lib/IOEither';

export const jsonParse = (s: string): E.Either<Error, unknown> => E.tryCatch(() => JSON.parse(s), E.toError);

export const readFileSync = (p: string): IOE.IOEither<Error, string> =>
  IOE.tryCatch(() => fs.readFileSync(p, 'utf8'), E.toError);

export const readDirSync = (p: string): IOE.IOEither<Error, string[]> =>
  IOE.tryCatch(() => fs.readdirSync(p, 'utf8'), E.toError);

export const resolvePath = (p: string): string => path.resolve(process.cwd(), p);

export const writeFileSync = (p: string) => (content: string): IOE.IOEither<Error, void> =>
  IOE.tryCatch(() => fs.writeFileSync(p, content, 'utf8'), E.toError);
