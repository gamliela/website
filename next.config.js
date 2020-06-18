/*eslint-env node*/
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  target: "serverless",
  distDir: ".next",
});
