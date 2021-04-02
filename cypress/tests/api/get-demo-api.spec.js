/// <reference types="@bahmutov/cy-api" />

const secretkey= require('../../config/secret-keys/secretKeys')
const urls= require('../../config/urls-endpoints/urls')
let response1=null;

describe('GET demo api',()=>{
    it('GET all members',()=>{
        cy.request({
            url: '/api/members/',
            method: 'GET',
            auth:{
                username: secretkey.demo_api_username,
                password: secretkey.demo_api_password,
            }
        } )
        .then(response=>{
            response1=response;
        })
        
    })

    it('GET all members',()=>{
        cy.api({
            url: '/api/members/',
            method: 'GET',
            auth:{
                username: secretkey.demo_api_username,
                password: secretkey.demo_api_password,
            }
        } )
        .its('status')
        .should('eq',200)
        
    })

    it('GET one members with path parameter',()=>{
        cy.api({
            url: '/api/members/1',
            method: 'GET',
            auth:{
                username: secretkey.demo_api_username,
                password: secretkey.demo_api_password,
            }
        } )
        .its('status')
        .should('eq',200)
        
    })

    it('GET male members with Query parameter',()=>{
        cy.api({
            url: '/api/members/',
            method: 'GET',
            qs:{
                gender : 'male',
            } ,
            auth:{
                username: secretkey.demo_api_username,
                password: secretkey.demo_api_password,
            }
        } )
        .then(response=>{
            response.body.forEach(member => {
                expect(member.gender.toLowerCase()).to.be.eql("male");
            });
        })
        
    })

    it('GET all member info',()=>{
        cy.api({
            url: '/api/members/',
            method: 'GET',
            
            auth:{
                username: secretkey.demo_api_username,
                password: secretkey.demo_api_password,
            }
        } )
        .then(res=>{
            //expect(res.body).to.have.length(3);
            expect(res.body[0]).to.have.keys(["id", "name", "gender"]);
            });
    })
        
    


    
})



