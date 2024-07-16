module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `@import "src/styles/variables.scss";
         @import "src/styles/mixins.scss";`,
      },
    },
  },
};
