export default {
  singleQuote: true,
  trailingComma: 'es5',
  plugins: [
    '@prettier/plugin-xml',
    'prettier-plugin-organize-imports',
    'prettier-plugin-sh',
  ],
  organizeImportsSkipDestructiveCodeActions: true,
};
