import { InMemoryDictionary } from '@telugu/dictionary';
import { parseSrtStub } from '@telugu/media-ingest';
import { buildReaderView } from '@telugu/reader';
import { scheduleNextReview } from '@telugu/srs';
import { InMemoryKnowledgeStateStore } from '@telugu/user-knowledge-state';
import { Card } from '@telugu/ui';

const dictionary = new InMemoryDictionary();
const knowledgeStore = new InMemoryKnowledgeStateStore([
  { word: 'తెలుగు', state: 'known' },
  { word: 'నేర్చుకో', state: 'learning' },
  { word: 'నమస్కారం', state: 'learning' }
]);

const stateColors: Record<string, string> = {
  known: '#DCFCE7',
  learning: '#FEF3C7',
  unknown: '#FEE2E2',
  none: '#F3F4F6'
};

export default function HomePage() {
  const nextInterval = scheduleNextReview(2, 'good');
  const cue = parseSrtStub('1\n00:00:01,000 --> 00:00:02,000\nనమస్కారం')[0];

  const readerTokens = buildReaderView({
    text: 'నమస్కారం! తెలుగు నేర్చుకో।',
    glossLanguage: 'en',
    dictionary,
    knowledgeStore
  });

  const knowledgeDistribution = knowledgeStore.getDistribution();

  return (
    <main style={{ display: 'grid', gap: 12, maxWidth: 720 }}>
      <h1>Telugu Learning App — V1 Foundation</h1>

      <Card title="Smart Reader (State + Dictionary)">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {readerTokens.map((token, index) => (
            <span
              key={`${token.value}-${index}`}
              title={token.dictionaryGloss ?? undefined}
              style={{
                backgroundColor: stateColors[token.state],
                borderRadius: 8,
                padding: '4px 8px',
                border: '1px solid #D1D5DB'
              }}
            >
              {token.value}
            </span>
          ))}
        </div>
      </Card>

      <Card title="Vocabulary State Distribution">
        known: {knowledgeDistribution.known} • learning: {knowledgeDistribution.learning} • unknown:{' '}
        {knowledgeDistribution.unknown}
      </Card>

      <Card title="Next Review Interval">{nextInterval} days</Card>
      <Card title="Subtitle Cue">{cue.text}</Card>
    </main>
  );
}
