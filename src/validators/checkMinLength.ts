export const checkMinLength = (x: string, minLength: number): string => {
  return `(typeof ${x} !== 'string' || ${x}.length >= ${minLength})`;
};
