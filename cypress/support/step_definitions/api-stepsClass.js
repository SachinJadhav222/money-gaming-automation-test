/// <reference types="@bahmutov/cy-api" />
const { Then } = require("cypress-cucumber-preprocessor/steps");
const chalk = require("chalk");
const Apicy = require("./apicyClass");
const getUrl = require("../../config/urls-endpoints/urls");
let base_url = "";
let headers = {};
let httpResponse = {};
let apicy='';

const callbackWithAssertion = function (callback, assertion) {
  if (assertion.success) {
    callback();
  } else {
    callback(prettyPrintJson(assertion));
  }
};

Given("I set base URL as {string}", function(url){
  apicy = new Apicy(getUrl[url]);
  console.log("\nBase URL:- ", getUrl[url]);
});

Then("I set header {string} as {string}", (headerName, headerValue) => {
  // let valuesArray = [];
  // if (headers[headerName]) {
  //   valuesArray = headers[headerName].split(",");
  // }
  // valuesArray.push(headerValue);

  // headers[headerName] = valuesArray.join(",");

  this.apicy.addRequestHeader(headerName, headerValue);
});

Given("I GET {string}", function(resource,callback) {
  // cy.request({
  //   method: "GET",
  //   url: base_url + endpoint,
  //   headers: headers,
  //   //qs: {},
  //  // auth: {},
  //   failOnStatusCode: false,
  // }).as("get_response_data");

  this.apicy.get(resource, function (error, response) {
    if (error) {
      callback(new Error(error));
    }
    console.log(chalk.cyan("\n", "Response Body -->>>"));
    console.log(chalk.yellow("\n", response.body));
    callback();
  });
});

Then("Verify response status code is {int}", (statusCode) => {
  //let resp=cy.get("@get_response_data");
  // console.log(resp)
  // cy.get("@get_response_data").should((response) => {
  //   expect(response.status).to.eq(statusCode);
  // });

  const assertion = this.apicy.assertResponseCode(responseCode);
  callbackWithAssertion(callback, assertion);

});

Then("Verify response status code is {int}", (statusCode) => {
  // cy.get("@get_response_data").should((response) => {
  //   expect(response.status).to.eq(statusCode);
  // });
});

Then("Verify response details for Pokemon {string}", (pokenmae) => {
  // cy.get("@get_response_data").should((response) => {
  //   // console.log(response)
  //   expect(response.body).to.have.property("abilities");
  //   //Different ways of validating nested properties
  //   //1st Way
  //   expect(response.body).to.have.nested.property("forms[0].name", "pikachu");
  //   //2nd Way
  //   expect(response.body.forms[0]).to.have.property("name", "pikachu");
  //   //3rd Way
  //   const name = response.body.forms[0].name;
  //   assert.equal(name, "pikachu");
  //   expect(response).to.have.property("headers");
  // });
});

Then("Verify response body should contain {string}", function(expectedValue) {
  //const resp= await cy.get("@get_response_data")
  // console.log(resp)
  //cy.get("@get_response_data").should((response).contains(expectedValue)
 // cy.get("@get_response_data").should((response) => {
  //  console.log(response);
    // cy.contains(expectedValue)
    // expect(response.body[0]).to.have.nested.property(title, expectedValue);
    // expect(response.body.forms[0]).to.have.property("title", expectedValue);
  //});
});
