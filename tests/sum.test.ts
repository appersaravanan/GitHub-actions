import { describe, it, expect } from 'vitest';
import { sum, sumMany } from '../src/math/sum.js';

describe('sum', () => {
  it('adds positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('adds negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  it('handles zero', () => {
    expect(sum(0, 5)).toBe(5);
  });
});

describe('sumMany', () => {
  it('sums an array', () => {
    expect(sumMany([1, 2, 3, 4])).toBe(10);
  });
});
