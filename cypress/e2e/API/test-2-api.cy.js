/// <reference types="cypress" />

describe('Test-2-API', () => {



    it('test-1', () => {

        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('articles')


        cy.visit('https://conduit.bondaracademy.com/login')
        cy.get('[placeholder="Email"]').type('salenks@gmail.com')
        cy.get('[placeholder="Password"]').type('ZajeCar1')
        cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()

        cy.wait('@articles')
        // above code is for visualization of API response in the console, it is not needed for the test to pass

        const userCredentials = {
            "user": {
                "email": Cypress.env('email'),
                "password": Cypress.env('password')
            }
        }

        const objectData = {
            "article": {
                "title": "API-create2",
                "description": "Creating an article using API via Cypress",
                "body": "This is the article body.",
                "tagList": [
                    "APInewTag"
                ]
            }
        }

        cy.request('POST', 'https://conduit-api.bondaracademy.com/api/users/login', userCredentials).its('body').then(body => {
            console.log(body.user.token)
            const token = body.user.token;


            cy.request({
                method: 'POST',
                url: 'https://conduit-api.bondaracademy.com/api/articles/',
                headers: { 'Authorization': 'Token ' + token },
                body: objectData
            })
            cy.reload()

        })

    })

})