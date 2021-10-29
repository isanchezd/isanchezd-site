module.exports = function () {
  return {
    dir: {
      input: "./src", // Equivalent to Jekyll's source property
      output: "./dist", // Equivalent to Jekyll's destination property
    },
    templateFormats: ["html", "md", "njk"],
    passthroughFileCopy: true,
  };
};
