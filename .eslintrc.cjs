module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // project-specific rules can go here
    // discourage importing fireEvent from @testing-library/react — prefer user-event
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@testing-library/react',
            importNames: ['fireEvent'],
            message: "Prefer '@testing-library/user-event' (userEvent) over fireEvent for user interactions",
          },
        ],
      },
    ],
  },
  settings: {
    react: { version: 'detect' },
  },
};
