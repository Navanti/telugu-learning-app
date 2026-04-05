import { describe, expect, it } from 'vitest';
import { scheduleNextReview } from '../src';

describe('scheduleNextReview', () => {
  it('resets interval to 1 day on again', () => {
    expect(scheduleNextReview(10, 'again')).toBe(1);
  });

  it('increases interval for good ratings', () => {
    expect(scheduleNextReview(3, 'good')).toBe(6);
  });
});
