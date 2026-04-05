import type { GlossLanguage, InMemoryDictionary } from '@telugu/dictionary';
import { tokenizeTeluguText } from '@telugu/telugu-nlp';
import type { KnowledgeStateStore, KnowledgeState } from '@telugu/user-knowledge-state';

export interface ReaderToken {
  value: string;
  state: KnowledgeState | 'none';
  dictionaryGloss: string | null;
}

export interface BuildReaderViewInput {
  text: string;
  glossLanguage: GlossLanguage;
  dictionary: InMemoryDictionary;
  knowledgeStore: KnowledgeStateStore;
}

export function buildReaderView(input: BuildReaderViewInput): ReaderToken[] {
  const tokens = tokenizeTeluguText(input.text);

  return tokens.map((token) => {
    if (!token.isWord) {
      return {
        value: token.value,
        state: 'none',
        dictionaryGloss: null
      };
    }

    const state = input.knowledgeStore.getWordState(token.normalizedValue);
    const dictionaryResult = input.dictionary.lookup(token.normalizedValue, input.glossLanguage);

    return {
      value: token.value,
      state,
      dictionaryGloss: dictionaryResult?.selectedGloss ?? null
    };
  });
}
