// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  root: true,
  ignorePatterns: [],
  settings: {
    tailwindcss: {
      callees: ["cn"],
      config: "./tailwind.config.js",
    },
    next: {
      rootDir: ["./"],
    },
  },
  plugins: ["@typescript-eslint", "@limegrass/import-alias", "tailwindcss"],
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/strict",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    //==========================================================================
    //
    // TODO: Remove these rules
    //==========================================================================
    "jsx-a11y/anchor-is-valid": "off",
    "tailwindcss/no-custom-classname": "off",
    "@typescript-eslint/no-invalid-void-type": [
      "warn",
      {
        allowInGenericTypeArguments: true,
      },
    ],
    //==========================================================================
    // TODO: In progress rules
    //==========================================================================
    "@typescript-eslint/no-unused-vars": "off",
    // "@typescript-eslint/no-unused-vars": [
    //   "warn",
    //   {
    //     "argsIgnorePattern": "^_",
    //     "varsIgnorePattern": "^_",
    //     "caughtErrorsIgnorePattern": "^_"
    //   }
    // ],
    //==========================================================================
    // Valid rules
    //==========================================================================
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "@limegrass/import-alias/import-alias": "error",
      },
    },
    {
      files: ["*.json", "*.jsonc"],
      plugins: ["json"],
      extends: ["plugin:json/recommended"],
    },
    {
      files: ["*.yaml", "*.yml"],
      plugins: ["yaml"],
      extends: ["plugin:yaml/recommended"],
    },
    {
      files: ["**/*.d.ts"],
      rules: {
        "@typescript-eslint/consistent-type-definitions": "off",
      },
    },
    // Only uses Testing Library lint rules in test files
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      plugins: ["testing-library"],
      extends: ["plugin:testing-library/react"],
    },
  ],
}
