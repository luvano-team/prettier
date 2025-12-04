export const baseConfig = {
  trailingComma: "none",
  tabWidth: 4,
  useTabs: true,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: "avoid",

  importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^../(.*)", "^./(.*)"],

  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,

  importOrderParserPlugins: [
    "typescript",
    "classProperties",
    "decorators-legacy"
  ],

  plugins: ["@trivago/prettier-plugin-sort-imports"],
};
