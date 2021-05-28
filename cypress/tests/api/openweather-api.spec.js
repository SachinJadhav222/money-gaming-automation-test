const urls= require('../../config/urls-endpoints/urls')
describe('Open Weather API Test',()=>{
    it('Open weather api',()=>{
        cy.api({
            url: "https://my-json-server.typicode.com/leisurepassgroup/SDET-interview",
            method: 'GET',
           
                  } )
        .its('status')
        .should('eq',200)
    })
})