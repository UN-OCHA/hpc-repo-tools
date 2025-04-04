import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
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
  tseslint.configs.recommended,
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
    ...eslintPluginUnicorn.configs['recommended'],
    rules: {
      ...eslintPluginUnicorn.configs['recommended'].rules,
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
      'unicorn/no-nested-ternary': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-useless-undefined': ['error', { checkArguments: false }],
      'unicorn/number-literal-case': 'off',
      'unicorn/prefer-code-point': 'off',
      'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
      'unicorn/prefer-number-properties': 'off',
      'unicorn/prefer-math-min-max': 'off',
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
      '@typescript-eslint/no-namespace': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'error',
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
          prefix: ['is', 'are', 'should', 'has', 'can', 'did', 'does', 'will'],
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
