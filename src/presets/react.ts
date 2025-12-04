export const reactConfig = {
  jsxSingleQuote: true,
  bracketSameLine: false,
  overrides: [
    {
      files: ["*.tsx", "*.jsx"],
      options: {
        parser: "babel-ts",
      },
    },
  ],
  plugins: ["prettier-plugin-tailwindcss"],
};
