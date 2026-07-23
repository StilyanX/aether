import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        __BUILD_DATE__: 'readonly',
        __APP_VERSION__: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': 'warn',
      'react/no-unescaped-entities': 'off',
      'no-empty': ['error', { allowEmptyCatch: true }],
      // @react-three/fiber intrinsics (args, position, attach, intensity, ...) aren't real DOM
      // props; eslint-plugin-react's DOM-prop allowlist doesn't know about r3f's JSX namespace.
      'react/no-unknown-property': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    // src/lib/q.js/q.js is vendored third-party code (stewdio/q.js), not lint-conformant by us.
    ignores: ['dist/**', 'node_modules/**', 'build/**', 'src/lib/q.js/**']
  }
]
