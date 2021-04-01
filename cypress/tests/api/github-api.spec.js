const secretkey= require('../../config/secret-keys/secretKeys')
const urls= require('../../config/urls-endpoints/urls')

describe('Git Hub API Test',()=>{
    it('first test',()=>{
        // cy.fixture('users.json').then((user)=>{
        //     cy.log(user)
        // })
        cy.request(urls.github_endpoint).then(response =>{
            cy.log(response)
           // response.isOkStatusCode()
        })
    })
})