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

## Project structure

```
src/features/explore/   Subject content (mathematics, physics, languages, ...)
src/components/         UI shell and shared components
src/config/             Registry — single source of truth for all topics
```

## Making a code change

1. Fork the repo and create a branch off `main`
2. Make your change
3. Run `npm run lint` and fix any errors
4. Open a PR against `main`

## Making a content change

Content lives in `src/features/explore/`. It is Markdown + LaTeX inside JSX components. No build step is needed to preview — the dev server hot-reloads on save.

Adding a new topic requires a registry entry in `src/config/registry.js`. Open the file — the structure is documented inline.

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

## Packaging

Docker, NixOS, YunoHost, Cloudron, and Helm packaging are all wanted. Open an issue with `track:code` before starting so work is not duplicated.
