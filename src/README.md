# Source Code Conventions

This document outlines the file naming and organization conventions used in this project.

## Structure

```
src/features/explore/
├── books/                          # Category folder
│   └── biography/
│       └── augustus-first-emperor/
│           └── augustus-first-emperor.jsx  # Main file (matches folder name)
├── languages/
│   └── german/
│       ├── unit-2-greetings-and-first-contacts/
│       │   └── unit-2-greetings-and-first-contacts.jsx
│       └── unit-10-travel-and-holidays/
│           └── unit-10-travel-and-holidays.jsx
├── mathematics/
│   └── arithmetic/                 # Topic folder (no single main file; uses subfolders)
│       ├── fraction-foundations.jsx   # Module file
│       ├── number-theory.jsx          # Module file
│       ├── arithmetic-tools.jsx       # Supporting file (prefixed)
│       ├── arithmetic-tools.css       # Supporting stylesheet (prefixed)
│       ├── tools/                     # Interactive tool components
│       │   ├── fraction-circles.jsx
│       │   └── tool-shell.jsx
│       └── projects/                  # Capstone / project files
│           └── capstone-whole-numbers.jsx
├── papers/
│   └── information-theory/
│       └── shannon-entropy/
│           └── shannon-entropy.jsx
├── physics/
│   └── classical-mechanics/
│       ├── part-i-newtonian-mechanics/
│       │   ├── newtons-laws-and-integration.jsx
│       │   └── oscillations.jsx
│       └── part-ii-lagrangian-mechanics-and-variational-principles/
│           └── euler-lagrange-equations.jsx
├── podcasts/
│   └── lex-fridman/
│       └── andrew-bustamante/
│           └── andrew-bustamante.jsx
└── videos/
    └── johnny-harris/
        └── switzerland-engineering/
            └── switzerland-engineering.jsx
```

## Naming Conventions

| Rule                              | Example                                         |
| --------------------------------- | ----------------------------------------------- |
| **Lowercase-hyphenated**          | `fraction-foundations.jsx`                      |
| **Main file matches folder**      | `shannon-entropy/shannon-entropy.jsx`           |
| **Supporting files use prefixes** | `arithmetic-tools.jsx`, `arithmetic-tools.css`  |
| **Modules inside topic folder**   | `arithmetic/fraction-foundations.jsx`           |
| **Sequential numbers**            | No leading zeros: `unit-2`, `unit-10`, `part-i` |
| **Date format**                   | `YYYYMMDD` when needed                          |

## Prohibited

- ❌ Spaces in filenames
- ❌ Special characters (except hyphens)
- ❌ Underscores
- ❌ PascalCase or camelCase

## Rules

1. **Each topic gets its own folder** - e.g., `mathematics/arithmetic/`
2. **Leaf topics use a main file matching the folder name** - e.g., `shannon-entropy/shannon-entropy.jsx`
3. **Multi-module topics omit the main file** and use subfolders instead - e.g., `arithmetic/tools/`, `arithmetic/projects/`
4. **Modules go inside topic folder** - e.g., `arithmetic/fraction-foundations.jsx`
5. **Group by function, not file type** - Keep related files together
6. **Supporting files use prefixes** - e.g., `arithmetic-tools.jsx`, `arithmetic-tools.css`

## Examples

### ✅ Correct

```
explore/physics/classical-mechanics/part-i-newtonian-mechanics/oscillations.jsx
explore/papers/information-theory/shannon-entropy/shannon-entropy.jsx
explore/mathematics/arithmetic/fraction-foundations.jsx
explore/mathematics/arithmetic/tools/fraction-circles.jsx
```

### ❌ Incorrect

```
explore/mathematics/ArithmeticContent.jsx              # PascalCase, flat
explore/mathematics/arithmetic-content.jsx             # Flat, not in folder
features/mathematics/NumberRepresentation.jsx           # Wrong location, PascalCase
```
