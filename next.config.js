const copyLinkedFiles = require("remark-copy-linked-files");
const path = require("path");
const rehypeKatex = require("rehype-katex");
const remarkMath = require("remark-math");
const PATH_NAME = "articles";
const destinationDir = path.join(__dirname, "public", PATH_NAME);

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [copyLinkedFiles, { destinationDir, staticPath: `/${PATH_NAME}` }],
      remarkMath,
    ],
    rehypePlugins: [rehypeKatex],
  },
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
});
