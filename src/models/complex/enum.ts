import * as T from 'fp-ts/lib/Tuple';

import { FhirEnum } from '../../schema';
import { FhirModel } from '../model';

export interface FhirEnumModel extends FhirModel<'enum', FhirEnum> {}

export const FhirEnumModel = (prop: [string, FhirEnum]): FhirEnumModel => ({
  _tag: 'enum',
  name: T.fst(prop),
  ...T.snd(prop),
});
