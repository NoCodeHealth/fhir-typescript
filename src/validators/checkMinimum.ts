export const checkMinimum = (x: string, minimum: number): string => {
  return `(typeof ${x} !== 'number' || ${x} >= ${minimum})`;
};
