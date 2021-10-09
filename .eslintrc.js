module.exports = {
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: ['./tsconfig.json'],
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
  ],
  ignorePatterns: ['node_modules/**/*.*', 'dist/**/*.*'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
  plugins: ['import'],
  rules: {
    indent: ['warn', 2, { SwitchCase: 1 }],
    'no-multi-spaces': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'prettier/prettier': ['warn'],
    'import/order': 1,
    'import/no-duplicates': 'error',
    curly: ['error', 'all'],
  },
};
