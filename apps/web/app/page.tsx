import { parseSrtStub } from '@telugu/media-ingest';
import { scheduleNextReview } from '@telugu/srs';
import { normalizeTeluguText } from '@telugu/telugu-nlp';
import { Card } from '@telugu/ui';

export default function HomePage() {
  const normalized = normalizeTeluguText('  తెలుగు   నేర్చుకుందాం  ');
  const nextInterval = scheduleNextReview(2, 'good');
  const cue = parseSrtStub('1\n00:00:01,000 --> 00:00:02,000\nనమస్కారం')[0];

  return (
    <main style={{ display: 'grid', gap: 12, maxWidth: 720 }}>
      <h1>Telugu Learning App</h1>
      <Card title="Normalized Text">{normalized}</Card>
      <Card title="Next Review Interval">{nextInterval} days</Card>
      <Card title="Subtitle Cue">{cue.text}</Card>
    </main>
  );
}
