const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
    addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
    createEsbuildPlugin
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
    allowCypressEnv: true,
    reporter: 'cypress-mochawesome-reporter',

    e2e: {
        async setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            await addCucumberPreprocessorPlugin(on, config);
            on(
                "file:preprocessor",
                createBundler({ plugins: [createEsbuildPlugin(config)] })
            );
            return config;
        },

        baseUrl: 'https://www.saucedemo.com',
        specPattern: "cypress/e2e/**/*.{cy.js,feature}",
    },

    chromeWebSecurity: false
});