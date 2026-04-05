import { describe, expect, it } from 'vitest';
import { InMemoryKnowledgeStateStore } from '../src';

describe('InMemoryKnowledgeStateStore', () => {
  it('defaults missing words to unknown', () => {
    const store = new InMemoryKnowledgeStateStore();
    expect(store.getWordState('తెలుగు')).toBe('unknown');
  });

  it('stores and retrieves normalized words', () => {
    const store = new InMemoryKnowledgeStateStore();
    store.setWordState(' తెలుగు ', 'learning');

    expect(store.getWordState('తెలుగు')).toBe('learning');
  });

  it('reports distribution counts', () => {
    const store = new InMemoryKnowledgeStateStore([
      { word: 'తెలుగు', state: 'known' },
      { word: 'భాష', state: 'learning' },
      { word: 'అభ్యాసం', state: 'learning' }
    ]);

    expect(store.getDistribution()).toEqual({
      unknown: 0,
      learning: 2,
      known: 1
    });
  });
});
