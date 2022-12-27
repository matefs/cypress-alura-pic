const { defineConfig } = require("cypress");

module.exports = defineConfig({ 
  
  env : {
    userName: "flavio", 
    password: "123"
  },

  e2e: {
    baseUrl: 'http://alura-fotos.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    }, 
  },
});
