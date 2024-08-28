// eslint-disable-next-line import/no-extraneous-dependencies
const PRESET = require('@nx/jest/preset').default;

module.exports = {
  ...PRESET,
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  coverageDirectory: './coverage',
  setupFiles: ['dotenv/config'],
};
