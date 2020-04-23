export const checkMultipleOf = (x: string, divisor: number): string => {
  return `(typeof ${x} !== 'number' || ${x} % ${divisor} === 0)`;
};
