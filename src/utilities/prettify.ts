import prettier from 'prettier';

export const prettyPrint = (content: string): string => {
  return prettier.format(content, {
    bracketSpacing: true,
    printWidth: 100,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    parser: 'typescript',
  });
};
