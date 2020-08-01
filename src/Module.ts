// /**
//  * @since 0.1.0
//  */
// export const parseSchemaResources = (schema: S.Schema): ReadonlyArray<Module> =>
//   pipe(
//     RR.fromRecord(schema.definitions),
//     RR.toReadonlyArray,
//     RR.collect(())
//     RA.map(([resource, definition]) => ({
//       name: U.prefixFhir(resource),
//       resource,
//       content: getContent(U.prefixFhir(resource), definition),
//       imports: parseReferences(U.prefixFhir(resource), definition)
//     }))
//   )
