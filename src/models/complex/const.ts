import * as T from 'fp-ts/lib/Tuple';

import { FhirConst } from '../../schema';
import { FhirModel } from '../model';

export interface FhirConstModel extends FhirModel<'const', FhirConst> {}

export const FhirConstModel = (prop: [string, FhirConst]): FhirConstModel => ({
  _tag: 'const',
  name: T.fst(prop),
  ...T.snd(prop),
});
