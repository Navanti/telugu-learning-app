export type GlossLanguage = 'en' | 'ja';

export interface DictionaryEntry {
  headword: string;
  transliteration: string;
  gloss: Record<GlossLanguage, string>;
  partOfSpeech?: string;
  examples?: string[];
  relatedForms?: string[];
  grammarNotes?: string;
}

export interface DictionaryLookupResult {
  entry: DictionaryEntry;
  selectedGlossLanguage: GlossLanguage;
  selectedGloss: string;
}

const seedEntries: DictionaryEntry[] = [
  {
    headword: 'తెలుగు',
    transliteration: 'telugu',
    gloss: {
      en: 'Telugu language',
      ja: 'テルグ語'
    },
    partOfSpeech: 'noun',
    examples: ['తెలుగు చాలా అందమైన భాష.']
  },
  {
    headword: 'నమస్కారం',
    transliteration: 'namaskāram',
    gloss: {
      en: 'greeting; hello',
      ja: '挨拶; こんにちは'
    },
    partOfSpeech: 'interjection'
  },
  {
    headword: 'నేర్చుకో',
    transliteration: 'nērchukō',
    gloss: {
      en: 'to learn',
      ja: '学ぶ'
    },
    partOfSpeech: 'verb'
  }
];

export class InMemoryDictionary {
  private readonly entriesByHeadword = new Map<string, DictionaryEntry>();

  constructor(entries: DictionaryEntry[] = seedEntries) {
    entries.forEach((entry) => {
      this.entriesByHeadword.set(entry.headword.normalize('NFC'), entry);
    });
  }

  lookup(headword: string, language: GlossLanguage): DictionaryLookupResult | null {
    const normalizedHeadword = headword.normalize('NFC').trim();
    const entry = this.entriesByHeadword.get(normalizedHeadword);

    if (!entry) {
      return null;
    }

    return {
      entry,
      selectedGlossLanguage: language,
      selectedGloss: entry.gloss[language]
    };
  }
}
