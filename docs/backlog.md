# Backlog (Epic-based)

This backlog expands core product requirements into epics with dependencies and acceptance criteria. It is documentation-only and does not imply implementation completion.

## EPIC-01: Vocabulary Knowledge State System
**Objective:** Track learner familiarity for each word and use it across learning flows.

Dependencies:
- Telugu token canonicalization from `telugu-nlp`.
- User identity/session model in app layer.

Stories:
- Define `unknown`, `learning`, `known` state model.
- Build APIs to read/write state.
- Expose state summary metrics (counts, trends).

Acceptance criteria:
- User can set and update a word state.
- State persists across sessions.
- API exposes per-user state distribution.

## EPIC-02: Smart Telugu Reader
**Objective:** Provide context-rich reading with state-aware highlighting.

Dependencies:
- EPIC-01 knowledge state model.
- Telugu tokenization from `telugu-nlp`.
- Dictionary lookup capability (EPIC-03).

Stories:
- Accept Telugu text input.
- Parse into tokens/words.
- Color/highlight by state.
- Click token to open dictionary popup.

Acceptance criteria:
- Reader tokenizes Telugu passages and renders token boundaries consistently.
- Highlighting accurately reflects stored word states.
- Token click opens corresponding dictionary entry.

## EPIC-03: Popup Dictionary + Gloss Settings
**Objective:** Deliver in-context lexical lookup with language-configurable meanings.

Dependencies:
- Reader token selection events (EPIC-02).
- Telugu headword indexing.

Stories:
- Dictionary card shows headword, transliteration/pronunciation.
- Gloss can be shown in English or Japanese.
- Add settings control for gloss language.
- Reserve schema for POS/examples/related forms/grammar notes.

Acceptance criteria:
- Gloss language switch updates dictionary display without data loss.
- Dictionary payload includes extensible optional fields for future metadata.

## EPIC-04: Grammar Learning System (Tae Kim-inspired)
**Objective:** Teach grammar through structured lessons linked to real usage.

Dependencies:
- Content model and lesson routing.
- Reader deep-link support (EPIC-02).

Stories:
- Build grammar lesson hierarchy (units/lessons/points).
- Author explanations with examples.
- Link grammar points to words/phrases/sentences in reader content.

Acceptance criteria:
- Learner can navigate lessons in structured order.
- Grammar points can be opened from linked reader examples.

## EPIC-05: Learn-to-Read Mode + Pronunciation Coach
**Objective:** Improve decoding skills at letter and word level.

Dependencies:
- Reader rendering primitives.
- Pronunciation/transliteration data source.

Stories:
- Separate learn-to-read section.
- Click letter → pronunciation guidance.
- Click word → transliteration/pronunciation guidance.
- Reading passage workflow with feedback hooks.

Acceptance criteria:
- Letter and word click interactions expose pronunciation information.
- Passage practice flow records learner feedback events.
- Architecture remains extensible for phonology/orthography drills.

## EPIC-06: Sentence Mining Workflow
**Objective:** Convert meaningful input into durable study assets.

Dependencies:
- Reader selection and sentence capture events (EPIC-02).
- Media subtitle ingestion (EPIC-08).
- SRS integration (EPIC-07).

Stories:
- Save sentence from reader/media context.
- Store source metadata (text location, media timestamp, origin).
- Queue sentence for card generation.

Acceptance criteria:
- User can save sentence from at least one reading and one media context.
- Saved sentence includes traceable source metadata.

## EPIC-07: SRS Card Generation + Scheduling
**Objective:** Transform mined content into repeatable spaced review.

Dependencies:
- Sentence mining output (EPIC-06).
- Existing `packages/srs` scheduling core.

Stories:
- Create sentence cards from mined sentences.
- Attach vocabulary/grammar tags.
- Track review outcomes.

Acceptance criteria:
- Mined sentence can be converted to a review card in one flow.
- Card enters scheduler and appears in due queue.

## EPIC-08: Media Ingest + STT Subtitle Generation
**Objective:** Support subtitle generation when subtitle files are missing.

Dependencies:
- Media ingest pipeline in `packages/media-ingest`.
- STT adapter (`speech-to-text-subtitles`).

Stories:
- Accept YouTube URL or MP4 upload.
- Extract Telugu audio and run STT.
- Persist subtitle text + timestamps.
- Show generated subtitles in media viewer.
- Expose subtitle segments for sentence mining.

Acceptance criteria:
- Missing-subtitle media can produce timestamped subtitles.
- Generated subtitle segments are mineable.

## EPIC-09: Telugu TTS for SRS Cards
**Objective:** Provide audible sentence playback to reinforce pronunciation.

Dependencies:
- SRS card creation flow (EPIC-07).
- TTS adapter (`text-to-speech`).

Stories:
- Auto-generate Telugu audio when sentence card is created.
- Attach audio to card playback UI.
- Store voice/speed/regeneration metadata.

Acceptance criteria:
- New Telugu sentence cards include generated audio asset reference.
- Regeneration path exists in API design for future UI activation.

## EPIC dependency graph (high level)
- EPIC-01 → EPIC-02 → EPIC-03
- EPIC-02 + EPIC-04 + EPIC-05 form core reading/grammar/pronunciation loop
- EPIC-02 + EPIC-08 → EPIC-06 → EPIC-07 → EPIC-09

## Suggested delivery order
1. EPIC-01, EPIC-02, EPIC-03
2. EPIC-04, EPIC-05
3. EPIC-06, EPIC-07
4. EPIC-08, EPIC-09

## Follow-up work
- Define evaluation datasets for Telugu tokenization and subtitle quality.
- Add provider benchmarking for STT/TTS quality vs. latency/cost.
- Add telemetry spec for learner outcomes and retention metrics.
