const getAssertionResult = function(success, expected, actual, apicyInstance) {
  return {
    success,
    expected,
    actual,
    response: {
      statusCode: apicyInstance.getResponseObject().statusCode,
      headers: apicyInstance.getResponseObject().headers,
      body: apicyInstance.getResponseObject().body,
    },
  };
};

class Apicy {
  constructor(base_url) {
    this.domain = base_url;
    this.headers = {};
    this.cookies = [];
    this.httpResponse = {};
    this.requestBody = "";
    this.scenarioVariables = {};
    this.queryParameters = {};
    this.formParameters = {};
    this.httpRequestOptions = {};
  }

  addRequestHeader(name, value) {
    let valuesArray = [];
    if (this.headers[name]) {
      valuesArray = this.headers[name].split(",");
    }
    valuesArray.push(value);

    this.headers[name] = valuesArray.join(",");
  }

  get(resource, callback) {
    this.sendRequest("GET", resource, callback);
  }

  assertResponseCode(responseCode) {
    const realResponseCode = this.getResponseObject().statusCode.toString();
    const success = realResponseCode === responseCode;
    return getAssertionResult(success, responseCode, realResponseCode, this);
  }

  getResponseObject() {
    return this.httpResponse;
  }

  sendRequest(method, resource, callback) {
    const self = this;
    const options = this.httpRequestOptions || {};
    options.url = this.domain + resource;
    options.method = method;
    options.headers = this.headers;
    options.failOnStatusCode = false;

    cy.request(options).then(function(err, response) {
      if (err) {
        return callback(err);
      }
      self.httpResponse = response;
      callback(null, response);
    });
  }
}
