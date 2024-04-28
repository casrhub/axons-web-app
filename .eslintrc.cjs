/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "eslint:recommended",
  ],
  globals: {
    React: "writable",
    google: "readonly",
  },
  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    "strict": ["error", "global"],
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-useless-catch": "off",
    'no-unused-vars': 'warn',
  },
  overrides: [
    {
      files: ['**/*.cy.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};

module.exports = config;
