const secretkey= require('../../config/secret-keys/secretKeys')
const urls= require('../../config/urls-endpoints/urls')

describe('Git Hub API Test',()=>{
    it('first test',()=>{
        cy.api({
            url: urls.github_endpoint,
            method: 'GET',
           
                  } )
        .its('status')
        .should('eq',200)
    })
})