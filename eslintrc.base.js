module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true,
  },
  plugins: ['import'],
  extends: ['eslint:recommended', 'plugin:import/typescript', 'prettier'],

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
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
          'object',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          orderImportKind: 'asc',
        },
      },
    ],
    'import/no-unresolved': 'error',
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
        'prettier',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        curly: 'error',
        'no-unused-vars': 'off',
        quotes: 'off',
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
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
};
