# Wanted

Everything on this list is wanted, in progress, or planned. Each item is labeled with a size estimate (S, M, L) and a flag for whether it is a good entry point for first-time contributors.

To claim an item, comment on its GitHub issue. If your idea is not on this list, open an issue first (`track:code` for code, `track:content` for content, `track:design-principles` to challenge a design decision) so the work is not duplicated.

Last triaged: 2026-05-22.

## Code

| Item                                 | Size | First issue | Notes                                                                                   |
| ------------------------------------ | ---- | ----------- | --------------------------------------------------------------------------------------- |
| Docker packaging                     | M    |             | Multi-stage build, base on `node:20-alpine`, serve `dist/` via nginx on `:8000`.        |
| NixOS / YunoHost / Cloudron / Helm   | M    |             | One package per platform. All consume the static `dist/` build output.                  |
| Offline PWA support                  | L    |             | Service worker + manifest + cache for MathJax, Prism, and KaTeX CDN assets.             |
| Accessibility audit (WCAG 2.2 sweep) | L    | yes         | Run axe-core or Lighthouse over every route. File each finding as a `track:code` issue. |
| Per-route bundle-size budget         | S    | yes         | Add a CI check on `dist/assets/*.js` sizes against per-route bundle targets.            |

## Content

See `CONTRIBUTING.md` for the wiring procedure.

| Item                                                      | Size | First issue |
| --------------------------------------------------------- | ---- | ----------- |
| Mathematics: Geometry                                     | L    |             |
| Chemistry: General Chemistry                              | L    |             |
| Computer Science: Digital Logic and Computer Architecture | L    |             |
| Economics: Microeconomics                                 | L    |             |
| Philosophy: Logic                                         | L    |             |

Each subject is large because it spans many topics. Single-topic PRs inside any of these subjects are welcome and make excellent first content contributions. Pick one chapter, ship it, iterate.

## Review

The most valuable contribution for many readers is verification: read a topic, check the math, flag anything that is wrong or unclear. Open an issue with `track:content` and `review-needed`. Say which file and where the problem is, with a citation. No credentials required.

## Out of scope

See [`README.md`](README.md#what-this-project-will-not-become) for the canonical list: no accounts, no backend, no streaks, no telemetry, no paywalls. PRs that move against any of these will be declined.

---

Triage is run when this list ships changes. If an entry looks stale, open an issue with `track:code` to flag it.
