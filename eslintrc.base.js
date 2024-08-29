const globals = require('globals');
const eslint = require('@eslint/js');
const eslintConfigPrettier = require('eslint-config-prettier');
const eslintPluginUnicorn = require('eslint-plugin-unicorn');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
  },
  eslint.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-constant-condition': [
        'error',
        {
          checkLoops: false,
        },
      ],
      curly: 'error',
      eqeqeq: 'error',
      'no-else-return': 'error',
      'no-lonely-if': 'error',
      'no-multi-assign': ['error', { ignoreNonDeclaration: true }],
      'no-unneeded-ternary': 'error',
      'no-useless-concat': 'error',
      'prefer-template': 'error',
      'capitalized-comments': [
        'warn',
        'always',
        {
          ignoreConsecutiveComments: true,
          ignorePattern: 'prettier',
        },
      ],
      'require-await': 'error',
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      'no-bitwise': 'error',
      'no-case-declarations': 'off',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    ...eslintPluginUnicorn.configs['flat/recommended'],
    rules: {
      /**
       * There is a conflict between ESLint's `array-callback-return` rule
       * and unicorn plugin `no-useless-undefined` rule
       *
       * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md#conflict-with-eslint-array-callback-return-rule
       */
      'array-callback-return': ['error', { allowImplicit: true }],
      'no-unused-vars': 'off',
      'unicorn/consistent-destructuring': 'error',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/expiring-todo-comments': 'off',
      'unicorn/explicit-length-check': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-await-expression-member': 'off',
      'unicorn/no-negated-condition': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-code-point': 'off',
      'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
      'unicorn/prefer-number-properties': 'off',
      'unicorn/prefer-string-slice': 'off',
      'unicorn/prefer-switch': 'off',
      'unicorn/prefer-ternary': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/switch-case-braces': 'off',
      'unicorn/text-encoding-identifier-case': 'off',
      // Note: you must disable the base rules, as they can report incorrect errors
      'no-array-constructor': 'off',
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/consistent-generic-constructors': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/prefer-nullish-coalescing': [
        'error',
        {
          ignoreConditionalTests: true,
          ignoreMixedLogicalExpressions: true,
        },
      ],
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-var-requires': 'warn',
      '@typescript-eslint/no-namespace': 'warn',
      '@typescript-eslint/ban-types': 'warn',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variableLike',
          format: ['camelCase'],
        },
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'does', 'will'],
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
        },
      ],
    },
  }
);
