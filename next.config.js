// we need this rule because eslint apply typescript rules on all files, including js files.
// see https://github.com/Shopify/eslint-plugin-shopify/issues/159
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  target: "serverless",
  distDir: ".next",
});
