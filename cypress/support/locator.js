const merge = require('deepmerge')
const loc01 = require('../locators/loc01.homePage')
const loc02 = require('../locators/loc02.signUpPage')

const locators = merge.all([loc01, loc02])

module.exports = {
	locators: locators,
}
