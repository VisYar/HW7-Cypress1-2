const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://qamid.tmweb.ru',
    retries: {
      openMode: 2,
    }
  },
  env: {
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
