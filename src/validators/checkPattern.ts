export const checkPattern = (x: string, pattern: string): string => {
  return `(typeof ${x} !== 'string' || /${pattern}/.test(${x}))`;
};
