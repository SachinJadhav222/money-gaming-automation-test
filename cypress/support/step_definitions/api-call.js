/// <reference types="@bahmutov/cy-api" />
const getUrl = require("../../config/urls-endpoints/urls");
const headers = {};
const requestOptions = {};
let httpResponse = {};
let base_url = "";

const setBaseUrl = function(url) {
  base_url = getUrl[url];
  console.log("\nBase URL is set:- ", base_url);
};

const setHeader = function(headerName, headerValue) {
  let valuesArray = [];
  if (headers[headerName]) {
    valuesArray = headers[headerName].split(",");
  }
  valuesArray.push(headerValue);

  headers[headerName] = valuesArray.join(",");
};

const setRequestOptions = function(method, resource) {
  requestOptions.method = method;
  requestOptions.url = base_url + resource;
  requestOptions.headers = headers;
  requestOptions.failOnStatusCode = false;
};

const verifyrResponseCode = function(statusCode) {
  expect(httpResponse.status).to.eq(statusCode);
};

const verifyResponseProperty = function(expectedValue) {
  console.log("This is expected Response-->", httpResponse);
};

const verifyResponseBodyContaints = function(expectedValue) {};

const makeApiCall = function(method, resource) {
  setRequestOptions(method, resource);
  cy.request(requestOptions).as("get_response_data");
  cy.get("@get_response_data").should((response) => {
      httpResponse=Object.assign(httpResponse,response)
    //httpResponse = response;
    console.log("Request --->", requestOptions);
    console.log("Response--->", httpResponse);
  });
};

module.exports = {
  setBaseUrl,
  makeApiCall,
  setHeader,
  verifyrResponseCode,
  verifyResponseProperty,
  verifyResponseBodyContaints,
};
