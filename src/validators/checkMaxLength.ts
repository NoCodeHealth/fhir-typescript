export const checkMaxLength = (x: string, maxLength: number): string => {
  return `(typeof ${x} !== 'string' || ${x}.length <= ${maxLength})`;
};
