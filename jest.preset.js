const nxPreset = require('@nx/jest/preset').default;

module.exports = { ...nxPreset, setupFiles: ['dotenv/config'], };
