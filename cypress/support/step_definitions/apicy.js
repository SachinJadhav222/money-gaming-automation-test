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

function Apicy(base_url) {
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

Apicy.prototype.addRequestHeader = function(name, value) {
  //name = this.replaceVariables(name);
  // value = this.replaceVariables(value);

  let valuesArray = [];
  if (this.headers[name]) {
    valuesArray = this.headers[name].split(",");
  }
  valuesArray.push(value);

  this.headers[name] = valuesArray.join(",");
};

Apicy.prototype.get = function(resource, callback) {
  // callback(error, response)
  //resource = this.replaceVariables(resource);
  this.sendRequest("GET", resource, callback);
};

Apicy.prototype.assertResponseCode = function(responseCode) {
  // responseCode = this.replaceVariables(responseCode);
  const realResponseCode = this.getResponseObject().statusCode.toString();
  const success = realResponseCode === responseCode;
  return getAssertionResult(success, responseCode, realResponseCode, this);
};

Apicy.prototype.getResponseObject = function() {
  return this.httpResponse;
};

Apicy.prototype.sendRequest = function(method, resource, callback) {
  const self = this;
  const options = this.httpRequestOptions || {};
  options.url = this.domain + resource;
  options.method = method;
  options.headers = this.headers;
  options.failOnStatusCode = false;
  //options.qs = this.queryParameters;
  // console.log(chalk.red('\nRequets Body --->>>'));
  // console.log(this.requestBody);
  //   if (this.requestBody.length > 0) {
  //     options.body = this.requestBody;
  //   } else if (Object.keys(this.formParameters).length > 0) {
  //     options.form = this.formParameters;
  //   }

  //cy.request(options).as("get_response_data");
  cy.request(options).then(function(err, response) {
    if (err) {
      return callback(err);
    }
    self.httpResponse = response;
    callback(null, response);
  });

  //   cy.request({
  //     method: "GET",
  //     url: base_url + endpoint,
  //     headers: headers,
  //     //qs: {},
  //    // auth: {},
  //     failOnStatusCode: false,
  //   }).as("get_response_data");

  //   request(options, function(error, response) {
  //     if (error) {
  //       return callback(error);
  //     }

  //     self.httpResponse = response;
  //     callback(null, response);
  //   });
};
