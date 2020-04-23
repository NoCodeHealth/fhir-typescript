export const checkMaximum = (x: string, maximum: number): string => {
  return `(typeof ${x} !== 'number' || ${x} <= ${maximum})`;
};
