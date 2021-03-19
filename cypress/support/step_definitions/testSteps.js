import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const urls=require('../../config/urls');

Given('I visit {string}', URL => {
	cy.visit(urls[URL])
})

Then('I entered {string} at {string}', (expectedValue, selector) => {
	cy.getSelector(selector).type(expectedValue)
})

Then('I click on {string}', selector => {
	cy.getSelector(selector).click()
})

Then('I shloud see home page', () => {
	cy.get('#account_summary_tab').should('be.visible')
})

Then('I should see {string} at {string}', (expectedValue, selector) => {
	cy.getSelector(selector)
		.should('be.visible')
		.and('contain', expectedValue)
})

Then('I should see {string} is visible', (selector) => {
	cy.getSelector(selector)
		.should('be.visible')
})

Then('I should see page title {string}',(expectedValue)=>{
    cy.title().should('eq', expectedValue)
})

Then('I scrolled to bottom',()=>{
	cy.scrollTo('bottom');
})

Then('I select {string} from dropdown at {string}',(expedtedValue,selector)=>{
   cy.getSelector(selector).select(expedtedValue);
})
