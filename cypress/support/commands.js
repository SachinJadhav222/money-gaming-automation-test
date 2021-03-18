const locators = require('./locator').locators

Cypress.Commands.add("getSelector", selector => {
	const selector1 = locators[selector]
	if (selector1.startsWith('//')) {
		cy.xpath(selector1)
	} else {
		cy.get(selector1)
	}
})
