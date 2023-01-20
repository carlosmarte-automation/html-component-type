module.exports = {
  roots: ["<rootDir>/"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  setupFilesAfterEnv: ["<rootDir>/internal/jest-setup-standard.cjs"],
  testMatch: [
    "**/(src|__tests__)/**/?(*.)+(spec|test).[cm][jt]s?(x)"
    // "**/(src|__tests__)/**/?(*.)+(spec|test).cjs"
  ],
  testEnvironment: "node",
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$":
      "<rootDir>/internal/jest-babel-transform.cjs",
    "^.+\\.css$": "<rootDir>/internal/css-transform.mjs",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
      "<rootDir>/internal/file-transform.mjs",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
  ],
  modulePaths: [],
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
    "mjs",
    "cjs",
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  resetMocks: true,
};
