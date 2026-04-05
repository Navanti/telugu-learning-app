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
- `apps/desktop` — Electron wrapper for desktop installers.
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

## Prerequisites (all operating systems)

Install the following before running the app:

1. **Node.js 20 LTS or newer** (Node.js 20 or 22 recommended).
2. **pnpm 9.12.3** (matches this repo's `packageManager` field).
3. **Git**.

Verify:

```bash
node -v
pnpm -v
git --version
```

If `pnpm` is missing after Node install:

```bash
corepack enable
corepack prepare pnpm@9.12.3 --activate
```

## Install and run the web app (Windows, macOS, Linux)

These steps run the web application from source and are the same across OSes.

1. Clone and enter the repo:
   ```bash
   git clone <your-fork-or-this-repo-url>
   cd telugu-learning-app
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the app:
   ```bash
   pnpm dev
   ```
4. Open `http://localhost:3000`.

## Platform-specific setup notes

### Windows (PowerShell)

```powershell
winget install OpenJS.NodeJS.LTS
winget install Git.Git
corepack enable
corepack prepare pnpm@9.12.3 --activate
```

Then run the shared install steps above.

### macOS (Homebrew)

```bash
brew install node@20 git
corepack enable
corepack prepare pnpm@9.12.3 --activate
```

Then run the shared install steps above.

### Linux (Debian/Ubuntu example)

```bash
sudo apt update
sudo apt install -y nodejs npm git
sudo npm install -g corepack
corepack enable
corepack prepare pnpm@9.12.3 --activate
```

Then run the shared install steps above.

> Tip: for Fedora, Arch, or other distros, use your distro's package manager for Node.js and Git, then run the same `corepack` commands.

## Desktop installers (ready for Windows, macOS, and Linux)

The desktop app is now configured to build native installers for all three major operating systems.

From the repository root:

- **Windows installer (`.exe`, NSIS x64):**
  ```bash
  pnpm build:desktop:win
  ```
- **macOS installer (`.dmg`, x64 + arm64):**
  ```bash
  pnpm build:desktop:mac
  ```
- **Linux installer (`.AppImage`, x64):**
  ```bash
  pnpm build:desktop:linux
  ```

Generated artifacts are written under `apps/desktop/release/`.

## Validate your setup

Before opening a PR or sharing changes, run:

```bash
pnpm test
pnpm typecheck
```

For desktop work, also verify that local development boot works:

```bash
pnpm dev:desktop
```

## Commands

- `pnpm dev` — run the Next.js web app.
- `pnpm build` — build all workspaces.
- `pnpm build:desktop:win` — build Windows desktop installer (`.exe`).
- `pnpm build:desktop:mac` — build macOS desktop installer (`.dmg`).
- `pnpm build:desktop:linux` — build Linux desktop installer (`.AppImage`).
- `pnpm dev:desktop` — run Electron desktop shell against local web dev server.
- `pnpm test` — run all tests.
- `pnpm lint` — lint all workspaces.
- `pnpm typecheck` — run TypeScript checks.
