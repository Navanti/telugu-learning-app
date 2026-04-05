# AGENTS.md

## Architecture rules
- Keep a monorepo layout with deployable apps in `apps/*` and reusable domain modules in `packages/*`.
- All shared package APIs must be TypeScript-first, with explicit exports from `src/index.ts`.
- Avoid framework coupling in shared packages (no Next.js imports in `packages/*`).
- Telugu domain logic belongs in `packages/telugu-nlp`; spaced repetition logic belongs in `packages/srs`.

## Pull request guidelines
- PRs should be focused, small enough to review, and include test evidence.
- Include a concise summary, impacted packages/apps, and any follow-up work.
- Note Unicode or rendering risks when touching Telugu text handling.

## Testing requirements
- Add or update tests for each changed package.
- Run `pnpm test` and `pnpm typecheck` before requesting review.
- For web app changes, ensure `pnpm dev` starts without runtime errors.

## Telugu-specific handling notes
- Preserve Unicode fidelity; never normalize by stripping combining marks indiscriminately.
- Prefer NFC normalization for consistent storage and comparison.
- Validate Telugu rendering in UI with fonts that support Telugu glyph shaping.
- Treat Telugu punctuation and danda-like separators deliberately in tokenization logic.
