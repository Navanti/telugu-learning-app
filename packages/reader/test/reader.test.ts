import { describe, expect, it } from 'vitest';
import { InMemoryDictionary } from '@telugu/dictionary';
import { InMemoryKnowledgeStateStore } from '@telugu/user-knowledge-state';
import { buildReaderView } from '../src';

describe('buildReaderView', () => {
  it('combines tokenizer, word state, and dictionary glosses', () => {
    const dictionary = new InMemoryDictionary();
    const knowledgeStore = new InMemoryKnowledgeStateStore([
      { word: 'తెలుగు', state: 'known' },
      { word: 'నేర్చుకో', state: 'learning' }
    ]);

    const tokens = buildReaderView({
      text: 'తెలుగు నేర్చుకో!',
      glossLanguage: 'en',
      dictionary,
      knowledgeStore
    });

    expect(tokens).toEqual([
      {
        value: 'తెలుగు',
        state: 'known',
        dictionaryGloss: 'Telugu language'
      },
      {
        value: 'నేర్చుకో',
        state: 'learning',
        dictionaryGloss: 'to learn'
      },
      {
        value: '!',
        state: 'none',
        dictionaryGloss: null
      }
    ]);
  });
});
