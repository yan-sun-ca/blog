module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/site/static");
  return {
    dir: {
      input: "src/site",
      output: "dist",
    },
    templateFormats: ["njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
