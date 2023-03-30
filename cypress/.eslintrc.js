module.exports = {
  $schema: 'https://json.schemastore.org/eslintrc',
  root: true,
  extends: ['../.eslintrc', 'plugin:cypress/recommended'],
  plugins: ['prettier', 'cypress'],
  parserOptions: {
    project: './tsconfig.json',
  },
  globals: {
    cy: true,
    Cypress: true,
  },
  env: {
    'cypress/globals': true,
  },
  ignorePatterns: ['!../cypress/**/*'],
}
