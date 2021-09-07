module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "./node_modules/isanchezd1988-site-template/dist/bundles/scss/styles.css":
      "styles.css"
  });
  eleventyConfig.addPassthroughCopy({
    "./node_modules/isanchezd1988-site-template/dist/bundles/js/main.js": "main.js"
  });
  eleventyConfig.addPassthroughCopy({
    "./node_modules/isanchezd1988-site-template/dist/bundles/assets/images/profile.png":
    "profile.png"
  });

  return {
    dir: {
      input: "./src", // Equivalent to Jekyll's source property
      output: "./public", // Equivalent to Jekyll's destination property
    },
  };
};
