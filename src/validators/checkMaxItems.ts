export const checkMaxItems = (x: string, maxItems: number): string => {
  return `(!Array.isArray(${x}) || ${x}.length <= ${maxItems})`;
};
