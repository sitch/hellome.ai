/**
 * @type {import("prettier-plugin-organize-attributes").PrettierConfig}
 */
const sortImports = {
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/gen/(.*)$",
    "^types$",
    "^@/types/(.*)$",
    "",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/utils/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "^@/app/(.*)$",
    "^@/emails/(.*)$",
    "^@/client/(.*)$",
    "^@/server/(.*)$",
    "^@/(.*)$",
    "",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
}

/**
 * @type {import("@ianvs/prettier-plugin-sort-imports").PluginConfig}
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
  trailingComma: "es5",

  pluginSearchDirs: false,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-organize-attributes",
    "prettier-plugin-css-order",
    "prettier-plugin-tailwindcss", // MUST come last
  ],
}
