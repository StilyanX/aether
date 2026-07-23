# Wanted

Everything on this list is wanted, in progress, or planned. Each item is labeled with a size estimate (S, M, L) and a flag for whether it is a good entry point for first-time contributors.

To claim an item, comment on its GitHub issue. If your idea is not on this list, open an issue first (`track:code` for code, `track:content` for content, `track:design-principles` to challenge a design decision) so the work is not duplicated.

Last triaged: 2026-07-23.

## Shipped since the last triage

Chemistry (General Chemistry, 18 topics) and History (Prehistory, 6 topics) both landed and have been removed from the Content list below. Mathematics grew to 69 topics and Physics to 60. The platform now carries 172 topics, plus 12 capstone exams.

## Code

| Item                                 | Size | First issue | Notes                                                                                                            |
| ------------------------------------ | ---- | ----------- | ---------------------------------------------------------------------------------------------------------------- |
| Clear the lint warnings              | S    | yes         | 86 warnings, no errors. See the breakdown below. Good in small, file-scoped PRs.                                 |
| Per-route bundle-size budget         | S    | yes         | Add a CI check on `dist/assets/*.js` sizes against per-route bundle targets.                                      |
| Docker packaging                     | M    |             | Multi-stage build, base on `node:20-alpine`, serve `dist/` via nginx on `:8000`.                                  |
| NixOS / YunoHost / Cloudron / Helm   | M    |             | One package per platform. All consume the static `dist/` build output.                                            |
| Self-hosted ngspice WASM build       | L    |             | `src/lib/ngspice/` is a README and nothing else. Circuit topics stay blocked until a real build lands there.      |
| Offline PWA support                  | L    |             | Service worker, manifest, and a cache for the MathJax and Prism CDN assets. KaTeX is already bundled, so skip it. |
| Accessibility audit (WCAG 2.2 sweep) | L    | yes         | Run axe-core or Lighthouse over every route. File each finding as a `track:code` issue.                          |

### Known lint debt

`npm run lint` reports 0 errors and 86 warnings. None of them break the build.
They split into two groups, and the second is not safe to fix mechanically:

- **45 `no-unused-vars`.** The easy ones are already gone. What remains is
  bindings that cannot be deleted without changing behaviour or an API:
  component props, default parameter values, positional destructuring, the
  unused half of a `useState` pair, and results of hook calls. Each needs a
  human decision.
- **41 `react-hooks/exhaustive-deps`.** Do not bulk-add the missing
  dependencies. Several of these effects deliberately run on mount only or
  omit a dependency to avoid a loop; adding deps blindly can cause infinite
  re-renders. Fix them one at a time, and verify the component still behaves.

Treat a new error as a real defect rather than noise. Every error the linter
reported before this list was written turned out to be a live bug: two
`no-undef` were a component crashing at runtime on an unimported constant, and
a `no-useless-escape` was a LaTeX command silently losing its backslash inside
a plain template literal, so the page rendered `infty` instead of an infinity
sign. When writing LaTeX in JS, use `` String.raw`...` `` so backslashes
survive, or double them.

## Content

See `CONTRIBUTING.md` for the wiring procedure.

| Item                                                   | Size | Model to follow                                              |
| ------------------------------------------------------ | ---- | -------------------------------------------------------------- |
| C Programming                                          | L    | Would be the first Computer Science subject.                  |
| The Space Age                                          | L    | `history/prehistory/` is the closest existing curriculum.     |
| Mathematics: Analysis                                  | L    | `mathematics/algebra/` is the closest existing curriculum.    |
| American Prometheus, by Kai Bird and Martin J. Sherwin | M    | `books/biography/` holds the one existing book study.         |

None of the four is wired up yet. Each needs a `resourceMetadata` entry, a `resourceContent` curriculum block, `topicComponentMap` entries, and the `.jsx` files, in that order. `CONTRIBUTING.md` walks through the wiring; the existing subject nearest to yours is the best template.

### Where each one stands

**C Programming** would be the first subject under a Computer Science category, so it needs the category added back to `categoryStructure` in `src/config/registry.js` alongside the subject itself. Suggested sources: K. N. King, *C Programming: A Modern Approach*, and Jens Gustedt, *Modern C* (third edition, C23). Prism handles the syntax highlighting and is already wired up.

**The Space Age** is the political and human history of spaceflight, from the first rockets to reusable boosters. Suggested sources: Michael J. Neufeld, *Spaceflight: A Concise History*; Walter A. McDougall, *The Heavens and the Earth*; Asif A. Siddiqi, *Challenge to Apollo*; Eric Berger, *Liftoff* and *Reentry*. Prehistory is the model for how a history curriculum is structured.

**Mathematics: Analysis** slots in beside Arithmetic and Algebra, which are the only two mathematics subjects so far. `mafs` is already a dependency and covers the plotting.

**American Prometheus** is a book study rather than a curriculum, so it is the smallest of the four. `books/biography/Founders & Builders/augustus-the-biography.jsx` is the pattern to copy: one file, one book. The book is in copyright, so the rule that applies to every topic applies with force here. Write your own analysis and commentary, and do not reproduce the text.

Single-topic PRs are welcome and make excellent first content contributions. Pick one module, ship it, iterate.

A visualization has to actually compute the thing it depicts. A diagram that merely looks like a simulation is worse than no diagram, because it teaches the reader to trust something false. If a concept has no honest in-browser visualization, ship it without one and say so in the issue.

## Review

The most valuable contribution for many readers is verification: read a topic, check the math, flag anything that is wrong or unclear. Open an issue with `track:content` and `review-needed`. Say which file and where the problem is, with a citation. No credentials required.

## Out of scope

See [`README.md`](README.md#what-this-project-will-not-become) for the canonical list: no accounts, no backend, no streaks, no telemetry, no paywalls. PRs that move against any of these will be declined.

---

Triage is run when this list ships changes. If an entry looks stale, open an issue with `track:code` to flag it.
