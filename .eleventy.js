module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/site/static");
  eleventyConfig.amendLibrary("md", mdLib => mdLib.enable('code'));
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
