import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import jestPlugin from 'eslint-plugin-jest';
import prettierPlugin from 'eslint-plugin-prettier';
import sonarjs from 'eslint-plugin-sonarjs';
import testingLibrary from 'eslint-plugin-testing-library';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      sonarjs,
      unicorn: eslintPluginUnicorn,
      prettier: prettierPlugin,
      jest: jestPlugin,
      'testing-library': testingLibrary,
    },
    rules: {
      'prettier/prettier': 'error',
      ...sonarjs.configs.recommended.rules,
      ...eslintPluginUnicorn.configs['flat/recommended'].rules,
      ...jestPlugin.configs.recommended.rules,
      ...testingLibrary.configs['flat/react'].rules,
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      camelcase: ['error'],
      semi: ['error', 'always'],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'generic',
          readonly: 'generic',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: false,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
        },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
        },
      ],
      curly: ['error', 'all'],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
      ],
      'max-lines-per-function': [
        'error',
        {
          max: 100,
          skipBlankLines: true,
          skipComments: true,
          IIFEs: true,
        },
      ],
      'max-lines': [
        'error',
        {
          max: 1000,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      'unicorn/no-null': 'off',
      'unicorn/filename-case': 'off',
    },
  },
  {
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      'max-lines-per-function': 'off',
      'max-lines': 'off',
      'sonarjs/parameterized-tests': 'off',
      '@next/next/no-img-element': 'off',
    },
  },
  {
    files: ['src/app/manifest.ts'],
    rules: {
      camelcase: ['error', { properties: 'never' }],
    },
  },
  globalIgnores([
    'node_modules/**',
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
