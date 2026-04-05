import { describe, expect, it } from 'vitest';
import { Card } from '../src';

describe('Card', () => {
  it('is a function component', () => {
    expect(typeof Card).toBe('function');
  });
});
