const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://www.saucedemo.com',

    // env: {
    //   baseDevAPIUrl: 'https://conduit-api.bondaracademy.com',
    //   // baseProdAPIUrl: 'https://conduit-api.bondaracademy.com'
    // }
    env: {
      standard_user: {
        username: 'standard_user',
        password: 'secret_sauce'
      },
      locked_out_user: {
        username: 'locked_out_user',
        password: 'secret_sauce'
      },
      problem_user: {
        username: 'problem_user',
        password: 'secret_sauce'
      },
      performance_glitch_user: {
        username: 'performance_glitch_user',
        password: 'secret_sauce'
      },
      error_user: {
        username: 'error_user',
        password: 'secret_sauce'
      },
      visual_user: {
        username: 'visual_user',
        password: 'secret_sauce'
      }
    }
  },
  chromeWebSecurity: false
});
