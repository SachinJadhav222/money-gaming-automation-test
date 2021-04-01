describe('Open Weather API Test',()=>{
    it('first test',()=>{
        cy.fixture('users.json').then((user)=>{
            cy.log(user)
        })
    })
})