export function normalizeTeluguText(input: string): string {
  return input.normalize('NFC').replace(/\s+/g, ' ').trim();
}
