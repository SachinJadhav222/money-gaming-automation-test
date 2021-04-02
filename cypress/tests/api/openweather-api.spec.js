const urls= require('../../config/urls-endpoints/urls')
describe('Open Weather API Test',()=>{
    it('Open weather api',()=>{
        cy.api({
            url: urls.moneyGamingWeb,
            method: 'GET',
           
                  } )
        .its('status')
        .should('eq',200)
    })
})