# Product Specification

## Product vision
Build a Telugu learning platform inspired by:
- **Migaku-style acquisition workflows**: vocabulary acquisition, sentence mining, reader-first study, and explicit word-state tracking.
- **Tae Kim-style grammar pedagogy**: structured lesson sequencing, clear explanations, and progressive examples.

The product should support daily vocabulary growth while also teaching grammar and reading fluency in context.

## Target outcomes
- Help learners move words from **unknown → learning → known** with measurable progress.
- Turn authentic Telugu text and media into study material with minimal friction.
- Improve reading and pronunciation confidence through guided reader and coach tools.

## Core user requirements

### 1) Vocabulary knowledge states
- Users can assign vocabulary to one of three states:
  - `unknown`
  - `learning`
  - `known`
- State must drive:
  - Reader highlighting
  - Study recommendations
  - Card generation priorities

### 2) Smart Telugu reader
- Accept arbitrary Telugu text input.
- Parse input into tokens/words using Telugu-aware NLP utilities.
- Detect token status from user knowledge state.
- Highlight tokens by state.
- On token click, open popup dictionary.

### 3) Popup dictionary
- Show Telugu headword.
- Show pronunciation/transliteration.
- Show meaning in user-selected gloss language (**English** or **Japanese**).
- Allow gloss language selection in settings.
- Reserve schema and UI space for future data:
  - Part of speech
  - Example usage
  - Related forms
  - Grammar notes

### 4) Grammar learning system
- Dedicated grammar section with Tae Kim-inspired structure.
- Grammar lessons include explanation + examples.
- Grammar points must be linkable to words/phrases/sentences appearing in reader content.

### 5) Learn-to-read mode
- Separate mode focused on reading practice.
- Clicking a letter shows pronunciation guidance.
- Clicking a word shows pronunciation/transliteration guidance.
- Learners can read passages and receive feedback.
- Keep scope extensible for future phonology/orthography drills.

### 6) Pronunciation support
- Provide letter-level pronunciation support.
- Provide word-level pronunciation support.
- Include transliteration support.
- Keep architecture ready for future audio playback and pronunciation scoring.

### 7) Sentence mining and SRS
- Allow users to save sentences from reader/media workflows.
- Convert saved sentences into SRS study cards.

### 8) Text-to-speech (TTS)
- When Telugu sentence is added to SRS, generate spoken Telugu audio.
- Attach generated audio to the study card.
- Keep architecture open for:
  - Multiple voices
  - Speed controls
  - Audio regeneration

### 9) Speech-to-text (STT) and subtitle generation
- If user supplies YouTube/MP4 without subtitles, run Telugu STT.
- Generate subtitle text + timestamps.
- Show generated subtitles alongside video.
- Make generated subtitles available to sentence-mining and study workflows.

## Non-goals for current phase
- No full production-grade model training pipeline.
- No offline-first synchronization guarantees yet.
- No implementation in this documentation-only update.

## Success metrics (initial)
- % of active users creating at least one mined sentence/week.
- % of sessions using reader highlighting by word state.
- Known-word growth rate over 30 days.
- Grammar lesson completion + linked reader usage.
- TTS attachment rate on generated SRS cards.
