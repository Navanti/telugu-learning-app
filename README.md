# Telugu Learning App Monorepo

A TypeScript monorepo for a Telugu learning app inspired by **Migaku** (vocabulary acquisition, sentence mining, reader-based study, word-state tracking) and **Tae Kim’s Guide** (structured grammar teaching with examples).

## Product overview
The product vision is a connected learning loop:
- Read Telugu text/media with a smart reader.
- Track vocabulary as `unknown`, `learning`, or `known`.
- Open in-context dictionary popups with transliteration and EN/JA gloss.
- Learn grammar through structured lessons linked to reader content.
- Practice in learn-to-read mode with pronunciation support.
- Mine sentences into SRS cards with generated Telugu TTS audio.
- Generate subtitles from Telugu audio when media lacks subtitle files.

## Repository layout

- `apps/web` — Next.js web application shell.
- `packages/ui` — shared UI primitives.
- `packages/srs` — spaced repetition scheduling logic.
- `packages/telugu-nlp` — Telugu text normalization/token utilities.
- `packages/media-ingest` — subtitle/media ingestion utilities.
- `docs` — product, roadmap, backlog, and architecture documentation.

## Architecture principles

- Keep deployable apps in `apps/*` and reusable domain modules in `packages/*`.
- Keep shared packages framework-agnostic.
- Export package APIs explicitly from `src/index.ts`.
- Preserve Telugu Unicode fidelity; prefer NFC normalization.

## Quick start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Commands

- `pnpm dev` — run the Next.js app.
- `pnpm build` — build all workspaces.
- `pnpm test` — run all tests.
- `pnpm lint` — lint all workspaces.
- `pnpm typecheck` — run TypeScript checks.
