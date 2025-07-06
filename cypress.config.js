const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        experimentalStudio: true,
        watchForFileChanges: false, // Disable file watching to prevent Cypress from automatically re-running tests on file changes
    },
});
