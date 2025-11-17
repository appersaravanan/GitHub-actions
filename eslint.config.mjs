import eslintConfigPrettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';

export default [
  {
    files: ['**/*.ts'],
    ignores: ['dist/**'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      import: pluginImport
    },
    rules: {
      'import/order': ['warn', { 'newlines-between': 'always' }],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    }
  },
  eslintConfigPrettier
];
