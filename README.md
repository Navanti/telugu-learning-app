# Telugu Learning App Monorepo

A TypeScript monorepo for a Telugu learning app inspired by Migaku. The repository is organized for clear separation of product surface area (`apps`) and reusable learning modules (`packages`).

## Repository layout

- `apps/web` — Next.js web application shell.
- `packages/ui` — shared UI primitives.
- `packages/srs` — spaced repetition scheduling logic.
- `packages/telugu-nlp` — Telugu text normalization utilities.
- `packages/media-ingest` — subtitle/media ingestion utilities.
- `docs` — documentation and architecture notes.
- `.codex/agents` — local automation agent configs.
- `.codex/skills` — local reusable skill definitions.

## Architecture

- **App layer** (`apps/web`): product composition, routing, and user flows.
- **Package layer** (`packages/*`): framework-agnostic domain capabilities.
- **Testing**: each package has focused unit tests using Vitest.

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

## Notes for Telugu handling

- Normalize Telugu text with NFC for consistency.
- Avoid lossy transliteration in core storage and review logic.
- Keep tokenizer/parser behavior explicit for punctuation and subtitle timing markers.
