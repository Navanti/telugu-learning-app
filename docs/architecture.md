# Architecture Notes

## Monorepo structure
This repository follows an app/package split:
- **Apps (`apps/*`)**: deployable product surfaces (for now, `apps/web`).
- **Packages (`packages/*`)**: framework-agnostic reusable domain capabilities.

Shared package APIs should be TypeScript-first and explicitly exported from `src/index.ts`.

## Required module boundaries
The platform should evolve as distinct modules with explicit interfaces:

1. `reader`
2. `dictionary`
3. `grammar`
4. `telugu-nlp`
5. `srs`
6. `user-knowledge-state`
7. `pronunciation-reading-coach`
8. `text-to-speech`
9. `speech-to-text-subtitles`
10. `media-ingest`

> Naming can be adapted to repository conventions, but separation of concerns must be preserved.

## Proposed package responsibility map

### `packages/telugu-nlp`
- Unicode-safe Telugu normalization (prefer NFC).
- Tokenization/segmentation utilities.
- Text alignment helpers for linking words/sentences to grammar and subtitles.

### `packages/user-knowledge-state` (new)
- Domain model for `unknown | learning | known` states.
- APIs for querying/updating states and deriving study priorities.
- No UI framework dependencies.

### `packages/dictionary` (new)
- Headword lookup API.
- Pronunciation/transliteration metadata.
- Gloss layer with language selection (`en`, `ja`).
- Extensible schema for POS/examples/related forms/grammar notes.

### `packages/reader` (new)
- Reader parsing pipeline orchestration using `telugu-nlp`.
- Token-to-state decoration via `user-knowledge-state`.
- Selection/click events for popup dictionary and sentence mining.

### `packages/grammar` (new)
- Structured lesson content model.
- Grammar point identity and linking APIs.
- Mapping utilities for reader phrase/sentence associations.

### `packages/pronunciation-reading-coach` (new)
- Letter-level and word-level pronunciation hint services.
- Transliteration overlays.
- Feedback scaffolding for read-aloud or guided reading sessions.

### `packages/srs`
- Card scheduling and review state.
- Sentence-to-card creation contracts.
- Media attachment references (e.g., TTS audio).

### `packages/text-to-speech` (new)
- Telugu TTS provider abstraction.
- Sentence-to-audio generation APIs.
- Voice/speed/regeneration metadata model.

### `packages/speech-to-text-subtitles` (new)
- Telugu STT provider abstraction.
- Transcript + timestamp generation.
- Subtitle segmentation and quality metadata.

### `packages/media-ingest`
- Media source intake (YouTube/MP4).
- Track extraction and job dispatch for STT.
- Subtitle persistence for downstream reader/mining use.

## Integration flows

### Reader + knowledge state + dictionary
1. Reader receives Telugu text.
2. `telugu-nlp` tokenizes text.
3. `user-knowledge-state` annotates token familiarity.
4. UI highlights tokens by state.
5. Token click opens dictionary entry from `dictionary`.

### Sentence mining to SRS with TTS
1. User saves sentence from reader/media subtitle.
2. Sentence is normalized and persisted.
3. `srs` creates a card record.
4. `text-to-speech` generates Telugu audio.
5. Card stores audio metadata + playback source.

### Media ingest to subtitle-driven study
1. User submits YouTube URL or MP4.
2. `media-ingest` prepares audio stream.
3. `speech-to-text-subtitles` produces timestamped transcript.
4. Subtitles displayed in media view and exposed to mining workflow.

## Cross-cutting requirements
- Preserve Telugu Unicode fidelity; avoid lossy normalization.
- Keep shared packages framework-agnostic (no Next.js imports in `packages/*`).
- Design interfaces for asynchronous processing and retries in TTS/STT pipelines.
- Use stable IDs for words/sentences/grammar points to support deep links.
- Maintain extensibility for future audio features and richer linguistic metadata.
