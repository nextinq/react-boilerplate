module.exports = {
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/api/**",
    "!src/layouts/*.tsx",
    "!src/hoc/**",
    "!src/sagas/**",
    "!src/types/**",
    "!src/index.ts",
    "!src/app.ts",
    "!src/root-reducer.ts",
    "!src/root-saga.ts",
    "!src/store.ts",
    "!src/test-utils/**"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file-mock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/style-mock.js"
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};