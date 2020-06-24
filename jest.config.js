module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/**/*.test.{js,jsx}",
    "!src/src.js",
    "!src/*/*/loadable.{js,jsx}",
    "!src/*/*/language/*",
    "!src/*/*/*/*-loadable.{js, jsx}",
  ],
  coverageThreshold: {
    global: {
      statements: 87,
      branches: 85,
      functions: 87,
      lines: 87,
    },
  },
  moduleDirectories: ["node_modules", "src", "libutils", __dirname],
  moduleNameMapper: {
    ".*\\.(css|less|styl|scss|sass)$": "<rootDir>/config/mocks/cssModule.js",
    ".*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/config/mocks/image.js",
  },
};
