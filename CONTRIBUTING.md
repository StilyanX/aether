# Contributing

## Prerequisites

- Node.js 18+
- npm
- Git

## Setup

```bash
git clone https://github.com/StilyanX/aether.git
cd aether
npm install
npm run dev
```

Open [http://localhost:8000/Aether/](http://localhost:8000/Aether/).

## Reporting a bug

Open an issue on GitHub. Include:

- What you expected to happen.
- What happened instead.
- Steps to reproduce, as terse as you can make them.
- Browser and OS (for UI bugs).
- A screenshot or short screencast if the issue is visual.

Add the `track:code` label so the bug is triaged correctly. If the bug is in a topic's prose, math, or simulation, use `track:content` and link the affected file.

## Project structure

```
src/features/explore/   Subject content. Eight categories:
                        books, films, languages, mathematics,
                        papers, physics, podcasts, videos
src/components/         UI shell, learning template, viz primitives
src/config/             registry.js (single source of truth for all topics)
src/hooks/              Settings, theme, FSRS, MathJax, Prism, et al.
src/lib/                IndexedDB store, keybinds, session management
src/styles/             tokens.css, typography.css, themes.css
```

## Making a code change

1. Fork the repo and create a branch off `main`
2. Make your change
3. Run `npm run lint` and `npm run format`, then fix any errors
4. Run `npm run build` to confirm the production bundle still compiles
5. Open a PR against `main`

## Making a content change

Content lives in `src/features/explore/`. Each topic is a single `.jsx` file that imports `LearningTemplate` and exports a default component, passing a config object with learning cards, solving cards, and reference sections. LaTeX is written inline (`$...$`) or as a block (`$$...$$`) and rendered by MathJax; Mafs visualizations use KaTeX. The dev server hot-reloads on save, so no build step is needed to preview.

Adding a new topic requires four steps: add an entry to `resourceMetadata`, add a `resourceContent[slug]` entry, add a `topicComponentMap[title]` entry, and create the `.jsx` file at the `filePath` you declared.

### Content style rules

The rules that catch most contributors:

- Active voice. Max 20 words per sentence. Plain language at a 12-year-old reading level. "You can write" beats "it is possible to write."
- Lists are typed: `<ul className="lrn-list">` for bullets, `<ol className="lrn-list">` for numbered. Never mix the two for the same list.
- Math: block equations `$$...$$`, inline `$...$`. Inside Mafs `<LaTeX>` blocks, add `import 'katex/dist/katex.min.css'` at the top of the file.
- No place-value jargon ("3-digit number") in prose. Say "in the hundreds" or use a concrete number.
- No streaks, XP, daily limits, or any other engagement metric. The platform is built around the opposite of these.

## Commit style

Follow [Conventional Commits](https://www.conventionalcommits.org):

```
feat: add thermodynamics unit
fix: correct Lagrangian equation in unit 3
content: add German A2 greetings chapter
```

## Issue labels

| Label                     | Meaning                                      |
| ------------------------- | -------------------------------------------- |
| `track:code`              | Code contribution wanted                     |
| `track:content`           | Content contribution wanted                  |
| `track:fsrs`              | Relates to the spaced-repetition scheduler   |
| `good-first-issue`        | Good entry point for first-time contributors |
| `review-needed`           | Needs a subject-matter expert to verify      |
| `track:design-principles` | Challenges a core design decision            |

## What needs doing

[`WANTED.md`](WANTED.md) is the flat list of everything that is wanted, in progress, or planned. Pick an item there and comment on its issue to claim it. If your idea is not on the list, open an issue first so the work is not duplicated.

Examples of open work: Docker / NixOS / YunoHost / Cloudron / Helm packaging, an accessibility audit (WCAG 2.2 full pass), offline PWA support, additional subject curricula.

## Principles that are not up for change

A few choices will not be revisited. PRs that move against them will be declined:

- No accounts, no backend, no telemetry.
- No streaks, XP, badges, daily goals, or other engagement metrics.
- No paywalls, subscriptions, or premium tier.

See [`README.md`](README.md#what-this-project-will-not-become) for the full list. To challenge a principle, open an issue with `track:design-principles`.
