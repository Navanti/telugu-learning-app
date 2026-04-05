export interface SubtitleCue {
  index: number;
  start: string;
  end: string;
  text: string;
}

export function parseSrtStub(contents: string): SubtitleCue[] {
  const blocks = contents.split(/\n\s*\n/).filter(Boolean);

  return blocks.map((block, idx) => {
    const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
    const timeLine = lines[1] ?? '00:00:00,000 --> 00:00:00,000';
    const [start, end] = timeLine.split('-->').map((v) => v.trim());

    return {
      index: Number(lines[0]) || idx + 1,
      start,
      end,
      text: lines.slice(2).join(' ')
    };
  });
}
