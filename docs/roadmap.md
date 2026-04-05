# Product Roadmap

## Planning assumptions
- Monorepo architecture with deployable app(s) in `apps/*` and reusable domain packages in `packages/*`.
- Shared package APIs remain TypeScript-first and exported via `src/index.ts`.
- Telugu language correctness and Unicode fidelity are first-class acceptance criteria.

## Phase 0 — Product foundation (Now)
**Goal:** establish documentation, architecture contracts, and package boundaries.

- Finalize product spec for reader, dictionary, grammar, SRS, TTS/STT features.
- Define module boundaries and integration contracts.
- Create epic backlog with dependencies and acceptance criteria.

Exit criteria:
- Product docs approved and internally aligned.
- Backlog prioritized by dependencies.

## Phase 1 — Knowledge-state reader loop
**Goal:** deliver core learning loop from reading to vocabulary tracking.

- Implement user vocabulary knowledge states (`unknown`, `learning`, `known`).
- Ship smart Telugu reader tokenization + state-aware highlighting.
- Ship popup dictionary with transliteration and configurable EN/JA gloss.
- Add sentence save action from reader.

Exit criteria:
- Users can read Telugu text, inspect words, and persist vocabulary/sentences.
- Reader visuals accurately reflect word state.

## Phase 2 — Grammar-linked learning
**Goal:** integrate structured grammar progression with contextual reading.

- Launch grammar section with lesson units and examples.
- Add deep links from grammar points to reader snippets.
- Add deep links from reader tokens/sentences to relevant grammar points.

Exit criteria:
- Grammar lessons are navigable and cross-linked to reader content.

## Phase 3 — Reading coach + pronunciation
**Goal:** improve decoding and pronunciation confidence.

- Release learn-to-read mode for letter and word pronunciation support.
- Add transliteration overlays and pronunciation hints.
- Instrument learner feedback events for practice sessions.

Exit criteria:
- Users can practice passage reading and receive actionable guidance.

## Phase 4 — SRS automation + TTS
**Goal:** reduce friction from mining to review.

- Build sentence-to-card conversion workflows.
- Auto-generate Telugu TTS when creating Telugu sentence cards.
- Attach and store audio metadata per card.
- Add controls for voice/speed/regeneration (initial configurable architecture, partial UI).

Exit criteria:
- Mined sentences consistently become playable study cards.

## Phase 5 — Media ingest + STT subtitles
**Goal:** unlock video workflows without pre-existing subtitles.

- Ingest YouTube/MP4 media into processing pipeline.
- Run Telugu STT to generate timestamped subtitles.
- Render generated subtitles in media viewer.
- Make generated subtitle segments mineable into SRS.

Exit criteria:
- Users can produce and use generated subtitles for study.

## Risks and sequencing notes
- Telugu tokenization quality strongly impacts reader highlighting, dictionary lookup, and sentence mining.
- STT/TTS provider quality and cost may affect rollout sequencing.
- Grammar cross-link quality depends on stable content IDs and token alignment.
