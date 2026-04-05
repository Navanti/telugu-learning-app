import { describe, expect, it } from 'vitest';
import { parseSrtStub } from '../src';

describe('parseSrtStub', () => {
  it('parses basic subtitle blocks', () => {
    const cues = parseSrtStub('1\n00:00:01,000 --> 00:00:02,000\nనమస్తే');

    expect(cues).toHaveLength(1);
    expect(cues[0]).toMatchObject({
      index: 1,
      start: '00:00:01,000',
      end: '00:00:02,000',
      text: 'నమస్తే'
    });
  });
});
