import { describe, expect, it } from 'vitest';
import { normalizeTeluguText } from '../src';

describe('normalizeTeluguText', () => {
  it('normalizes whitespace around Telugu text', () => {
    expect(normalizeTeluguText('  తెలుగు   భాష  ')).toBe('తెలుగు భాష');
  });

  it('applies NFC normalization', () => {
    const decomposed = 'అ\u0C46\u0C3E';
    expect(normalizeTeluguText(decomposed)).toBe(decomposed.normalize('NFC'));
  });
});
