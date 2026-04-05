const teluguWordPattern = /[\u0C00-\u0C7F]+/u;

export interface TeluguToken {
  value: string;
  normalizedValue: string;
  isWord: boolean;
}

export function normalizeTeluguText(input: string): string {
  return input.normalize('NFC').replace(/\s+/g, ' ').trim();
}

export function tokenizeTeluguText(input: string): TeluguToken[] {
  const normalizedText = normalizeTeluguText(input);
  if (!normalizedText) {
    return [];
  }

  const rawTokens = normalizedText.match(/[\u0C00-\u0C7F]+|[।॥]|[^\s]/gu) ?? [];

  return rawTokens.map((token) => ({
    value: token,
    normalizedValue: token.normalize('NFC'),
    isWord: teluguWordPattern.test(token)
  }));
}
