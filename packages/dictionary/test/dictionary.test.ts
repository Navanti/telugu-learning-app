import { describe, expect, it } from 'vitest';
import { InMemoryDictionary } from '../src';

describe('InMemoryDictionary', () => {
  it('returns entry and selected english gloss', () => {
    const dictionary = new InMemoryDictionary();

    const result = dictionary.lookup('తెలుగు', 'en');

    expect(result).not.toBeNull();
    expect(result?.selectedGloss).toBe('Telugu language');
  });

  it('returns japanese gloss for requested language', () => {
    const dictionary = new InMemoryDictionary();

    const result = dictionary.lookup('తెలుగు', 'ja');

    expect(result?.selectedGlossLanguage).toBe('ja');
    expect(result?.selectedGloss).toContain('テルグ語');
  });

  it('returns null for missing headword', () => {
    const dictionary = new InMemoryDictionary();

    expect(dictionary.lookup('లేని పదం', 'en')).toBeNull();
  });
});
