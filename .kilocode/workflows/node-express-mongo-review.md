# Node + Express + Mongo Code Review

You are performing a pragmatic code review for a Node.js (Express) + MongoDB/Mongoose service. 
Produce clear findings with code-block examples and ranked priorities (P0 critical, P1 high, P2 normal, P3 nit).

## Parameters (ask if missing)
- `packageManager` (default: npm)
- `lintCommand` (default: "npm run lint" or "npx eslint .")
- `formatCheckCommand` (default: "npm run format:check" or "npx prettier -c .")
- `typecheckCommand` (default: "npm run typecheck" or "npx tsc --noEmit", skip if no TS)
- `testCommand` (default: "npm test --silent")
- `coverageThreshold` (default: 70)
- `startCommand` (default: "npm run dev" or "node server.js")
- `port` (default: 3000)
- `envFile` (default: ".env")

## High-level plan
1) Inventory & context check
2) Static scans (lint, formatting, types)
3) Security & supply chain checks
4) Test suite & coverage
5) API & Express hardening review
6) Mongoose schema & query review
7) DX/docs & CI review
8) Summarize findings with actionable diffs

---

## 1) Inventory & context
- Use `search_files` to list: `package.json`, `tsconfig.json`, `.eslintrc*`, `.prettierrc*`, `jest.config.*` or `vitest.config.*`, `Dockerfile*`, `docker-compose*`, `.github/workflows/*`, `src/**`, `app.js|server.js|src/index.*`, `.env*`, `README*`.
- `read_file` the `package.json` and detect scripts (lint, test, coverage, typecheck).
- Detect JS vs TS; detect test runner (Jest/Vitest).
- Detect Express entrypoint (e.g., `src/app.ts`, `src/server.ts`, `server.js`).

## 2) Static scans
- Run:
  - `${lintCommand}` (fallback to `npx eslint .`)
  - `${formatCheckCommand}` (fallback to `npx prettier -c .`)
  - If TS files exist: `${typecheckCommand}` (fallback to `npx tsc --noEmit`)
- Report all errors with file/line. Propose minimal, safe diffs.

## 3) Security & supply chain
- Run `${packageManager} audit --omit=dev || true` and summarize CVEs with severity and fix commands.
- Grep with `search_files` for insecure patterns:
  - `eval\(`, `child_process.exec\(` without sanitization
  - `console.log` of secrets, `process.env` prints
  - `cors\(` with `origin: *` in production
  - Missing `helmet()` in Express
  - `express-session` without secure flags (cookie: `secure`, `httpOnly`, `sameSite`)
  - JWT without `expiresIn` or weak secrets
- If Dockerfile present: check non-root user, pinned base images, `NODE_ENV=production`.
- If GH Actions/CI present: look for plaintext tokens, unpinned actions.

## 4) Tests & coverage
- Try `${testCommand}`; if it supports coverage (`--coverage`), run coverage and capture summary.
- If the coverage tool is present, compare to `${coverageThreshold}` and list files below threshold.
- If no tests found, create a quick plan:
  - Unit: controllers/services with pure logic
  - Integration: Mongoose models (with mongodb-memory-server)
  - API: supertest hitting Express routes

## 5) API & Express hardening
- Locate Express init file; verify:
  - `helmet()`, `rate-limit` (e.g., `express-rate-limit`) on auth-sensitive routes
  - `cors` configured with explicit `origin` list in non-dev
  - `compression` only if safe for your payloads
  - Body parsers with sane limits (`json({ limit: '1mb' })`)
  - Centralized error handler `(err, req, res, next)` returning sanitized messages
  - Validation middleware (zod/joi/celebrate) on every public route
  - `morgan` or structured logger disabled or reduced in production
  - Graceful shutdown handling (`SIGTERM`/`SIGINT`) closing HTTP server & Mongo connections
- Auto-generate a checklist diff for missing items.

## 6) Mongoose review
- `search_files` for `mongoose.Schema(`:
  - Ensure `timestamps: true` where appropriate
  - Indexes defined for frequent query fields (`schema.index({ ... })`)
  - Avoid unbounded arrays without caps
  - Validate ObjectId refs and required fields
  - Use `lean()` for read-heavy queries; avoid N+1 populates
  - Use projections; avoid `find()` returning entire docs when not needed
  - Consider TTL indexes for ephemeral collections (sessions, tokens)
- Flag any use of `$where`, untrusted regex, or raw pipelines built from unsanitized input.

## 7) Developer experience & CI
- Check for:
  - `README` with setup, env vars, run/test commands
  - `.env.example` in sync with code access to `process.env.*`
  - `prettier` + `eslint` + `editorconfig`
  - `pre-commit` hooks (`lint-staged`) for lint/format
  - CI workflow running lint, typecheck, tests, and building Docker image
- If missing, propose minimal additions with file diffs.

## 8) Output
- Produce a **Report** with sections: Overview, Critical Issues (P0), High (P1), Normal (P2), Nits (P3), Suggested Diffs, Next Steps.
- For each issue, include: file path, code excerpt, why it matters, fix suggestion, and a short diff.
- If you modified files (only after explicit user approval), show a git patch.

## Commands to run (adapt as needed)
1. `${packageManager} ci || ${packageManager} install`
2. `${lintCommand} || true`
3. `${formatCheckCommand} || true`
4. `${typecheckCommand} || true`
5. `${testCommand} || true`
6. `${packageManager} audit --omit=dev || true`

## Notes
- Use `ask_followup_question` to confirm destructive changes or adding new deps (`helmet`, `express-rate-limit`, `zod`, `mongodb-memory-server`, `supertest`).
- Prefer minimal diffs and clear commit messages per category (style, fix, chore, docs).
- If the repo has Docker, try `docker compose up -d mongo` before integration tests and show how to run tests against it.
