export const checkMinItems = (x: string, minItems: number): string => {
  return `(!Array.isArray(${x}) || ${x}.length >= ${minItems})`;
};
