 import {equals, EPSILON} from './index.js';

describe('EPSILON is a reasonable value', () => {
  test('...greater than 0', () => {
    expect(EPSILON).toBeGreaterThan(0);
  });
  test('...less than 1', () => {
    expect(EPSILON).toBeLessThan(1);
  });
});
describe('The equals function...', () => {
  test('(.1+.2 = .3)', () => {
    expect(equals((.1+.2),.3)).toBe(true);
  });
  test('.1 + .2 != 5', () => {
    expect(equals((.1+.2),5)).toBe(false);
  });
});
