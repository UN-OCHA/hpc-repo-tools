export default {
  singleQuote: true,
  trailingComma: 'es5',
  htmlWhitespaceSensitivity: 'ignore',
  bracketSameLine: true,
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-sh'],
  organizeImportsSkipDestructiveCodeActions: true,
  overrides: [
    { files: ['*.svg'], options: { parser: 'html' } },
    { files: ['*.xml'], options: { parser: 'html' } },
  ],
};
