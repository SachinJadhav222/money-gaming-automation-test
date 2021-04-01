///// <reference types="@shelex/cypress-allure-plugin" />

const cucumber = require('cypress-cucumber-preprocessor').default
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

//cucumber processor
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

// //Allure report 
// module.exports = (on, config) => {
//   allureWriter(on, config);
//   return config;
// };