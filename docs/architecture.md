# Architecture Notes

This monorepo follows a simple app/package split:

- `apps/web` composes UX and routing.
- `packages/*` contains reusable domain and infrastructure modules.

Future services (sync, analytics, content pipelines) can be introduced as additional packages.
