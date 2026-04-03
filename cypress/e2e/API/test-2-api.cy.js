/// <reference types="cypress" />

describe('Test-2-API', () => {


    it('articleCRUD', () => {

        cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0').as('articles')


        cy.visit('https://conduit.bondaracademy.com/login')
        cy.get('[placeholder="Email"]').type(Cypress.env('email'))
        cy.get('[placeholder="Password"]').type(Cypress.env('password'))
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
            }).then(object => {
                console.log('verifyObject', object.body.article.slug)
                const slug = object.body.article.slug;

                cy.request({
                    method: 'GET',
                    url: `https://conduit-api.bondaracademy.com/api/articles/${slug}`,
                    headers: { 'Authorization': 'Token ' + token }
                }).then(object => {
                    console.log('verifyObject', object)

                    const articlePut = {
                        "article": {
                            "title": "API-create2-2-updated",
                            "description": "Updating an article using API via Cypress",
                            "body": "This is the article body that was updated.",
                            "tagList": [
                                "APInewTag2"
                            ]
                        }
                    }

                    cy.request({
                        method: 'PUT',
                        url: `https://conduit-api.bondaracademy.com/api/articles/${slug}`,
                        headers: { 'Authorization': 'Token ' + token },
                        body: articlePut
                    }).then(res => {
                        console.log('verifyArticlePut', res)
                        expect(res.status).to.be.equal(200)
                        expect(res.body.article.title).to.eq('API-create2-2-updated')

                        const slug1 = res.body.article.slug;
                        console.log('verifySlug', slug1)

                        cy.request({
                            method: 'DELETE',
                            url: `https://conduit-api.bondaracademy.com/api/articles/${slug1}`,
                            headers: { 'Authorization': 'Token ' + token }
                        }).then(res => {
                            console.log('verifyArticleDelete', res);
                            expect(res.status).to.be.equal(204)

                            cy.request({
                                method: 'GET',
                                url: 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0',
                                headers: { 'Authorization': 'Token ' + token }
                            }).then(res => {
                                console.log('verifyArticleGetAfterDelete', res);
                                expect(res.body.articles[0].title).not.to.eq('API-create2-2-updated')
                            })

                        })
                    })
                })
            })
        })
    })
})