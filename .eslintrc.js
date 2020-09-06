/*eslint-env node*/

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",

    // add rules for React
    "plugin:react/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react-hooks/rules-of-hooks": "error", // checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // checks effect dependencies
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "eslint:recommended",

        // disable rules that are incompatible with TS or better handled by it
        "plugin:@typescript-eslint/eslint-recommended",

        // turn on TS-specific recommended rules
        "plugin:@typescript-eslint/recommended",

        // add rules for React
        "plugin:react/recommended",
      ],
      rules: {
        "no-undef": "off", // not needed for TS projects. https://github.com/typescript-eslint/typescript-eslint/issues/662
        "react/jsx-no-undef": "off", // not needed for TS projects. https://github.com/typescript-eslint/typescript-eslint/issues/662
        "@typescript-eslint/explicit-function-return-type": "off", // @typescript-eslint has problems to infer render() return types (is there a better way?)
        "react/prop-types": "off", // not needed for TS projects. https://github.com/yannickcr/eslint-plugin-react/issues/1461
      },
    },
  ],
};
