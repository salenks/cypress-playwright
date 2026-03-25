/// <reference types="cypress" />

describe('Test-1-API', () => {
    it('test-1', () => {

        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('articles')
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/tags').as('tags')
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles/SuperArticle2-50107').as('article')

        cy.visit('https://conduit.bondaracademy.com/login')
        cy.get('[placeholder="Email"]').type('salenks@gmail.com')
        cy.get('[placeholder="Password"]').type('ZajeCar1')
        cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()

        // cy.wait(2000)
        // cy.get('[class="nav-link"]', { timeout: 10000 }).eq(2).click()

        cy.wait('@articles').then( el => {
            console.log(el)
        })

        cy.contains(' New Article ').click()

        cy.get('[placeholder="Article Title"]').type('SuperArticle2')
        cy.get(':nth-child(2) > .form-control').type('SuperArticle2_About')
        cy.get(':nth-child(3) > .form-control').type('SuperArticle2_Content')
        cy.get(':nth-child(4) > .form-control').type('SuperArticle2_Tag')
        cy.get('[class="btn btn-lg pull-xs-right btn-primary"]').click()

        cy.wait('@article')

    })
})