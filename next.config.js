const copyLinkedFiles = require("remark-copy-linked-files");
const path = require("path");
const PATH_NAME = "articles";
const destinationDir = path.join(__dirname, "public", PATH_NAME);

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [copyLinkedFiles, { destinationDir, staticPath: `/${PATH_NAME}` }],
    ],
  },
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
});
