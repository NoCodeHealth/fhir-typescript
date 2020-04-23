import { semigroupString } from 'fp-ts/lib/Semigroup';
import { flow } from 'fp-ts/lib/function';
import deburr from 'lodash.deburr';

const upperFirst = (s: string) => s.slice(0, 1).toUpperCase() + s.slice(1);

const replace = (re: string | RegExp, f: ((m: string) => string) | string) => (s: string) => s.replace(re, f as any);

/**
 * Converts a string that might contain spaces or special characters to one that
 * can safely be used as a TypeScript interface or enum name.
 *
 * @description
 * Valid identifiers in JavaScript/TypeScript:
 * - First character: `a-zA-Z | _ | $`
 * - Rest: `a-zA-Z | _ | $ | 0-9`
 */
export const makeSafeName: (s: string) => string = flow(
  // Uppercase first letter
  upperFirst,
  // Remove accents, umlauts, ... by their basic latin letters
  deburr,
  // Replace chars which are not valid for typescript identifiers with whitespace
  replace(/(^\s*[^a-zA-Z_$])|([^a-zA-Z_$\d])/g, ' '),
  // Uppercase leading underscores followed by lowercase
  replace(/^_[a-z]/g, (match) => match.toUpperCase()),
  // Remove non-leading underscores followed by lowercase (convert snake_case)
  replace(/_[a-z]/g, (match) => match.substr(1, match.length).toUpperCase()),
  // Uppercase letters after digits, dollars
  replace(/([\d$]+[a-zA-Z])/g, (match) => match.toUpperCase()),
  // Uppercase first letter after whitespace
  replace(/\s+([a-zA-Z])/g, (match) => match.toUpperCase().trim()),
  // Remove remaining whitespace
  replace(/\s/g, ''),
);

/**
 * Prefixes the specified string with the supplied prefix.
 */
export const prefix = (p: string) => (s: string) => semigroupString.concat(p, s);

/**
 * Prefixes the supplied string with `Fhir`.
 */
export const prefixFhir = (s: string) => prefix('Fhir')(makeSafeName(s));
