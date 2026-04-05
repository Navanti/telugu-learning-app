export type KnowledgeState = 'unknown' | 'learning' | 'known';

export interface WordKnowledge {
  word: string;
  normalizedWord: string;
  state: KnowledgeState;
  updatedAt: string;
}

export interface KnowledgeStateDistribution {
  unknown: number;
  learning: number;
  known: number;
}

export interface KnowledgeStateStore {
  setWordState(word: string, state: KnowledgeState): WordKnowledge;
  getWordState(word: string): KnowledgeState;
  getAllWordKnowledge(): WordKnowledge[];
  getDistribution(): KnowledgeStateDistribution;
}

export class InMemoryKnowledgeStateStore implements KnowledgeStateStore {
  private readonly stateByWord = new Map<string, WordKnowledge>();

  constructor(initialWords?: Array<{ word: string; state: KnowledgeState }>) {
    initialWords?.forEach(({ word, state }) => {
      this.setWordState(word, state);
    });
  }

  setWordState(word: string, state: KnowledgeState): WordKnowledge {
    const normalizedWord = word.normalize('NFC').trim();
    const knowledge: WordKnowledge = {
      word,
      normalizedWord,
      state,
      updatedAt: new Date().toISOString()
    };

    this.stateByWord.set(normalizedWord, knowledge);

    return knowledge;
  }

  getWordState(word: string): KnowledgeState {
    const normalizedWord = word.normalize('NFC').trim();
    return this.stateByWord.get(normalizedWord)?.state ?? 'unknown';
  }

  getAllWordKnowledge(): WordKnowledge[] {
    return [...this.stateByWord.values()];
  }

  getDistribution(): KnowledgeStateDistribution {
    return this.getAllWordKnowledge().reduce<KnowledgeStateDistribution>(
      (distribution, knowledge) => {
        distribution[knowledge.state] += 1;
        return distribution;
      },
      { unknown: 0, learning: 0, known: 0 }
    );
  }
}
