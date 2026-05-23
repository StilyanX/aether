# Source Code Conventions

File naming and folder layout for `src/features/explore/`. For how content gets wired into the app (registry + `filePath`), see `CONTRIBUTING.md`. This doc only covers what files are called and where they live.

## Structure

```
src/features/explore/
├── books/
│   ├── biography/Founders & Builders/<book-slug>.jsx
│   └── fantasy/Science Fantasy/<book-slug>.jsx        # + sibling <book-slug>-viz.js
├── films/star-wars/<film-slug>.jsx
├── languages/german/A1/<unit-slug>.jsx
├── mathematics/
│   ├── algebra/<module>.jsx                            # no top-level algebra.jsx
│   └── arithmetic/<module>.jsx                         # no top-level arithmetic.jsx
├── papers/information-theory/<paper-slug>.jsx
├── physics/
│   └── classical-mechanics/
│       ├── part-i-newtonian-mechanics/<module>.jsx
│       ├── part-ii-lagrangian-mechanics-and-variational-principles/<module>.jsx
│       ├── part-iii-hamiltonian-mechanics-and-canonical-formalism/<module>.jsx
│       └── part-iv-perturbation-theory-and-advanced-topics/<module>.jsx
├── podcasts/lex-fridman/<episode-slug>.jsx
└── videos/johnny-harris/<video-slug>.jsx
```

Eight categories, all flat under `explore/`. Depth varies by domain. Math is `category/topic/<module>.jsx`. Physics adds a `part-*` layer. Books nest `genre/<series-title>/<book>.jsx`.

## Naming

| Rule                              | Example                                                     |
| --------------------------------- | ----------------------------------------------------------- |
| **Lowercase-hyphenated `.jsx`**   | `newtons-laws-and-integration.jsx`                          |
| **Supporting files use prefixes** | `arithmetic-tools.css`, `the-citadel-of-the-autarch-viz.js` |
| **Sequential numbers**            | Bare integers, no padding: `unit-2`, `unit-10`              |
| **Date format**                   | `YYYYMMDD` when needed                                      |

Filename length is a soft target. Keep it readable, but long descriptive slugs (e.g. `advanced-topics-asymptotics-singularities-and-integrable-systems.jsx`) are accepted when they match the source curriculum.

## Prohibited (with one exception)

- ❌ Underscores in filenames
- ❌ PascalCase or camelCase in filenames
- ❌ Special characters beyond `-` and `.`
- ❌ Spaces in `.jsx` filenames

**Exception:** title-cased folder names under `books/` use spaces (`Founders & Builders/`, `Science Fantasy/`). These are series/collection labels rendered as-is in the UI; the leaf `.jsx` files inside still follow lowercase-hyphenated rules.

## Topic main files

Topic folders **may** have a `<foldername>.jsx` entry, but it's not required. Two patterns coexist:

1. **Single-file topic**: one `.jsx` per topic, named after the topic (`videos/johnny-harris/<title>.jsx`).
2. **Module-only folder**: a topic folder full of module `.jsx` files with no central entry (`mathematics/arithmetic/`, `mathematics/algebra/`, every `physics/.../part-*`). The unit-level entry is reached via `registry.js → topicComponentMap`, not a parent file.

Don't add an empty `arithmetic.jsx`-style stub just to satisfy a naming rule.

## Examples

### Correct

```
explore/mathematics/arithmetic/decimal-fundamentals.jsx
explore/physics/classical-mechanics/part-i-newtonian-mechanics/newtons-laws-and-integration.jsx
explore/books/fantasy/Science Fantasy/the-shadow-of-the-torturer.jsx
explore/books/fantasy/Science Fantasy/the-shadow-of-the-torturer-viz.js
explore/languages/german/A1/unit-0-language-levels-and-classroom-instructions.jsx
```

### Incorrect

```
explore/mathematics/ArithmeticContent.jsx            # PascalCase
explore/mathematics/arithmetic_module.jsx            # underscore
explore/mathematics/arithmetic-content.jsx           # not inside a topic folder
explore/physics/Classical Mechanics/part-i.jsx       # spaces outside books/
```
