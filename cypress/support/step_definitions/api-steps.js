/// <reference types="@bahmutov/cy-api" />

const getUrl = require("../../config/urls-endpoints/urls");

const {
  setBaseUrl,
  makeApiCall,
  setHeader,
  verifyrResponseCode,
  verifyResponseProperty,
  
} = require("./api-call");

Given("I set base URL as {string}", function(url) {
  setBaseUrl(url)
  
});

Then("I set header {string} as {string}", (headerName, headerValue) => {
  setHeader(headerName, headerValue);
  
});

Given("I GET {string}", function(resource) {
  let method="GET"
  makeApiCall(method,resource);
  
});

Then("Verify response status code is {int}", (statusCode) => {
  verifyrResponseCode(statusCode);
});

Then("Verify response details for Pokemon {string}", (expectedValue) => {
  //apicall.verifyResponseProperty(expectedValue)
  cy.get("@get_response_data").should((response) => {
    // console.log(response)
    expect(response.body).to.have.property("abilities");
    //Different ways of validating nested properties
    //1st Way
    expect(response.body).to.have.nested.property("forms[0].name", "pikachu");
    //2nd Way
    expect(response.body.forms[0]).to.have.property("name", "pikachu");
    //3rd Way
    const name = response.body.forms[0].name;
    assert.equal(name, "pikachu");
    expect(response).to.have.property("headers");
  });
});

Then("Verify response body should contain {string}", function(expectedValue) {
  cy.get("@get_response_data").should((response) => {
    //console.log(response);
    //cy.contains(expectedValue)
    // expect(response.body[0]).to.have.nested.property(title, expectedValue);
    // expect(response.body.forms[0]).to.have.property("title", expectedValue);
  });
});
