/*eslint-env node*/
const rehypePrism = require("@mapbox/rehype-prism"); // syntax highlighting

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [() => rehypePrism({ ignoreMissing: true })],
  },
});

const withImages = require("next-images");

module.exports = withImages(
  withMDX({
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    target: "serverless",
    distDir: ".next",
  })
);
