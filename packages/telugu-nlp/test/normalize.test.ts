import { describe, expect, it } from 'vitest';
import { normalizeTeluguText, tokenizeTeluguText } from '../src';

describe('normalizeTeluguText', () => {
  it('normalizes whitespace around Telugu text', () => {
    expect(normalizeTeluguText('  తెలుగు   భాష  ')).toBe('తెలుగు భాష');
  });

  it('applies NFC normalization', () => {
    const decomposed = 'అ\u0C46\u0C3E';
    expect(normalizeTeluguText(decomposed)).toBe(decomposed.normalize('NFC'));
  });
});

describe('tokenizeTeluguText', () => {
  it('splits telugu words and punctuation with unicode safety', () => {
    const tokens = tokenizeTeluguText('తెలుగు భాష। నేర్చుకో!');

    expect(tokens).toEqual([
      { value: 'తెలుగు', normalizedValue: 'తెలుగు', isWord: true },
      { value: 'భాష', normalizedValue: 'భాష', isWord: true },
      { value: '।', normalizedValue: '।', isWord: false },
      { value: 'నేర్చుకో', normalizedValue: 'నేర్చుకో', isWord: true },
      { value: '!', normalizedValue: '!', isWord: false }
    ]);
  });
});
