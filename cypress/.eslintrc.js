module.exports = {
  root: true,
  extends: ['../.eslintrc', 'plugin:cypress/recommended'],
  plugins: ['prettier', 'cypress'],
  globals: {
    cy: true,
    Cypress: true,
  },
  env: {
    'cypress/globals': true,
  },
  ignorePatterns: ['!../cypress/**/*'],
}
