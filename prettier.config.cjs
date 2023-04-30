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
    "^@/emails/(.*)$",
    "^@/client/(.*)$",
    "^@/server/(.*)$",
    "",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "",
    "^@/gen/(.*)$",
    "^types$",
    "^@/types/(.*)$",
    "",
    "^@/(.*)$",
    "",
    "^[./]",
    "",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
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
    require.resolve("@ianvs/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-organize-attributes"),
    require.resolve("prettier-plugin-css-order"),
    require.resolve("prettier-plugin-tailwindcss"), // MUST come last
  ],
  pluginSearchDirs: false, // Needed for `prettier-plugin-tailwindcss`
}

module.exports = config
