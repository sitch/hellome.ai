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
 * @type {import("prettier-plugin-organize-attributes").PrettierConfig}
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
module.exports = {
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
    "prettier-plugin-tailwindcss", // MUST come last
  ],
  pluginSearchDirs: false, // Needed for `prettier-plugin-tailwindcss`
}
