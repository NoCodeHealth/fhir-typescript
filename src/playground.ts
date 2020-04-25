import * as t from 'io-ts-codegen';
import util from 'util';

const tp1 = t.typeDeclaration(
  'Config',
  t.interfaceCombinator([t.property('id', t.stringType), t.property('date', t.stringType)]),
);

const tp2 = t.typeDeclaration('ConfigTwo', t.interfaceCombinator([t.property('id', t.numberType)]));

const sorted = t.sort([tp2, tp1]);

console.log(util.inspect(sorted, { depth: null }));
