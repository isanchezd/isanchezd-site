module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "./src", // Equivalent to Jekyll's source property
      output: "./public", // Equivalent to Jekyll's destination property
    }
  };
};
