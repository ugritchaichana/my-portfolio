const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const ignoreReactZoomPanPinchSourceMap = (warning) => {
        if (!warning) {
          return false;
        }

        const messageIncludesSourceMap =
          typeof warning.message === "string" &&
          warning.message.includes("Failed to parse source map");

        if (!messageIncludesSourceMap) {
          return false;
        }

        const resourcePath = warning.module?.resource || "";
        return resourcePath.includes(
          `${path.sep}react-zoom-pan-pinch${path.sep}`
        );
      };

      webpackConfig.ignoreWarnings = [
        ...(webpackConfig.ignoreWarnings || []),
        ignoreReactZoomPanPinchSourceMap,
      ];

      return webpackConfig;
    },
  },
};
