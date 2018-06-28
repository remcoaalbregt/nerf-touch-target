export const existy = value => value !== null && typeof value !== 'undefined';
export const isNumber = value => existy(value) && typeof value === 'number';
export const add = a => b => a + b;