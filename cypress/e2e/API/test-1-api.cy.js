/// <reference types="cypress" />

describe('Test-1-API', () => {

    let creds;

    before(() => {
        cy.fixture('conduit-credentials').then(c => { creds = c })
    })
    it('test-1', () => {

        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('articles')
        // cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/tags').as('tags')
        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles/SuperArticle2-50107').as('article')

        cy.visit('https://conduit.bondaracademy.com/login')
        cy.get('[placeholder="Email"]').type(creds.email)
        cy.get('[placeholder="Password"]').type(creds.password)
        cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()

        // cy.wait(2000)
        // cy.get('[class="nav-link"]', { timeout: 10000 }).eq(2).click()

        cy.wait('@articles').then(el => {
            console.log(el)
        })

        cy.contains(' New Article ').click()

        cy.get('[placeholder="Article Title"]').type('SuperArticle2')
        cy.get(':nth-child(2) > .form-control').type('SuperArticle2_About')
        cy.get(':nth-child(3) > .form-control').type('SuperArticle2_Content')
        cy.get(':nth-child(4) > .form-control').type('SuperArticle2_Tag')
        cy.get('[class="btn btn-lg pull-xs-right btn-primary"]').click()

        cy.wait('@article').then(element => {
            console.log('API response', element)
            expect(element.response.statusCode).to.eq(200)
            expect(element.response.body.article.title).to.eq('SuperArticle2')
        })

    })

    it('test-2-mock-tags', () => {

        const newTags = {
            "tags": [

            ]
        }

        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/tags', newTags).as('tags')

        cy.visit('https://conduit.bondaracademy.com/login')
        cy.get('[placeholder="Email"]').type(creds.email)
        cy.get('[placeholder="Password"]').type(creds.password)
        cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()

        cy.wait('@tags')

        cy.get('.sidebar > :nth-child(4)').should('contain', 'No tags are here... yet.')
    })

    it('test-3-mock-articles', () => {



        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0', { fixture: 'articles.json' }).as('articles')

        cy.visit('https://conduit.bondaracademy.com/login')
        cy.get('[placeholder="Email"]').type(creds.email)
        cy.get('[placeholder="Password"]').type(creds.password)
        cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()

        cy.wait('@articles').then(interception => {
            expect(interception.response.statusCode).to.eq(200)
        })

    })
})
