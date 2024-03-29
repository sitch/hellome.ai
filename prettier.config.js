/**
 * @type {import("@ianvs/prettier-plugin-sort-imports").PluginConfig}
 */
const sortImports = {
  importOrder: [
    "^(react/(.*)$)|^(react$)|^(react-dom(.*)$)",
    "^(next/(.*)$)|^(next$)",
    "^next-(.*)$",
    "",
    "^react-(.*)$",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/utils/(.*)$",
    "^@/app/(.*)$",
    "^@/client/(.*)$",
    "^@/server/(.*)$",
    "",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^emails/(.*)$",
    "",
    "^@/gen/(.*)$",
    "^types$",
    "^@/types/(.*)$",
    "",
    "^@/(.*)$",
    "",
    "^[./]",
    "",
    "^~/(.*)$",
    "(.*).config$",
    "package.json",
    "",
    "^@/styles/(.*)$",
    "",
    "^#/(.*)$",
  ],
  // importOrderTypeScriptVersion: "5.0.0",
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
}

/**
 * @type {Partial<import("prettier-plugin-organize-attributes").PrettierPluginOrganizeAttributesParserOptions>}
 */
const organizeAttributes = {
  attributeGroups: [
    "^id$",
    "^name$",
    "^class$",
    //  "^(id|name)$",
    "$DEFAULT",
    "^aria-",
  ],
}

/**
 * @type {import('prettier').Config}
 */
const config = {
  ...sortImports,
  ...organizeAttributes,

  endOfLine: "lf",
  semi: false,
  useTabs: false,
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "all",
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-organize-attributes",
    "prettier-plugin-css-order",
    // "prettier-plugin-tailwindcss", // MUST come last
  ],
  pluginSearchDirs: false, // Needed for `prettier-plugin-tailwindcss`
}

module.exports = config
