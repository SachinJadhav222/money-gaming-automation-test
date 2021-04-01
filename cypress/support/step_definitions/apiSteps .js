import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const urls=require('../../config/urls-endpoints/urls');
const secretKey=require('../../reports/secret-keys/secretKeys')
//const cypress= require('cypress');

let response1;
Given('User set the base API url {string}', (baseUrl) => {
	
	cy.request(urls[baseUrl]).then((response) => {
		response1=response;
        expect(response.status).to.eq(200);
		cy.writeFile('cypress/fixtures/users.json', response.body)
 
	})
})

Then('User authenticate API request with {string}',(token)=>{
	cy.log('--->>',token)
	cy.log(response1.statusText)

})
And ('User sends GET request to get all repos',()=>{
	cy.log('--->>')
})

Then ('User validates the response code {string}',(statusCode)=>{
	cy.log('--->>')
})
And('User set the query parameter {string} and value {string}',(param,val)=>{
	cy.log('--->>')
})
And ('User set the PATH parameter {string} and value {string}',(param,val)=>{
	cy.log('--->>')
})

And('User sends GET request with PATH parameter {string}',(pathParam)=>{
	cy.log('--->>')
})
