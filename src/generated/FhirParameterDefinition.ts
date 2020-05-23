import * as t from 'io-ts'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInteger } from './FhirInteger'
import { FhirString } from './FhirString'

/** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
export const FhirParameterDefinition: t.Type<FhirParameterDefinition, FhirParameterDefinitionOutput> = t.recursion(
  'FhirParameterDefinition',
  () =>
    t.partial({
      /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
      _documentation: t.readonly(FhirElement),
      /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
      _max: t.readonly(FhirElement),
      /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
      _min: t.readonly(FhirElement),
      /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
      _name: t.readonly(FhirElement),
      /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
      _type: t.readonly(FhirElement),
      /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
      _use: t.readonly(FhirElement),
      /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
      documentation: t.readonly(FhirString),
      /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
      extension: t.readonlyArray(FhirExtension),
      /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
      id: t.readonly(FhirString),
      /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
      max: t.readonly(FhirString),
      /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
      min: t.readonly(FhirInteger),
      /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
      name: t.readonly(FhirCode),
      /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
      profile: t.readonly(FhirCanonical),
      /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
      type: t.readonly(FhirCode),
      /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
      use: t.readonly(FhirCode),
    })
)

/** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
export interface FhirParameterDefinition {
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  _documentation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  _max?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  _min?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  _use?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  documentation?: Readonly<t.TypeOf<typeof FhirString>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  max?: Readonly<t.TypeOf<typeof FhirString>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  min?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  name?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  profile?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  type?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  use?: Readonly<t.TypeOf<typeof FhirCode>>
}
/** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
export interface FhirParameterDefinitionOutput {
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  _documentation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  _max?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  _min?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  _use?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  documentation?: Readonly<t.OutputOf<typeof FhirString>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  max?: Readonly<t.OutputOf<typeof FhirString>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  min?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  name?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  profile?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  type?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
  use?: Readonly<t.OutputOf<typeof FhirCode>>
}
