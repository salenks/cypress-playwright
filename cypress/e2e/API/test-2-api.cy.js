/// <reference types="cypress" />

describe('Test-2-API', () => {

    cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('articles')

    it('test-1', () => {
        cy.visit('https://conduit.bondaracademy.com/login')
        cy.get('[placeholder="Email"]').type('salenks@gmail.com')
        cy.get('[placeholder="Password"]').type('ZajeCar1')
        cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()


        cy.wait('@articles')

    })

})