module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/assets/scss/");
  eleventyConfig.addWatchTarget("./src/assets/js/");
  eleventyConfig.addWatchTarget("./src/assets/images/");


  return {
    dir: {
      data: "./data",
      includes: "./layouts",
      input: "./src", // Equivalent to Jekyll's source property
      output: "./dist", // Equivalent to Jekyll's destination property
    },
    templateFormats: ["html", "md", "njk"],
    passthroughFileCopy: true,
  };
};
