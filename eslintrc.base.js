module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es2024: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],

  rules: {
    'no-constant-condition': [
      'error',
      {
        checkLoops: false,
      },
    ],
    curly: 'error',
    eqeqeq: 'error',
    'no-lonely-if': 'error',
    'spaced-comment': ['warn', 'always'],
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
  overrides: [
    {
      files: ['*.{js,jsx}'],
      rules: {
        'no-bitwise': 'error',
        'no-case-declarations': 'off',
        'no-unused-vars': 'warn',
      },
    },
    {
      files: ['*.{ts,tsx}'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:unicorn/recommended',
        'prettier',
      ],
      plugins: ['@typescript-eslint', 'unicorn'],
      rules: {
        /**
         * There is a conflict between ESLint's `array-callback-return` rule
         * and unicorn plugin `no-useless-undefined` rule
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md#conflict-with-eslint-array-callback-return-rule
         */
        'array-callback-return': ['error', { allowImplicit: true }],
        curly: 'error',
        'no-unused-vars': 'off',
        quotes: 'off',
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
        '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
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
    },
  ],
};
